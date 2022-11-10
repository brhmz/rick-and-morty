import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import Header from '../components/Header'

function DetailPage() {

  let navigate = useNavigate();
  const { id } = useParams();     //Bunu konusalim
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => setSelectedCharacter(response.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      <Header />
      <div className='detail-page-container'>
        <img src={selectedCharacter != null ? selectedCharacter.image : ''} />
        <div className='detail-page-details'>
          <p><b>Name:</b> {selectedCharacter != null ? selectedCharacter.name : ''}</p>
          <p><b>Gender:</b> {selectedCharacter != null ? selectedCharacter.gender : ''}</p>
          <p><b>Location:</b> {selectedCharacter != null ? selectedCharacter.location.name : ''}</p>
          <p><b>Species:</b> {selectedCharacter != null ? selectedCharacter.species : ''}</p>
          <p><b>Status:</b> {selectedCharacter != null ? selectedCharacter.status : ''}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage