import React, { useState } from 'react'
import Card from '../Card'
import Button from './Button'
import Login from "./Login"
import NavBar from '../NavBar/NavBar'
import Footer from "../Footer/Footer"

const SignUp = () => {
    const [showLogin, setShowLogin] = useState(false)

    const loginHandler = ()=>{
        setShowLogin(true)
    }

//   return (
//     <Card>
//         <div>
//             {/* logo here */}
//             <h3> School Of The Future </h3>
//         </div>
//         <div>
//             <label>Name</label>
//             <input
//             type='text'
//             placeholder='FirstName LastName'
//             required
//             >
//             </input>
//             <label>Email</label>
//             <input
//             type="email"
//             placeholder='Email Here'
//             required
//             >
//             </input>
//             <label>Username</label>
//             <input
//             type="text"
//             placeholder='Preferred Username'
//             required
//             >
//             </input>
//             <label>Grade level</label>
//             <select>
//                 <option value="Grade-1">Grade-1</option>
//                 <option value="Grade-2">Grade-2</option>
//                 <option value="Grade-3">Grade-3</option>
//                 <option value="Grade-4">Grade-4</option>
//                 <option value="Grade-5">Grade-5</option>
//                 <option value="Grade-6">Grade-6</option>
//                 <option value="grade-7">Grade-7</option>
//             </select>
//             <label>DOB</label>
//             <input
//             type="date"
//             required
//             ></input>
//             <label> Gender</label>
//             <select>
//                 <option value="male"></option>
//                 <option value="female"></option>
//             </select>
//             <label>Password</label>
//             <input
//             type="password"
//             placeholder='Unique Password Here'
//             required
//             >
//             </input>
//             <label>Confirm Password</label>
//             <input
//             type="password"
//             placeholder='Confirm Your Password'
//             required
//             >
//             </input>
//         </div>
//         <div>
//             <Button type="submit" text ="Submit"/>
//         </div>
//         <div>
//             <p>Already have a student account? <a href='#' onClick={loginHandler}>LOGIN</a></p>
//             {showLogin && <Login />}
//         </div>
//     </Card>
//   )

if (!showLogin){
    return (
        <div>
            <NavBar />
            <Card>
                <div>
                    <img src="/images/school-logo.png" alt="logo"/>
                    <h3> School Of The Future </h3>
                </div>
                <div>
                <form>
                    <label>Name</label>
                    <input
                    type='text'
                    placeholder='FirstName LastName'
                    required
                    >
                    </input>
                    <label>Email</label>
                    <input
                    type="email"
                    placeholder='Email Here'
                    required
                    >
                    </input>
                    <label>Username</label>
                    <input
                    type="text"
                    placeholder='Preferred Username'
                    required
                    >
                    </input>
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
                    <label>DOB</label>
                    <input
                    type="date"
                    required
                    ></input>
                    <label> Gender</label>
                    <select>
                        <option value="male"></option>
                        <option value="female"></option>
                    </select>
                    <label>Password</label>
                    <input
                    type="password"
                    placeholder='Unique Password Here'
                    required
                    >
                    </input>
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    placeholder='Confirm Your Password'
                    required
                    >
                    </input>
                    <div>
                    <Button type="submit" text ="SIGN-UP"/>
                    </div>
                    <div>
                    <p>Already have a student account? <a href='#' onClick={loginHandler}>LOGIN</a></p>
                    </div>
                </form>
                </div>
            </Card>
            <Footer/>
        </div>
    )
}

return(
    <div>
        <NavBar />
        <Login />
        <Footer />
    </div>
)
}

export default SignUp
