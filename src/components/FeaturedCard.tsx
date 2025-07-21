import React, { useId } from "react";
import { Heart, Palette, Type } from 'lucide-react';
import { DesignContent } from '../types';
import { PlatformBadge } from './PlatformBadge';
import { useDraggableToExpress } from "../hooks/useDrag";

interface FeaturedCardProps {
  content: DesignContent;
  onToggleFavorite: (id: string) => void;
  onApplyDesign: (content: DesignContent) => void;
  addOnUISdk: any; // Added for drag-and-drop functionality
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ 
  content, 
  onToggleFavorite, 
  onApplyDesign,
  addOnUISdk
}) => {
  const imgId = useId();
  useDraggableToExpress(addOnUISdk, imgId, content.imageUrl);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="relative">
        <img
          id={imgId}
          src={content.imageUrl}
          alt={content.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
        <button
          onClick={() => onToggleFavorite(content.id)}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
            content.isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${content.isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {content.title}
          </h2>
          <PlatformBadge platform={content.platform} url={content.sourceUrl} />
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {content.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            by <span className="font-medium text-gray-700 dark:text-gray-300">{content.author}</span>
          </div>
        </div>

        {content.actionData && (
          <div className="flex gap-2">
            {content.actionData.colors && (
              <button
                onClick={() => onApplyDesign(content)}
                className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <Palette className="h-4 w-4" />
                Apply Colors
              </button>
            )}
            {content.actionData.fonts && (
              <button
                onClick={() => onApplyDesign(content)}
                className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <Type className="h-4 w-4" />
                Apply Fonts
              </button>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {content.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};