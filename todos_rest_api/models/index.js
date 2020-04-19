var mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/todo-api', { useNewUrlParser: true, useUnifiedTopology: true })


// allows to use chain sytnax like then
mongoose.Promise = Promise

module.exports.Todo = require('./todo')