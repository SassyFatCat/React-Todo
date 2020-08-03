import React from 'react';

class Todo extends React.Component {
/////////// HANDLER FUNCTIONS ///////////
onCheckboxChange = (event) => {
    this.props.markComplete(this.props.id, event.target.checked)
}

render() {
    return (
        <div>
            <span>{this.props.item}</span>
            <input
                type="checkbox"
                onChange={this.onCheckboxChange}
            ></input>
        </div>
    )
}
}

export default Todo