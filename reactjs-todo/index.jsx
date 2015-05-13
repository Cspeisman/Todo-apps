import React from 'react';
import TaskInput from './components/task-input'
import TaskList from './components/task-list'

class TodoWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], value: '' };
  }

  componentDidMount() {
    fetch('http://lvh.me:8000/tasks/')
    .then(response => response.json())
    .then(json => this.setState({items: json }))
  }

  addTask(event) { 
    event.preventDefault();
    fetch('http://lvh.me:8000/tasks/',
          {method: 'post', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({description: event.target.value})
    }).then((response) => response.json())
    .then(json => this.setState({items: json, value: ''}))
  }

  setValue(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
        <div>
          <TaskInput {...this.state} addTask={this.addTask.bind(this)} setValue={this.setValue.bind(this)}/>
          <TaskList items={this.state.items} />
        </div>
    )
  }
  
}

React.render(
    <TodoWrapper />,
    document.body
)

