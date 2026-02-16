import {useState, useCallback, useMemo} from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [savedVideos, setSavedVideos] = useState([])

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prev => !prev)
  }, [])

  const isVideoSaved = useCallback(
    id => savedVideos.some(each => each.id === id),
    [savedVideos],
  )

  const toggleSaveVideo = useCallback(video => {
    setSavedVideos(prev => {
      const alreadySaved = prev.some(each => each.id === video.id)
      if (alreadySaved) {
        return prev.filter(each => each.id !== video.id)
      }
      return [...prev, video]
    })
  }, [])

  const value = useMemo(
    () => ({
      isDarkTheme,
      toggleTheme,
      savedVideos,
      toggleSaveVideo,
      isVideoSaved,
    }),
    [isDarkTheme, toggleTheme, savedVideos, toggleSaveVideo, isVideoSaved],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
