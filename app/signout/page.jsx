"use client";

import  "./signout.css"
import Input from "../../components/Input"
import { useRouter } from "next/navigation"


export default function Signout() {
    const router = useRouter();
    return (
        <div className="container">
        <div className="login">
            <h2>Sign Out</h2>
            <Input tipo="text" text="Username" />
            <Input id="password" tipo="password" text="Password" />
            <Input id="confirmPass" tipo="password" text="Confirm Password" />
            <button className="button" onClick={() => router.push("/")}>Create Account</button>
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
                <p>Have an account?? <button className="link" onClick={() => router.push("/signin")}>Faça login</button></p>
            </nav>
        </div>
    </div>
    ) 
}