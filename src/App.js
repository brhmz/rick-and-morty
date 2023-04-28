import './Styles/app.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import CharacterDetails from './pages/CharacterDetails';
import ContextReducer from './contexts/index'

function App() {

  return (
    <BrowserRouter>
      <ContextReducer>    
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/character/:id' element={<CharacterDetails/>} />
          </Routes>
      </ContextReducer>
    </BrowserRouter>
  );
}

export default App;
