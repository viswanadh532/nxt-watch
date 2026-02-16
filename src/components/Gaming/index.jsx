import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {ThreeDots} from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import {ThemeContext} from '../../context/ThemeContext'

import apiStatusConstants from '../../utils/apiStatusConstants'
import {gamingVideosApiUrl} from '../../utils/constants'

import {
  GamingBg,
  LayoutRow,
  ContentWrap,
  LoaderContainer,
  FailureWrap,
  FailureImg,
  RetryBtn,
  VideosUl,
  GameCard,
  ThumbImg,
  Title,
  Views,
} from './styledComponents'

const Gaming = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videos, setVideos] = useState([])

  const getGamingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')

    try {
      const response = await fetch(gamingVideosApiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })

      if (!response.ok) {
        setApiStatus(apiStatusConstants.failure)
        return
      }

      const data = await response.json()

      const updatedVideos = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      setVideos(updatedVideos)
      setApiStatus(apiStatusConstants.success)
    } catch {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  
  useEffect(() => {
    const timerId = setTimeout(() => {
      getGamingVideos()
    }, 0)

    return () => clearTimeout(timerId)
  
  }, [])

  const renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <ThreeDots height="50" width="50" color="#ffffff" />
    </LoaderContainer>
  )

  const renderFailure = () => (
    <FailureWrap>
      <FailureImg
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <h1 style={{color: isDarkTheme ? '#ffffff' : '#000000'}}>
        Oops! Something Went Wrong
      </h1>
      <p style={{color: isDarkTheme ? '#94a3b8' : '#475569'}}>
        We are having some trouble to complete your request.
      </p>
      <RetryBtn type="button" onClick={getGamingVideos}>
        Retry
      </RetryBtn>
    </FailureWrap>
  )

  const renderSuccess = () => (
    <VideosUl>
      {videos.map(each => (
        <GameCard key={each.id}>
          <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
            <ThumbImg src={each.thumbnailUrl} alt="video thumbnail" />
            <Title $dark={isDarkTheme}>{each.title}</Title>
            <Views $dark={isDarkTheme}>
              {each.viewCount} Watching Worldwide
            </Views>
          </Link>
        </GameCard>
      ))}
    </VideosUl>
  )

  const renderGaming = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoader()
      case apiStatusConstants.failure:
        return renderFailure()
      case apiStatusConstants.success:
        return renderSuccess()
      default:
        return null
    }
  }

  return (
    <GamingBg data-testid="gaming" $dark={isDarkTheme}>
      <Header />
      <LayoutRow>
        <Sidebar />
        <ContentWrap>{renderGaming()}</ContentWrap>
      </LayoutRow>
    </GamingBg>
  )
}

export default Gaming
