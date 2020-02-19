import React from 'react';
import { NavLink } from 'react-router-dom';

let Header = props => {
    return (
        <nav className={`navbar navbar-expand ${props.bgColorClass}`}>
            <NavLink className="navbar-brand" to="/">{props.logo}</NavLink>
            
                <div className="navbar-nav ml-auto">
                    <div className="nav-item dropdown">
                        <NavLink className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show markets   </NavLink>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/auchan">Auchan</NavLink>
                            <NavLink className="dropdown-item " to="/velmart">Velmart</NavLink>
                            <NavLink className="dropdown-item " to="/silpo">Silpo</NavLink>
                            <NavLink className="dropdown-item " to="/novus">Novus</NavLink>
                            <NavLink className="dropdown-item " to="/other">Other</NavLink>
                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default Header;