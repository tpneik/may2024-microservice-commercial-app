const express = require('express')
const connectDb = require('./db')
const bodyParser = require('body-parser');

const app = express()
const port = 3001

app.use(bodyParser.json());
require('./Router/core.router')(app)
connectDb()
app.get('/', (req, res) => {
    console.log('\x1b[36m%s\x1b[0m','[3001] Server1 works!')
    res.send("[3001] Server1 works!");
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))