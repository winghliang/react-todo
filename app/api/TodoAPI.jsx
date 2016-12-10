var $ = require('jquery');

module.exports = {
  setTodos: function(todos){
    if ($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));

      // return the same todos array that was passed in -- only
      // to show that valid data was passed in
      // if invalid data, the function would simply return undefined
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      // do nothing; stick to default todos array = []
    }

    if ($.isArray(todos)){
      return todos;
    } else {
      return [];
    }
  }
};
