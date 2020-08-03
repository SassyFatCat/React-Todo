import React from 'react';

class Todo extends React.Component {
constructor() {
    super();
    this.state = {
        checked: false
    }
}

onCheckboxChange = (event) => {
    const checked = event.target.checked;
    this.setState({
        checked: checked
    });
    this.props.markComplete(this.props.id, this.state.checked)
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