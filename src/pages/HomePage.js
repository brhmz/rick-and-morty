import React, { useContext } from 'react'
import '../Styles/homePage.css'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/ThemeContext';

function HomePage() {

  const [allCharacters, setAllCharacters] = useState([]);
  const {darkMode, setDarkMode} =  useContext(ThemeContext);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setAllCharacters(response.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      e = e.target.value;
      console.log(e)
      axios.get(`https://rickandmortyapi.com/api/character/?name=${e}`)
      .then(response => setAllCharacters(response.data.results))
      .catch(err => alert('That character does not exist. Try again'))
  }
}
  return (
    <div className={!darkMode ? 'home-page-container' : 'home-page-container home-page-container-dark'}>
        <div className='handle-filter-container'>
          <input onKeyDown={handleKeyDown} placeholder='Search any character with name' className={!darkMode ? 'handle-filter' : 'handle-filter handle-filter-dark'}/>
        </div>
          <h1>Rick and Morty Main Characters</h1>
        <div className={!darkMode ? 'character-cards-container' : 'character-cards-container character-cards-container-dark'}>
        {
          allCharacters.map((item, index)=>{
            return <CharacterCard character={item} key={index}/>
          })
        }
        </div>
    </div>
  )
}

export default HomePage