import React from 'react';

let TodoItem = props => {
    return <li className={`list-group-item bg-light ${props.todo.completed && "todo-completed"}`}>
            <div className="row justify-content-around align-items-center">
                <input type="checkbox"
                    className="item-element check col-1"
                    checked={props.todo.completed}
                    onChange={() => {
                        props.setCompleted(props.marketName, props.todo)
                    }} />

                <div className="item-element text col" >{props.todo.title}</div>
                <div className="item-element value col-3">{props.todo.value}</div>
                <div className="item-element col-2 col-md-1 row justify-content-center">
                    <i className="fas fa-times remove-item" onClick={() => {
                        props.removeTodo(props.marketName, props.todo.id);
                    }}></i> </div>
            </div>
        </li>
}

export default TodoItem;