import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebaseConfig'
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Dashboard() {

    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    })

    return (
        <div style={{ backgroundColor: '#09090B', height: "100%", width: "100%", display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: 'start', minHeight: "100vh", minWidth: '100vw', flexDirection: 'column' }}>
            <NavBar data={user} active={location.pathname} />
            <div style={{ padding: 30, width: "96%", display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'white' }}>Dashboard</p>
            </div>
        </div>
    )
}

export default Dashboard