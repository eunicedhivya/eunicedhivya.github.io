import React from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <nav>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                        Contact
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default NavBar
