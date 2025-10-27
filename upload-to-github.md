# 🚀 Upload Portfolio Generator to GitHub

## Quick Upload Commands

Open PowerShell or Terminal and run these commands in your project folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Portfolio Generator - Ready for GitHub Pages deployment"

# Add your GitHub repository
git remote add origin https://github.com/zyber-jagan/portfolio-maker.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## ✅ After Upload

### 1. Go to GitHub
Visit: https://github.com/zyber-jagan/portfolio-maker

### 2. Enable GitHub Pages
1. Click **Settings** → **Pages**
2. Select Source: **GitHub Actions**
3. Click **Save**

### 3. Wait for Deployment
- Go to **Actions** tab
- Wait 2-5 minutes for deployment
- When complete (green checkmark), your site is live!

### 4. Access Your Live Site
Your Portfolio Generator will be live at:
```
https://zyber-jagan.github.io/portfolio-maker
```

## 🔄 Update Your Site Anytime

When you want to update the live site, just run:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

GitHub will automatically redeploy!

---

**Need help?** See [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) for full instructions.

