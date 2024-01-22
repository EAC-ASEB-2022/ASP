import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebaseConfig';

function InitialPage() {

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setTimeout(()=> {
                    navigate("/dashboard", {replace: true})
                }, 2000)
            }
            else {
                setTimeout(()=> {
                    navigate("/login", {replace: true})
                }, 2000)
            }
        })
    })

    return (
        <div style={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: "#09090B" }}>
            <Loading />
        </div>
    )
}

export default InitialPage