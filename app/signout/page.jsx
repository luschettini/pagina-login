"use client";

import styles from "../../styles/Signout.module.css"
import Input from "../../components/Input"
import { useRouter } from "next/navigation"


export default function Signout() {
    const router = useRouter();
    return (
        <div className={styles.container}>
        <div className={styles.login}>
            <h2>Sign Out</h2>
            <Input tipo="text" text="Username" />
            <Input id="password" tipo="password" text="Password" />
            <Input id="confirmPass" tipo="password" text="Confirm Password" />
            <button className={styles.button} onClick={() => router.push("/")}>Create Account</button>
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
                <p>Já tem uma conta? <button className={styles.link} onClick={() => router.push("/")}>Faça login</button></p>
            </nav>
        </div>
    </div>
    ) 
}