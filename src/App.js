import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailsCointainer from './components/ItemDetailsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './components/context/CartContext';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detalle/:detalleId' element={<ItemDetailsCointainer />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
