import React from 'react'

function CharacterCard({character}) {
    
  return (
    <div className='character-card'>
        <img src={character.image}/>
        <p>{character.name}</p>
        <button>See Details</button>
    </div>
  )
}

export default CharacterCard