# Atri Datta - Professional Portfolio Website

A modern, fully responsive React portfolio website showcasing professional background as a Full Stack Web Developer, IT Professional, and Assistant Professor at Vasavi Engineering College. Features technical skills, notable projects, and contact information.

## 👨‍💻 Professional Background

- **Full Stack Web Developer** with 2 years of industry experience
- **IT Professional** with freelance project expertise
- **Assistant Professor** at Vasavi Engineering College
- **Web Administrator** managing institutional web portals and student systems

### Areas of Expertise

- Web Development (Frontend & Backend)
- Software Project Management
- Database Management & Design
- Server Administration
- Academic Portal Solutions
- Student Information Systems
- API Integration & Web Services

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ and npm

### Installation & Running

```bash
# Navigate to project directory
cd atridatta

# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## 📋 Features

✨ **Responsive Design**
- Mobile-first approach
- Fully responsive across all devices
- Smooth animations and transitions

🎯 **Key Sections**
- **Navigation Bar** - Sticky navigation with smooth scrolling
- **Hero Section** - Eye-catching introduction with profile overview
- **About Section** - Professional background and career highlights
- **Technical Skills** - Categorized skills with visual icons
- **Projects Showcase** - Featured projects with descriptions and links
- **Contact Form** - Get in touch section with contact information
- **Footer** - Social links and quick navigation

🎨 **Design Features**
- Modern gradient color scheme
- Interactive hover effects
- Smooth scroll navigation
- Icons from React Icons library
- Professional typography
- Accessible color contrast

## 📁 Project Structure

```
atridatta/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero banner section
│   │   ├── Hero.css
│   │   ├── About.jsx           # About section
│   │   ├── About.css
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Skills.css
│   │   ├── Projects.jsx        # Projects display
│   │   ├── Projects.css
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Contact.css
│   │   ├── Footer.jsx          # Footer component
│   │   └── Footer.css
│   ├── assets/
│   │   └── images/             # Image directory (add your photos here)
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   └── index.html              # HTML template
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## 🎨 Customization

### 1. Update Personal Information
Edit the following files with your information:

**Navbar.jsx & Footer.jsx**
```javascript
// Update social media links
<a href="https://github.com/YOUR_USERNAME">...</a>
```

**Contact.jsx**
```javascript
// Update contact details
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### 2. Add Your Profile Picture
- Place your image in `src/assets/images/`
- Update the import and path in `Hero.jsx` and `About.jsx`

### 3. Update Projects
Edit the `projectsData` array in `Projects.jsx`:
```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  features: ["Feature1", "Feature2"],
  links: {
    github: "https://github.com/...",
    live: "https://..."
  }
}
```

### 4. Customize Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... other variables */
}
```

### 5. Update Skills
Edit the `skillsData` array in `Skills.jsx` to reflect your technical expertise.

## 🛠️ Technologies

- **React 18.2** - UI library
- **Vite 4.3** - Build tool & dev server
- **React Icons 4.11** - Icon library
- **React Scroll 1.9** - Smooth scrolling
- **CSS3** - Styling with Grid & Flexbox

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag & drop the `dist` folder to Netlify

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Configure in package.json homepage
```

## 📝 Form Integration

The contact form is currently set up for client-side handling. To implement backend submission:

1. Create a backend API endpoint
2. Update the `handleSubmit` function in `Contact.jsx`
3. Add validation and error handling

Example with fetch API:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    // Handle response
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 🔍 SEO Optimization

The website includes:
- Meta tags for description and keywords
- Semantic HTML structure
- Proper heading hierarchy
- Mobile-friendly viewport settings

## 💡 Tips

- Use high-quality images for best visual impact
- Keep project descriptions concise and impactful
- Update the contact form endpoint before deployment
- Test on mobile devices before going live
- Use tools like Google PageSpeed Insights for optimization

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Atri Datta**
- Full Stack Web Developer
- IT Professional
- Assistant Professor at Vasavi Engineering College

---

**Last Updated**: May 2026

For more information, visit [GitHub Profiles](#) or [LinkedIn](#)
