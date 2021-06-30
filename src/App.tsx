import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Page404 from './pages/Page404/Page404';

const App=()=> {
  return (
    <div className="App">
      <Navbar/>
      <div style={{ marginTop: '10vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
