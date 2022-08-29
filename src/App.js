import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const productos = [
    {
      "id": "a",
      "nombre": "POLLO OFERTA",
      "precio": 55,
      "imagen": "pollo.png",
      "descripcion": "<span>1 Pollo a la Brasa</span><br><span>+ Papas Fritas </span><br><span>+ Inka Hola 1.5 Lt <span><br><span>+ Ensalada Fresca</span>",
      "stock": 10
    },
    {
      "id": "b",
      "nombre": "1/2 POLLO OFERTA",
      "precio": 30,
      "imagen": "medio_pollo.png",
      "descripcion": "<span>1/2 Pollo a la Brasa</span><br><span>+ Papas Fritas </span><br><span>+ Ensalada Fresca</span>",
      "stock": 8
    }
  ];


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="col-12 row my-5">
          <div className='carta-logo col-sm-6'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          {productos.map((item) => (
            <ItemListContainer carta={item} key={item.id} />
          ))}
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
