import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {

  const adminHandler = function(){
    // opens the admin page
  }
  return (
    <div>
      <div>
        <img src='/images/school-logo.png' alt='logo'/>
        <h3> School Of The Future</h3>
      </div>
      <div>
        <a href='#' onClick={adminHandler}>ADMIN</a>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </div>
    </div>
  )
}

export default NavBar
