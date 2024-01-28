import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import { useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Loading from '../components/Loading';
import Folder from '../components/Folder';
import { store } from '../store';

function Resources() {

    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    })

    const [data, setData] = useState(null);

    const getData = (id) => {
        setLoading(true)
        fetch(`http://localhost:8000/getfiles/${id}`)
            .then((res) => res.json())
            .then((res) => {
                store.dispatch({
                    type: 'addData',
                    payload: {
                        data: res
                    }
                })
                setData(store.getState().setDriveData[store.getState().setDriveData.length - 1].data)
                setLoading(false)
            })
    }

    const getInitial = () => {
        setLoading(true)
        fetch("http://localhost:8000/getinitial/")
            .then((res) => res.json())
            .then((res) => {
                store.dispatch({
                    type: 'addData',
                    payload: {
                        data: res
                    }
                })
                setData(store.getState().setDriveData[store.getState().setDriveData.length - 1].data)
                setLoading(false)
            })
    }

    const backButton = () => {
        if (store.getState().setDriveData.length > 1) {
            store.dispatch({
                type: "removeData",
            })
            store.dispatch({
                type: 'removePath',
            })
        }
        setData(store.getState().setDriveData[store.getState().setDriveData.length - 1].data)
    }

    const updatePath = (name) => {
        store.dispatch({
            type: "setPath",
            payload: {
                data: name
            }
        })
    }

    useEffect(() => {
        getInitial();
    }, [])

    return (
        <div style={{ backgroundColor: '#09090B', height: "100%", width: "100%", display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: 'start', minHeight: "100vh", minWidth: '100vw' }}>
            <NavBar data={user} active={location.pathname} />
            <div style={{ padding: 30, width: "96%", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {
                    loading ?
                        <Loading />
                        :
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, paddingBottom: 20 }}>
                                <img onClick={() => { backButton() }} style={{ cursor: 'pointer' }} width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/c0c0c0/circled-chevron-left--v2.png" alt="circled-chevron-left--v2" />
                                <p style={{ color: '#c0c0c0', fontSize: 14, flexGrow: 0 }}>{store.getState().pathSet.pathname}</p>
                            </div>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                                {
                                    data?.map((item) =>
                                        <Folder data={item} key={item.id} onClick={() => {
                                            if (item.mimeType === "folder") {
                                                getData(item.id); updatePath(item.name)
                                            }
                                        }} />
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Resources