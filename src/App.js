import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import './components/Stylesheets/App.css'

class App extends React.Component {
/////////// STATE ///////////
  constructor() {
    super();
    this.state = {
      todoData: [],
      searchTerm: ''
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
        this.setState({
          todoData: [
            ...this.state.todoData,
            newTask
          ]
        })
      }
      else {
        return
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
    this.setState({
      searchTerm: term
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
      <div className='App'>
        <h2>My to-do list</h2>
        <TodoForm clearCompleted={this.clearCompleted} addToList={this.addToList} />
        <Search searchTerm={this.state.searchTerm} search={this.search}/>
        <TodoList searchTerm={this.state.searchTerm} checkboxAdd={this.checkboxAdd} markComplete={this.markComplete} todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
