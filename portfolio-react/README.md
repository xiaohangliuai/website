# Portfolio Website - React & Vite

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and professional experience in AI/ML and software engineering.

## 🚀 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation** - Sidebar navigation with smooth scrolling to sections
- **Project Showcase** - Interactive project cards with images and descriptions
- **Skills Display** - Comprehensive skills organized by category
- **Contact Section** - Social media links and contact information
- **Modern Tech Stack** - Built with React 19 and Vite 7 for optimal performance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 20.19+ or 22.12+ recommended)
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd website/portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running the Project

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`

### Production Build
Build the project for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
portfolio-react/
├── public/              # Static assets
│   ├── assets/         # CSS, JS, fonts, images
│   ├── images/         # Project images and photos
│   ├── css/            # Additional stylesheets
│   └── js/             # Additional JavaScript files
├── src/
│   ├── components/     # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Preloader.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── Sidebar.jsx
│   │   └── Skills.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Technology Stack

### Core
- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool and dev server

### Development Tools
- **ESLint** - Code linting
- **@vitejs/plugin-react** - React plugin for Vite

### Styling
- Custom CSS with SASS
- FontAwesome icons
- Responsive design principles

## 🎨 Customization

### Adding New Projects
Edit `src/components/ProjectsSection.jsx` and add to the `projectsData` array:
```javascript
{
  title: 'Your Project Title',
  description: 'Project description...',
  image: '/images/your-project/image.png',
  link: 'https://github.com/your-repo',
  position: 'center center'
}
```

### Updating Skills
Edit `src/components/Skills.jsx` and modify the `skillsData` array with your skills.

### Changing Contact Info
Edit `src/components/Contact.jsx` to update email, location, and social media links.

## 🌐 Deployment

### Build for Production
```bash
npm run build
```
This creates a `dist/` folder with optimized production files.

### Deploy Options
- **GitHub Pages** - Use `gh-pages` package
- **Vercel** - Connect your GitHub repo for automatic deployments
- **Netlify** - Drag and drop the `dist/` folder or connect to Git
- **AWS S3** - Upload `dist/` contents to S3 bucket

## 📝 Environment Notes

If you see Node.js version warnings:
```
Vite requires Node.js version 20.19+ or 22.12+
```

**Recommendation**: Update Node.js using [nvm](https://github.com/nvm-sh/nvm):
```bash
nvm install 22
nvm use 22
```

## 🐛 Troubleshooting

### Dev server not starting
- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version compatibility

### Styles not loading
- Ensure all CSS files are in the `public/` directory
- Check browser console for 404 errors

### Images not displaying
- Verify image paths start with `/` for absolute paths
- Ensure images are in the `public/images/` directory

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Xiaohang Liu**
- LinkedIn: [xiaohangliuai](https://www.linkedin.com/in/xiaohangliuai/)
- GitHub: [xiaohangliuai](https://github.com/xiaohangliuai)
- Email: 2024@xiaohangliuai.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using React and Vite**
