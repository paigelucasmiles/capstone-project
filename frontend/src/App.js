import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Footer from './components/footer_components/Footer';
import NavBar from './components/navbar_components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

  const cart = [
    {
      id: 1,
      name: "linen set",
      price: 100,
      size: 'small',
      image: './images/p2.jpg'
    },
    {
      id: 2,
      name: "silk set",
      price: 200,
      size: 'medium',
      image: './images/p4.jpg'
    }
  ]

  const [itemsInCart, setItemsInCart] = useState(cart)


  return (
    <div className='grid-container'>
      <header className='row'>
        <NavBar />
      </header>
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route path='/shop' render={(routerProps) => <Shop addItemsToCart={setItemsInCart} />}></Route>
          <Route path='/cart' render={(routerProps) => <Cart itemsInCart={itemsInCart} />} />
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
