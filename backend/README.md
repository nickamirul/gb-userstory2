# User Story 2 - Backend API

A Node.js Express backend API for managing currency data with sorting capabilities.

## Features

- **Currency Data Management**: Store and retrieve currency records with different locality formats
- **Sorting Capabilities**: Sort by currency (string) or amount (number) in ascending/descending order
- **RESTful API**: Clean, well-structured endpoints
- **Input Validation**: Comprehensive parameter validation
- **Error Handling**: Proper error responses and status codes
- **Security**: Helmet middleware for security headers

## Currency Data

The API includes sample data representing different localities:

| Currency | Amount | Display Format | Locality |
|----------|--------|----------------|----------|
| AUD | 1,100.00 | 1,100.00 | Australia |
| MYR | 899.00 | 899.00 | Malaysia |
| GBP | 56,000.00 | 56,000.00 | United Kingdom |
| EUR | 5.388,00 | 5.388,00 | European Union |

## Installation

1. Navigate to the backend directory:
   ```bash
   cd gb-userstory2/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on port 5001 by default.

## API Endpoints

### Base URL
```
http://localhost:5001/api/v1/currency
```

### Endpoints

#### 1. Get All Currency Data
```
GET /api/v1/currency
```

**Query Parameters:**
- `sortBy` (optional): Column to sort by (`currency` or `amount`)
- `order` (optional): Sort order (`asc` or `desc`)

**Example:**
```bash
# Get all data
GET /api/currency

# Get data sorted by currency ascending
GET /api/v1/currency?sortBy=currency&order=asc

# Get data sorted by amount descending
GET /api/v1/currency?sortBy=amount&order=desc
```

#### 2. Get Sorted Currency Data
```
GET /api/v1/currency/sort
```

**Required Query Parameters:**
- `sortBy`: Column to sort by (`currency` or `amount`)
- `order`: Sort order (`asc` or `desc`)

**Example:**
```bash
GET /api/v1/currency/sort?sortBy=currency&order=asc
```

#### 3. Get Unique Currencies
```
GET /api/v1/currency/currencies
```

Returns an array of unique currency codes.



## Response Format

### Success Response
```json
{
  "success": true,
  "data": [...],
  "count": 4,
  "sortBy": "currency",
  "order": "asc"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error description",
  "message": "Detailed error message"
}
```

## Sorting Logic

### Currency Sorting (String)
- Uses `localeCompare()` for proper string comparison
- Case-insensitive sorting
- Example: AUD → EUR → GBP → MYR

### Amount Sorting (Number)
- Numeric comparison using actual amount values
- Handles different currency formats correctly
- Example: 899.00 → 1,100.00 → 5,388.00 → 56,000.00

## Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Route not found
- **500 Internal Server Error**: Server-side errors

## Development

### File Structure
```
backend/
├── server.js          # Main server file
├── routes/
│   └── currency.js    # Currency API routes
├── utils/
│   └── currencyUtils.js # Currency data and utilities
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

### Scripts
- `npm start`: Start production server
- `npm run dev`: Start development server with nodemon

## Testing the API

You can test the API using curl, Postman, or any HTTP client:

```bash
# Get all currency data
curl http://localhost:5001/api/v1/currency

# Get sorted data
curl "http://localhost:5001/api/v1/currency?sortBy=amount&order=desc"
```

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **helmet**: Security middleware
- **nodemon**: Development auto-reload (dev dependency)
