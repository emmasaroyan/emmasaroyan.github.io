# Portfolio Website

A modern, responsive portfolio website inspired by professional data science portfolios.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Sections**: Expandable skills and speaking engagements sections
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Fade-in Animations**: Sections animate in as you scroll
- **Mobile Menu**: Hamburger menu for mobile navigation

## Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Interactive features and animations
- `README.md` - This file

## Customization

### Personal Information

1. **Hero Section**: Update your name and title in the hero section
   ```html
   <h1>Your Name</h1>
   <h2>Your Title</h2>
   ```

2. **Profile Image**: Replace the placeholder image URL with your own
   ```html
   <img src="your-image-url.jpg" alt="Your Name" id="profile-image">
   ```

3. **Professional Summary**: Update the summary text in the summary section

4. **Projects**: Add your projects in the portfolio section with:
   - Project name
   - Description
   - Tags (technologies used)
   - Link to project

5. **Skills**: Update the skills lists in the skills section

6. **Resume**: Add your resume file and update the download link
   ```html
   <a href="path/to/your/resume.pdf" class="btn-download" download>
   ```

7. **Social Links**: Update the social media links in the contact section
   ```html
   <a href="your-linkedin-url" class="social-link">
   ```

8. **Speaking Engagements**: Add your talks to the speaking engagements table

9. **Open Source**: List your open source contributions

10. **Email**: Update the email link in the contact section
    ```html
    <a href="mailto:your.email@example.com" class="social-link">
    ```

### Styling

You can customize the color scheme by modifying the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --text-color: #333;
    --bg-color: #ffffff;
    --light-bg: #f8f9fa;
    --border-color: #e0e0e0;
    --hover-color: #2980b9;
}
```

## Getting Started

1. Open `index.html` in your web browser
2. Customize the content with your information
3. Replace placeholder images and links
4. Deploy to your preferred hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://www.netlify.com/)
2. Or connect your GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own portfolio!

