import React from 'react';
import AdditionalActions from './AdditionalActions/AdditionalActions';

export default ({props}) => {
    return (
        <form className="form row justify-content-around"
            onSubmit={event => {
                event.preventDefault();
                props.addTodo(props.marketName, props.input.form.title, props.input.form.value);
                props.onSubmitTodoAC();
        }}>
            <input
                type="text"
                className="form-control col"
                placeholder="Product"
                value={props.input.form.title}
                onChange={event => props.onChangeAC('title', event.target.value)}
                required
            />

            <input
                type="number"
                className="form-control col-2"
                placeholder="Value"
                min="0"
                value={props.input.form.value || ''}
                onChange={event => props.onChangeAC('value', event.target.value)}
            />

            <button
                type="button"
                className="form-control col-2 col-md-1 btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span className="sr-only">Toggle Dropdown</span>
            </button>

            <AdditionalActions
                removeTodo={props.removeTodo}
                saveToLSAC={props.saveToLSAC}
                marketName={props.marketName}
                market={props.market}
                calcSum={props.calcSum}
                setCompletedAll={props.setCompletedAll}
            />
        </form>

    )
}