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
    });

    /// adding to local storage ///
    localStorage.setItem(`${newTask.id.toString(10)}`, `${task}`)
    console.log(localStorage)
  }

  /// upon checkbox change, adding to state if not already present ///
  checkboxAdd = (task, id) => {
      const newTask = {
        task: task,
        id: id,
        completed: true
      };

      if (this.state.todoData.filter(item => item.id == id).length < 1) {
        console.log('working');
        this.setState({
          todoData: [
            ...this.state.todoData,
            newTask
          ]
        })
      }
      else {
        console.log('not working')
      }
  }      

  clearCompleted = () => {
    /// clearing from local storage ///
    this.state.todoData.forEach(item => item.completed ? localStorage.removeItem(`${item.id}`) : null)
    console.log(localStorage)
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
        if (item.id == id) {
          return {
            ...item,
            completed: checked
          }
        }
        
        else {
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
        <TodoList checkboxAdd={this.checkboxAdd} markComplete={this.markComplete} todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
