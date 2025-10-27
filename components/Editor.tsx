'use client'

import { useState } from 'react'

interface EditorProps {
  markdown: string
  onMarkdownChange: (markdown: string) => void
}

export default function Editor({ markdown, onMarkdownChange }: EditorProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Markdown Editor</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-primary-600 hover:text-primary-700"
        >
          {isExpanded ? 'Minimize' : 'Expand'}
        </button>
      </div>
      <div className="p-4">
        <textarea
          value={markdown}
          onChange={(e) => onMarkdownChange(e.target.value)}
          className="w-full min-h-[600px] p-4 font-mono text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          placeholder="Start typing your portfolio in Markdown..."
        />
      </div>
    </div>
  )
}

