import React from 'react'
import CurrencyDataGrid from './components/CurrencyDataGrid'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <CurrencyDataGrid />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
