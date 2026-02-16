import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {ThreeDots} from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {ThemeContext} from '../../context/ThemeContext'
import {homeVideosApiUrl} from '../../utils/constants'
import apiStatusConstants from '../../utils/apiStatusConstants'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  HomeBg,
  ContentWrap,
  Banner,
  BannerLeft,
  BannerLogo,
  BannerText,
  GetItNowButton,
  CloseBtn,
  SearchBarWrap,
  SearchInput,
  SearchButton,
  LoaderContainer,
  FailureWrap,
  FailureImg,
  RetryBtn,
  NoVideosWrap,
  NoVideosImg,
  VideosUl,
  VideoLi,
  ThumbImg,
  VideoBottom,
  ChannelLogo,
  VideoMeta,
  VideoTitle,
  VideoInfo,
} from './styledComponents'

const Home = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videos, setVideos] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  const getVideos = async searchText => {
    setApiStatus(apiStatusConstants.inProgress)

    const jwtToken = Cookies.get('jwt_token')
    const url = `${homeVideosApiUrl}${encodeURIComponent(searchText)}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {Authorization: `Bearer ${jwtToken}`},
      })

      if (!response.ok) {
        setApiStatus(apiStatusConstants.failure)
        return
      }

      const data = await response.json()

      const updated = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channelName: each.channel.name,
        channelProfileUrl: each.channel.profile_image_url,
      }))

      setVideos(updated)
      setApiStatus(apiStatusConstants.success)
    } catch {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      getVideos('')
    }, 0)

    return () => clearTimeout(timerId)
  
  }, [])

  const onClickSearch = () => {
    getVideos(searchInput)
  }

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
      <RetryBtn type="button" onClick={() => getVideos(searchInput)}>
        Retry
      </RetryBtn>
    </FailureWrap>
  )

  const renderNoVideos = () => (
    <NoVideosWrap>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <h1 style={{color: isDarkTheme ? '#ffffff' : '#000000'}}>
        No Search results found
      </h1>
      <p style={{color: isDarkTheme ? '#94a3b8' : '#475569'}}>
        Try different keywords or remove search filter
      </p>
      <RetryBtn type="button" onClick={() => getVideos('')}>
        Retry
      </RetryBtn>
    </NoVideosWrap>
  )

  const renderVideos = () =>
    videos.length === 0 ? (
      renderNoVideos()
    ) : (
      <VideosUl>
        {videos.map(each => {
          const timeAgo = `${formatDistanceToNow(new Date(each.publishedAt))} ago`

          return (
            <VideoLi key={each.id}>
  
              <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
                <ThumbImg src={each.thumbnailUrl} alt="video thumbnail" />

                <VideoBottom>
                  <ChannelLogo
                    src={each.channelProfileUrl}
                    alt="channel logo"
                  />

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

  const renderHome = () => {
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
    <HomeBg data-testid="home" $dark={isDarkTheme}>
      <Header />

      <div style={{display: 'flex'}}>
        <Sidebar />

        <ContentWrap>
          {showBanner && (
            <Banner data-testid="banner">
              <BannerLeft>
                <BannerLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerText>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerText>
                <GetItNowButton type="button">GET IT NOW</GetItNowButton>
              </BannerLeft>

              <CloseBtn
                type="button"
                data-testid="close"
                onClick={() => setShowBanner(false)}
              >
                x
              </CloseBtn>
            </Banner>
          )}

          <SearchBarWrap>
            <SearchInput
              type="search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Search"
            />
            <SearchButton
              type="button"
              data-testid="searchButton"
              onClick={onClickSearch}
            >
              Search
            </SearchButton>
          </SearchBarWrap>

          {renderHome()}
        </ContentWrap>
      </div>
    </HomeBg>
  )
}

export default Home
