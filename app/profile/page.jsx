"use client";
import './profile.css';
import Card from '../../components/Card';
import { useRouter } from "next/navigation"

export default function Profile() {
    const router = useRouter();
    return (
    <div className="container">
            <div className="perfil">
            <div className="image">
                <img src=""  alt="" />
                <p>Luiza Nicoluci Schettini</p>
            </div>
            <Card title={"Descrição"} text={"Olá, meu nome é Luiza e sou uma desenvolvedora do curso de Desenvolvimento de Sistemas no SENAI."} />
            <Card title={"Descrição"} text={"Desenvolvedora Full Stack"} />
            <Card title={"Descrição"} text={"Next.js, Node.js, React, JavaScript"} />
            </div>
        </div>
    )
}