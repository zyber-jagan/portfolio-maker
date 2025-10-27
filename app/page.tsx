'use client'

import { useState } from 'react'
import Editor from '@/components/Editor'
import Preview from '@/components/Preview'
import ThemeSelector from '@/components/ThemeSelector'
import CustomizationPanel from '@/components/CustomizationPanel'
import ExportPanel from '@/components/ExportPanel'
import { PortfolioTheme, CustomizationOptions } from '@/types/portfolio'
import { defaultMarkdown } from '@/lib/defaultMarkdown'

export default function Home() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [theme, setTheme] = useState<PortfolioTheme>('modern')
  const [customization, setCustomization] = useState<CustomizationOptions>({
    showAvatar: true,
    showSocialLinks: true,
    showSkills: true,
    showExperience: true,
    showEducation: true,
    showProjects: true,
    showContact: true,
    primaryColor: '#0ea5e9',
    fontFamily: 'Inter',
  })
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'export'>('editor')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Portfolio Generator
              </h1>
              <p className="text-sm text-gray-600">Convert Markdown to Website</p>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSelector theme={theme} onThemeChange={setTheme} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          {/* Tab Navigation */}
          <div className="flex gap-2 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'editor'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Editor
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'export'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Export & Deploy
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Customization */}
          <div className="lg:col-span-1">
            <CustomizationPanel
              customization={customization}
              onCustomizationChange={setCustomization}
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-3">
            {activeTab === 'editor' && (
              <Editor markdown={markdown} onMarkdownChange={setMarkdown} />
            )}
            {activeTab === 'preview' && (
              <Preview
                markdown={markdown}
                theme={theme}
                customization={customization}
              />
            )}
            {activeTab === 'export' && (
              <ExportPanel
                markdown={markdown}
                theme={theme}
                customization={customization}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

