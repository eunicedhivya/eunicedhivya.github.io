import React, { useEffect, useState } from 'react';
import "./Portfolio.css";
import PortfolioCard from "../../components/portfoliocard/PortfolioCard";
// import portfoliolist from "./portfoliolist";

// console.log(portfoliolist);





function Portfolio() {

    const url = "http://mytest-ed.us-east-1.elasticbeanstalk.com/api/portfolio";

    const [portfoliolist, setportfoliolist ] = useState([]);

    useEffect(()=>{
        fetchPortfolio();
    }, []);

    const fetchPortfolio = async () => {
        fetch(url, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
        })
        .then((data) => data.json())
        .then((data) => {
            console.log("data", data);
            setportfoliolist(data);
        });
    }

    // console.log(portfoliolist);
  return (
    <section className='container section' id="portfolio">
        <h2 className="headline">Portfolio</h2>
        <div className='pageTitleFullWidth'>
          <h2 className='pageTitle'>Portfolio</h2>
          <div className='portfolioMenu'>
            {/* <CategoriesList /> */}
          </div>
        </div>
        <div className='portfolioGrid'>
          { portfoliolist.map((item) => {
            return (
              <PortfolioCard
                key={item._id} 
                title={ item.title }
                img={item.img}
                demolink={item.demolink}
                githublink={item.githublink}
               />
            )
          }) }
        </div>
    </section>
  )
}

export default Portfolio