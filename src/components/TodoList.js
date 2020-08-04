import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

render() {
    return (
        <div>
        
            {this.props.searchTerm === '' && Object.keys(localStorage).map(id => {
                return <Todo checkboxAdd={this.props.checkboxAdd} markComplete={this.props.markComplete} id={id} item={localStorage[id]} />
            })}
            
            {this.props.searchTerm !== '' && Object.keys(localStorage).map(id => {
                if (localStorage[id].includes(this.props.searchTerm)) {
                    return <Todo checkboxAdd={this.props.checkboxAdd} markComplete={this.props.markComplete} id={id} item={localStorage[id]} />
                }
            })}

        {/*MAPPING OVER STATE - OLD WAY*/}
        {/* {this.props.todoData.map(x => {
            return <Todo markComplete={this.props.markComplete} item={x.task} completed={x.completed} id={x.id} />
        })} */}
        </div>
    )
}
}

export default TodoList
