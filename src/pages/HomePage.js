import React from 'react'
import '../Styles/homePage.css'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {

  const [allCharacters, setAllCharacters] = useState([]);

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
    <div className='home-page-container'>
        <div className='handle-filter-container'>
          <input onKeyDown={handleKeyDown} placeholder='Search any character with name' className='handle-filter'/>
        </div>
          <h1>Rick and Morty Main Characters</h1>
        <div className='character-cards-container'>
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