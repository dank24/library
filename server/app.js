require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const bookRoute = require('./routes/bookRoute')
const authorRoute = require('./routes/authorRoute')
const bookInstRoute = require('./routes/bookInstRoute')
const genreRoute = require('./routes/genreRoute')
const indexRoute = require('./routes/index')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('public', express.static('public'))
app.use('/', indexRoute)
app.use('/', bookRoute)
app.use('/', authorRoute)
app.use('/', bookInstRoute)
app.use('/', genreRoute)




//dataBase Server
const mongoUrl = process.env.mongoUrl
function dbConnect() {
    mongoose.connect(mongoUrl).then(() =>{
        console.log('DB Connected')
    }).catch(error =>{
        console.log(error)
    })
}

//server start 
const port = 3012
app.listen(port, () =>{
    console.log(`Server Started On Port: ${port}`)
})

dbConnect()