const express = require('express')
const app = express()
var todoRoutes = require('./routes/todos')
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/" , (req, res) => {
    res.send("Hello from ROOT route")
})

// imported routes (prefix)
app.use('/api/todos',todoRoutes)

app.listen("3000" || process.env.PORT, () => { 
    console.log("App is running ")
})
