import Card from '../Card'
import styles from './Students.module.css'

const Profile = function(){

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
                <div className={styles.fullname}>
                    <label>Full Name:</label>
                    <input
                    type='text'
                    value=''
                    ></input>
                </div>
                <div className={styles.mail}>
                    <label>Email:</label>
                    <input
                    type="email"
                    value=''
                    >
                    </input>
                </div>
                <div className={styles.display_password}>
                <label>Password:</label>
                <input
                type='text'
                value=''>
                </input>
                </div>
                <div className={styles.prompt}>
                    <p> Thanks for Choosing the Future School!</p>
                </div>
            </div>
        </Card>
    )
}

export default Profile