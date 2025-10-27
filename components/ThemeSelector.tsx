'use client'

import { PortfolioTheme } from '@/types/portfolio'
import { themes } from '@/lib/themes'

interface ThemeSelectorProps {
  theme: PortfolioTheme
  onThemeChange: (theme: PortfolioTheme) => void
}

export default function ThemeSelector({ theme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-gray-700">Theme:</label>
      <select
        value={theme}
        onChange={(e) => onThemeChange(e.target.value as PortfolioTheme)}
        className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  )
}

