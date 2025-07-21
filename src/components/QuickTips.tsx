import React from 'react';
import { Lightbulb } from 'lucide-react';

interface QuickTip {
  title: string;
  content: string;
  author: string;
}

interface QuickTipsProps {
  tips: QuickTip[];
}

export const QuickTips: React.FC<QuickTipsProps> = ({ tips }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Quick Tips
        </h3>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-gray-700/20"
          >
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              {tip.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              {tip.content}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              — {tip.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};