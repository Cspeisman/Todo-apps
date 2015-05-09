import React from 'react';
var {Component} = React;

class Todo extends Component {
  render() {
    return <div> Test {this.props.test} </div>
  }
}

export default Todo;
