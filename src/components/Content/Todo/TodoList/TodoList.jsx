import React from 'react';
import TodoItemContainer from './TodoItem/TodoItemContainer';

let TodoList = props => {
    return <ul className="list-group mt-3">
        {
            props.market.map(todo => <TodoItemContainer todo={todo} key={todo.id} marketName={props.marketName} />)
        }
    </ul>
}

export default TodoList;