import React from 'react';

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
    this.props.addToList(this.state.form)
}

render() {
    return (
        <div>
                <input
                type='text'
                onChange={this.onChange}
                value={this.state.form}
                ></input>
                <button onClick={this.onSubmit}>Add</button>
        </div>
    )
}
}

export default TodoForm