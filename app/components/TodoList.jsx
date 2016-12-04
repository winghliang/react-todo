var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map( (todoItem) => {
        return (
          // spread operator (...) passes every attribute from an object as different prop to a React component
          <Todo key={todoItem.id} {...todoItem}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
