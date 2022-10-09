import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Locales from './components/Locales';
import Login from './components/Login';
import { AltertProvider } from './context/AlertContext';
import AlertMessage from './components/AlertMessage';

function App() {
  return (
    <AltertProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <div className='container-body'>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/locales' element={<Locales />} />
                <Route path='/login' element={<Login />} />

                {/* <Route path='/contactanos' element={<Contactanos />} /> */}
              </Routes>
            </div>
            <Footer />
            <AlertMessage />
          </div>
        </BrowserRouter >
      </CartProvider>
    </AltertProvider>


  );
}

export default App;
