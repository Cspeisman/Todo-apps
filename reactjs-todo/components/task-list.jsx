import React from 'react';

class TaskList extends React.Component {
  render() {
    let displayItem = (item) => { return <li> {item.description} </li> }
    return <ul> {this.props.items.map(displayItem)} </ul>
  }

}

export default TaskList;
