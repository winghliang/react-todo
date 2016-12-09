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
          text: 'walk the dog'
        },
        { id: uuid(),
          text: 'clean the yard'
        },
        { id: uuid(),
          text: 'eat lunch'
        },
        { id: uuid(),
          text: 'paint house'
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
          text: text
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

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch = {this.handleSearch}/>
        <TodoList todos = {todos} />
        <AddTodo onNewTodo = {this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
