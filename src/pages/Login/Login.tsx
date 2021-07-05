import { Link, useLocation, useNavigate } from 'react-router-dom'
import LoginSVG from '../../assets/images/welcome.svg'
import Loader from '../../components/Loader/Loader'
// import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import '../Signup/Signup.css'
import { useState } from 'react'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isloading, setIsloading] = useState(false)
  // const { setAuth } = useAuth()


  const { state } = useLocation()
  const navigate = useNavigate()

  const inputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value:string = event.target.value
    const name:string = event.target.name

    setUserData((prev) => {
      switch (name) {
        case 'email':
          return {
            ...userData,
            email: value,
          }
        case 'password':
          return {
            ...userData,
            password: value,
          }
        default:
          return userData
      }
    })
  }

  const loginAccount = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setIsloading(true)
    try {
      const response = await axios.post('http://localhost:3020/login', {
        email: userData.email,
        password: userData.password,
      })
      console.log(response)
      setUserData({ email: '', password: '' })

      const authToken = response.data.token
      // if (!authToken) {
      //   setError(response.data.message)
      // } else {
      //   setAuth(authToken)
      //   setAuth((prev) => {
      //     localStorage.setItem('auth-token', JSON.stringify(prev))
      //     return prev
      //   })
      //   navigate(state?.from ? state.from : '/shop')
      // }
    } catch (err) {
    //   alert('Credentials not correct!', err.message)
      console.log(err)
    }
    setIsloading(false)
  }
  return isloading ? (
    <Loader />
  ) : (
    <div className='signup'>
      <div className='signup-wrapper'>
        <img src={LoginSVG} alt='' className='login-img' />
        <h1 className='signup-heading dark-blue'>
          B<span className='purple'>A</span>C<span className='purple'>K</span>
        </h1>
        <input
          type='email'
          name='email'
          onChange={inputEvent}
          value={userData.email}
          placeholder='email : abcd@gmail.com'
          className='form-input-text'
        />
        <input
          type='password'
          name='password'
          onChange={e=>inputEvent}
          value={userData.password}
          placeholder='password'
          className='form-input-text'
        />
        <button className='full-width-primary-button' onClick={loginAccount}>
          LOGIN
        </button>
        <small>
          Don't have an account?
          <Link className='links' to='/signUp'>
            <span className='bold underlined dark-blue pad-l-xs'>Sign Up</span>
          </Link>
        </small>
      </div>
    </div>
  )
}

export default Login
