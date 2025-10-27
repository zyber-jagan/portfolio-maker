import { PortfolioTheme } from '@/types/portfolio'

export interface ThemeConfig {
  id: PortfolioTheme
  name: string
  description: string
}

export const themes: ThemeConfig[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean, professional design with modern aesthetics',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional layout with timeless appeal',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Minimalist design focused on content',
  },
  {
    id: 'dark',
    name: 'Dark',
    description: 'Dark theme for reduced eye strain',
  },
]

