# Project Structure Documentation

Complete overview of the portfolio project structure and file purposes.

---

## 📂 Root Directory

```
soumya-portfolio/
├── public/                  # Static assets
├── src/                     # Source code
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS config (for Tailwind)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript config for Node (Vite)
├── vite.config.ts          # Vite bundler configuration
├── README.md               # Main documentation
├── SETUP.md                # Quick setup guide
├── DEPLOYMENT.md           # Deployment guide
└── PROJECT_STRUCTURE.md    # This file
```

---

## 📁 `/public` Directory

Static assets served as-is (not processed by Vite).

```
public/
├── vite.svg                # Default Vite icon
└── resume.pdf              # Your resume (ADD THIS)
```

**Important**: Add your resume PDF here as `resume.pdf`

---

## 📁 `/src` Directory

All application source code.

```
src/
├── components/             # React components
├── data/                   # Content data
├── hooks/                  # Custom React hooks
├── App.tsx                 # Main app component
├── main.tsx                # React entry point
└── index.css               # Global CSS + Tailwind
```

---

## 📁 `/src/components` Directory

All React components organized by type.

### Layout Components

```
src/components/layout/
├── Navbar.tsx              # Sticky navigation with ScrollSpy
└── Footer.tsx              # Footer with links and info
```

- **Navbar.tsx**: Top navigation with section links, active section indicator, theme toggle, responsive mobile menu
- **Footer.tsx**: Bottom footer with quick links, contact info, copyright

### Section Components

```
src/components/sections/
├── Hero.tsx                # Landing section with name, title, CTA
├── About.tsx               # About me + key strengths
├── Skills.tsx              # Technical skills grouped by category
├── Experience.tsx          # Work experience timeline
├── Projects.tsx            # Featured projects showcase
├── Education.tsx           # Academic credentials
├── Achievements.tsx        # Certifications, achievements, interests
└── Contact.tsx             # Contact information and form
```

Each section is self-contained and pulls data from `src/data/profile.ts`.

### UI Components (Reusable)

```
src/components/ui/
├── Container.tsx           # Max-width container wrapper
├── SectionHeader.tsx       # Section title + subtitle
├── Button.tsx              # Button with variants (primary, secondary, ghost)
├── Chip.tsx                # Chip/tag component for skills, tech stack
├── Card.tsx                # Card component with hover effects
├── Timeline.tsx            # Timeline item for experience/education
└── ProjectCard.tsx         # Specialized card for projects
```

**Design System Components**:
- All use consistent spacing, colors, and styles
- Support dark mode
- Fully accessible with keyboard navigation
- Type-safe with TypeScript interfaces

---

## 📁 `/src/data` Directory

Centralized data storage - **edit this to update your portfolio**.

```
src/data/
└── profile.ts              # All portfolio content
```

**profile.ts** contains:
- `profile`: Personal info, contact, summary
- `skills`: Technical skills by category
- `experiences`: Work experience/internships
- `projects`: Portfolio projects with details
- `education`: Academic background
- `achievements`: Certifications and achievements
- `interests`: Hobbies and extracurricular activities

**TypeScript Interfaces** (also in profile.ts):
- `Profile`, `Skill`, `Experience`, `Project`, `Education`, `Achievement`, `Interest`

---

## 📁 `/src/hooks` Directory

Custom React hooks for shared logic.

```
src/hooks/
└── useTheme.ts             # Dark mode theme management
```

**useTheme.ts**:
- Manages dark/light theme state
- Persists preference to localStorage
- Respects system preference on first visit
- Provides `toggleTheme()` function

---

## 🎨 Configuration Files

### `tailwind.config.js`

Tailwind CSS configuration:
- Custom color palette (primary colors)
- Font families (Inter, monospace)
- Dark mode strategy (`class` based)

**To change theme color**: Edit the `primary` color values.

### `vite.config.ts`

Vite bundler configuration:
- React plugin setup
- Build optimization settings

### `tsconfig.json`

TypeScript compiler options:
- Strict mode enabled
- Modern ES2020 target
- React JSX support

### `postcss.config.js`

PostCSS configuration for Tailwind CSS processing.

### `package.json`

**Key Scripts**:
```json
{
  "dev": "vite",              // Start dev server
  "build": "tsc && vite build", // Build for production
  "preview": "vite preview"    // Preview production build
}
```

**Dependencies**:
- `react`, `react-dom`: React framework
- Development dependencies: TypeScript, Tailwind, Vite, ESLint

---

## 🎯 Data Flow

```
profile.ts (data)
    ↓
Section Components (render data)
    ↓
UI Components (styled presentation)
    ↓
App.tsx (composition)
    ↓
main.tsx (React render)
    ↓
index.html (DOM mount point)
```

---

## 🎨 Styling Architecture

### Global Styles (`index.css`)

1. **Tailwind Layers**:
   - `@tailwind base` - Reset & base styles
   - `@tailwind components` - Reusable component classes
   - `@tailwind utilities` - Utility classes

2. **Custom Base Styles**:
   - Smooth scrolling
   - Dark mode transitions
   - Reduced motion support

3. **Custom Components**:
   - `.focus-ring` - Consistent focus styles
   - `.custom-scrollbar` - Styled scrollbars

### Component Styles

- All styling via Tailwind utility classes
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Dark mode: `dark:` prefix
- Consistent spacing scale from Tailwind

---

## 🔧 Key Features Implementation

### Smooth Scrolling
- CSS: `scroll-behavior: smooth` in `index.css`
- JS: `element.scrollIntoView({ behavior: 'smooth' })`

### ScrollSpy (Active Section)
- `Navbar.tsx` uses `IntersectionObserver` pattern
- Tracks scroll position and updates active section

### Dark Mode
- `useTheme` hook manages state
- `class="dark"` on `<html>` triggers dark styles
- All components use `dark:` variants

### Accessibility
- Semantic HTML (`<nav>`, `<section>`, `<header>`, `<footer>`)
- Keyboard navigation (all interactive elements)
- Focus indicators (`.focus-ring` class)
- ARIA labels where needed
- Color contrast compliance

### Performance
- Code splitting (Vite automatic)
- Optimized builds
- No heavy dependencies
- SVG icons (inline)
- Google Fonts with `preconnect`

---

## 📝 How to Modify

### Add a New Section

1. Create component: `src/components/sections/NewSection.tsx`
2. Add data interface to `src/data/profile.ts`
3. Export data from `profile.ts`
4. Import in `src/App.tsx` and add to render
5. Add section to navbar in `src/components/layout/Navbar.tsx`

### Change Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        // Change these values
        600: '#your-color',
      }
    }
  }
}
```

### Add New UI Component

1. Create in `src/components/ui/ComponentName.tsx`
2. Define TypeScript interface for props
3. Use Tailwind for styling
4. Export and use in sections

---

## 🧪 Testing Locally

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Build Output

After running `npm run build`, the `dist/` folder contains:

```
dist/
├── assets/
│   ├── index-[hash].js     # Compiled JavaScript
│   └── index-[hash].css    # Compiled CSS
├── resume.pdf              # Your resume (copied from public/)
└── index.html              # Entry HTML (with asset references)
```

This folder is ready to deploy to any static hosting service.

---

## 🔍 File Size Reference

**Typical Production Build** (~250KB total):
- HTML: ~3KB
- CSS: ~15KB (Tailwind purged)
- JS: ~150KB (React + app code, gzipped)
- Fonts: Loaded from Google CDN

---

## ✨ Best Practices Used

1. **TypeScript**: Type safety throughout
2. **Component Composition**: Small, reusable components
3. **Data-Driven**: Content separated from presentation
4. **Accessibility First**: Semantic HTML, keyboard nav
5. **Performance**: Minimal dependencies, optimized build
6. **Dark Mode**: System preference + manual toggle
7. **Responsive**: Mobile-first approach
8. **Clean Code**: Consistent formatting, clear naming

---

## 📚 Further Reading

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

Questions? Contact: somyajain2208@gmail.com
