# Copilot Instructions

This is a professional React portfolio website project for Atri Datta.

## Project Setup Status

- [x] React project structure created with Vite
- [x] Component structure implemented
- [x] Responsive design with CSS Grid/Flexbox
- [x] All major sections included:
  - Navigation Bar with smooth scrolling
  - Hero/Banner section with profile introduction
  - About section with professional background
  - Technical Skills showcase
  - Featured Projects display
  - Contact form
  - Footer with social links

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero/Banner section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects display
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## Customization Guide

### 1. Add Your Profile Picture
- Replace the SVG placeholder in `Hero.jsx` with your actual image
- Place your image in `src/assets/images/`
- Update the image path in the component

### 2. Update Personal Information
- Edit contact details in `Contact.jsx`
- Update social media links in `Navbar.jsx` and `Footer.jsx`
- Modify GitHub profiles and LinkedIn URLs

### 3. Add/Modify Projects
- Edit the `projectsData` array in `Projects.jsx`
- Add real GitHub and live demo links
- Update descriptions and technologies

### 4. Customize Colors
- Edit CSS variables in `src/index.css`:
  - `--primary-color`: Main brand color
  - `--secondary-color`: Gradient accent
  - `--text-dark`, `--text-light`: Text colors
  - `--bg-light`, `--bg-white`: Background colors

## Features

- ✅ Fully Responsive Design (Mobile, Tablet, Desktop)
- ✅ Smooth Scroll Navigation
- ✅ Modern UI with Gradients & Animations
- ✅ Icon Support (React Icons)
- ✅ Contact Form (ready for backend integration)
- ✅ SEO Optimized
- ✅ Fast Performance with Vite

## Technologies Used

- React 18.2
- Vite 4.3
- React Icons 4.11
- React Scroll 1.9
- CSS3 with Grid & Flexbox

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps

1. Add your profile photograph
2. Update all personal information and links
3. Fill in your actual projects
4. Set up form submission backend
5. Deploy to Netlify, Vercel, or similar platform

## Deployment

### Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### Vercel
```bash
npm install -g vercel
npm run build
vercel
```

---

For questions or improvements, refer to the component files for detailed inline documentation.
