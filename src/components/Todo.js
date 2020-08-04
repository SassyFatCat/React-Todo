import React from 'react';
import './Stylesheets/Todo.css'

class Todo extends React.Component {
/////////// HANDLER FUNCTIONS ///////////
onCheckboxChange = (event) => {
    this.props.markComplete(this.props.id, event.target.checked);
    const itemElement = document.getElementById(this.props.id);
    itemElement.classList.toggle('completed');
    this.props.checkboxAdd(this.props.item, this.props.id)
}

render() {
    return (
        <div>
            <span id={this.props.id}>{this.props.item}</span>
            <input
                type="checkbox"
                onChange={this.onCheckboxChange}
            ></input>
        </div>
    )
}
}

export default Todo