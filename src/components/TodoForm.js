import React from 'react';
import './Stylesheets/App.css'

class TodoForm extends React.Component {
/////////// STATE ///////////
constructor() {
    super();
    this.state = {
        form: ''
    }
}

/////////// HANDLER FUNCTIONS ///////////
onChange = event => {
    this.setState({
        form: event.target.value
    })
}

onSubmit = event => {
    event.preventDefault();
    this.props.addToList(this.state.form);
    this.setState({
        form: ''
    })
}

render() {
    return (
        <div className="formContainer">
            <div className='formButton'>
                <input
                type='text'
                onChange={this.onChange}
                value={this.state.form}
                ></input>
                <button onClick={this.onSubmit}>Add</button>
            </div>
            <div className="buttonContainer">
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        </div>
    )
}
}

export default TodoForm