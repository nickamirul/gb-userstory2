const http = require('http');

// Test the backend server endpoints functionality
function testBackend() {
  console.log('🧪 Testing Backend Server...\n');
  
  const testEndpoints = [
    { path: '/test', description: 'Test Endpoint' },
    { path: '/api/v1/currency', description: 'Currency API' }
  ];
  
  testEndpoints.forEach(({ path, description }) => {
    const options = {
      hostname: 'localhost',
      port: 5001,
      path: path,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      }
    };
    
    const req = http.request(options, (res) => {
      console.log(`${description} (${path}):`);
      console.log(`  Status: ${res.statusCode}`);
      console.log(`  Headers:`, res.headers);
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          console.log(`  Response:`, JSON.stringify(jsonData, null, 2));
        } catch (e) {
          console.log(`  Response:`, data);
        }
        console.log('');
      });
    });
    
    req.on('error', (e) => {
      console.error(`${description} (${path}) Error:`, e.message);
      console.log('');
    });
    
    req.end();
  });
}

// Run test if this file is executed directly
if (require.main === module) {
  testBackend();
}

module.exports = { testBackend };
