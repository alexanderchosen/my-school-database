import React, { useState } from 'react'
import Card from '../Card'
import Button from './Button'
import Login from "./Login"
import styles from "./Students.module.css"

const SignUp = () => {
    const [showLogin, setShowLogin] = useState(false)

    const loginDivHandler = ()=>{
        setShowLogin(true)
    }

if (!showLogin){
    return (
         <Card className={styles.student_details}>
                <Card className={styles.school_details}>
                    <img src="/images/school-logo.png" alt="logo"/>
                    <h3> School Of The Future </h3>
                </Card>
                <div className={styles.form_display}>
                <form className={styles.signup_form}>
                    <h3>SIGN-IN</h3>
                    <div className={styles.name}>
                    <label>Name</label>
                    <input
                    type='text'
                    placeholder='FirstName LastName'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.email}>
                    <label>Email</label>
                    <input
                    type="email"
                    placeholder='Email Here'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.user_name}>
                    <label>Username</label>
                    <input
                    type="text"
                    placeholder='Preferred Username here'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.grade}>
                    <label>Grade level</label>
                    <select>
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
                    required
                    ></input>
                    </div>
                    <div className={styles.gender}>
                    <label> Gender</label>
                    <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>
                    <div className={styles.pass_word}>
                    <label>Password</label>
                    <input
                    type="password"
                    placeholder='Unique Password Here'
                    required
                    >
                    </input>
                    </div>
                    <div className={styles.pass_word}>
                    <label>Confirm Password</label>
                    <input
                    type="password"
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
    )
}

return(
    <div>
        <Login />
    </div>
)
}

export default SignUp
