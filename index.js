const express = require('express')
const app = express()
const port = 3000



app.get('/home', (req, res) => {
  var a = 1
  var b = 2
  var c = a + b
  return res.send('Hello World! My name is quân')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})