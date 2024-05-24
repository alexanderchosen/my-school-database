import React, { useState } from 'react'
import Card from '../Card'
import Button from './Button'
import Login from "./Login"
import styles from "./Students.module.css"
import Profile from './Profile'

const SignUp = (props) => {
    const [showLogin, setShowLogin] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername]= useState('')
    const [grade, setGrade] = useState('Grade-1')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('Male')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const loginDivHandler = ()=>{
        setShowLogin(true)
    }

    const addNewStudent = function(event){
        event.preventDefault();
        if (name.trim().length === 0 || email.trim().length === 0 || username.trim().length || password.trim().length ===0 || confirmPassword.trim().length === 0 ){
            // show error modal here
            return
        }
        console.log(name, email, username, grade, date, gender, password, confirmPassword)
        props.student(name, email, username, grade, date, gender, password, confirmPassword)
        setShowProfile(true)
        setName('')
        setEmail('')
        setUsername('')
        setGender()
        setGrade()
        setDate('')
        setPassword('')
        setConfirmPassword('')

    }

    const nameHandler = function(event){
        setName(event.target.value)
    }
    const emailHandler = function(event){
        setEmail(event.target.value)
    }
    const usernameHandler = function(event){
        setUsername(event.target.value)
    }
    const gradeHandler = function(event){
        setGrade(event.target.value)
    }
    const dateHandler = function(event){
        setDate(event.target.value)
    }
    const genderHandler = function(event){
        setGender(event.target.value)
    }
    const passwordHandler = function(event){
        setPassword(event.target.value)
    }
    const confirmPasswordHandler = function(event){
        setConfirmPassword(event.target.value)
    }


if (!showLogin){
    return (
        <div>
         <Card className={styles.student_details} style={{display:!showProfile ? 'block': 'none'}}>
                <Card className={styles.school_details}>
                    <img src="/images/school-logo.png" alt="logo"/>
                    <h3> School Of The Future </h3>
                </Card>
                <div className={styles.form_display}>
                <form className={styles.signup_form} onSubmit={addNewStudent} >
                    <h3>SIGN-IN</h3>
                    <div className={styles.name}>
                    <label>Name</label>
                    <input
                    type='text'
                    onChange={nameHandler}
                    value={name}
                    placeholder='FirstName LastName'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.email}>
                    <label>Email</label>
                    <input
                    type="email"
                    value={email}
                    onChange={emailHandler}
                    placeholder='Email Here'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.user_name}>
                    <label htmlFor='username'>Username</label>
                    <input
                    type="text"
                    value={username}
                    onChange={usernameHandler}
                    placeholder='Preferred Username here'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.grade}>
                    <label>Grade level</label>
                    <select onChange={gradeHandler} value={grade}>
                        <option value="Grade-1">Grade-1</option>
                        <option value="Grade-2">Grade-2</option>
                        <option value="Grade-3">Grade-3</option>
                        <option value="Grade-4">Grade-4</option>
                        <option value="Grade-5">Grade-5</option>
                        <option value="Grade-6">Grade-6</option>
                        <option value="grade-7">Grade-7</option>
                    </select>
                    </div>
                    <div className={styles.dob}>
                    <label>DOB</label>
                    <input
                    type="date"
                    min='2020-01-01'
                    max='2024-12-31'
                    value={date}
                    onChange={dateHandler}
                    required
                    ></input>
                    </div>
                    <div className={styles.gender}>
                    <label> Gender</label>
                    <select onChange={genderHandler} value={gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>
                    <div className={styles.pass_word}>
                    <label htmlFor='password'>Password</label>
                    <input
                    type="password"
                    value={password}
                    onChange={passwordHandler}
                    placeholder='Unique Password Here'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.pass_word}>
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    value={confirmPassword}
                    onChange={confirmPasswordHandler}
                    placeholder='Confirm Your Password'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.submit}>
                    <Button type="submit" text ="SIGN-UP"/>
                    </div>
                    <div className={styles.prompt}>
                    <p>Already have a student account? <a href='#' onClick={loginDivHandler}>Login</a></p>
                    </div>
                </form>
                </div>
            </Card>
            {showProfile && <Profile/>}
        </div>
    )
}

return(
    <div>
        <Login />
    </div>
)
}

export default SignUp
