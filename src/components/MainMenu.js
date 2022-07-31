import React from 'react'

function MainMenu() {
  return (
    <ul class='nav__list'>
                    <li class="nav__item">
                      <a href="#home" class="nav__link">
                        <span class="icon-home hover-icon"></span>
                        <span class="icon-text">Home</span>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a href="#about" class="nav__link">
                        <span class="icon-user hover-icon"></span>
                        <span class="icon-text">About</span>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a href="#portfolio" class="nav__link">
                        <span class="icon-briefcase hover-icon"></span>
                        <span class="icon-text">Portfolio</span>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a href="#contact" class="nav__link">
                        <span class="icon-envelope hover-icon"></span>
                        <span class="icon-text">Contact</span>
                      </a>
                    </li>
                  </ul>
  )
}

export default MainMenu