import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import { useState, useEffect } from 'react';
// 
// import { Link } from 'react-router-dom';

function App() {

  const [sticky, setSticky] = useState(false);
    

    const makeSticky = () => {
      const innerContent = document.getElementById("innerContent");
      let innerContentPos = innerContent.offsetTop - 50;
      // let innerContentPos = innerContent.getBoundingClientRect().top + 300;
        // console.log(innerContentPos);
        if(window.scrollY >= innerContentPos){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", makeSticky);
  
      return () => {
        window.removeEventListener("scroll", makeSticky);
      };
    }, []);
  

  return (
    <div className="App">
      <Home />
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
