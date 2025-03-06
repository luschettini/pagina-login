import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import Button from "../components/Button"
import Midia from "../components/Midia"

export default function Home() {
    return (
        <div className={styles.container}>
        <div className={styles.login}>
            <h2>Sign In</h2>
            <Input text="Username ou Email" />
            <Input text="Password" />
            <Button text="Login" />
            <div className={styles.divider}>
            <Midia image="Facebook" />
            <Midia image= "google.png" />
            <Midia image="Apple" />
            <Midia image="Firefox" />
            </div>
            <p className={styles.link}>
            Não tem uma conta? <a href="/signup">Sign Up</a>
            </p>

        </div>
    </div>
    )
}