import logo from './logo.svg';
import './App.scss';
import Another from './components/another';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='mb-5 mt-2'>
          Prova Prova SA SA
        </h1>
        <Another />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              1
            </div>
            <div className="col bg-primary">
              2
            </div>
            <div className="col">
              3
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
