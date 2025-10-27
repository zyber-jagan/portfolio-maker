# Git Upload Commands for GitHub

## 🚀 Upload Portfolio Generator to GitHub

**Your Repository:** `https://github.com/zyber-jagan/portfolio-maker.git`

### Step 1: Initialize Git (if not already done)

```bash
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Create First Commit

```bash
git commit -m "Portfolio Generator - Initial commit"
```

### Step 4: Add Your GitHub Repository

```bash
git remote add origin https://github.com/zyber-jagan/portfolio-maker.git
```

### Step 5: Rename Branch to Main

```bash
git branch -M main
```

### Step 6: Push to GitHub

```bash
git push -u origin main
```

## 📋 Complete Command Sequence (Copy All at Once)

```bash
git init
git add .
git commit -m "Portfolio Generator - Ready for GitHub Pages"
git remote add origin https://github.com/zyber-jagan/portfolio-maker.git
git branch -M main
git push -u origin main
```

## 🎯 After Pushing to GitHub

### 1. Enable GitHub Pages

1. Go to: https://github.com/zyber-jagan/portfolio-maker
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Build and deployment**:
   - Source: **GitHub Actions**
5. Click **Save**

### 2. Wait for Deployment

- Go to **Actions** tab
- Wait 2-5 minutes for first deployment
- Check for green checkmark ✓

### 3. Access Your Live Site

Your Portfolio Generator will be live at:
```
https://zyber-jagan.github.io/portfolio-maker
```

## 🔄 To Update Your Site Later

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub will automatically redeploy!

## ⚠️ Troubleshooting

### If you get "remote already exists" error:

```bash
git remote remove origin
git remote add origin https://github.com/zyber-jagan/portfolio-maker.git
git push -u origin main
```

### If you get authentication error:

Use GitHub Personal Access Token instead of password:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token
3. Use token as password when pushing

---

**Your Portfolio Generator is ready to go live!** 🎉

