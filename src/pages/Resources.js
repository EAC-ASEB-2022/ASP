import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Resources() {

    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    })

    const [data, setData] = useState(null);

    const getData = (id) => {
        fetch(`http://localhost:8000/getfiles/${id}`)
        .then((res)=>res.json())
        .then((res)=>{setData(res)})
    }

    useEffect(()=>{
        fetch("http://localhost:8000/getinitial/")
        .then((res)=>res.json())
        .then((res)=>{setData(res)})
    }, [])

    return (
        <div style={{ backgroundColor: '#09090B', height: "100%", width: "100%", display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: 'start', minHeight: "100vh", minWidth: '100vw'}}>
            <NavBar data={user} active={location.pathname} />
            <div style={{ padding: 30, width: "96%", display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                {
                    data?.map((item)=><p key={item.id} onClick={()=>{getData(item.id)}} style={{color:'white'}}>{item.name}</p>)
                }
            </div>
        </div>
    )
}

export default Resources