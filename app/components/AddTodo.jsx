var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function (event) {
    event.preventDefault();
    var newTodoItem = this.refs.newTodoItem.value;
    if (newTodoItem.length > 0) {
      this.refs.newTodoItem.value = "";
      this.props.onNewTodo(newTodoItem);
    } else {
      // puts the cursor back in the input field if user typed nothing
      this.refs.newTodoItem.focus();
    }
  },

  render: function () {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" ref="newTodoItem" placeholder="What do you need to do?"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodo;
