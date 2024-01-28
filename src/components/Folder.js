import React from 'react'

function Folder({ data, onClick }) {

    return (
        <a onClick={onClick} href={data.url} target='_blank' style={{ marginTop: 1.5, textDecoration: "none", color: 'white', cursor: "pointer", padding: "10px 15px", backgroundColor: "#222222", borderRadius: 5, fontSize: 14, flexGrow: 0, border: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            {
                data?.mimeType === "folder" ?
                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/ffffff/opened-folder.png" alt="opened-folder" />
                    :
                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/ffffff/file.png" alt="file" />
            }
            {data.name}
        </a>
    )
}

export default Folder