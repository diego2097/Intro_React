import React from 'react';
import {Todo} from './Todo'

 export class TodoList extends React.Component {
    

    render() {
        const list = this.props.todoList;
        const listItems = list.map((element, i) => (
            <li key={i}>
            {
            <Todo text={element.text} 
            priority={element.priority} 
            dueDate={element.dueDate} 
            /> 
            }
            </li>
        ));
        return (  
            <ul>{listItems}</ul>
        );
    }
}
