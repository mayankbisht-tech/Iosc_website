import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate=useNavigate();
    return (
    <div>
        <h1>404 | Page Not Found</h1>
        <br />
        <button onClick={()=>navigate('/')}>Go To Home</button>
    </div>
  )
}
export default NotFound