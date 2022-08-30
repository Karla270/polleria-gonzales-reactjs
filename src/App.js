import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="col-12 row my-5">
          <div className='carta-logo col-sm-4'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <ItemListContainer />
        </div>
        <a
          className="App-link pt-5"
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
