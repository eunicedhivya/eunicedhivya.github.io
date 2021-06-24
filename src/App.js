import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <div class="container">
        <main>
            <h1 class="main-title">Coming Soon</h1>
            <nav class="socialmenu">
                <a href="https://www.linkedin.com/in/eunicedhivya/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/eunicedhivya/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://codepen.io/eunicedhivya" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
            </nav>
        </main>

        <footer>
            © 2021 Eunice Dhivya 
        </footer>
    </div>
    </div>
  );
}

export default App;
