import React from 'react';

let TodoItem = props => {
    return <li className={`list-group-item ${props.todo.completed && "todo-completed"}`}>
        <div className="row justify-content-around align-items-center">
            <input type="checkbox" 
                className="item-element check col-1"
                checked={props.todo.completed} 
                onChange={event => {
                    props.setTodoCompletedAC(props.marketName, props.todo.id)
                    props.saveToLSAC();
                    }}/>

            <div className="item-element text col" >{props.todo.title}</div>
            <div className="item-element value col-3">{props.todo.value}</div>
            <div className="item-element del col-1 remove-item"
                onClick={() => {
                    props.removeTodoAC(props.marketName, props.todo.id);
                    props.setTodoIdAC(props.marketName);
                    props.saveToLSAC();
                }}> <i className="fas fa-trash"></i> </div>
        </div>

    </li>
}

export default TodoItem;