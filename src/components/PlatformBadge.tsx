import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PlatformBadgeProps {
  platform: 'dribbble' | 'behance' | 'twitter' | 'reddit' | 'figma' | 'awwwards';
  url: string;
}

const platformColors = {
  dribbble: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  behance: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  twitter: 'bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300',
  reddit: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
  figma: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  awwwards: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
};

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${platformColors[platform]}`}
    >
      {platform}
      <ExternalLink className="h-3 w-3" />
    </a>
  );
};