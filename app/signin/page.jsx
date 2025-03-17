"use client";

import "./home.css"
import Input from "../../components/Input"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter();
    return (
        <div className="container">
        <div className="login">
            <h2>Sign In</h2>
            <Input type="text" text="Username or Email" />
            <Input id="password" type="password" text="Password" />
            <button className= "button" onClick={() => router.push("/profile")}>Login</button>
            <p>Connect with</p>
                <div className="socialmedia">
                    <div className="media">
                        <img src="/google.png"/>
                    </div>
                    <div className="media">
                        <img src="/firefoxx.png"/>
                    </div>
                    <div className="media">
                        <img src="/apple.png"/>
                    </div>
                </div>
                    <p>Or</p>
                <nav>
                <p>Don't have an account? <button className="link" onClick={() => router.push("/signout")}>Sign Out</button></p>
                </nav>
        </div>
    </div>
    )
}