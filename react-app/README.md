# Art Circle Foundation - React Application

This is the React version of the Art Circle Foundation website.

## Installation

1. Navigate to the react-app directory:
   ```bash
   cd react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open at http://localhost:3000

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
react-app/
├── public/              # Static files
│   ├── img/            # Images from original website
│   ├── event-img/      # Event images
│   ├── index.html      # HTML template
│   └── manifest.json   # PWA manifest
├── src/
│   ├── components/     # Reusable React components
│   │   ├── common/    # Navbar, Footer, BackToTop, Spinner
│   │   ├── home/      # Carousel, AboutSection, Highlights, Commitment
│   │   ├── events/    # EventCard, UpcomingEvents, PastEvents, EventDetails
│   │   ├── gallery/   # GalleryGrid
│   │   ├── press/     # PressCard, PressDetails
│   │   └── contact/   # ContactForm
│   ├── pages/         # Page components for routing
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Events.js
│   │   ├── Gallery.js
│   │   ├── Contact.js
│   │   ├── Press.js
│   │   └── GetInvolved.js
│   ├── services/      # API and data services
│   │   └── googleSheetsService.js
│   ├── assets/        # CSS and static assets
│   │   └── css/       # Styles from original website
│   ├── App.js         # Main App component with routing
│   ├── App.css        # App-specific styles
│   ├── index.js       # Application entry point
│   └── index.css      # Global styles
└── package.json       # Dependencies and scripts
```

## Features

- **React Router**: Client-side routing for seamless navigation
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Google Sheets Integration**: Dynamic content loading for press releases and about page
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Modern React**: Functional components with hooks
- **Performance**: Optimized production builds

## Available Scripts

- `npm start` - Run development server (localhost:3000)
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Bootstrap 5.3.0
- Axios 1.12.0
- FontAwesome 6.5.0
- React Bootstrap 2.9.0

## Notes

- The original HTML/CSS/JS website remains intact in the root directory
- Both versions can coexist in the same repository
- Development dependencies have known vulnerabilities that don't affect production builds
- All production dependencies are secure and up-to-date

