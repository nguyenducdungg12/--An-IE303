import React from 'react';
import Header from './components/Header/Header';
import Modals from './components/Modals/modals';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products'
import {Switch,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from "./pages/Home/Home"
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ErrorPage from './pages/ErrorPage/Error'
import DetailProduct from './pages/DetailProduct/DetailProduct'
import CheckoutPage from './pages/Checkout/Checkout'
import Cart from './pages/Cart/Cart'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
              <Route path='/Forgot/:id' component={ForgotPassword}/>
              <Route path='/checkout' component = {CheckoutPage}/>
              <Route component = {ErrorPage}/>
          </Switch> 
         <Footer></Footer> 
      <Modals></Modals>
      <ToastContainer/>
    </div>
      </Router>
    );
  }

export default App;
