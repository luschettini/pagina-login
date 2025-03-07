import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Home() {
    return (
        <div className={styles.container}>
        <div className={styles.login}>
            <h2>Sign In</h2>
            <Input text="Username ou Email" />
            <Input text="Password" />
            <Button text="Login" />
            <p>Connect with</p>
                <div className={styles.socialmedia}>
                    <div className={styles.media}>
                        <img src="/google.png"/>
                    </div>
                    <div className={styles.media}>
                        <img src="/firefoxx.png"/>
                    </div>
                    <div className={styles.media}>
                        <img src="/apple.png"/>
                    </div>
                </div>
                    <p>Or</p>
            <p className={styles.link}>
            Don't have an account? <a href="/signup">Sign Up</a>
            </p>

        </div>
    </div>
    )
}