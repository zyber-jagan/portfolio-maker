# Quick Start - Deploy to GitHub Pages

## 🚀 Deploy in 3 Steps

### 1. Initialize Git (if not already)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub
```bash
# Replace with your repository URL
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Select **Source**: Deploy from a branch
4. Select **Branch**: `main` / `(root)`
5. Click **Save**
6. Wait 2-5 minutes for deployment
7. Your site is live! 🎉

## ✅ Your Site URL

Your portfolio generator will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## 📝 Next Steps

- **Customize**: Edit the markdown content to your needs
- **Update**: Push changes to automatically redeploy
- **Share**: Share your portfolio generator link

## 🔄 Automatic Updates

Every time you push to the `main` branch, GitHub Actions will:
1. Build your site
2. Deploy to GitHub Pages
3. Update your live site automatically

No manual steps needed!

---

**Need help?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

