const express = require('express')
const app = express()
const port = 4000

app.get('/trang-chu', (req, res) => {
  res.send('<h1 style="color:red">Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})