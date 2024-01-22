import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, microsoftProvider } from '../firebaseConfig'
import "../App.css"
import still from "../assets/still.png"
import logo from "../assets/AmritaLogo.png"
import { useNavigate } from 'react-router-dom'

function LoginPage() {

    const navigate = useNavigate();

    const login = () => {
        signInWithPopup(auth, microsoftProvider)
            .then((result) => {
                navigate("/dashboard", { replace: true })
            })
    }

    return (
        <div style={{ backgroundColor: '#09090B', height: "100%", width: "100%", display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', minHeight: "100vh", minWidth: '100vw' }}>
            <div style={{ color: "#FAFAFA", padding: 50, display: 'flex', flexDirection: 'column', gap: 25 }}>
                <p style={{ fontFamily: "Poppins", fontWeight: 900, fontSize: 82, lineHeight: "90px" }}>Hello <br />there,</p>
                <p style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 22 }}>Let's get you signed into</p>
                <p style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 42, color: "#BE0C4F" }}>Amrita Student Portal</p>
            </div>
            <div style={{ padding: 50, display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', gap: 25 }}>
                <button onClick={() => { login() }} style={{ fontFamily: "Poppins", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px 20px", gap: 10, borderRadius: 5, backgroundColor: "#fafafa", border: 0, cursor: 'pointer' }}>
                    <img style={{ flexShrink: 0 }} width="30" height="30" src="https://img.icons8.com/color/48/000000/microsoft.png" alt="microsoft" />
                    <p style={{ color: "#18181B", fontSize: 18, fontWeight: 400, fontFamily: "Poppins" }}>Continue with Microsoft</p>
                </button>
                <p style={{ color: "#FAFAFA", fontSize: 18, fontWeight: 400, fontFamily: "Poppins" }}>Use the official mail ID provided by the institution</p>
            </div>
            <img className='still' src={still} />
            <img className='logo' src={logo} />
        </div>
    )
}

export default LoginPage