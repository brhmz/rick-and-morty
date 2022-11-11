import './Styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import CharacterDetails from './pages/CharacterDetails';

function App() {

  




  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/character/:id' element={<CharacterDetails/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
