# GitHub Pages Setup Guide

## ✅ Everything is Ready for GitHub Pages!

Your portfolio generator is now configured for GitHub Pages deployment. Follow these simple steps to go live:

## 📋 Step-by-Step Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Repository name: `portfolio-generator` (or any name you prefer)
4. Description: "Convert Markdown to Portfolio Website"
5. Make sure it's **Public** (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README"
7. Click **Create repository**

### Step 2: Initialize Git and Push

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Portfolio Generator ready for GitHub Pages"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio-generator.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/portfolio-generator`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - Click **Save**
5. Wait 2-5 minutes for the first deployment

### Step 4: Access Your Live Site

Your portfolio generator is now live at:
```
https://YOUR_USERNAME.github.io/portfolio-generator
```

## 🔄 Updating Your Site

Every time you want to update your site:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site!

## 🎯 Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running
3. When it completes (green checkmark), your site is live
4. Check the **Deployments** section for the live URL

## 🐛 Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution**: Wait 5-10 minutes after enabling Pages. GitHub needs time to deploy.

### Issue: GitHub Actions Not Running

**Solution**: 
1. Go to repository **Settings** → **Actions** → **General**
2. Enable "Workflow permissions"
3. Click **Save**

### Issue: Build Fails

**Solution**: 
1. Check the **Actions** tab for error details
2. Make sure all dependencies are in `package.json`
3. Run `npm run export` locally to test

### Issue: Styles Not Loading

**Solution**: The site is configured correctly. Clear your browser cache or try incognito mode.

## ✅ What's Included

Your project includes:
- ✅ Next.js configured for static export
- ✅ GitHub Actions workflow for auto-deployment
- ✅ `.nojekyll` file to prevent Jekyll processing
- ✅ Proper paths configuration
- ✅ All dependencies ready

## 📝 Quick Commands Reference

```bash
# Development
npm run dev              # Run locally

# Deployment
npm run export           # Build for production
git push origin main      # Deploy to GitHub Pages

# Testing
npm run lint             # Check for errors
npm run build            # Test build locally
```

## 🎉 Success!

Your Portfolio Generator is now live on GitHub Pages!

Visit your site at: `https://YOUR_USERNAME.github.io/portfolio-generator`

---

**Need more help?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

