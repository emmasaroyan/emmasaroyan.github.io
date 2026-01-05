# Deploy to GitHub Pages

## Step-by-Step Instructions

### 1. Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your actual GitHub username)
3. Make sure it's set to **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### 2. Open Terminal and Navigate to Your Project

Open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
cd /Users/emmasaroyan/Desktop/my-portfolio
```

### 3. Initialize Git and Push to GitHub

Run these commands one by one (replace YOUR_USERNAME with your GitHub username):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Speaking portfolio"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/ (root)**
7. Click **Save**

### 5. Your Site Will Be Live!

After a few minutes, your site will be available at:
**https://YOUR_USERNAME.github.io**

Note: It may take 1-2 minutes for GitHub to build and deploy your site.

## Troubleshooting

- If you get authentication errors, you may need to set up a Personal Access Token
- Make sure your repository name matches: `YOUR_USERNAME.github.io` (exactly)
- The repository must be **Public** for free GitHub Pages hosting

