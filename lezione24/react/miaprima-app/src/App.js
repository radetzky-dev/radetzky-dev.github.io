import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ciao puoi editare <code>src/App.js</code> salvare e ricaricare.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          questo è un link
        </a>
        <p>Questo è un nuovo paragrafo!</p>
      </header>
    </div>
  );
}

export default App;
