import '.././stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';

function App() {
  return (
    <div>
      <header className="App">
        <nav className="App-nav">
          <ul className="App-nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
