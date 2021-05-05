import React from 'react';
import Header from './components/Header/Header';
import Modals from './components/Modals/modals';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products'
import {Switch,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from "./pages/Home/Home"
import DetailProduct from './pages/DetailProduct/DetailProduct'
import Cart from './pages/Cart/Cart'
import './App.css'
function App() {
  return (
      <Router>
    <div className="App">
          <Header></Header>
          <Switch>
              <Route path='/' exact={true} component={Home}></Route>
              <Route path='/Products/:category' component={Products}></Route>
              <Route path='/DetailProduct/:id' component={DetailProduct}></Route>
              <Route path='/Cart' component={Cart}></Route>
          </Switch> 
         <Footer></Footer> 
      <Modals></Modals>
    </div>
      </Router>
    );
  }

export default App;
