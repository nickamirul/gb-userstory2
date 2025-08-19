const express = require('express');
const router = express.Router();
const { getCurrencyData, sortCurrencyData } = require('../utils/currencyUtils');

// GET /api/v1/currency - Get all currency data with optional sorting
router.get('/', (req, res) => {
  try {
    const { sortBy, order } = req.query;
    let currencyData = getCurrencyData();
    
    // Apply sorting if parameters are provided
    if (sortBy && order) {
      currencyData = sortCurrencyData(currencyData, sortBy, order);
    }
    
    res.json({
      success: true,
      data: currencyData,
      count: currencyData.length,
      sortBy: sortBy || null,
      order: order || null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch currency data',
      message: error.message
    });
  }
});

// GET /api/v1/currency/sort - Get sorted currency data with validation
router.get('/sort', (req, res) => {
  try {
    const { sortBy, order } = req.query;
    
    // Validate required parameters for sorting endpoint
    if (!sortBy || !order) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters',
        message: 'Both sortBy and order parameters are required'
      });
    }
    
    // Validate sortBy parameter accepts only currency or amount
    if (!['currency', 'amount'].includes(sortBy)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid sortBy parameter',
        message: 'sortBy must be either "currency" or "amount"'
      });
    }
    
    // Validate order parameter accepts only asc or desc
    if (!['asc', 'desc'].includes(order.toLowerCase())) {
      return res.status(400).json({
        success: false,
        error: 'Invalid order parameter',
        message: 'order must be either "asc" or "desc"'
      });
    }
    
    const currencyData = getCurrencyData();
    const sortedData = sortCurrencyData(currencyData, sortBy, order.toLowerCase());
    
    res.json({
      success: true,
      data: sortedData,
      count: sortedData.length,
      sortBy,
      order: order.toLowerCase()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to sort currency data',
      message: error.message
    });
  }
});

// GET /api/v1/currency/currencies - Get unique currencies list
router.get('/currencies', (req, res) => {
  try {
    const currencyData = getCurrencyData();
    const currencies = [...new Set(currencyData.map(item => item.currency))];
    
    res.json({
      success: true,
      data: currencies,
      count: currencies.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch currencies',
      message: error.message
    });
  }
});

module.exports = router;
