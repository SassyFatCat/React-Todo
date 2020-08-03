import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

render() {
    return (
        <div>
        {this.props.todoData.map(x => {
            return <Todo markComplete={this.props.markComplete} item={x.task} completed={x.completed} id={x.id} />
        })}
        </div>
    )
}
}

export default TodoList
