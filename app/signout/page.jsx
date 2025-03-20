"use client";

import "./signout.css";
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

        <div className="inputGroup">
          <label className="label">Nome de Usuário</label>
            <Input
            tipo="text"
            text="Digite seu nome de usuário"
            value={username}
            />
          </div>

        
        <div className="inputGroup">
          <label className="label">Senha</label>
          <Input
            id="password"
            tipo="password"
            text="Digite sua senha"
            value={password}
           />
        </div>

        <div className="inputGroupa">
          <label className="label">Confirmar Senha</label>
          <Input
          id="confirmPass"
          tipo="password"
          text="Confirme sua senha"
          value={confirmPassword}
          />
          </div>
                            
                      
        <button className="button" onClick={() => router.push("/signin")}>Create Account</button>
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
