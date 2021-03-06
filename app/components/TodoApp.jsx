var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoAPI = require('TodoAPI');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      showCompleted: false,

      searchText: "",

      todos: TodoAPI.getTodos()
    };
  },

  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddToDo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleToggle: function(id){
    var updatedTodos = this.state.todos.map( function(todo){
      if (todo.id === id){
        todo.completed = !todo.completed;
      };
      return todo;
    });

    this.setState({todos: updatedTodos});
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch = {this.handleSearch}/>
        <TodoList todos = {todos} onToggle = {this.handleToggle}/>
        <AddTodo onNewTodo = {this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
