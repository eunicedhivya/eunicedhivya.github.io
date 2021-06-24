import './App.css';
// import WelcomePage from './pages/WelcomePage';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      {/* <WelcomePage />  */}
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/portfolio" component={PortfolioPage} exact />
          <Route component={NotFound} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
