import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          </Routes>
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
    </BrowserRouter >
  );
}

export default App;
