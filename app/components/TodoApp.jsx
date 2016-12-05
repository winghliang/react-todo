var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        { id: 1,
          text: 'walk the dog'
        },
        { id: 2,
          text: 'clean the yard'
        },
        { id: 3,
          text: 'eat lunch'
        },
        { id: 4,
          text: 'paint house'
        }
      ]
    }
  },

  handleAddToDo: function (text) {
    alert('New todo: ' + text);
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
