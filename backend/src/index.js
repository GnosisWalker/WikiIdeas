const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.send('Hello world');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})