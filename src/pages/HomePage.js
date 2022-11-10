import React from 'react'
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



  return (
    <div>
          <Header/>
        <div className='handle-filter-container'>
          <input placeholder='Search any character with name' className='handle-filter'/>
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