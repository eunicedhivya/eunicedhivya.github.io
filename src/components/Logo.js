import React from 'react';
import logo from '../img/logo-elegant.svg';

function Logo() {
    return (
        <div className="site-logo-section">
            <img className="site-logo" src={logo} alt="Eunice Dhivya" />
            <p className="site-tagline" >FRONT-END DEVELOPMENT - DESIGNER</p>
        </div>
    )
}

export default Logo
