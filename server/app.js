require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/userRoute')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

app.set('view', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', userRoute)




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