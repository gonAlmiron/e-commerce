import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import SignUp from './components/SignUp';
import NuevoProducto from './components/NuevoProducto';
import Productos from './components/Productos';


const App = () => {

    return (
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/signup' element={ <SignUp/>} />
          <Route path='/newproduct' element={ <NuevoProducto/>} />
          <Route path='/products' element={ <Productos/>} />
        </Routes>

      </BrowserRouter>
    );
  }
  
export default App;
