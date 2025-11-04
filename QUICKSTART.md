# 🚀 Quick Start Guide

## Step 1: Install Dependencies

Open your terminal in the portfolio folder and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Three.js (3D graphics)
- @react-three/fiber & @react-three/drei (React Three.js helpers)
- Framer Motion (animations)
- react-intersection-observer (scroll animations)
- maath (math utilities for 3D)
- Vite (build tool)

## Step 2: Start Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

## Step 3: Customize Your Portfolio

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change the title/tagline
   - Customize the pick-up line

2. **Skills Section** (`src/components/Skills.jsx`):
   - Update `skillsData` array with your skills
   - Adjust skill levels (0-100%)
   - Change icons and colors

3. **Projects Section** (`src/components/Projects.jsx`):
   - Edit `projectsData` array
   - Add your project details
   - Update tech stacks

4. **About Section** (`src/components/About.jsx`):
   - Write your personal introduction
   - Update `timelineData` with your career history
   - Customize badges

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, location
   - Add your social media links
   - Customize the final pick-up line

### Customize Colors

Edit `src/index.css` variables:
```css
:root {
  --neon-blue: #00d4ff;    /* Change this */
  --neon-purple: #b847ff;  /* And this */
  --neon-cyan: #00ffff;    /* And this */
}
```

## Step 4: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## Step 5: Deploy

You can deploy the `dist` folder to:
- **Netlify**: Drag and drop the dist folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use gh-pages package
- **Any static hosting**: Upload the dist folder

## 🎨 Customization Tips

### Change 3D Background
Edit `src/components/Background3D.jsx`:
- Change particle count (default: 5000)
- Modify colors
- Change geometry type (torus knot, sphere, box, etc.)

### Adjust Animations
Edit animation timings in component files:
- `duration`: Animation length
- `delay`: Start delay
- `transition`: Easing function

### Modify Layout
Edit `src/App.css` for section-specific styles:
- Grid layouts
- Card sizes
- Spacing
- Responsive breakpoints

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Make sure all imports are correct and files exist.

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Happy coding! 🎉** If you need help, check the README.md for detailed information.
