import React from 'react';
export class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  submit(event){
    event.preventDefault();

    fetch('http://lvh.me:8000/tasks/',
          {method: 'post', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({description: this.state.value})
    })

    .then(function(response) {
      return response.json()
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
    this.setState({value: ''})
  }

  setValue(event) {
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
