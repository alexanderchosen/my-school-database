import React from 'react'
import styles from "./NavBar.module.css"

const Admin = () => {

  const adminHandler = function(props){
    // opens the admin page
    <ul>
      {props.students.map((student)=>(
                            <li>
                                <p><label>Full Name:</label> {student.name}</p>
                                <p><label> Username:</label> {student.username}</p>
                                <p><label> Email:</label> {student.email}</p>
                                <p><label> Gender:</label> {student.gender}</p>
                                <p><label> Grade:</label> {student.grade}</p>
                                <p> <label> Password:</label> {student.password}</p>
                            </li>
                        ))}
        </ul>
  }
  return (
    <div className={styles.admin}>
      <a href='#' onClick={adminHandler}>ADMIN</a>
    </div>
  )
}

export default Admin
