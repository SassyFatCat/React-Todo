import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component {
/////////// STATE ///////////
  constructor() {
    super();
    this.state = {
      todoData: [
        {
        task: 'shopping',
        id: Date.now(),
        completed: false
      }
    ]
    }
  }

/////////// HANDLER FUNCTIONS ///////////
  addToList = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoData: [
        ...this.state.todoData,
        newTask
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
