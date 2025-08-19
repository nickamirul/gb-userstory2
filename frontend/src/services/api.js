const API_BASE_URL = 'http://localhost:5001/api/v1/currency'

// Fetch currency data from the backend API with optional sorting parameters
export const fetchCurrencyData = async (sortBy = null, order = null) => {
  try {
    let url = API_BASE_URL
    
    // Add query parameters if sorting is requested
    if (sortBy && order) {
      const params = new URLSearchParams({
        sortBy,
        order
      })
      url = `${API_BASE_URL}?${params.toString()}`
    }
    
    console.log('Fetching from URL:', url)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    console.log('Response status:', response.status)
    console.log('Response headers:', response.headers)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch data')
    }
    
    return result.data
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Failed to fetch currency data from server')
  }
}

// Fetch sorted currency data using the dedicated sort endpoint with validation
export const fetchSortedCurrencyData = async (sortBy, order) => {
  try {
    if (!sortBy || !order) {
      throw new Error('Both sortBy and order parameters are required')
    }
    
    const params = new URLSearchParams({
      sortBy,
      order
    })
    
    const response = await fetch(`${API_BASE_URL}/sort?${params.toString()}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to sort data')
    }
    
    return result.data
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Failed to sort currency data')
  }
}

// Fetch unique currency codes from the backend API
export const fetchCurrencies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/currencies`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch currencies')
    }
    
    return result.data
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Failed to fetch currencies')
  }
}
