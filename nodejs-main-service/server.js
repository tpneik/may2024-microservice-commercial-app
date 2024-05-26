const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware'); 

const app = express();

// Route to Service 1 (localhost:3001)
app.use('/svc1', createProxyMiddleware({ target: 'http://localhost:3001/', changeOrigin: true }));

// Route to Service 2 (localhost:3002)
app.use('/svc2', createProxyMiddleware({ target: 'http://localhost:3002/', changeOrigin: true }));

app.get('/', (req, res)=>{
    console.log('\x1b[36m%s\x1b[0m','Main server START!')
    res.send('[3000] Main server START!')
})
app.listen(3000, () => {
  console.log('\x1b[32m%s\x1b[0m','API Gateway listening on port 3000');
});