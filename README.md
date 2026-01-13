# Soumya Jain - Portfolio Website

A modern, minimal, and production-quality personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Responsive Design**: Fully responsive from mobile (320px) to desktop
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Performance Optimized**: Fast loading, minimal bundle size
- **Accessible**: WCAG AA compliant, keyboard navigable, semantic HTML
- **SEO Ready**: Meta tags, OpenGraph, structured data
- **Smooth Navigation**: ScrollSpy navigation with smooth scrolling
- **Production Ready**: Clean code, type-safe, maintainable

## 📦 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: SVG-based (inline)

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone or extract the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume PDF**
   - Place your resume as `public/resume.pdf`

4. **Update profile data**
   - Edit `src/data/profile.ts` to add your LinkedIn, GitHub, and Play Store URLs
   - Replace `<LINKEDIN_URL>`, `<GITHUB_URL>`, and `<PLAYSTORE_URL>` placeholders

5. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

6. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist` folder

7. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
soumya-portfolio/
├── public/
│   └── resume.pdf              # Your resume PDF
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky navigation with ScrollSpy
│   │   │   └── Footer.tsx      # Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section with intro
│   │   │   ├── About.tsx       # About section
│   │   │   ├── Skills.tsx      # Technical skills
│   │   │   ├── Experience.tsx  # Work experience
│   │   │   ├── Projects.tsx    # Featured projects
│   │   │   ├── Education.tsx   # Academic background
│   │   │   ├── Achievements.tsx # Certifications & interests
│   │   │   └── Contact.tsx     # Contact information
│   │   └── ui/
│   │       ├── Container.tsx   # Layout container
│   │       ├── SectionHeader.tsx # Section titles
│   │       ├── Button.tsx      # Button component
│   │       ├── Chip.tsx        # Chip/tag component
│   │       ├── Card.tsx        # Card component
│   │       ├── Timeline.tsx    # Timeline component
│   │       └── ProjectCard.tsx # Project card component
│   ├── data/
│   │   └── profile.ts          # All portfolio data (centralized)
│   ├── hooks/
│   │   └── useTheme.ts         # Dark mode hook
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/profile.ts` to update:
- Personal details (name, email, phone)
- Social links (LinkedIn, GitHub)
- Summary and tagline
- Skills, experience, projects
- Education and achievements
- Interests

### Change Colors

Edit `tailwind.config.js` to change the primary color:

```js
colors: {
  primary: {
    // Change these values to your preferred color
    50: '#eef2ff',
    // ... rest of the scale
  }
}
```

### Add/Remove Sections

1. Create a new section component in `src/components/sections/`
2. Import and add it to `src/App.tsx`
3. Add the section ID to the navbar in `src/components/layout/Navbar.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel dashboard for automatic deployments.

3. **Configuration**
   Vercel auto-detects Vite. No additional configuration needed.

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Deploy**:
   ```bash
   # Install Netlify CLI
   npm i -g netlify-cli
   
   # Deploy
   netlify deploy --prod
   ```

   Or drag & drop the `dist` folder to Netlify's web interface.

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts** for GitHub Pages base path:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels where needed
- Color contrast meets WCAG AA standards
- Respects `prefers-reduced-motion`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This project is free to use for personal portfolios. Feel free to customize it for your needs.

## 🤝 Support

For issues or questions, please contact: somyajain2208@gmail.com

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
