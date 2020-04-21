

$(document).ready(() => {
    $.getJSON("/api/todos")
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo()
        }
  })
})
   
$('.list').on('click', 'li', function(){
  updateTodo($(this))
})

const addTodo = todo => {
    var newTodo = $('<li class="task">' + todo.name + ' ' + todo.completed + '<span>X <span/></li>')
    newTodo.data('id', todo._id)
    newTodo.data('completed', todo.completed)
    if(todo.completed){
        $(newTodo).addClass("done")
    }
    $('.list').append(newTodo)
}


$('.list').on('click','span',  function (e){
    e.stopPropagation()
    removeTodo($(this).parent())
 })

const addTodos = todos => {
    todos.forEach(todo => {
        addTodo(todo)
    })
}

const createTodo = () => {
    var usrInput = $('#todoInput').val()
    console.log(usrInput)
    $.post('/api/todos', { name: usrInput })
    .then(newTodo => {
      addTodo(newTodo)
      $('#todoInput').val('')
    })
    .catch(err => {
        console.log(err)
    })
}

 function removeTodo(todo){
    var clickeId =todo.data('id')
    var deleteUrl = '/api/todos/' + clickeId
    $(this).parent().remove()
     $.ajax({
         method: 'DELETE',
         url: deleteUrl
     })
     .then(function(data) {
        todo.remove()
     })
 }

 function updateTodo(todo) {
     var updateUrl = '/api/todos/' + todo.data('id')
    var isDone = !todo.data('completed')
    var updateData = { completed: isDone}
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo) {
       todo.toggleClass("done")
       todo.data('completed', isDone)
    })

 }