import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import SignUp from './pages/Signup';
import Login from './pages/Login';

function App() {

  const [productData, setProductData] = useState([])
  const [user, setUser] = useState('')

  const getProductData = () => {
      fetch('http://localhost:4000/products')
          .then(response => response.json())
          .then(data => {
              setProductData(data.products)
          })
  }

  useEffect(() => {
    getProductData();
    getCartData();
  }, []);

  const [itemsInCart, setItemsInCart] = useState([])

  const getCartData = () => {
    fetch('http://localhost:4000/cart')
      .then(response => response.json())
      .then(items => {
        setItemsInCart(items.item);
      })
  }

  const addItemsToCart = (id, name, price, color, size, quantity) => {
    setItemsInCart([...itemsInCart,
      {
        id: id,
        name: name,
        price: price,
        color: color,
        size: size,
        quantity: quantity
    }])
  }

  const handleLogin = (email, password) => {
    console.log(email, password)
  }

  return (
    <div className='grid-container'>
      <header className='row'>
        <NavBar />
      </header>
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route path='/signup' component={SignUp} />
          <Route path='/login' render={(routerProps) => <Login handleLogin={handleLogin} />}/>
          <Route exact path='/shop' render={(routerProps) => <Shop {...routerProps} productData={productData} />} />
          <Route path='/cart' render={(routerProps) => <Cart itemsInCart={itemsInCart} productData={productData} />} />
          <Route path='/product/:id' render={(routerProps) => <ProductDetail {...routerProps} productData={productData} addItemsToCart={addItemsToCart} />} />
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
