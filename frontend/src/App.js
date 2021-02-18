import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import ProductDetail from './pages/productdetail/ProductDetail';
import Shop from './pages/shop/Shop';
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Information from './pages/information/Information'
import Shipping from './pages/shipping/Shipping'
import Contact from './pages/contact/Contact'
import Thankyou from './pages/thankyou/Thankyou';



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

  const getCartData = () => {
    fetch('http://localhost:4000/cart')
      .then(response => response.json())
      .then(items => {
        setItemsInCart(items.item);
      })
  }

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


useEffect(() => {
    getProductData();
    getCartData();
    validateUser();
    console.log("hello")
}, []);

  // const findProduct = (productId) => {
  //   return productData.find((product) => product.id === productId)
  // }

  const findProductInCart = (productId) => {
    return itemsInCart.find((product) => product.productId === productId)
  }

  const updateItemsInCart = (newQuantity, productId) => {
    const thisProduct = findProductInCart(productId)

    const itemToUpdate = {
      id: thisProduct.id,
      productColor: thisProduct.productColor,
      productId: thisProduct.productId,
      productQuantity: newQuantity,
      productSize: thisProduct.productSize
    }

    fetch('http://localhost:4000/updateCart', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({itemToUpdate: itemToUpdate})
    })
    .then(response => response.json())
    .then(result => {
      const index = itemsInCart.findIndex((element) => element.id === result.id)
      let newItemsInCartArray = [...itemsInCart]
      newItemsInCartArray[index] = result

      setItemsInCart(newItemsInCartArray)
    })
  }




  const addItemsToCart = (id, color, size, quantity) => {

    const newItemToAddToCart = {
      product: {
        id: id,
        color: color,
        size: size,
        quantity: quantity
      }
    }

    fetch('http://localhost:4000/cart', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(newItemToAddToCart)
    })
    .then(response => response.json())
    .then(item => {
      setItemsInCart([...itemsInCart, item])
    })
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



  // console.log('product data', productData)

  return (
    <div className='grid-container'>
      <header className='row'>
        <NavBar user={user} />
      </header>
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path="/information" component={Information}></Route>
          <Route path='/shipping' component={Shipping}></Route>
          <Route path='/thankyou' component={Thankyou}></Route>
          <Route path='/contact' component={Contact} ></Route>
          <Route path='/signup' render={(routerProps) => <SignUp user={user} errorMessage={errorMessage} handleSignUp={handleSignUp} />} />
          <Route path='/login' render={(routerProps) => <Login handleLogin={handleLogin} user={user} errorMessage={errorMessage} />}/>
          <Route exact path='/shop' render={(routerProps) => <Shop {...routerProps} productData={productData} />} />
          <Route path='/cart' render={(routerProps) => <Cart {...routerProps} itemsInCart={itemsInCart} productData={productData} updateItemsInCart={updateItemsInCart} />} />
          <Route path='/product/:id' render={(routerProps) => <ProductDetail {...routerProps} productData={productData} addItemsToCart={addItemsToCart} />} />
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
