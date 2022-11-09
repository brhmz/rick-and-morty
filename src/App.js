import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import HomePage from './pages/HomePage';

function App() {

  const [allCharacters, setAllCharacters] = useState([]);


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setAllCharacters(response.data.results))
      .catch(err => console.log(err))
  }, [])

console.log(allCharacters)
  return (
    <div>

    </div>
  );
}

export default App;
