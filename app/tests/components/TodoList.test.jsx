var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList Component', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render 1 Todo component for each Todo Component', () => {

    var todos =[ {
      id: 1,
      text: 'Check emails'
    }, {
      id: 2,
      text: 'Make website'
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // scryRenderedComponentsWithType returns an array of all instances of components
    // in the first argument with type equal to the second argument  
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);

  });
});
