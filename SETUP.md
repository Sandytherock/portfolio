# Quick Setup Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Resume
Place your resume PDF file in the `public` folder:
```
public/resume.pdf
```

### Step 3: Update Your Links
Open `src/data/profile.ts` and replace the placeholders:

```typescript
export const profile: Profile = {
  // ... other fields
  linkedin: "https://www.linkedin.com/in/your-profile",  // Replace <LINKEDIN_URL>
  github: "https://github.com/your-username",             // Replace <GITHUB_URL>
  // ... rest
};

export const projects: Project[] = [
  {
    title: "Test Yodha",
    // ... other fields
    playStoreUrl: "https://play.google.com/store/apps/details?id=...", // Replace <PLAYSTORE_URL>
  },
  // ... other projects
];
```

### Step 4: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### Step 5: Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

---

## 🎨 Quick Customization

### Change Theme Color
Edit `tailwind.config.js` - look for the `primary` color definition.

### Update Content
All content is in `src/data/profile.ts` - edit this file to update your information.

### Add More Projects/Experience
Add new entries to the arrays in `src/data/profile.ts`:
- `experiences[]` - for internships/jobs
- `projects[]` - for portfolio projects
- `education[]` - for academic credentials
- `achievements[]` - for certifications

---

## 📤 Deploy to Vercel (Fastest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your site is live in seconds.

---

## ❓ Need Help?

Check `README.md` for detailed documentation or contact somyajain2208@gmail.com
