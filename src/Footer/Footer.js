import React from 'react'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.school_name}>School of the Future</p>
      <div className={styles.copyright}>
        <FontAwesomeIcon icon={faCopyright} />
        <span> All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
