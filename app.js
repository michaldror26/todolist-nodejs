const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config')
const setupController = require('./controllers/setupController')
const apiController = require('./controllers/apiController')

const port = process.env.port || 3000

app.use('/assest', express.static(__dirname + './public'))
app.set('view engine', 'ejs')

mongoose.connect(config.getDbConnectionString(), (err, res)=> {
    if(err)
    console.log(err);
})
setupController(app)
apiController(app)

app.listen(port)