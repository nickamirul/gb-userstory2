import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Currency Data Grid
          </h1>
          <p className="text-gray-600 text-lg">
            User Story 2 - Display currency and amount data with sorting capabilities
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              AUD 1,100.00
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
              MYR 899.00
            </span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
              GBP 56,000.00
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
              EUR 5.388,00
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
