import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
// 
// import { Link } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Home />
      <div id="innerContent">
        <Sidebar />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
