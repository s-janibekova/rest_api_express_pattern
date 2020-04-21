const express = require('express')
const app = express()
var todoRoutes = require('./routes/todos')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))


app.get("/" , (req, res) => {
    res.sendFile("index.html")
})

// imported routes (prefix)
app.use('/api/todos',todoRoutes)

app.listen("3000" || process.env.PORT, () => { 
    console.log("App is running ")
})
