# Getting Started Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Creating Your Portfolio

### Step 1: Write Your Content

Use the **Editor** tab to write your portfolio in Markdown format. The editor supports:

- **Frontmatter**: Add metadata at the top of your document
- **Markdown**: Use standard Markdown syntax for content
- **Live Preview**: Switch to Preview tab to see your changes

### Step 2: Customize Appearance

Use the **Customization Panel** to:

- Toggle section visibility
- Change primary color
- Select font family
- Apply a theme

### Step 3: Preview

Switch to the **Preview** tab to see how your portfolio looks with the selected theme.

### Step 4: Export & Deploy

Go to the **Export & Deploy** tab to:

- Download your portfolio as a ZIP file
- Deploy to GitHub Pages
- Get instructions for Netlify/Vercel

## Markdown Template

Here's a basic template to get you started:

```markdown
---
name: Your Name
title: Your Professional Title
email: your.email@example.com
website: https://yourwebsite.com
location: City, Country
avatar: https://example.com/avatar.jpg
social:
  - platform: GitHub
    username: yourusername
    url: https://github.com/yourusername
---

# About Me

Write a brief introduction about yourself.

## Skills

### Frontend
- React, Next.js, TypeScript

### Backend
- Node.js, Python

## Experience

### Job Title
**Company Name** | Date Range

Description of your role and achievements.

## Education

### Degree Name
**University Name** | Date Range

Details about your education.

## Projects

### Project Name
Description of your project.

[View on GitHub](https://github.com) | [Live Demo](https://demo.com)

## Contact

Feel free to reach out!

📧 your.email@example.com
```

## Themes

### Modern
Clean and professional design with modern aesthetics. Best for tech professionals and developers.

### Classic
Traditional layout with timeless appeal. Suitable for conservative industries.

### Minimal
Minimalist design focused on content. Great for showcasing your work without distractions.

### Dark
Dark theme for reduced eye strain. Perfect for developers who prefer dark mode.

## Deployment Options

### GitHub Pages

1. Download the portfolio ZIP
2. Extract and initialize git repository
3. Push to GitHub
4. Go to Settings → Pages
5. Select branch and deploy

### Netlify/Vercel

Simply drag and drop the `index.html` file or connect your repository.

## Tips

1. **Use Frontmatter**: Add metadata in the frontmatter for automatic header generation
2. **Preview Often**: Check your preview regularly to ensure formatting
3. **Customize**: Use the customization panel to match your style
4. **Export**: Download the ZIP to keep a backup of your portfolio

## Troubleshooting

### Port Already in Use
If port 3000 is busy, use:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear the cache and rebuild:
```bash
rm -rf .next
npm run build
```

## Need Help?

- Check the [README.md](./README.md) for more details
- Open an issue on GitHub
- Review the example templates in `templates/` folder

