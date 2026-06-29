# Bhimireddy Vaishnavi Reddy - Portfolio

A modern, responsive personal portfolio website showcasing projects, skills, education, certifications, and achievements.

## 📁 Folder Structure

```
portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── styles.css         # Styling for the portfolio
├── js/
│   └── main.js            # JavaScript functionality
├── data/
│   └── projects.json      # Project data
├── package.json           # Project metadata
├── README.md              # This file
└── .gitignore             # Git ignore configuration
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/bhimireddy-portfolio.git
   cd bhimireddy-portfolio
   ```

2. **Run a local server:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   
   # Or using Node.js (if http-server is installed)
   npx http-server
   ```

3. **Open in browser:**
   Navigate to `http://localhost:8000` in your browser.

## 🌐 GitHub Pages Deployment

This portfolio is configured for easy deployment on GitHub Pages.

### Steps to Deploy:

1. **Create a GitHub repository:**
   - Go to [GitHub.com](https://github.com/new)
   - Create a new repository named `bhimireddy-portfolio` (or your preferred name)

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/bhimireddy-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to **Settings → Pages**
   - Under "Source", select **main** branch and **root** folder
   - Click "Save"

4. **Access your portfolio:**
   - Your portfolio will be live at: `https://yourusername.github.io/bhimireddy-portfolio`
   - Or if the repo is named `yourusername.github.io`, it will be at: `https://yourusername.github.io`

## 📝 Features

- ✨ Responsive design (mobile, tablet, desktop)
- 🎨 Modern gradient styling
- 📱 Smooth navigation and scrolling
- 🎯 Dynamic project loading from JSON
- ⚡ No build process required
- 🔗 Easy social media links
- 📧 Contact information

## 🛠️ Customization

### Update Personal Information

Edit `index.html` and update:
- Name and title (hero section)
- About me content
- Skills list
- Education details
- Certifications
- Achievements
- Contact information

### Add/Edit Projects

Edit `data/projects.json` to add or modify projects:

```json
{
  "projects": [
    {
      "title": "Project Title",
      "description": "Project description",
      "status": "Completed",
      "role": "Your Role (optional)"
    }
  ]
}
```

### Customize Styling

Edit `css/styles.css` to:
- Change colors
- Modify fonts
- Adjust spacing
- Update breakpoints for responsive design

### Add More Sections

Add new sections to `index.html` with corresponding styles in `css/styles.css`.

## 🔗 Social Links

Update the following links in the Contact section of `index.html`:
- LinkedIn profile
- GitHub profile
- CodeChef profile
- Email

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Bhimireddy Vaishnavi Reddy**
- Email: vaishnavibhimireddy15@gmail.com
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/your-linkedin-profile)
- GitHub: [Your GitHub](https://github.com/your-github-profile)

---

**Happy coding! 🚀**
