import React from 'react';
export class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  submit(event){
    event.preventDefault();
    fetch('http://lvh.me:8000/tasks/')
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        console.log('parsed json', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })
  }

  setValue(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input value={this.state.value} onChange={this.setValue.bind(this)} />
      </form>
    );
  }
}

export default TaskInput;
