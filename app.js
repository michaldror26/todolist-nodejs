const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use('/assest', express.static(__dirname + './public'))
app.set('view engine', 'ejs')
app.listen(port)