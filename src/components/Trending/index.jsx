import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {ThreeDots} from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {ThemeContext} from '../../context/ThemeContext'
import {trendingVideosApiUrl} from '../../utils/constants'
import apiStatusConstants from '../../utils/apiStatusConstants'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingBg,
  ContentWrap,
  LoaderContainer,
  FailureWrap,
  FailureImg,
  RetryBtn,
  VideosUl,
  VideoLi,
  ThumbImg,
  VideoBottom,
  ChannelLogo,
  VideoMeta,
  VideoTitle,
  VideoInfo,
} from './styledComponents'

const Trending = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videos, setVideos] = useState([])

  const getTrendingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')

    try {
      const response = await fetch(trendingVideosApiUrl, {
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
        publishedAt: each.published_at,
        channelName: each.channel.name,
        channelProfileUrl: each.channel.profile_image_url,
      }))

      setVideos(updatedVideos)
      setApiStatus(apiStatusConstants.success)
    } catch {
      setApiStatus(apiStatusConstants.failure)
    }
  }


  useEffect(() => {
    const timerId = setTimeout(() => {
      getTrendingVideos()
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
      <RetryBtn type="button" onClick={getTrendingVideos}>
        Retry
      </RetryBtn>
    </FailureWrap>
  )

  const renderVideos = () => (
    <VideosUl>
      {videos.map(each => {
        const timeAgo = `${formatDistanceToNow(new Date(each.publishedAt))} ago`

        return (
          <VideoLi key={each.id}>
            <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
              <ThumbImg src={each.thumbnailUrl} alt="video thumbnail" />
              <VideoBottom>
                <ChannelLogo src={each.channelProfileUrl} alt="channel logo" />
                <VideoMeta>
                  <VideoTitle $dark={isDarkTheme}>{each.title}</VideoTitle>
                  <VideoInfo $dark={isDarkTheme}>{each.channelName}</VideoInfo>
                  <VideoInfo $dark={isDarkTheme}>
                    {each.viewCount} views • {timeAgo}
                  </VideoInfo>
                </VideoMeta>
              </VideoBottom>
            </Link>
          </VideoLi>
        )
      })}
    </VideosUl>
  )

  const renderTrending = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoader()
      case apiStatusConstants.failure:
        return renderFailure()
      case apiStatusConstants.success:
        return renderVideos()
      default:
        return null
    }
  }

  return (
    <TrendingBg data-testid="trending" $dark={isDarkTheme}>
      <Header />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <ContentWrap>{renderTrending()}</ContentWrap>
      </div>
    </TrendingBg>
  )
}

export default Trending
