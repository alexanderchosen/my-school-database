import React from 'react'
import Admin from './Admin'
import Logout from './Logout'
import styles from './NavBar.module.css'



const NavBar = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src='/images/school-logo.png' alt='logo'/>
        <h3> School Of The Future</h3>
      </div>
      <div className={styles.admin_logout}>
        <Admin />
        <Logout />
      </div>
    </div>
  )
}

export default NavBar
