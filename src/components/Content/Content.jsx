import React from 'react';
import Header from '../common/Header/Header';
import TodoContainer from './Todo/TodoContainer';

let Content = props => {
    return (
        <div className="home">
            <Header title={props.title} bgColorClass={props.bgColorClass} logo={props.logo}/>
            <TodoContainer market={props.market} />
        </div>
    )
} 

export default Content;