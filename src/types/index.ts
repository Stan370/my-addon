export interface DesignContent {
  id: string;
  type: 'typography' | 'color' | 'ui-ux' | 'illustration' | 'branding' | 'web' | 'mobile';
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  authorUrl: string;
  platform: 'dribbble' | 'behance' | 'twitter' | 'reddit' | 'figma' | 'awwwards';
  createdAt: string;
  tags: string[];
  isFavorite: boolean;
  sourceUrl: string;
  actionData?: {
    fonts?: string[];
    colors?: string[];
    downloadUrl?: string;
  };
}

export interface DailyDigest {
  date: string;
  featured: DesignContent;
  trending: DesignContent[];
  quickTips: {
    title: string;
    content: string;
    author: string;
  }[];
}

export type ContentFilter = 'all' | 'typography' | 'color' | 'ui-ux' | 'illustration' | 'branding' | 'web' | 'mobile';