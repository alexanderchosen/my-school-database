import React, {useState} from 'react'
import SignUp from './SignUp'


const StudentEntry = () => {
  const [studentProfile, setStudentProfile] = useState('')

  // const displayStudentProfile = ()
  return (
    <div>
      <SignUp student={[]} />
    </div>
  )
}

export default StudentEntry
