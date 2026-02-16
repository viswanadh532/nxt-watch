

import {createContext, useEffect, useState} from 'react'

const SAVED_VIDEOS_KEY = 'nxtwatch_saved_videos'

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  toggleSaveVideo: () => {},
  isVideoSaved: () => false,
})

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const [savedVideos, setSavedVideos] = useState(() => {
    try {
      const stored = localStorage.getItem(SAVED_VIDEOS_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const toggleTheme = () => setIsDarkTheme(prev => !prev)

  const isVideoSaved = id => savedVideos.some(each => each.id === id)

  const toggleSaveVideo = video => {
    setSavedVideos(prev => {
      const exists = prev.some(each => each.id === video.id)
      if (exists) {
        return prev.filter(each => each.id !== video.id)
      }
      return [...prev, video]
    })
  }


  useEffect(() => {
    try {
      localStorage.setItem(SAVED_VIDEOS_KEY, JSON.stringify(savedVideos))
    } catch {
    }
  }, [savedVideos])

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        savedVideos,
        toggleSaveVideo,
        isVideoSaved,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
