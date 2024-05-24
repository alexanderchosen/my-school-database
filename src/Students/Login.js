import React, { useState } from 'react'
import Button from './Button'
import Card from '../Card'
import SignUp from './SignUp'
import styles from './Students.module.css'
import Profile from './Profile'

const Login = () => {
    const [showSignUp, setShowSignUp]= useState(false)
    const [showNewProfile, setshowNewProfile] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword]= useState('')


    const loginStudent = function(event){
        event.preventDefault()

        if(username.trim().length ===0 || password.trim().length === 0){
            // add error modal here
            return
        }
        console.log(username, password)
        setshowNewProfile(true)

        setUsername('')
        setPassword('')
    }

    const usernameHandler = function(event){
        setUsername(event.target.value)
    }

    const passwordHandler = function(event){
        setPassword(event.target.value)
    }

    const signUpDivHandler = function(){
        setShowSignUp(true)
    }

if(!showSignUp){
    return (
        <div>
        <Card className={styles.student_details} style={{display: !showNewProfile ? 'block': 'none'}}>
            <Card className={styles.school_details}>
                <img src='/images/school-logo.png' alt='logo' />
                <h3> School Of The Future </h3>
            </Card>
            <div className={styles.form_display}>
            <form className={styles.login_form} onSubmit={loginStudent}>
                <h3> LOGIN </h3>
                <div className={styles.username}>
                    <label htmlFor='username'>Username</label>
                    <input
                    type='text'
                    onChange={usernameHandler}
                    value={username}
                    placeholder='Username here'
                    required
                    />
                </div>
                <div className={styles.password}>
                    <label htmlFor='password'>Password</label>
                    <input
                    type='password'
                    value={password}
                    onChange={passwordHandler}
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
        {showNewProfile && <Profile/>}
    </div>
  )
}
return(
        <SignUp />
)
}

export default Login
