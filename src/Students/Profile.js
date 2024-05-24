import Card from '../Card'
import styles from './Students.module.css'

const Profile = function(props){

    return(
        <Card className={styles.student_details}>
            <Card className={styles.school_details}>
                    <img src="/images/school-logo.png" alt="logo"/>
                    <h3> School Of The Future </h3>
            </Card>
            <div className={styles.form_display}>
                <h3>PROFILE</h3>
                <div className={styles.welcome}>
                    <h5>Welcome,</h5>
                    <p> Below are your profile details:</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <p><label>Full Name:</label> {props.student.name}</p>
                            <p><label> Username:</label> {props.student.username}</p>
                            <p><label> Email:</label> {props.student.email}</p>
                            <p><label> Gender:</label> {props.student.gender}</p>
                            <p><label> Grade:</label> {props.student.grade}</p>
                            <p> <label> Password:</label> {props.student.password}</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.prompt}>
                    <p> Thanks for Choosing the Future School!</p>
                </div>
            </div>
        </Card>
    )
}

export default Profile