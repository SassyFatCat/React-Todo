import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Search from './components/Search'

class App extends React.Component {
/////////// STATE ///////////
  constructor() {
    super();
    this.state = {
      todoData: []
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

  clearCompleted = () => {
    this.setState({
      todoData: this.state.todoData.filter(item => !item.completed)
    })
  }

  search = term => {
    const regex = new RegExp(`${term}`, 'ig');
    this.setState({
      todoData: this.state.todoData.filter(item => regex.test(item.task))
    })
  }

  markComplete = (id, checked) => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id === id) {
          console.log('worked');
          return {
            ...item,
            completed: checked
          }
        }

        else {
          console.log('else statement')
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm clearCompleted={this.clearCompleted} addToList={this.addToList} />
        <Search search={this.search}/>
        <TodoList markComplete={this.markComplete} todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
