import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import HomePage from './pages/HomePage';
import About from './pages/About';
import DetailPage from './pages/DetailPage';

function App() {

  




  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/character/:id' element={<DetailPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
