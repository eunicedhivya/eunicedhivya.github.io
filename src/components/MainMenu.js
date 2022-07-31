import React from 'react'

function MainMenu() {
  return (
    <ul className='nav__list'>
                    <li className="nav__item">
                      <a href="#home" className="nav__link">
                        <span className="icon-home hover-icon"></span>
                        <span className="icon-text">Home</span>
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="#about" className="nav__link">
                        <span className="icon-user hover-icon"></span>
                        <span className="icon-text">About</span>
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="#portfolio" className="nav__link">
                        <span className="icon-briefcase hover-icon"></span>
                        <span className="icon-text">Portfolio</span>
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="#contact" className="nav__link">
                        <span className="icon-envelope hover-icon"></span>
                        <span className="icon-text">Contact</span>
                      </a>
                    </li>
                  </ul>
  )
}

export default MainMenu