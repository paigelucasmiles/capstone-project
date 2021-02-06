import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <div className='grid-container'>
      <header className='row'>
        <NavBar />
      </header>
        <main>
          <Route exact path="/" component={Home} />
          {/* <Route path='/product/:id' component={ProductScreen} ></Route> */}
          {/* <Route path='/' component={HomeScreen} exact ></Route> */}
        </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
