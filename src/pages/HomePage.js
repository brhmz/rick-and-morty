import React from 'react'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'

function HomePage() {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <CharacterCard/>
        </div>
    </div>
  )
}

export default HomePage