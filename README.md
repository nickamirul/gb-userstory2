# Currency Data Grid - Full Stack Application

A modern, full-stack currency data grid application featuring a React frontend and Node.js backend that displays currency and amount data with advanced sorting capabilities. This project demonstrates modern web development practices, RESTful API design, and responsive data visualization with comprehensive locale-specific currency formatting.

## 📋 Project Overview

This application fulfills User Story 2 requirements by providing:

- **Frontend**: Modern React web interface with interactive data grid
- **Backend**: RESTful Node.js/Express API server with sorting logic
- **Data Management**: Currency records with different locality formatting
- **Sorting**: Intelligent string and numeric sorting capabilities
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Key Features

✅ **Currency Data Display**: Four currency records (AUD, MYR, GBP, EUR) with locale-specific formatting  
✅ **Interactive Sorting**: Click column headers to sort by Currency (string) or Amount (number)  
✅ **Bi-directional Sorting**: Ascending and descending order toggle functionality  
✅ **Responsive Data Grid**: Modern table design that works on all screen sizes  
✅ **Real-time Updates**: Dynamic sorting with loading states and error handling  
✅ **Accessibility Features**: Keyboard navigation, ARIA labels, and screen reader support  
✅ **Visual Feedback**: Sort direction indicators and hover effects  
✅ **Error Handling**: Comprehensive error management and user-friendly messages  
✅ **RESTful API**: Clean, well-structured backend endpoints  
✅ **Locale Awareness**: Different currency display formats per region  

## 🛠 Technology Stack

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Icons**: Lucide React 0.294.0
- **HTTP Client**: Native Fetch API
- **Code Quality**: ESLint 8.55.0

### Backend
- **Runtime**: Node.js (≥16.0.0)
- **Framework**: Express.js 4.18.2
- **Security**: Helmet 7.1.0
- **CORS**: cors 2.8.5
- **Development**: Nodemon 3.0.2

## 📁 Project Structure

```
gb-userstory2/
├── README.md                    # This comprehensive documentation
├── .gitignore                  # Git ignore rules (node_modules, .env, etc.)
├── backend/                    # Node.js Express API server
│   ├── middleware/
│   │   ├── index.js           # Middleware exports
│   │   ├── errorHandler.js    # Global error handling
│   │   ├── logging.js         # Request logging middleware
│   │   └── security.js        # Security headers and CORS
│   ├── routes/
│   │   └── currency.js        # Currency API endpoints
│   ├── utils/
│   │   └── currencyUtils.js   # Currency data and sorting logic
│   ├── server.js              # Main Express server
│   ├── test.js                # Backend logic tests
│   ├── test-server.js         # Server endpoint tests
│   ├── package.json           # Backend dependencies
│   └── README.md              # Backend-specific documentation
└── frontend/                  # React frontend application
    ├── public/
    │   └── vite.svg           # Vite logo
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx     # Application header component
    │   │   └── CurrencyDataGrid.jsx  # Main data grid component
    │   ├── services/
    │   │   └── api.js         # API service layer
    │   ├── App.jsx            # Main application component
    │   ├── main.jsx           # Application entry point
    │   └── index.css          # Global styles and Tailwind
    ├── index.html             # HTML template
    ├── package.json           # Frontend dependencies
    ├── vite.config.js         # Vite build configuration
    ├── tailwind.config.js     # Tailwind CSS configuration
    ├── postcss.config.js      # PostCSS configuration
    └── README.md              # Frontend-specific documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd gb-userstory2
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The backend server will start on `http://localhost:5001`

3. **Frontend Setup** (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

### Available Scripts

#### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run backend logic tests

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📡 API Endpoints

### Base URL: `http://localhost:5001/api/v1/currency`

| Endpoint | Method | Description | Parameters |
|-----------|--------|-------------|------------|
| `/` | GET | Get all currency data | `sortBy`, `order` (optional) |
| `/sort` | GET | Get sorted data with validation | `sortBy`, `order` (required) |
| `/currencies` | GET | Get unique currency codes | None |

### Query Parameters
- `sortBy`: `currency` or `amount`
- `order`: `asc` or `desc`

### API Examples

#### Get All Currency Data
```bash
curl http://localhost:5001/api/v1/currency
```

#### Sort by Currency (Ascending)
```bash
curl "http://localhost:5001/api/v1/currency?sortBy=currency&order=asc"
```

#### Sort by Amount (Descending)
```bash
curl "http://localhost:5001/api/v1/currency?sortBy=amount&order=desc"
```

#### Get Unique Currencies
```bash
curl http://localhost:5001/api/v1/currency/currencies
```

### Success Response Format
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "currency": "AUD",
      "amount": 1100.00,
      "displayAmount": "1,100.00",
      "locality": "Australia"
    }
  ],
  "count": 4,
  "sortBy": "currency",
  "order": "asc"
}
```

### Error Response Format
```json
{
  "success": false,
  "error": "Invalid sortBy parameter",
  "message": "sortBy must be either 'currency' or 'amount'"
}
```

## 📊 Currency Data Structure

The application includes sample currency data representing different localities:

| Currency | Amount | Display Format | Locality | Description |
|----------|--------|----------------|----------|-------------|
| AUD | 1,100.00 | 1,100.00 | Australia | Standard comma thousands separator |
| MYR | 899.00 | 899.00 | Malaysia | Simple decimal format |
| GBP | 56,000.00 | 56,000.00 | United Kingdom | Comma thousands separator |
| EUR | 5,388.00 | 5.388,00 | European Union | Dot thousands, comma decimal |

## 🧪 Test Cases

### Sorting Test Cases ✅

#### Currency Sorting (String/Alphabetical)

| Test Case | Sort Order | Expected Result | Description |
|-----------|------------|-----------------|-------------|
| 1 | Ascending | AUD → EUR → GBP → MYR | Alphabetical order (case-insensitive) |
| 2 | Descending | MYR → GBP → EUR → AUD | Reverse alphabetical order |

#### Amount Sorting (Numeric)

| Test Case | Sort Order | Expected Result | Description |
|-----------|------------|-----------------|-------------|
| 1 | Ascending | 899.00 → 1,100.00 → 5,388.00 → 56,000.00 | Numerical order by actual amount |
| 2 | Descending | 56,000.00 → 5,388.00 → 1,100.00 → 899.00 | Reverse numerical order |

### API Validation Test Cases ❌

| Test Case | Request | Expected Behavior | Description |
|-----------|---------|-------------------|-------------|
| 1 | `sortBy=invalid` | 400 Bad Request | Invalid sortBy parameter |
| 2 | `order=invalid` | 400 Bad Request | Invalid order parameter |
| 3 | `/sort` without params | 400 Bad Request | Missing required parameters |
| 4 | Invalid endpoint | 404 Not Found | Route not found |

### Frontend Interaction Test Cases 🖱️

| Test Case | Action | Expected Result | Description |
|-----------|--------|-----------------|-------------|
| 1 | Click Currency header | Toggle currency sort | Visual feedback with icons |
| 2 | Click Amount header | Toggle amount sort | Numerical sorting applied |
| 3 | Keyboard navigation | Header focus with Tab | Accessibility support |
| 4 | Press Enter on header | Trigger sort | Keyboard sorting |

## 🏃‍♂️ Running Tests

### Backend Tests
```bash
cd backend
npm test
```

This will run:
- ✅ Currency data retrieval tests
- ✅ Sorting logic validation tests
- ✅ API endpoint functionality tests
- ❌ Error handling and validation tests

### Manual Frontend Testing
1. Open the application at `http://localhost:3000`
2. Test currency column sorting (should be alphabetical)
3. Test amount column sorting (should be numerical)
4. Verify sort direction indicators
5. Test responsive design on different screen sizes
6. Verify accessibility with keyboard navigation

## 🔧 Configuration

### Backend Configuration

The backend runs on port 5001 by default and can be configured via environment variables:

```bash
# Optional environment configuration
PORT=5001                    # Server port (default: 5001)
NODE_ENV=development         # Environment mode
```

### Frontend Configuration

The frontend connects to the backend API and can be configured in `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:5001/api/v1/currency'
```

### Vite Configuration

The frontend uses Vite with React plugin configured in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  // Frontend development server port
  }
})
```

## 🛡 Security Features

1. **🛡️ Helmet.js Security Headers**: Comprehensive HTTP security headers
2. **🌐 CORS Configuration**: Controlled cross-origin resource sharing for localhost
3. **✅ Input Validation**: Server-side validation of sorting parameters
4. **❌ Error Handling**: Prevents information leakage through sanitized error messages
5. **🔒 Request Logging**: Monitoring and logging of all API requests
6. **⚡ Rate Limiting Ready**: Structure ready for rate limiting implementation

## 🌟 Additional Features

### Frontend
- **Real-time Sorting**: Instant visual feedback with loading states
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Visual Indicators**: Sort direction arrows and hover effects
- **Error Boundaries**: Graceful error handling with retry functionality
- **Loading States**: Spinner and loading text during API calls

### Backend
- **Locale-Aware Formatting**: Proper currency formatting utilities
- **Comprehensive Logging**: Request logging with timestamps and origins
- **Flexible Sorting**: Multiple sorting endpoints with different validation levels
- **Error Categories**: Detailed error codes and messages
- **RESTful Design**: Clean, predictable API structure

## 📈 Performance Considerations

- **Frontend**: Optimized bundle size with Vite, efficient React re-renders
- **Backend**: Lightweight Express server with minimal dependencies
- **API**: Efficient in-memory sorting with proper data structures
- **Caching**: Browser caching for static assets
- **Responsive**: CSS Grid and Flexbox for efficient layouts

## 🎨 UI/UX Features

### Data Grid Design
- **Modern Table**: Clean, professional appearance with Tailwind CSS
- **Interactive Headers**: Clickable column headers with visual feedback
- **Sort Indicators**: Clear arrows showing current sort direction
- **Hover Effects**: Row highlighting for better user experience
- **Responsive Layout**: Horizontal scrolling on smaller screens

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **High Contrast**: Sufficient color contrast for readability

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Backend Deployment
1. Set production environment variables
2. Run `npm install --production`
3. Start with `npm start`
4. Configure reverse proxy (nginx/Apache) if needed

### Frontend Deployment
1. Run `npm run build`
2. Deploy `dist` folder to static hosting (Netlify, Vercel, etc.)
3. Configure API endpoints for production
4. Set up CDN for optimal performance

## 🔄 Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real-time currency rate updates
- [ ] Pagination for large datasets
- [ ] Advanced filtering capabilities
- [ ] Export functionality (CSV, JSON, PDF)
- [ ] User authentication and personalization
- [ ] Multiple currency conversion
- [ ] Historical currency data tracking
- [ ] API rate limiting and caching
- [ ] Internationalization (i18n) support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Add tests for new functionality
- Update documentation for API changes
- Ensure responsive design principles

## 🆘 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify both backend and frontend are running
3. Ensure API endpoints are accessible
4. Review the README files in backend/ and frontend/ directories
5. Check network connectivity between frontend and backend

## 📄 License

This project is licensed under the MIT License - see the package.json files for details.

## 👨‍💻 Author

**Amirul Ismail**

---

**Note**: This project demonstrates modern full-stack development practices including RESTful API design, responsive frontend development, accessibility best practices, and comprehensive testing methodologies.