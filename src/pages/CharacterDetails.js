import React from 'react'
import '../Styles/characterDetails.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'

function DetailPage() {

  let navigate = useNavigate();
  const { id } = useParams();  
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => setSelectedCharacter(response.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      <div className='detail-page-container'>
        <img src={selectedCharacter?.image} />
        <div className='detail-page-details'>
          <p><b>Name:</b> {selectedCharacter?.name}</p>
          <p><b>Gender:</b> {selectedCharacter?.gender}</p>
          <p><b>Location:</b> {selectedCharacter?.location.name}</p>
          <p><b>Species:</b> {selectedCharacter?.species}</p>
          <p><b>Status:</b> {selectedCharacter?.status}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage