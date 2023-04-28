import React, { useContext } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { ThemeContext } from '../contexts/ThemeContext'

function Header() {

  const { username } = useContext(UserContext)
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (
    <div>
      <div className={!darkMode ? 'header-container' : 'header-container header-container-dark'}>
        <div className='nav-button-container'>
          <Link className='nav-button' to='/' >Home</Link>
          <Link className='nav-button' to='/about' >About</Link>
        </div>
        <div className='profile-container'>
          <p>{username}</p>
          <button className={!darkMode ? 'theme-button' : 'theme-button theme-button-dark'}
            onClick={() => setDarkMode(!darkMode)}>{!darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
      </div>
    </div>
  )
}

export default Header