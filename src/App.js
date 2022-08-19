import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import { useState, useEffect } from 'react';
// 
// import { Link } from 'react-router-dom';

function App() {

  const [homeNavPos, setHomeNavPos] = useState(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", makeSticky);

    // const innerContent = document.getElementById("home-nav");
    // let innerContentPos = innerContent.getBoundingClientRect().top;
    
    // console.log(innerContentPos);
    // setHomeNavPos(innerContentPos);

    // return () => {
    //   window.removeEventListener("scroll", makeSticky);
    // };

  }, []);
    
    const makeSticky = () => {
        // console.log(homeNavPos);
        
        if(window.scrollY >= homeNavPos){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }

    
  

  return (
    <div className="App">
      <Home sticky={sticky} />
      <div id="innerContent">
        <Sidebar sticky={sticky} />
        <main className={sticky? "site-content shift" : "site-content" }>
          <About />
          <Portfolio />
        </main>
      </div>
    </div>
  );
}

export default App;
