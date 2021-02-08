import { Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <div className='grid-container'>
      <header className='row'>
        <NavBar />
      </header>
        <main>
          <switch>
            <Route exact path="/" component={Home}></Route>
            <Route path='/shop' component={Shop}></Route>
          </switch>
          {/* <Route path='/product/:id' component={ProductScreen} ></Route> */}
          {/* <Route path='/' component={HomeScreen} exact ></Route> */}
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
