import React from 'react';
import './home.css';

function Home() {
  return (
    <section className="" id="home">
            <h1>Eunice Dhivya</h1>
            <p>I’m a fullstack developer specializing in designing and developing dashboards and interactive stories.</p>
            <nav className="home-nav">
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
            </nav>
            <div className='scroll__down'>
                <a href="#about" className="mouse__wrapper">
                    <span className="home__scroll-name">Scroll Down</span>
                    <span className="mouse">
                        <span className="wheel"></span>
                    </span>
                </a>
            </div>
        </section>
  )
}

export default Home