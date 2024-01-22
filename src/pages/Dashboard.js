import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/AmritaLogo.png"

function Dashboard() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    })

    const logout = () => {
        signOut(auth)
            .then(() => {
                navigate("/login", { replace: true })
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div style={{ backgroundColor: '#09090B', height: "100%", width: "100%", display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', minHeight: "100vh", minWidth: '100vw' }}>
            <p className='username'>
                {user?.displayName}
            </p>
            <button onClick={() => { logout() }}>Log out</button>
        </div>
    )
}

export default Dashboard