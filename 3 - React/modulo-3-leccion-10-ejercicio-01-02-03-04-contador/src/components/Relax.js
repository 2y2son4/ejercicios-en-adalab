import React from 'react';

function Relax() {
  console.log('Se está ejecuntando el método render() de R.E.L.A.X');
  return (
    <div className="App">
      <h2 className="title">- TRUST NO ONE -</h2>
      <header className="App-header">
        <p className="paragraph">“I would never lie. I willfully participate in a campaign of misinformation”</p>
        <small className="author">- Fox Mulder.</small>
      </header>
    </div>
  );
}

export default Relax;
