import React, { useState } from 'react';
import { Palette, Type,Sparkles, Download } from 'lucide-react';
import { DesignContent } from '../types';

interface MainCanvasProps {
  appliedDesign: DesignContent | null;
}

export const MainCanvas: React.FC<MainCanvasProps> = ({ appliedDesign }) => {
  const [elements, setElements] = useState<Array<{
    id: string;
    type: 'text' | 'shape';
    content: string;
    x: number;
    y: number;
    style: React.CSSProperties;
  }>>([
    {
      id: '1',
      type: 'text',
      content: 'Design Something Amazing',
      x: 100,
      y: 100,
      style: { fontSize: '2rem', fontWeight: 'bold' }
    },
    {
      id: '2',
      type: 'text',
      content: 'Start by exploring the inspiration sidebar',
      x: 100,
      y: 200,
      style: { fontSize: '1.2rem', color: '#666' }
    }
  ]);

  const getCanvasStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {};
    
    if (appliedDesign?.actionData?.colors) {
      const colors = appliedDesign.actionData.colors;
      if (colors.length > 1) {
        styles.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
      } else {
        styles.backgroundColor = colors[0];
      }
    }
    
    return styles;
  };

  const getTextStyles = (elementStyle: React.CSSProperties): React.CSSProperties => {
    const styles = { ...elementStyle };
    
    if (appliedDesign?.actionData?.fonts) {
      styles.fontFamily = appliedDesign.actionData.fonts[0];
    }
    
    if (appliedDesign?.actionData?.colors && appliedDesign.actionData.colors.length > 1) {
      styles.color = appliedDesign.actionData.colors[1];
    }
    
    return styles;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Applied Design Notification */}
        {appliedDesign && (
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 p-2 rounded-lg">
                {appliedDesign.actionData?.colors ? (
                  <Palette className="h-5 w-5 text-white" />
                ) : (
                  <Type className="h-5 w-5 text-white" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-1">
                  Applied: {appliedDesign.title}
                </h3>
                <p className="text-green-700 dark:text-green-300 text-sm mb-3">
                  {appliedDesign.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-green-600 dark:text-green-400">
                  <span>by {appliedDesign.author}</span>
                  <span>•</span>
                  <span>{appliedDesign.platform}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Canvas Area */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Express Canvas
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Apply inspiration directly to your creative workspace
                </p>
              </div>
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          <div 
            className="relative p-12 min-h-96 transition-all duration-500"
            style={getCanvasStyles()}
          >
            {elements.map((element) => (
              <div
                key={element.id}
                className="absolute cursor-move select-none"
                style={{
                  left: element.x,
                  top: element.y,
                  ...getTextStyles(element.style)
                }}
              >
                {element.content}
              </div>
            ))}
            
            {elements.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Your canvas awaits inspiration</p>
                  <p className="text-sm">Browse the daily digest and apply designs with one click</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};