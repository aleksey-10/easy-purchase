import React from 'react';
import AddItem from './AddItem/AddItem';
import TodoList from './TodoList/TodoList';

let Todo = props => {
    return <div className="market-content container">
        <AddItem addItem={props.addItemAC} market={props.market} />
        <TodoList market={props.market} />
    </div>
}

export default Todo; 