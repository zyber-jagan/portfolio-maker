# Deployment Guide - GitHub Pages

This guide will help you deploy the Portfolio Generator to GitHub Pages as a live website.

## 🚀 Quick Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select `gh-pages` branch
   - Click **Save**
   - Wait for GitHub Actions to complete the deployment
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Option 2: Manual Deployment

1. **Build the site**
   ```bash
   npm run export
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Deploy gh-pages branch**
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select `gh-pages` as source
   - Your site will be live

### Option 3: Using GitHub Actions (Already Configured)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**To use this:**

1. Push your code to GitHub
2. Go to **Settings** → **Actions** → **General**
3. Enable "Workflow permissions"
4. Push to the `main` branch
5. GitHub Actions will automatically deploy your site

## 📋 Prerequisites

Before deploying, make sure you have:

- ✅ Node.js 18+ installed
- ✅ Git installed
- ✅ GitHub account
- ✅ All dependencies installed (`npm install`)

## 🔧 Configuration Files

### next.config.js
Already configured for static export:
```javascript
{
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}
```

### .github/workflows/deploy.yml
Automatic deployment workflow (included)

### public/.nojekyll
Prevents Jekyll processing (included)

## 🎯 Step-by-Step Deployment

### Step 1: Prepare Your Code

Make sure all changes are committed:
```bash
git status
git add .
git commit -m "Ready for deployment"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **New repository**
3. Give it a name (e.g., `portfolio-generator`)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README
6. Click **Create repository**

### Step 3: Push Your Code

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
4. Click **Save**
5. Wait for deployment (check Actions tab)

### Step 5: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## 🔄 Updating Your Site

Every time you make changes:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will automatically rebuild and deploy your site!

## 🐛 Troubleshooting

### Issue: 404 Error
- **Solution**: Make sure you're using the correct URL format: `username.github.io/repository-name`
- Wait a few minutes after enabling Pages for the site to propagate

### Issue: Site Not Updating
- **Solution**: Clear browser cache or use incognito mode
- Check GitHub Actions tab for deployment status

### Issue: Build Fails
- **Solution**: Check that all dependencies are in `package.json`
- Make sure `.nojekyll` file exists in the `public` folder

### Issue: Assets Not Loading
- **Solution**: Check that `next.config.js` has `trailingSlash: true`
- Make sure images use absolute paths or are in the `public` folder

## 🌐 Alternative Deployment Options

### Netlify

1. Go to [Netlify](https://www.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub repository
4. Build command: `npm run export`
5. Publish directory: `out`
6. Click **Deploy site**

### Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **Import Project**
3. Connect your GitHub repository
4. Vercel will auto-detect Next.js
5. Click **Deploy**

Your site will be live in seconds!

## ✅ Checklist

Before deploying, ensure:

- [ ] All dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run export`)
- [ ] No linting errors (`npm run lint`)
- [ ] Repository is public (for free GitHub Pages)
- [ ] `.nojekyll` file exists
- [ ] GitHub Actions workflow is configured

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/actions)

---

**Your Portfolio Generator is now ready to go live!** 🎉

