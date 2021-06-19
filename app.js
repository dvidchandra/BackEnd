const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Import Routes
const todoRoute = require('./routes/todo')

//Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/todo', todoRoute)

//Routes
app.get("/", function(req, res) {
    res.send("Home")
});

//Connect to DB
mongoose.connect("mongodb+srv://admin:admin123@cluster0.w04mp.mongodb.net/todoListDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() {
        console.log("Connect to DB...")
    })
    .catch(function(err) {
        console.log(err)
    })

//Listen to server
app.listen(3000)