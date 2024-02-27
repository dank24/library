const express = require('express')
const userRoute = require('./routes/userRoute')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

app.set('view', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', userRoute)




//dataBase Server
const mongoUrl = 
    'mongodb+srv://dansdana1999:07061071398a@cluster0.v1epfui.mongodb.net/local-library?retryWrites=true&w=majority&appName=Cluster0'
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