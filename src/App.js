import Header from './components/Header/Header';
import Modals from './components/Modals/modals';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Modals></Modals>
      <Home></Home>
       <Footer></Footer> 
    </div>
  );
}

export default App;
