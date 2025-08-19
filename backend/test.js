const { getCurrencyData, sortCurrencyData } = require('./utils/currencyUtils')

// Test function to verify backend logic functionality
function testBackendLogic() {
  console.log('🧪 Testing Backend Logic...\n')
  
  // Test 1: Get all currency data to verify data retrieval
  console.log('1. Testing getCurrencyData():')
  const allData = getCurrencyData()
  console.log(`   - Retrieved ${allData.length} currency records`)
  console.log('   - Data:', allData.map(item => `${item.currency}: ${item.displayAmount}`).join(', '))
  console.log()
  
  // Test 2: Sort by currency ascending to verify string sorting
  console.log('2. Testing sortCurrencyData() - Currency ASC:')
  const currencyAsc = sortCurrencyData(allData, 'currency', 'asc')
  console.log('   - Expected order: AUD → EUR → GBP → MYR')
  console.log('   - Actual order:', currencyAsc.map(item => item.currency).join(' → '))
  console.log()
  
  // Test 3: Sort by currency descending to verify reverse string sorting
  console.log('3. Testing sortCurrencyData() - Currency DESC:')
  const currencyDesc = sortCurrencyData(allData, 'currency', 'desc')
  console.log('   - Expected order: MYR → GBP → EUR → AUD')
  console.log('   - Actual order:', currencyDesc.map(item => item.currency).join(' → '))
  console.log()
  
  // Test 4: Sort by amount ascending to verify numeric sorting
  console.log('4. Testing sortCurrencyData() - Amount ASC:')
  const amountAsc = sortCurrencyData(allData, 'amount', 'asc')
  console.log('   - Expected order: 899.00 → 1,100.00 → 5,388.00 → 56,000.00')
  console.log('   - Actual order:', amountAsc.map(item => item.displayAmount).join(' → '))
  console.log()
  
  // Test 5: Sort by amount descending to verify reverse numeric sorting
  console.log('5. Testing sortCurrencyData() - Amount DESC:')
  const amountDesc = sortCurrencyData(allData, 'amount', 'desc')
  console.log('   - Expected order: 56,000.00 → 5,388.00 → 1,100.00 → 899.00')
  console.log('   - Actual order:', amountDesc.map(item => item.displayAmount).join(' → '))
  console.log()
  
  // Test 6: Verify sorting logic passes expected validation
  console.log('6. Verifying sorting logic:')
  const isCurrencySortCorrect = currencyAsc[0].currency === 'AUD' && currencyAsc[3].currency === 'MYR'
  const isAmountSortCorrect = amountAsc[0].amount === 899.00 && amountAsc[3].amount === 56000.00
  
  console.log(`   - Currency sorting: ${isCurrencySortCorrect ? '✅ PASS' : '❌ FAIL'}`)
  console.log(`   - Amount sorting: ${isAmountSortCorrect ? '✅ PASS' : '❌ FAIL'}`)
  
  if (isCurrencySortCorrect && isAmountSortCorrect) {
    console.log('\n🎉 All tests passed! Backend logic is working correctly.')
  } else {
    console.log('\n❌ Some tests failed. Please check the implementation.')
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  testBackendLogic()
}

module.exports = { testBackendLogic }
