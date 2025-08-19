# User Story 2 - Frontend

A React-based frontend application for displaying currency data in a sortable data grid.

## Features

- **Responsive Data Grid**: Clean, modern table design with Tailwind CSS
- **Sorting Capabilities**: Click column headers to sort by currency (alphabetically) or amount (numerically)
- **Interactive UI**: Hover effects, loading states, and error handling
- **Accessibility**: Keyboard navigation and ARIA labels
- **Real-time Updates**: Dynamic sorting with visual feedback

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **ESLint**: Code quality and consistency

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd gb-userstory2/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will open at `http://localhost:3000`

## Development

### Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint for code quality

### Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Application header
│   │   └── CurrencyDataGrid.jsx # Main data grid component
│   ├── services/          # API services
│   │   └── api.js         # Backend communication
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and Tailwind
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── vite.config.js         # Vite configuration
```

## Components

### Header Component
- Displays application title and description
- Shows sample currency formats as visual indicators
- Responsive design with proper spacing

### CurrencyDataGrid Component
- Main data table with sorting functionality
- Loading states and error handling
- Accessible table headers with keyboard navigation
- Visual feedback for sort state

## API Integration

The frontend communicates with the backend through the API service:

- **Base URL**: `/api/v1/currency` (proxied to backend)
- **Endpoints**:
  - `GET /api/v1/currency` - Get all data with optional sorting
  - `GET /api/v1/currency/sort` - Get sorted data
  - `GET /api/v1/currency/currencies` - Get unique currencies

## Styling

### Tailwind CSS Classes
- Custom color palette with primary colors
- Responsive design utilities
- Component-specific classes for consistent styling

### Custom CSS
- Component-specific styles in `index.css`
- Utility classes for common patterns
- Smooth transitions and hover effects

## Accessibility Features

- **Keyboard Navigation**: Tab through interactive elements
- **ARIA Labels**: Descriptive labels for screen readers
- **Focus Management**: Clear focus indicators
- **Semantic HTML**: Proper table structure and headings

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features supported
- Responsive design for mobile and desktop

## Development Notes

### State Management
- Local state with React hooks
- Async data fetching with error boundaries
- Optimistic UI updates for sorting

### Performance
- Efficient re-renders with proper dependency arrays
- Debounced API calls for better UX
- Lazy loading of non-critical components

## Building for Production

1. Create production build:
   ```bash
   npm run build
   ```

2. Preview production build:
   ```bash
   npm run preview
   ```

3. Deploy the `dist` folder to your hosting service

## Troubleshooting

### Common Issues

1. **Backend Connection**: Ensure backend is running on port 5001
2. **Port Conflicts**: Change port in `vite.config.js` if needed
3. **Dependencies**: Run `npm install` if packages are missing

### Development Tips

- Use browser dev tools for debugging
- Check console for API errors
