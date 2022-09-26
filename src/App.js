import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout';
// import productos from './productos';
// import { useEffect } from 'react';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from './firebase/firebase';

function App() {

  // useEffect(()=>{
  //   const productosCollecction = collection(db, "items")
  //   productos.map((item)=> addDoc(productosCollecction, item))
  // }, [])

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App wrapper">
          <header>
            <NavBar />
          </header>
          <section>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/detalle/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </section>

          {/* <a
              className="App-link pt-5"
              href="https://karla270.github.io/POLLERIA_GONZALES_JS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Site
            </a> */}
          <footer>
            <span dangerouslySetInnerHTML={{ "__html": "&copy Karla Gonzáles" }} />
          </footer>
        </div>
      </BrowserRouter >
    </CartProvider>
  );
}

export default App;
