import {useEffect, useState, useContext, useCallback} from 'react'
import Cookies from 'js-cookie'
import {useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {ThreeDots} from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {ThemeContext} from '../../context/ThemeContext'
import apiStatusConstants from '../../utils/apiStatusConstants'
import {videoItemDetailsApiUrl} from '../../utils/constants'

const VideoItemDetails = () => {
  const {id} = useParams()
  const {isDarkTheme, toggleSaveVideo, isVideoSaved} = useContext(ThemeContext)

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videoDetails, setVideoDetails] = useState(null)

  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbError, setThumbError] = useState(false)

  const getVideoDetails = useCallback(async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')

    try {
      const response = await fetch(`${videoItemDetailsApiUrl}/${id}`, {
        headers: {Authorization: `Bearer ${jwtToken}`},
      })

      if (!response.ok) {
        setApiStatus(apiStatusConstants.failure)
        return
      }

      const data = await response.json()
      const v = data.video_details

      setVideoDetails({
        id: v.id,
        title: v.title,
        videoUrl: v.video_url,
        thumbnailUrl: v.thumbnail_url,
        viewCount: v.view_count,
        publishedAt: v.published_at,
        description: v.description,
        channel: {
          name: v.channel.name,
          profileImageUrl: v.channel.profile_image_url,
          subscriberCount: v.channel.subscriber_count,
        },
      })

      // reset states when video changes
      setIsPlaying(false)
      setThumbError(false)
      setIsLiked(false)
      setIsDisliked(false)

      setApiStatus(apiStatusConstants.success)
    } catch {
      setApiStatus(apiStatusConstants.failure)
    }
  }, [id])

  useEffect(() => {
    getVideoDetails()
  }, [getVideoDetails])

  const onClickLike = () => {
    setIsLiked(prev => !prev)
    setIsDisliked(false)
  }

  const onClickDislike = () => {
    setIsDisliked(prev => !prev)
    setIsLiked(false)
  }

  const onClickSave = () => {
    toggleSaveVideo(videoDetails)
  }

  const renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <ThreeDots height="50" width="50" color="#ffffff" />
    </div>
  )

  const renderFailure = () => (
    <div style={{textAlign: 'center', padding: '30px', width: '100%'}}>
      <img
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
        style={{width: '300px', maxWidth: '90%'}}
      />
      <h1 style={{color: isDarkTheme ? '#ffffff' : '#000000'}}>
        Oops! Something Went Wrong
      </h1>
      <p style={{color: isDarkTheme ? '#94a3b8' : '#475569'}}>
        We are having some trouble to complete your request.
      </p>
      <button type="button" onClick={getVideoDetails}>
        Retry
      </button>
    </div>
  )

  const renderSuccess = () => {
    const saved = isVideoSaved(videoDetails.id)
    const timeAgo = `${formatDistanceToNow(
      new Date(videoDetails.publishedAt),
    )} ago`

    const activeColor = '#2563eb'
    const inActiveColor = '#64748b'

    return (
      <div style={{padding: '20px', width: '100%'}}>
        {/* VIDEO PLAYER */}
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            position: 'relative',
            paddingTop: '56.25%',
            backgroundColor: '#000000',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <ReactPlayer
            url={videoDetails.videoUrl}
            playing={isPlaying}
            controls={true}
            playsinline={true}
            width="100%"
            height="100%"
            style={{position: 'absolute', top: 0, left: 0}}
          />

          {/* Thumbnail */}
          {!isPlaying && !thumbError && (
            <img
              src={videoDetails.thumbnailUrl}
              alt="video thumbnail"
              onError={() => setThumbError(true)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}

          {/* Center Play / Pause */}
          <button
            type="button"
            onClick={() => {
              if (!isPlaying) {
                setIsPlaying(true)
              } else {
                setIsPlaying(false)
              }
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '12px 18px',
              borderRadius: '999px',
              border: '0px',
              cursor: 'pointer',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#ffffff',
            }}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>

        {/* DETAILS */}
        <h1 style={{color: isDarkTheme ? '#ffffff' : '#000000'}}>
          {videoDetails.title}
        </h1>

        <p style={{color: isDarkTheme ? '#94a3b8' : '#475569'}}>
          {videoDetails.viewCount} views • {timeAgo}
        </p>

        {/* LIKE / DISLIKE / SAVE */}
        <div style={{display: 'flex', gap: '12px', margin: '12px 0'}}>
          <button
            type="button"
            onClick={onClickLike}
            style={{
              color: isLiked ? activeColor : inActiveColor,
              background: 'transparent',
              border: 'none',
            }}
          >
            Like
          </button>

          <button
            type="button"
            onClick={onClickDislike}
            style={{
              color: isDisliked ? activeColor : inActiveColor,
              background: 'transparent',
              border: 'none',
            }}
          >
            Dislike
          </button>

          <button
            type="button"
            onClick={onClickSave}
            style={{
              color: saved ? activeColor : inActiveColor,
              background: 'transparent',
              border: 'none',
            }}
          >
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>

        <hr />

        {/* CHANNEL */}
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <img
            src={videoDetails.channel.profileImageUrl}
            alt="channel logo"
            style={{width: '48px', height: '48px', borderRadius: '24px'}}
          />
          <div>
            <p style={{color: isDarkTheme ? '#ffffff' : '#000000', margin: 0}}>
              {videoDetails.channel.name}
            </p>
            <p style={{color: isDarkTheme ? '#94a3b8' : '#475569', margin: 0}}>
              {videoDetails.channel.subscriberCount} subscribers
            </p>
          </div>
        </div>

        <p style={{color: isDarkTheme ? '#f1f5f9' : '#1e293b'}}>
          {videoDetails.description}
        </p>
      </div>
    )
  }

  const bg = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

  return (
    <div
      data-testid="videoItemDetails"
      style={{minHeight: '100vh', background: bg}}
    >
      <Header />
      <div style={{display: 'flex'}}>
        <Sidebar />
        {apiStatus === apiStatusConstants.inProgress && renderLoader()}
        {apiStatus === apiStatusConstants.failure && renderFailure()}
        {apiStatus === apiStatusConstants.success &&
          videoDetails &&
          renderSuccess()}
      </div>
    </div>
  )
}

export default VideoItemDetails
