'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PortfolioTheme, CustomizationOptions } from '@/types/portfolio'
import { parseMarkdown } from '@/lib/markdownParser'

interface PreviewProps {
  markdown: string
  theme: PortfolioTheme
  customization: CustomizationOptions
}

export default function Preview({ markdown, theme, customization }: PreviewProps) {
  const parsed = parseMarkdown(markdown)
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="border-b border-gray-200 px-4 py-3">
        <h2 className="font-semibold text-gray-900">Live Preview</h2>
      </div>
      <div className="p-8 overflow-auto max-h-[800px]">
        <div className={`theme-${theme}`} style={{ fontFamily: customization.fontFamily }}>
          {/* Header */}
          {(customization.showAvatar || parsed.meta.name) && (
            <header className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-6">
                {customization.showAvatar && parsed.meta.avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={parsed.meta.avatar}
                    alt={parsed.meta.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                )}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{parsed.meta.name || 'Your Name'}</h1>
                  <p className="text-xl text-gray-600 mt-1">{parsed.meta.title || 'Your Title'}</p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-500">
                    {parsed.meta.email && <span>📧 {parsed.meta.email}</span>}
                    {parsed.meta.location && <span>📍 {parsed.meta.location}</span>}
                  </div>
                </div>
              </div>
              
              {customization.showSocialLinks && parsed.meta.social && parsed.meta.social.length > 0 && (
                <div className="flex gap-3 mt-4">
                  {parsed.meta.social.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary-50 text-primary-600 rounded-md text-sm hover:bg-primary-100 transition-colors"
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              )}
            </header>
          )}

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                a: ({ node, ...props }) => (
                  <a className="text-primary-600 hover:text-primary-700 underline" {...props} />
                ),
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800" {...props} />
                  ) : (
                    <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm" {...props} />
                  ),
                pre: ({ node, ...props }: any) => (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-primary-500 pl-4 italic my-4 text-gray-600" {...props} />
                ),
              }}
            >
              {parsed.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

