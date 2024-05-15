import React, { useState } from 'react'
import Button from './Button'
import Card from '../Card'
import SignUp from './SignUp'
import styles from './Students.module.css'

const Login = () => {
    const [showSignUp, setShowSignUp]= useState(false)

    const signUpDivHandler = function(){
        setShowSignUp(true)
    }

if(!showSignUp){
    return (
    <Card className={styles.student_details}>
            <Card className={styles.school_details}>
                <img src='/images/school-logo.png' alt='logo' />
                <h3> School Of The Future </h3>
            </Card>
            <div className={styles.form_display}>
            <form className={styles.login_form}>
                <h3> LOGIN </h3>
                <div className={styles.username}>
                    <label>Username</label>
                    <input
                    type='text'
                    placeholder='Username here'
                    required
                    />
                </div>
                <div className={styles.password}>
                    <label>Password</label>
                    <input
                    type='password'
                    placeholder='unique password here'
                    required
                    ></input>
                </div>
                <div className={styles.submit}>
                    <Button type="Submit" text="LOGIN"></Button>
                </div>
                <div className={styles.prompt}>
                    <p>Don't have a student account? <a href='#' onClick={signUpDivHandler} >SignUp</a></p>
                </div>
            </form>
            </div>
    </Card>
  )
}
return(
        <SignUp />
)
}

export default Login
