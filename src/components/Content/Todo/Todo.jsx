import React from 'react';
import Form from './Form/Form';
import TodoListContainer from './TodoList/TodoListContainer';

let Todo = props => {
    return <div className="market-content container">
        <Form {...props} />

        <TodoListContainer market={props.market} marketName={props.marketName} />
    </div>
}

export default Todo; 