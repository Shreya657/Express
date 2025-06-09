const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/x', (req, res) => {
  res.send('<h1>hey im shreya</h1>');
})
app.get('/c', (req, res) => {
  res.send('<h3>chai aur code</h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
