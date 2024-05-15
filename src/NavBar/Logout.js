import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import styles from "./NavBar.module.css"
const Logout = () => {

    const logouthandler = function(){
        // refresh the page
    }
  return (
    <div className={styles.logout}>
      <FontAwesomeIcon icon={faSignOutAlt} className={styles.logout_icon} onClick={logouthandler}/>
    </div>
  )
}

export default Logout
