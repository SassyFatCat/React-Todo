import React from 'react';

class Todo extends React.Component {
/////////// HANDLER FUNCTIONS ///////////
onCheckboxChange = (event) => {
    this.props.markComplete(this.props.id, event.target.checked)
}

render() {
    return (
        <div>
            {this.props.completed === false && <span>{this.props.item}</span>}
            {this.props.completed === true && <span style={{textDecorationLine: 'line-through'}}>{this.props.item}</span>}
            <input
                type="checkbox"
                onChange={this.onCheckboxChange}
            ></input>
        </div>
    )
}
}

export default Todo