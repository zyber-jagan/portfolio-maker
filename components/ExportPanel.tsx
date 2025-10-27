'use client'

import { useState } from 'react'
import { PortfolioTheme, CustomizationOptions } from '@/types/portfolio'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

interface ExportPanelProps {
  markdown: string
  theme: PortfolioTheme
  customization: CustomizationOptions
}

export default function ExportPanel({ markdown, theme, customization }: ExportPanelProps) {
  const [isExporting, setIsExporting] = useState(false)
  const [gitHubRepo, setGitHubRepo] = useState('')

  const handleDownload = async () => {
    setIsExporting(true)
    try {
      const zip = new JSZip()
      
      // Add markdown file
      zip.file('portfolio.md', markdown)
      
      // Add configuration file
      const config = JSON.stringify({ theme, customization }, null, 2)
      zip.file('config.json', config)
      
      // Add HTML preview
      const html = generateHTML(markdown, theme, customization)
      zip.file('index.html', html)
      
      // Add README
      const readme = `# Portfolio Website

This portfolio was generated using the Portfolio Generator.

## Files

- \`portfolio.md\` - Your portfolio content in Markdown format
- \`index.html\` - Static HTML version of your portfolio
- \`config.json\` - Theme and customization settings

## Deployment

### GitHub Pages

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select the branch and folder (usually \`/root\`)
4. Your site will be available at \`https://username.github.io/repository-name\`

### Netlify/Vercel

Simply drag and drop the \`index.html\` file to deploy instantly.
`
      zip.file('README.md', readme)
      
      // Generate and download
      const blob = await zip.generateAsync({ type: 'blob' })
      saveAs(blob, 'portfolio-export.zip')
      
      setIsExporting(false)
    } catch (error) {
      console.error('Export failed:', error)
      setIsExporting(false)
    }
  }

  const generateHTML = (md: string, th: PortfolioTheme, cust: CustomizationOptions) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-markdown@9/dist/react-markdown.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/remark-gfm@4/dist/index.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: ${cust.fontFamily}, sans-serif; }
  </style>
</head>
<body class="bg-gray-50">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div class="mb-6 pb-6 border-b">
        <h1 class="text-3xl font-bold mb-2">Your Portfolio</h1>
        <p class="text-gray-600">Theme: ${th} | Primary Color: ${cust.primaryColor}</p>
      </div>
      <div class="prose max-w-none">
        <pre class="whitespace-pre-wrap">${md}</pre>
      </div>
    </div>
  </div>
</body>
</html>`
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Export & Deploy</h2>
        <p className="text-gray-600">Download your portfolio or deploy to GitHub Pages</p>
      </div>

      {/* Download Option */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-2">Download Portfolio</h3>
        <p className="text-sm text-gray-600 mb-4">
          Download a ZIP file containing your portfolio files ready for deployment.
        </p>
        <button
          onClick={handleDownload}
          disabled={isExporting}
          className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isExporting ? 'Exporting...' : 'Download ZIP'}
        </button>
      </div>

      {/* GitHub Pages Info */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-2">Deploy to GitHub Pages</h3>
        <p className="text-sm text-gray-600 mb-4">
          After downloading, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li>Extract the downloaded ZIP file</li>
          <li>Initialize a git repository in the folder</li>
          <li>Push to your GitHub account</li>
          <li>Go to repository Settings → Pages</li>
          <li>Select source branch and deploy</li>
          <li>Your site will be live at username.github.io/repo-name</li>
        </ol>
      </div>

      {/* Alternative Deployment */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-2">Quick Deploy</h3>
        <p className="text-sm text-gray-600 mb-4">
          For instant deployment, you can use:
        </p>
        <div className="space-y-2 text-sm">
          <div>
            <strong className="text-gray-900">Netlify:</strong> Drag and drop the <code className="bg-gray-100 px-2 py-1 rounded">index.html</code> file
          </div>
          <div>
            <strong className="text-gray-900">Vercel:</strong> Import the repository or drag and drop
          </div>
          <div>
            <strong className="text-gray-900">GitHub Pages:</strong> Push to GitHub and enable Pages in settings
          </div>
        </div>
      </div>
    </div>
  )
}

