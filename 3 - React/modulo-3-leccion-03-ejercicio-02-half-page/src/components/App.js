import '.././stylesheets/App.scss';
import HalfPage from './HalfPage';

function App() {
  return (
    <div className="App App-header">
      <HalfPage side="HalfI">
        <h1>Estoy a la izquierda.</h1>
      </HalfPage>
      <HalfPage side="HalfD">
        <h2>Estoy equivocadísima.</h2>
      </HalfPage>
    </div>
  );
}

export default App;
