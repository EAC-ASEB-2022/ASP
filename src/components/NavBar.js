import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

function NavBar({data, active}) {

    const navigate = useNavigate();

    const handleNavbar = (path) => {
        navigate(path)
    }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: "96%", alignItems: 'center', position: 'sticky', top: 0, padding: 30}}>
        <div style={{fontFamily: "Poppins", fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <p style={{color: '#c0c0c0'}}>Hello</p>
            <p style={{color: "#ffffff"}}>{data?.displayName.split("-")[0]}</p>
        </div>
        <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
            <button style={{fontFamily: "Poppins", background: "none", color: active == "/timetable" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Timetable</button>
            <button style={{fontFamily: "Poppins", background: "none", color: active == "/assignments" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Assignments</button>
            <button style={{fontFamily: "Poppins", background: "none", color: active == "/marks" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Marks/Grades</button>
            <button style={{fontFamily: "Poppins", background: "none", color: active == "/canteen" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Canteen</button>
            <button style={{fontFamily: "Poppins", background: "none", color: active == "/feed" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Feed</button>
            <button onClick={(e)=>{handleNavbar(e.target.value)}} value={"/resources"} style={{fontFamily: "Poppins", background: "none", color: active == "/resources" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Resources</button>
            <button style={{fontFamily: "Poppins", background: "none", color: active == "/info" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Presonal Info</button>
            <button style={{fontFamily: "Poppins", background: "none", color: active == "/attendance" ? "#ffffff" : "#C0C0C0", border: 0, padding: 0, cursor: 'pointer'}}>Attendance</button>
        </div>
    </div>
  )
}

export default NavBar