# 🚀 3D Interactive Portfolio Website

A stunning, modern portfolio website featuring cutting-edge 3D animations, interactive elements, and a dark theme with vibrant neon accents. Built with React.js and Three.js.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?style=for-the-badge&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🎨 Visual Design
- **Dark Mode Theme** with neon blue, purple, and cyan gradients
- **Glassmorphism Effects** for modern, frosted glass appearance
- **3D Background** with floating geometric shapes and particle system
- **Custom Cursor** with interactive effects
- **Smooth Animations** using Framer Motion
- **Loading Screen** with animated loader

### 📱 Sections

#### Hero Section
- Large, bold animated introduction
- 3D rotating geometric shapes
- Tech-themed pick-up lines that add personality
- Call-to-action buttons with hover effects
- Animated scroll indicator

#### Skills Section
- Interactive 3D skill cards for:
  - ⚛️ React.js (90%)
  - 🐍 Python (85%)
  - 🎸 Django (80%)
  - ⚙️ C++ (75%)
  - ☕ Java (70%)
  - 🍃 MongoDB (85%)
  - 🐬 MySQL (80%)
- Hover effects with 3D rotation and scaling
- Animated skill level indicators
- Progress bars that animate on scroll

#### Projects Section
- 3D card layout with tilt and lift effects
- 6 featured projects with:
  - E-Commerce Platform
  - AI Chat Application
  - Task Management System
  - Weather Dashboard
  - Portfolio CMS
  - Fitness Tracker
- Gradient backgrounds for each project
- Tech stack tags
- Hover animations and glowing effects

#### About Me Section
- Personal introduction with animated text
- Career timeline with 3D markers
- Integrated tech-themed pick-up lines
- Glassmorphism cards
- Badge highlights for key traits

#### Contact Section
- Animated contact form with 3D effects
- Form validation
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Contact information display
- Final memorable pick-up line
- Responsive layout

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

### Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Background3D.jsx      # 3D background with particles
│   │   ├── CustomCursor.jsx      # Custom cursor component
│   │   ├── Hero.jsx              # Hero section
│   │   ├── Skills.jsx            # Skills showcase
│   │   ├── Projects.jsx          # Projects gallery
│   │   ├── About.jsx             # About section
│   │   └── Contact.jsx           # Contact form
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # Component styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --bg-dark: #0a0a0f;
  --bg-secondary: #13131a;
  --neon-blue: #00d4ff;
  --neon-purple: #b847ff;
  --neon-cyan: #00ffff;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
}
```

### Content
- **Skills**: Edit `skillsData` in `src/components/Skills.jsx`
- **Projects**: Edit `projectsData` in `src/components/Projects.jsx`
- **Timeline**: Edit `timelineData` in `src/components/About.jsx`
- **Contact Info**: Update details in `src/components/Contact.jsx`
- **Pick-up Lines**: Customize the tech-themed lines throughout the components

## 💡 Features Explained

### Custom Cursor
A custom cursor that follows mouse movement with smooth transitions and scales on click.

### 3D Background
Powered by Three.js, featuring:
- Animated particle system (5000+ particles)
- Rotating torus knot geometry
- Ambient and point lighting
- Continuous rotation animation

### Glassmorphism
Modern frosted glass effect using:
- `backdrop-filter: blur(10px)`
- Semi-transparent backgrounds
- Subtle borders
- Box shadows for depth

### Scroll Animations
Uses `react-intersection-observer` to trigger animations when sections come into view.

### Responsive Design
Fully responsive breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🎯 Performance

- **Fast Loading**: Vite's optimized build system
- **Code Splitting**: Automatic with React lazy loading
- **Optimized 3D**: Efficient Three.js rendering
- **Smooth Animations**: Hardware-accelerated CSS and requestAnimationFrame

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 🌟 Credits

Built with ❤️ using:
- React.js
- Three.js
- Framer Motion
- Vite

---

**Remember:** "Let's connect - I promise I'm more responsive than a well-optimized API!" 😊💙

# maaz-portfolio
# maaz-portfolio
# maaz-portfolio
