import React from 'react'
import MenuItem from './MenuItem'

function MainMenu() {
  return (
    <ul className='nav__list'>
                <li className="nav__item site-branding">
                    ED
                </li>
                    <MenuItem 
                    iconclass="icon-home hover-icon" 
                    icontext="Home" 
                    anchorlink="#home"  />
                    <MenuItem 
                    iconclass="icon-user hover-icon" 
                    icontext="About" 
                    anchorlink="#about"  />
                    <MenuItem 
                    iconclass="icon-briefcase hover-icon" 
                    icontext="Portfolio" 
                    anchorlink="#portfolio"  />
                    <MenuItem 
                    iconclass="icon-envelope hover-icon" 
                    icontext="Contact" 
                    anchorlink="#contact"  />
                  </ul>
  )
}

export default MainMenu


