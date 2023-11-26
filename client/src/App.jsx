import './App.css';
/* Hooks */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
/* Components */
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/HomePage/Home';
import Detail from './components/DetailPage/Detail';

const App = () => {

  

  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
    </div>
  )
}

export default App
