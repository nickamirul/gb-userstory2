import React, { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown, ArrowUpDown } from 'lucide-react'
import { fetchCurrencyData } from '../services/api'

const CurrencyDataGrid = () => {
  const [currencyData, setCurrencyData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sortConfig, setSortConfig] = useState({
    sortBy: null,
    order: null
  })

  useEffect(() => {
    loadCurrencyData()
  }, [])

  const loadCurrencyData = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchCurrencyData()
      setCurrencyData(data)
    } catch (err) {
      const errorMessage = err.message.includes('Failed to fetch') 
        ? 'Cannot connect to backend server. Please ensure the backend is running on port 5001.'
        : err.message
      setError(errorMessage)
      console.error('Error loading currency data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSort = async (column) => {
    try {
      setLoading(true)
      setError(null)
      
      // Toggle sort order if clicking same column, otherwise default to asc
      let newOrder = 'asc'
      if (sortConfig.sortBy === column && sortConfig.order === 'asc') {
        newOrder = 'desc'
      }
      
      const data = await fetchCurrencyData(column, newOrder)
      setCurrencyData(data)
      setSortConfig({ sortBy: column, order: newOrder })
    } catch (err) {
      setError('Failed to sort data. Please try again.')
      console.error('Error sorting data:', err)
    } finally {
      setLoading(false)
    }
  }

  const getSortIcon = (column) => {
    if (sortConfig.sortBy !== column) {
      return <ArrowUpDown className="sort-icon" />
    }
    
    return sortConfig.order === 'asc' 
      ? <ChevronUp className="sort-icon text-primary-600" />
      : <ChevronDown className="sort-icon text-primary-600" />
  }

  const getSortLabel = (column) => {
    if (sortConfig.sortBy !== column) {
      return 'Click to sort'
    }
    
    return sortConfig.order === 'asc' ? 'Sorted ascending' : 'Sorted descending'
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <p className="mt-2 text-gray-600">Loading currency data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <div className="text-red-600 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-gray-900 font-medium mb-2">Error Loading Data</p>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={loadCurrencyData}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Currency Records
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Click on column headers to sort data. Currency sorts alphabetically, Amount sorts numerically.
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="table-header"
                onClick={() => handleSort('currency')}
                title={getSortLabel('currency')}
                tabIndex="0"
                aria-label={`Sort by currency ${getSortLabel('currency')}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSort('currency')
                  }
                }}
              >
                <div className="flex items-center">
                  Currency
                  {getSortIcon('currency')}
                </div>
              </th>
              <th
                className="table-header"
                onClick={() => handleSort('amount')}
                title={getSortLabel('amount')}
                tabIndex="0"
                aria-label={`Sort by amount ${getSortLabel('amount')}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSort('amount')
                  }
                }}
              >
                <div className="flex items-center">
                  Amount
                  {getSortIcon('amount')}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Display Format
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Locality
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currencyData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="table-cell">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.currency}
                  </span>
                </td>
                <td className="table-cell font-mono text-sm">
                  {item.displayAmount}
                </td>
                <td className="table-cell text-gray-600">
                  {item.displayAmount}
                </td>
                <td className="table-cell text-gray-600">
                  {item.locality}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            Showing {currencyData.length} currency records
          </span>
          {sortConfig.sortBy && (
            <span>
              Sorted by {sortConfig.sortBy} ({sortConfig.order === 'asc' ? 'ascending' : 'descending'})
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurrencyDataGrid
