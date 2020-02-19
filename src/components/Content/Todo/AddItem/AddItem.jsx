import React from 'react';

let AddItem = props => {
    return (
        <form className="form row justify-content-around"
            onSubmit={event => {
                event.preventDefault();
                props.addItem(props.market, 'title', 'value');
                }} >
            <input type="text" className="form-control col-7 col-md-5" placeholder="Product" required />
            <input type="number" className="form-control col-4 col-md-2" placeholder="Value" />
            <input type="submit" className="form-control col-7 col-md-2 btn btn-info" value="Submit" />
            <input type="button" className="form-control col-4 col-md-2 btn btn-secondary" value="Clear" />
        </form>
    )
}

export default AddItem;