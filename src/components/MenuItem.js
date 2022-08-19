import React from 'react';

function MenuItem({ iconclass, icontext, anchorlink }) {
    return (
        <li className="nav__item">
          <a href={anchorlink} className="nav__link">
            <span className={iconclass}></span>
            <span className="icon-text">{icontext}</span>
          </a>
        </li>
    )
}

export default MenuItem;