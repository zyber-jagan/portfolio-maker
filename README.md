# Portfolio Generator

A powerful tool to convert your Markdown-based portfolio into a beautiful, customizable website. Built with Next.js and Tailwind CSS.

## ✨ Features

- 📝 **Markdown Editor**: Write your portfolio in Markdown with live preview
- 🎨 **Multiple Themes**: Choose from modern, classic, minimal, and dark themes
- ⚙️ **Customization**: Control section visibility, colors, and fonts
- 👀 **Live Preview**: See changes in real-time
- 📦 **Easy Export**: Download your portfolio as a ZIP file
- 🚀 **One-Click Deploy**: Deploy to GitHub Pages, Netlify, or Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd rp
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

### Editing Your Portfolio

1. **Edit Tab**: Write your portfolio in Markdown format
2. **Preview Tab**: See how it looks with the selected theme
3. **Customize**: Use the left panel to toggle sections and adjust colors
4. **Export**: Download your portfolio or deploy to GitHub Pages

### Markdown Format

The portfolio generator supports standard Markdown with frontmatter:

\`\`\`markdown
---
name: Your Name
title: Your Title
email: your.email@example.com
avatar: https://example.com/avatar.jpg
---

# About Me

Write your content here...

## Skills

- Skill 1
- Skill 2
\`\`\`

### Supported Sections

- About Me
- Skills
- Experience
- Education
- Projects
- Contact

## 🎨 Themes

### Modern
Clean and professional design with modern aesthetics

### Classic
Traditional layout with timeless appeal

### Minimal
Minimalist design focused on content

### Dark
Dark theme for reduced eye strain

## 📦 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   \`\`\`

2. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)** or **gh-pages**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

**Automatic Deployment**: The included GitHub Actions workflow will automatically deploy on every push!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Netlify/Vercel

- **Netlify**: Import your GitHub repository, build command: `npm run export`
- **Vercel**: Import your GitHub repository, it auto-detects Next.js

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Markdown** - Markdown rendering
- **Gray Matter** - Frontmatter parsing

## 📝 License

MIT License - feel free to use this project for your portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

If you have any questions or issues, please open an issue on GitHub.

---

Made with ❤️ using Next.js and Tailwind CSS

