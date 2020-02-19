import React from 'react';
import TodoItem from './TodoItem/TodoItem';

let TodoList = props => {
    return <ul className="list-group">
        {
            props.market.map(todo => <TodoItem todo={todo} key={todo.id} />)
        }
    </ul>
}

export default TodoList;