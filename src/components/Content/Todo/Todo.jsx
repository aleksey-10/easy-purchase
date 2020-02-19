import React from 'react';
import AddItem from './AddItem/AddItem';
import TodoList from './TodoList/TodoList';

let Todo = props => {
    return <div className="market-content container">
        <AddItem
            addItem={props.addItemAC} marketName={props.marketName}
            input={props.input} onChangeAC={props.onChangeAC}
            saveToLSAC={props.saveToLSAC} clearTodoListAC={props.clearTodoListAC}
            onSubmitTodoAC={props.onSubmitTodoAC} />
        {
            !props.market.length ? <h1 className="display-4">No todos</h1>
                : <TodoList market={props.market} marketName={props.marketName} />
        }
    </div>
}

export default Todo; 