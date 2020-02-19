import React from 'react';
import Header from '../../common/Header/Header';

let Home = props => {
    return (
        <div className="home">
            <Header title="Easy Purchase" bgColorClass="navbar-dark bg-secondary" logo="Easy Purchase" />
            <h1 className="display-3">Easy Purchase v1.0</h1>
        </div>
    )
} 

export default Home;