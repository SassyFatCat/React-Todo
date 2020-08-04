import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

render() {
    return (
        <div>
        
            {Object.keys(localStorage).map(id => {
                return <Todo checkboxAdd={this.props.checkboxAdd} markComplete={this.props.markComplete} id={id} item={localStorage[id]} />
            })}

        {/*MAPPING OVER STATE*/}
        {/* {this.props.todoData.map(x => {
            return <Todo markComplete={this.props.markComplete} item={x.task} completed={x.completed} id={x.id} />
        })} */}
        </div>
    )
}
}

export default TodoList
