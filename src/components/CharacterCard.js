import React, { useContext } from 'react'
import '../Styles/characterCard.css'
import { useNavigate } from 'react-router'
import { ThemeContext } from '../contexts/ThemeContext'


function CharacterCard({character}) {
  
  let navigate = useNavigate();
  const {darkMode, setDarkMode} =  useContext(ThemeContext)
    
  return (
    <div className={!darkMode ? 'character-card' : 'character-card character-card-dark'}>
        <img src={character.image}/>
        <p>{character.name}</p>
        <button onClick={() => navigate(`/character/${character.id}`)}>See Details</button>
    </div>
  )
}

export default CharacterCard