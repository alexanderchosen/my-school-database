import React from 'react'
import styles from "./NavBar.module.css"

const Admin = () => {

  const adminHandler = function(){
    // opens the admin page
  }
  return (
    <div className={styles.admin}>
      <a href='#' onClick={adminHandler}>ADMIN</a>
    </div>
  )
}

export default Admin
