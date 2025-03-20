"use client";

import "../signout/signout.css";
import "../signout/error.css";
import Input from "../../components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signout() {
  const router = useRouter();
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

  const handleCheck = () => {
    if (input1 == "") {
      setMatch(false);
      setError("Preencha o campo de senha");
  }
  else if (input2 == "") {
      setMatch(false);
      setError("Preencha o campo de repetir senha");
  }
  else if (input1 !== input2) {
      setMatch(false);
      setError("As senhas não coincidem");
  }
  else {
      setMatch(true);
      setError("Sucesso");
  };
};

  return (
    <div className="container">
      <div className="login">
        <h2>Sign Out</h2>
        <Input tipo="text" text="Username" />
            <input
                className="input"
                title="Senha:"
                value={input1}
                placeholder="Password"
                onChange={(e) => setInput1(e.target.value)}
            />
            <input
                className="input"
                title="Repita a senha:"
                value={input2}
                placeholder="Repeat password"
                onChange={(e) => setInput2(e.target.value)}
            />

        <button className="button" onClick={handleCheck}>Create Account</button>
        {match !== null && <p className="error">{error}</p>} 

        <p>Connect with</p>
        <div className="socialmedia">
          <div className="media">
            <img src="/google.png" />
          </div>
          <div className="media">
            <img src="/firefoxx.png" />
          </div>
          <div className="media">
            <img src="/apple.png" />
          </div>
        </div>
        <p>Or</p>
        <nav>
          <p>Have an account? <button className="link" onClick={() => router.push("/signin")}>Log in</button></p>
        </nav>
      </div>
    </div>
  );
}
