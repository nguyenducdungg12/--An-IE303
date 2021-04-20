import Header from './components/Header/Header';
import Modals from './components/Modals/modals';
import Footer from './components/Footer/Footer';
import {Switch,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from "./pages/Home/Home"
import DetailProduct from './pages/DetailProduct/DetailProduct'
import Products from './pages/Products/Products'
import './App.css'
import Carts from './pages/Carts/Carts';
function App() {
  return (
      <Router>
    <div className="App">
          <Header></Header>
          <Switch>
              <Route path='/' exact={true} component={Home}>
              </Route>
              <Route path='/DetailProduct/:id' component={DetailProduct}></Route>
              <Route path='/Products/page=:page' component={Products}></Route>
              <Route path='/Carts/page=:page' component={Carts}></Route>
          </Switch>
         <Footer></Footer> 
      <Modals></Modals>
    </div>
      </Router>
    );
  }

export default App;
