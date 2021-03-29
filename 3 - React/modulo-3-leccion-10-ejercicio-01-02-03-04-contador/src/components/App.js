import '.././stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';
// import Counter from './Counter';
import CounterFunc from './CounterFunc';
import Relax from './Relax';

function App() {
  return (
    <div>
      <header className="App">
        <nav className="App-nav">
          <ul className="App-nav-list">
            {/* <li>
              <Link to="/">Counter with class</Link>
            </li> */}
            <li>
              <Link to="/">Counter functional</Link>
            </li>
            <li>
              <Link to="/relax">R.E.L.A.X</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          {/* <Route exact path="/" component={Counter} /> */}
          <Route exact path="/" component={CounterFunc} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
