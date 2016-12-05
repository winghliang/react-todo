var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo Component', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onNewTodo with a string if a valid new todo item is added', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo = {spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodoItem.value = "Feed the dog";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith("Feed the dog");
  });

  it('should not call onNewTodo if an invalid new todo item is entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo = {spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodoItem.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();    
  });

});
