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

  const [productData, setProductData] = useState([]);
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [itemsInCart, setItemsInCart] = useState([]);


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
    validateUser();
  }, []);

  const validateUser = () => {
    let token = sessionStorage.getItem('token')
    if (token) {
      fetch('http://localhost:4000/profile', {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if(result.user) {
          setUser({
            id: result.user.id,
            firstName: result.user.firstName,
            lastName: result.user.lastName,
            email: result.user.email
          })
        }
      })
    }
  }

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
    const userData = {
      user: {
        email: email,
        password: password
      }
    }

    fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(result => {
        if(result.error){
          setErrorMessage(result.error);
        } else if(result.token) {
          sessionStorage.setItem("token", result.token);
          validateUser();
        }
      })
  }

  const handleSignUp = (firstName, lastName, email, password) => {
    const newUserData = { user: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
  }

    fetch('http://localhost:4000/users', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newUserData)
    })
      .then(response => response.json())
      .then(result => {
        if(result.passwordHash){
          handleLogin(email, password)
        }
      })
  }

  return (
    <div className='grid-container'>
      <header className='row'>
        <NavBar user={user} />
      </header>
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route path='/signup' render={(routerProps) => <SignUp user={user} errorMessage={errorMessage} handleSignUp={handleSignUp} />} />
          <Route path='/login' render={(routerProps) => <Login handleLogin={handleLogin} user={user} errorMessage={errorMessage} />}/>
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
