var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp Component', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddToDo', () => {
    var todoText = 'eat lunch';
    var todoApp = TestUtils.renderIntoDocument(< TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].text).toBe('eat lunch');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoText = 'work on React app';
    var todoApp = TestUtils.renderIntoDocument(< TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });

});
