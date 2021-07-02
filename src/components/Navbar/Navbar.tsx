import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const { pathname } = useLocation()

//   const { auth, setAuth } = useAuth()

//   const logout = () => {
//     setAuth(null)
//     localStorage.removeItem("auth-token");
//   }
const [isloggedIn,setIsLoggedIn] = useState(false)

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to="/" className="links">
          <div className='navbar-brand--name  bold'>Skills-Mania</div>
        </Link>
      </div>
      <>
        {isloggedIn ? 
        <div>
              <Link
                to='/highscore'
              >
                <button className="plain-transparent-button">

                High Scores
                </button>
              </Link>
              <button className='flat-button mar-l-md' onClick={()=>setIsLoggedIn(!isloggedIn)}>
            Logout
          </button>
          </div> : (
          <button className='flat-button' onClick={()=>setIsLoggedIn(!isloggedIn)}>
            Login
          </button>
        )}
     </>
    </nav>
  )
}

export default Navbar
