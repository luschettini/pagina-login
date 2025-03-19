"use client";

import "../signout/signout.css";
import "../signout/error.css";
import "/"
import Input from "../../components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signout() {
  const router = useRouter();
  const [password, setPassword] = useState(""); // Armazena a senha
  const [confirmPass, setConfirmPass] = useState(""); // Armazena a confirmação de senha
  const [match, setMatch] = useState(null); // Verifica se as senhas coincidem
  const [error, setError] = useState(null); // Armazena a mensagem de erro ou sucesso

  const handleCheck = () => {
    console.log("Validando..."); 
    if (password === "") {
      setMatch(false);
      setError("Preencha o campo de senha");
    } else if (confirmPass === "") {
      setMatch(false);
      setError("Preencha o campo de confirmação de senha");
    } else if (password.length < 6) {
      setMatch(false);
      setError("A senha deve ter no mínimo 6 caracteres");
    } else if (password !== confirmPass) {
      setMatch(false);
      setError("As senhas não conferem");
    } else {
      setMatch(true); // Senhas conferem
      setError("Sucesso");
      console.log("Redirecionando..."); // Log para garantir que o redirecionamento está acontecendo
      // Redireciona para a página de login após um pequeno atraso
      setTimeout(() => {
        console.log("Redirecionamento para /signin");
        router.push("/signin");
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h2>Sign Out</h2>

        <Input tipo="text" text="Username" />
        <Input 
          id="password" 
          tipo="password" 
          text="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Input 
          id="confirmPass" 
          tipo="password" 
          text="Confirm Password" 
          value={confirmPass} 
          onChange={(e) => setConfirmPass(e.target.value)} 
        />
        <button className="button" onClick={handleCheck}>Create Account</button>
        {match !== null && <p className="error">{error}</p>} {/* Exibe mensagem de erro ou sucesso */}
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
