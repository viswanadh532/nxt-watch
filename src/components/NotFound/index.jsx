import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const imageUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: isDarkTheme ? '#0f0f0f' : '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <img
        src={imageUrl}
        alt="not found"
        style={{width: '300px', marginBottom: '20px'}}
      />
      <h1 style={{color: isDarkTheme ? '#ffffff' : '#000000'}}>
        Page Not Found
      </h1>
      <p style={{color: '#64748b'}}>
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  )
}

export default NotFound
