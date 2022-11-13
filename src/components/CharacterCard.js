import React from 'react'
import '../Styles/characterCard.css'
import { useNavigate } from 'react-router'

function CharacterCard({character}) {
  let navigate = useNavigate();
    
  return (
    <div className='character-card'>
        <img src={character.image}/>
        <p>{character.name}</p>
        <button onClick={() => navigate(`/character/${character.id}`)}>See Details</button>
    </div>
  )
}

export default CharacterCard