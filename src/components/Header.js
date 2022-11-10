import React from 'react'
import { useNavigate } from 'react-router'

function Header() {

  let navigate = useNavigate();

  return (
    <div>
      <div className='header-container'>
        <div className='nav-button-container'>
          <button className='nav-button' onClick={() => { navigate("/")}} >Home</button>
          <button className='nav-button' onClick={() => { navigate("/about")}} >About</button>
        </div>        
        <div className='profile-container'>
          <img/>
          <p>Ibrahim OZ</p>
        </div>
      </div>
    </div>
  )
}

export default Header