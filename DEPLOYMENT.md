# Deployment Guide

This guide covers deploying your portfolio to popular hosting platforms.

---

## 🟢 Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and provides excellent support for Vite/React apps.

### Method 1: GitHub Integration (Automatic Deployments)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Custom Domain
1. Go to project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain and follow DNS instructions

---

## 🔵 Netlify

### Method 1: Drag & Drop (Quick Test)

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy zone

### Method 2: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and login
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

### Custom Domain
1. Go to site settings
2. Navigate to "Domain management"
3. Add custom domain

---

## 🟠 GitHub Pages

### Setup

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` with your repo name:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Replace with your GitHub repo name
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

Your site will be live at: `https://your-username.github.io/your-repo-name/`

---

## 🟣 Cloudflare Pages

### Via GitHub Integration

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect your GitHub repository
5. Configure build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click "Save and Deploy"

### Via Wrangler CLI

```bash
# Install Wrangler
npm i -g wrangler

# Build
npm run build

# Deploy
npx wrangler pages publish dist
```

---

## 🔴 Firebase Hosting

### Setup

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init hosting
```

Select:
- **Public directory**: `dist`
- **Single-page app**: Yes
- **Automatic builds**: No

4. Build and deploy:
```bash
npm run build
firebase deploy
```

Your site will be at: `https://your-project.firebaseapp.com`

---

## 🟡 AWS Amplify

### Via GitHub Integration

1. Push to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click "New app" → "Host web app"
4. Choose GitHub and authorize
5. Select your repository
6. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
7. Click "Save and deploy"

---

## 🔧 Environment Variables (if needed)

Most platforms support environment variables:

### Vercel
Add in dashboard under Settings → Environment Variables

### Netlify
Add in dashboard under Site settings → Build & deploy → Environment

### GitHub Pages
Not recommended for secrets. Use GitHub Secrets for sensitive data.

---

## 📊 Analytics Setup (Optional)

### Google Analytics

Add to `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
Install and use Vercel Analytics package:
```bash
npm i @vercel/analytics
```

---

## ✅ Pre-Deployment Checklist

- [ ] Update `src/data/profile.ts` with real URLs
- [ ] Add `public/resume.pdf`
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Update meta tags in `index.html` with your domain
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify dark mode works
- [ ] Run Lighthouse audit

---

## 🚨 Troubleshooting

### Build Fails
- Check Node.js version (v16+)
- Delete `node_modules` and `package-lock.json`, then `npm install`
- Check for TypeScript errors: `npm run build`

### 404 on Refresh (SPA Routing)
- Vercel/Netlify: Automatically handled
- GitHub Pages: Already configured in the guide above
- Others: Add redirect rules for SPA

### Fonts Not Loading
- Ensure Google Fonts link is in `index.html`
- Check CORS if self-hosting fonts

---

## 🎯 Recommended Choice

**For beginners**: Vercel or Netlify (easiest, free tier, automatic HTTPS, CDN)

**For GitHub users**: GitHub Pages (free, integrated with GitHub)

**For advanced users**: AWS Amplify or Cloudflare Pages (more control, enterprise features)

---

Need help? Contact: somyajain2208@gmail.com
