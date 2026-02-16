import {useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {Navigate, useNavigate} from 'react-router-dom'
import {ThemeContext} from '../../context/ThemeContext'
import {loginApiUrl} from '../../utils/constants'
import {
  LoginContainer,
  LoginCard,
  Logo,
  Input,
  Label,
  Button,
  ErrorMsg,
  CheckboxContainer,  
} from './styledComponents'

const Login = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const navigate = useNavigate()


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken) {
    return <Navigate to="/" replace />
  }

  const submitForm = async event => {
    event.preventDefault()
    setErrorMsg('')

    const response = await fetch(loginApiUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    })

    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
  
      navigate('/', {replace: true})
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <LoginContainer $dark={isDarkTheme}>
      <LoginCard $dark={isDarkTheme}>
        <Logo
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="website logo"
        />
        <form onSubmit={submitForm}>
          <Label $dark={isDarkTheme} htmlFor="username">
            USERNAME
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <Label $dark={isDarkTheme} htmlFor="password">
            PASSWORD
          </Label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <CheckboxContainer $dark={isDarkTheme}>
            <input
              id="showPassword"
              type="checkbox"
              onChange={() => setShowPassword(prev => !prev)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </CheckboxContainer>

          <Button type="submit">Login</Button>
          {errorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </form>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
