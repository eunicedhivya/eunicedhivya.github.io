import React from 'react';
import MainMenu from '../../components/MainMenu';
import ScrollDown from '../../components/ScrollDown';
import './home.css';

function Home() {
  return (
    <section className="" id="home">
      <div className="home__content">
        <h1>Eunice Dhivya</h1>
        <p>I’m a fullstack developer specializing in designing and developing dashboards and interactive stories.</p>
        <nav className="home-nav">
            <MainMenu />
        </nav>
      </div>
      <ScrollDown />
  </section>
  )
}

export default Home