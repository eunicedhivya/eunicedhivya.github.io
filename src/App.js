import './App.scss';
// import WelcomePage from './pages/WelcomePage';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <WelcomePage />  */}
      <Header />
      <div className="main-content">
          <div className="content">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/portfolio" component={PortfolioPage} exact />
            <Route component={NotFound} exact />
          </Switch>
          </div>
      </div>
     
    </div>
  );
}

export default App;
