import React from 'react'
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
const auth = false;

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <div className='navbar-brand--name  bold'>Skills-Mania</div>
      </div>
      <>
        {true ? (
          <button className='flat-button' onClick={()=>{}}>
            Login
          </button>
        ) : (
          <>
            <div>
              <Link
                className={pathname === '/login' ? 'links bold' : 'links'}
                to='/login'
              >
                Login
              </Link>
            </div>
            <Link
              className={pathname === '/signUp' ? 'links bold' : 'links'}
              to='/signUp'
            >
              <button className='transparent-button'>Register</button>
            </Link>
          </>
        )}
     </>
    </nav>
  )
}

export default Navbar
