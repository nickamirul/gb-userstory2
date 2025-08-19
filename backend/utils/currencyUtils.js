// Currency data according to User Story 2 requirements with different locality display formats
const currencyData = [
  {
    id: 1,
    currency: 'AUD',
    amount: 1100.00,
    displayAmount: '1,100.00',
    locality: 'Australia'
  },
  {
    id: 2,
    currency: 'MYR',
    amount: 899.00,
    displayAmount: '899.00',
    locality: 'Malaysia'
  },
  {
    id: 3,
    currency: 'GBP',
    amount: 56000.00,
    displayAmount: '56,000.00',
    locality: 'United Kingdom'
  },
  {
    id: 4,
    currency: 'EUR',
    amount: 5388.00,
    displayAmount: '5.388,00',
    locality: 'European Union'
  }
];

// Get all currency data and return copy to prevent mutation
const getCurrencyData = () => {
  return [...currencyData];
};

// Sort currency data by specified column and order with proper comparison logic
const sortCurrencyData = (data, sortBy, order) => {
  if (!Array.isArray(data) || data.length === 0) {
    return data;
  }

  const sortedData = [...data];

  sortedData.sort((a, b) => {
    let comparison = 0;

    if (sortBy === 'currency') {
      // Sort by currency (string) - case insensitive using localeCompare
      comparison = a.currency.localeCompare(b.currency);
    } else if (sortBy === 'amount') {
      // Sort by amount (number) using numeric comparison
      comparison = a.amount - b.amount;
    }

    // Apply order (asc/desc) by reversing comparison if desc
    return order === 'desc' ? -comparison : comparison;
  });

  return sortedData;
};

// Format amount based on currency locale using Intl.NumberFormat
const formatAmountByCurrency = (amount, currency) => {
  const formatters = {
    AUD: new Intl.NumberFormat('en-AU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }),
    MYR: new Intl.NumberFormat('en-MY', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }),
    GBP: new Intl.NumberFormat('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }),
    EUR: new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  };

  const formatter = formatters[currency];
  return formatter ? formatter.format(amount) : amount.toString();
};

// Parse formatted amount string back to number handling different locale formats
const parseAmountFromFormat = (formattedAmount, currency) => {
  if (currency === 'EUR') {
    // EUR uses comma as decimal separator and dot as thousands separator
    return parseFloat(formattedAmount.replace(/\./g, '').replace(',', '.'));
  } else {
    // Other currencies use standard format with comma as thousands separator
    return parseFloat(formattedAmount.replace(/,/g, ''));
  }
};

// Validate currency code against supported currencies list
const isValidCurrency = (currency) => {
  const validCurrencies = ['AUD', 'MYR', 'GBP', 'EUR'];
  return validCurrencies.includes(currency.toUpperCase());
};

// Get currency information by code with case-insensitive search
const getCurrencyInfo = (currencyCode) => {
  const currency = currencyData.find(item => 
    item.currency.toUpperCase() === currencyCode.toUpperCase()
  );
  return currency || null;
};

module.exports = {
  getCurrencyData,
  sortCurrencyData,
  formatAmountByCurrency,
  parseAmountFromFormat,
  isValidCurrency,
  getCurrencyInfo
};
