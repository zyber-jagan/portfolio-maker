export type PortfolioTheme = 'modern' | 'classic' | 'minimal' | 'dark'

export interface CustomizationOptions {
  showAvatar: boolean
  showSocialLinks: boolean
  showSkills: boolean
  showExperience: boolean
  showEducation: boolean
  showProjects: boolean
  showContact: boolean
  primaryColor: string
  fontFamily: string
}

export interface SectionVisibility {
  [key: string]: boolean
}

