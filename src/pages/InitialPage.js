import React from 'react'
import Loading from '../components/Loading'

function InitialPage() {
    return (
        <div style={{height: "100vh", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <Loading />
        </div>
    )
}

export default InitialPage