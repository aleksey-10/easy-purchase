import React from 'react';

export default (props) => (
    <div className="dropdown-menu">
        <input type="submit" className="dropdown-item" value="Submit" />
       
        <div role="separator" className="dropdown-divider"></div>
       
        <button type="button" className="dropdown-item"
            onClick={() => props.calcSum(props.marketName)}>Total sum</button>
        <button type="button" className="dropdown-item"
            onClick={() => props.setCompletedAll(props.marketName, props.market)}>Completed all</button>
        
        <div role="separator" className="dropdown-divider"></div>
        
        <button type="button" className="dropdown-item"
            onClick={() => {
                props.removeTodo(props.marketName);
            }}>Clear todos</button>
    </div>
)