import {useContext} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar'
import {ThemeContext} from '../../context/ThemeContext'

const SavedVideos = () => {
  const {savedVideos, isDarkTheme} = useContext(ThemeContext)

  const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
  const textColor = isDarkTheme ? '#ffffff' : '#000000'
  const subTextColor = isDarkTheme ? '#94a3b8' : '#475569'

  const renderNoSaved = () => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
        style={{width: '300px', maxWidth: '90%'}}
      />
      <h1 style={{color: textColor}}>No Saved Videos Found</h1>
      <p style={{color: subTextColor}}>You can save your videos while watching them</p>
    </div>
  )

  const renderSavedList = () => (
    <ul style={{listStyleType: 'none', paddingLeft: 0}}>
      {savedVideos.map(video => (
        <li key={video.id} style={{marginBottom: '16px'}}>
          <Link to={`/videos/${video.id}`} style={{textDecoration: 'none', color: textColor}}>
            <img
              src={video.thumbnailUrl || video.thumbnail_url}
              alt="video thumbnail"
              style={{width: '280px', maxWidth: '100%', borderRadius: '8px'}}
            />
            <p style={{color: textColor}}>{video.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <div data-testid="savedVideos" style={{minHeight: '100vh', backgroundColor: bgColor}}>
      <Header />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{padding: '20px', width: '100%'}}>
          {savedVideos.length === 0 ? renderNoSaved() : renderSavedList()}
        </div>
      </div>
    </div>
  )
}

export default SavedVideos
