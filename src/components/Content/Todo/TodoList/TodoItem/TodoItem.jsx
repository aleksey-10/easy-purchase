import React, { useState } from 'react';
import TodoElementInput from './TodoElement';

let TodoItem = props => {
    let [todoElements, setTodoElements] = useState({});

    const editCurrentTodo = (values, property) => {
        values[property] &&
            props.editTodo(props.marketName, props.todo.id, { [property]: values[property].trim() })

        setTodoElements({ [property]: false })
    }

    const createElementInner = (property, type) => !todoElements[property] ? props.todo[property] :
        <TodoElementInput
            type={type}
            name={property}
            val={props.todo[property]}
            onSubmit={values => editCurrentTodo(values, property)}
        />

    return <li className={`list-group-item bg-light ${props.todo.completed && "todo-completed"}`}>
        <div className="row justify-content-around align-items-center">
            <input type="checkbox"
                className="item-element check col-1"
                checked={props.todo.completed}
                onChange={() => props.setCompleted(props.marketName, props.todo)}
            />

            <div className="item-element text col" onClick={() => {
                !props.todo.completed && setTodoElements({ title: true })
            }}  >
                {createElementInner("title", "text")}
            </div>

            <div className="item-element value col-3" onClick={() => {
                !props.todo.completed && setTodoElements({ value: true })
            }}>
                {createElementInner("value", "number")}
            </div>

            <div className="item-element col-2 col-md-1 row justify-content-center">
                <i className="fas fa-times remove-item" onClick={() => {
                    props.removeTodo(props.marketName, props.todo.id);
                }}></i>
            </div>
        </div>
    </li>
}

export default TodoItem;