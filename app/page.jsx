"use client";
import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter();
    return (
        <div className={styles.container}>
        <div className={styles.login}>
            <h2>Sign In</h2>
            <Input type="text" text="Username or Email" />
            <Input id="password" type="password" text="Password" />
            <button className={styles.button} onClick={() => router.push("/sobre")}>Login</button>
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
                <nav>
                <p>Don't have an account? <button className={styles.link} onClick={() => router.push("/signout")}>Sign Out</button></p>
                </nav>
        </div>
    </div>
    )
}