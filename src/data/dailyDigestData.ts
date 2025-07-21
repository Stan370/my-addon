import { DailyDigest } from '../types';

export const todaysDigest: DailyDigest = {
  date: new Date().toISOString().split('T')[0],
  featured: {
    id: 'featured-1',
    type: 'ui-ux',
    title: 'Glassmorphism Dashboard Concept',
    description: 'A beautiful exploration of glassmorphism in dashboard design with subtle transparency effects and modern typography.',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Chen',
    authorUrl: 'https://dribbble.com/sarahchen',
    platform: 'dribbble',
    createdAt: '2024-01-15',
    tags: ['glassmorphism', 'dashboard', 'ui', 'modern'],
    isFavorite: false,
    sourceUrl: 'https://dribbble.com/shots/example',
    actionData: {
      colors: ['rgba(255,255,255,0.1)', '#1a1a2e', '#16213e', '#0f3460']
    }
  },
  trending: [
    {
      id: '1',
      type: 'typography',
      title: 'Variable Font Exploration',
      description: 'Creative use of variable fonts in modern web design',
      imageUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alex Rivera',
      authorUrl: 'https://twitter.com/alexrivera',
      platform: 'twitter',
      createdAt: '2024-01-15',
      tags: ['typography', 'variable-fonts', 'web'],
      isFavorite: false,
      sourceUrl: 'https://twitter.com/alexrivera/status/example',
      actionData: {
        fonts: ['Inter Variable', 'Recursive']
      }
    },
    {
      id: '2',
      type: 'color',
      title: 'Accessible Color Systems',
      description: 'Building inclusive color palettes that work for everyone',
      imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Design Systems Team',
      authorUrl: 'https://www.reddit.com/r/userexperience',
      platform: 'reddit',
      createdAt: '2024-01-15',
      tags: ['accessibility', 'color', 'systems'],
      isFavorite: false,
      sourceUrl: 'https://reddit.com/r/userexperience/comments/example',
      actionData: {
        colors: ['#1a1a1a', '#ffffff', '#0066cc', '#cc0000', '#00aa00']
      }
    },
    {
      id: '3',
      type: 'mobile',
      title: 'iOS 17 Design Patterns',
      description: 'Latest mobile design patterns from iOS 17',
      imageUrl: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Mobile Design Co',
      authorUrl: 'https://www.figma.com/@mobiledesign',
      platform: 'figma',
      createdAt: '2024-01-15',
      tags: ['ios', 'mobile', 'patterns'],
      isFavorite: false,
      sourceUrl: 'https://figma.com/community/file/example'
    },
    {
      id: '4',
      type: 'web',
      title: 'Micro-interactions That Delight',
      description: 'Subtle animations that enhance user experience',
      imageUrl: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'UX Collective',
      authorUrl: 'https://awwwards.com/uxcollective',
      platform: 'awwwards',
      createdAt: '2024-01-15',
      tags: ['micro-interactions', 'animation', 'ux'],
      isFavorite: false,
      sourceUrl: 'https://awwwards.com/sites/example'
    },
    {
      id: '5',
      type: 'branding',
      title: 'Minimalist Logo Trends 2024',
      description: 'Clean, purposeful branding that stands the test of time',
      imageUrl: 'https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Brand Studio',
      authorUrl: 'https://behance.net/brandstudio',
      platform: 'behance',
      createdAt: '2024-01-15',
      tags: ['branding', 'logo', 'minimalism'],
      isFavorite: false,
      sourceUrl: 'https://behance.net/gallery/example'
    }
  ],
  quickTips: [
    {
      title: 'Typography Hierarchy',
      content: 'Use a maximum of 3 font weights to maintain clean hierarchy without overwhelming the design.',
      author: 'Typography Daily'
    },
    {
      title: 'Color Contrast',
      content: 'Aim for 4.5:1 contrast ratio for normal text and 3:1 for large text to meet WCAG AA standards.',
      author: 'Accessibility Guide'
    },
    {
      title: 'White Space',
      content: 'White space is not wasted space. It improves readability and creates visual breathing room.',
      author: 'Design Principles'
    }
  ]
};