import React from 'react';
import MainMenu from '../../components/MainMenu';
import ScrollDown from '../../components/ScrollDown';
import './home.css';

function Home({ sticky }) {
  return (
    <section className="" id="home">
      <div className="home__content">
        <h1>Eunice Dhivya</h1>
        <p>I’m a fullstack developer specializing in designing and developing dashboards and interactive stories.</p>
        <nav className={sticky? "home-nav sticky" : "home-nav" } id="home-nav">
            <MainMenu />
        </nav>
      </div>
      <ScrollDown />
  </section>
  )
}

export default Home