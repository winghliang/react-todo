var React = require('react');
var uuid = require('node-uuid');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        { id: uuid(),
          text: 'walk the dog',
          completed: false
        },
        { id: uuid(),
          text: 'clean the yard',
          completed: false
        },
        { id: uuid(),
          text: 'eat lunch',
          completed: true
        },
        { id: uuid(),
          text: 'paint house',
          completed: true
        }
      ]
    }
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
