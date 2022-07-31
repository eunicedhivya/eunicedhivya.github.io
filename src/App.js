import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
// 
// import { Link } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Home />
      <div id="innerContent">
        <About />
      </div>
    </div>
  );
}

export default App;
