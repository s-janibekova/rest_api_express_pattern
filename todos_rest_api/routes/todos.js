var express = require('express')
var router = express.Router()
var helpers = require('../helpers/todos')

//default index.js
var db = require('../models')
 

// is actualy api/todos
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route('/:todoId')
     .get(helpers.getTodo)
     .put(helpers.updateTodo)
     .delete(helpers.deleteTodo)


module.exports = router