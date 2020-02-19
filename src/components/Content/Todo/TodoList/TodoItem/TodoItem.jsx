import React from 'react';

let TodoItem = props => {
    return <li className="list-group-item">
        <div className="row justify-content-around align-items-center">
            <input type="checkbox" className="item-element check col-1" />
            
            <div className="item-element text col" >{props.todo.title}</div>
            <div className="item-element value col-3">{props.todo.value}</div>
            <div className="item-element del col-1"> &times; </div>
        </div>

    </li>
}

export default TodoItem;