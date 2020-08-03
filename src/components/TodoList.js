import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

render() {
    return (
        <div>
        {this.props.todoData.map(x => {
            return <Todo item={x.task} />
        })}
        </div>
    )
}
}

export default TodoList
