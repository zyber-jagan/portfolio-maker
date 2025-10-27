# Project Structure

```
rp/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
│
├── components/                   # React components
│   ├── CustomizationPanel.tsx   # Left sidebar with customization options
│   ├── Editor.tsx               # Markdown editor component
│   ├── ExportPanel.tsx          # Export and deploy panel
│   ├── Preview.tsx              # Live preview component
│   └── ThemeSelector.tsx        # Theme selector dropdown
│
├── lib/                         # Utility functions
│   ├── defaultMarkdown.ts       # Default markdown template
│   ├── markdownParser.ts        # Markdown parsing utilities
│   └── themes.ts                # Theme configurations
│
├── templates/                   # Sample markdown templates
│   ├── basic.md                 # Basic portfolio template
│   └── developer.md             # Developer portfolio template
│
├── types/                       # TypeScript type definitions
│   └── portfolio.ts             # Portfolio and customization types
│
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── README.md                   # Project documentation
├── GETTING_STARTED.md          # Getting started guide
└── .gitignore                  # Git ignore rules
```

## Key Files

### `app/page.tsx`
Main page component that manages state and renders the editor, preview, and export panels.

### `components/Editor.tsx`
Markdown editor with syntax highlighting support. Users can write their portfolio content here.

### `components/Preview.tsx`
Live preview component that renders the markdown with the selected theme and customization options.

### `components/CustomizationPanel.tsx`
Sidebar panel allowing users to:
- Toggle section visibility
- Change primary color
- Select font family

### `components/ExportPanel.tsx`
Panel for exporting and deploying the portfolio:
- Download as ZIP
- Instructions for GitHub Pages deployment
- Quick deploy options

### `lib/markdownParser.ts`
Parses markdown with frontmatter using gray-matter. Extracts metadata and content separately.

### `lib/themes.ts`
Theme configuration definitions for modern, classic, minimal, and dark themes.

## Features

1. **Markdown Editor**: Full-featured markdown editor with syntax highlighting
2. **Live Preview**: Real-time preview with customizable themes
3. **Theme System**: 4 built-in themes (modern, classic, minimal, dark)
4. **Customization**: Control section visibility, colors, and fonts
5. **Export**: Download portfolio as ZIP for deployment
6. **GitHub Pages Ready**: Generates deployment-ready files

## Technologies Used

- **Next.js 14**: React framework with app router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first CSS framework
- **React Markdown**: Markdown rendering
- **Gray Matter**: Frontmatter parsing
- **JSZip**: ZIP file generation
- **File Saver**: Client-side file downloads

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static files
npm run export
```

## Deployment

The project can be deployed to:
- **Vercel**: Recommended for Next.js apps
- **Netlify**: Great for static sites
- **GitHub Pages**: Free hosting for static sites

