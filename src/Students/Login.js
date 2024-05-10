import React, { useState } from 'react'
import Button from './Button'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import SignUp from './SignUp'

const Login = () => {
    const [showSignUp, setShowSignUp]= useState(false)

    const signUphandler = function(){
        setShowSignUp(true)
    }

if(!showSignUp){
    return (
        <div>
            <NavBar />
            <Card>
            <div>
                <img src='/images/school-logo.png' alt='logo' />
                <h3> School Of The Future </h3>
            </div>
            <div>
            <form>
                <h3> LOGIN </h3>
                <div>
                    <label>Username</label>
                    <input
                    type='text'
                    placeholder='Username here'
                    required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                    type='password'
                    placeholder='unique password'
                    required
                    ></input>
                </div>
                <div>
                    <Button type="Submit" text="LOGIN"></Button>
                </div>
                <div>
                    <p>Don't have a student acoount? <a href='#' onClick={signUphandler} >SignUp</a></p>
                </div>
            </form>
            </div>
            </Card>
            <Footer />
        </div>
  )
}
return(
    <div>
        <NavBar/>
        <SignUp />
        <Footer />
    </div>

)
}

export default Login
