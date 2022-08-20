import logo from './assets/logo.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          POLLERIA D'MARYS
        </p>
        <a
          className="App-link"
          href="https://karla270.github.io/POLLERIA_GONZALES_JS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Site
        </a>
      </header>
    </div>
  );
}

export default App;
