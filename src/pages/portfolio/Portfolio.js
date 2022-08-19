import React, { useEffect, useState } from 'react';
import "./Portfolio.css";
// import portfoliolist from "./portfoliolist";

// console.log(portfoliolist);





function Portfolio() {

    const url = "https://gist.githubusercontent.com/eunicedhivya/19e6f802f94a3ef2f5e861a949d936fd/raw/7e02b9646ef1d3bdf59eb58c1f6208022e8e40c5/portfoliolist.json";

    const [portfoliolist, setportfoliolist ] = useState([]);

    // useEffect(()=>{
    //     fetchPortfolio();
    // }, []);

    // const fetchPortfolio = async () => {
    //     fetch(url, {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Accept: "application/json",
    //         },
    //     })
    //     .then((data) => data.json())
    //     .then((data) => {
    //         console.log("data", data);
    //     });
    // }

    // console.log(portfoliolist);
  return (
    <section className='container section' id="portfolio">
        <h2 className="headline">Portfolio</h2>
        <div className="portfolio-content">

            {/* <a className="portfolio__item" href="#">
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
            </a> */}
        </div>
    </section>
  )
}

export default Portfolio