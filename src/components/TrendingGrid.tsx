import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { DesignContent } from '../types';
import { PlatformBadge } from './PlatformBadge';

interface TrendingGridProps {
  content: DesignContent[];
  onToggleFavorite: (id: string) => void;
  onApplyDesign: (content: DesignContent) => void;
}

export const TrendingGrid: React.FC<TrendingGridProps> = ({ 
  content, 
  onToggleFavorite, 
  onApplyDesign 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {content.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200 group"
        >
          <div className="relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => onToggleFavorite(item.id)}
              className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-sm transition-all duration-200 ${
                item.isFavorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <Heart className={`h-3 w-3 ${item.isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm leading-tight">
                {item.title}
              </h3>
              <PlatformBadge platform={item.platform} url={item.sourceUrl} />
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 line-clamp-2">
              {item.description}
            </p>

            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              by <span className="font-medium">{item.author}</span>
            </div>

            {item.actionData && (
              <button
                onClick={() => onApplyDesign(item)}
                className="w-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg transition-colors duration-200 text-xs font-medium"
              >
                Apply to Canvas
              </button>
            )}

            <div className="flex flex-wrap gap-1 mt-3">
              {item.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};