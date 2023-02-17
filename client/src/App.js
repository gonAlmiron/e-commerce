import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';


const App = () => {

    return (
      <BrowserRouter>

        <NavBar/>
        <Routes>

          <Route path='/' element={ <Login/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/signup' element={ <SignUp/>} />

        </Routes>

      </BrowserRouter>
    );
  }
  
export default App;
