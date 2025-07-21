import { DailyHeader } from './components/DailyHeader';
import { FeaturedCard } from './components/FeaturedCard';
import { TrendingGrid } from './components/TrendingGrid';
import { QuickTips } from './components/QuickTips';
import { MainCanvas } from './components/MainCanvas';
import { useTheme } from './hooks/useTheme';
import { DesignContent } from './types';
import { todaysDigest } from './data/dailyDigestData';
import React, { useState } from "react";

import { AddOnSDKAPI } from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

const App = ({ addOnUISdk }: { addOnUISdk: AddOnSDKAPI }) => {
  
  const { isDark, toggleTheme } = useTheme();
  const [appliedDesign, setAppliedDesign] = useState<DesignContent | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleApplyDesign = (content: DesignContent) => {
    setAppliedDesign(content);
    
    // Show success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300';
    notification.textContent = `Applied: ${content.title}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  // Update content with favorite status
  const featuredContent = {
    ...todaysDigest.featured,
    isFavorite: favorites.has(todaysDigest.featured.id)
  };

  const trendingContent = todaysDigest.trending.map(item => ({
    ...item,
    isFavorite: favorites.has(item.id)
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <DailyHeader 
        date={todaysDigest.date} 
        isDark={isDark} 
        onToggleTheme={toggleTheme} 
      />

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-12">
        {/* Featured Design */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Today's Featured
          </h2>
          <FeaturedCard
            content={featuredContent}
            onToggleFavorite={handleToggleFavorite}
            onApplyDesign={handleApplyDesign}
          />
        </section>

        {/* Trending Designs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Trending Now
          </h2>
          <TrendingGrid
            content={trendingContent}
            onToggleFavorite={handleToggleFavorite}
            onApplyDesign={handleApplyDesign}
          />
        </section>

        {/* Quick Tips */}
        <section>
          <QuickTips tips={todaysDigest.quickTips} />
        </section>

        {/* Canvas */}
        <section>
          <MainCanvas appliedDesign={appliedDesign} />
        </section>
      </div>
    </div>
  );
}

export default App;