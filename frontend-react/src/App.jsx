import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './components/Register';
import { Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  

  return (
    <BrowserRouter>
    <Header /> 
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/register/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  
    <Footer />
    
      
    </BrowserRouter>
  )
}

export default App;


