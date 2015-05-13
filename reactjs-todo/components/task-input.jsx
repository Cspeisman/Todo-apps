import React from 'react';

export class TaskInput extends React.Component {
  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <form value={this.props.value} onSubmit={this.props.addTask} >
        <input value={this.props.value} onChange={this.props.setValue} />
      </form>
    );
  }
}

export default TaskInput;
