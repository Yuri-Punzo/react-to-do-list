import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Prova Prova SA SA
        </h1>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              Column
            </div>
            <div class="col bg-primary">
              Column
            </div>
            <div class="col">
              Column
            </div>
          </div>
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
