import React from 'react';
let AddItem = props => {
    return (
        <form className="form row justify-content-around"
            onSubmit={event => {
                event.preventDefault();
                props.addItem(props.marketName, props.input.title, props.input.value);
                props.onSubmitTodoAC();
                props.saveToLSAC();
            }} >
            <input type="text" className="form-control col-7 col-md-5" placeholder="Product" required
                value={props.input.title}
                onChange={event => props.onChangeAC('title', event.target.value)} />
            <input type="number" className="form-control col-4 col-md-2" placeholder="Value"
                value={props.input.value}
                onChange={event => props.onChangeAC('value', event.target.value)} />
            <input type="submit" className="form-control col-7 col-md-2 btn btn-info" value="Submit" />
            <input type="button" className="form-control col-4 col-md-2 btn btn-secondary" value="Clear"
                onClick={() => {
                    props.clearTodoListAC(props.marketName);
                    props.saveToLSAC(); 
                }} />
        </form>
    )
}

export default AddItem;