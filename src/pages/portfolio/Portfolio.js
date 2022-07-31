import React from 'react';
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='container section' id="portfolio">
        <h2 className="headline">Portfolio</h2>
        <div className="portfolio-content">
            <a className="portfolio__item" href="#">
                <img src="https://via.placeholder.com/300" />
            </a>
            <a className="portfolio__item" href="#">
                <img src="https://via.placeholder.com/300" />
            </a>
            <a className="portfolio__item" href="#">
                <img src="https://via.placeholder.com/300" />
            </a>
            <a className="portfolio__item" href="#">
                <img src="https://via.placeholder.com/300" />
            </a>
            <a className="portfolio__item" href="#">
                <img src="https://via.placeholder.com/300" />
            </a>
            <a className="portfolio__item" href="#">
                <img src="https://via.placeholder.com/300" />
            </a>
            <a className="portfolio__item" href="#">
                <img src="https://via.placeholder.com/300" />
            </a>
        </div>
    </section>
  )
}

export default Portfolio