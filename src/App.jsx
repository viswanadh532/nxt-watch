import {Routes, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />

    <Route
      path="/trending"
      element={
        <ProtectedRoute>
          <Trending />
        </ProtectedRoute>
      }
    />

    <Route
      path="/gaming"
      element={
        <ProtectedRoute>
          <Gaming />
        </ProtectedRoute>
      }
    />

    <Route
      path="/saved-videos"
      element={
        <ProtectedRoute>
          <SavedVideos />
        </ProtectedRoute>
      }
    />

  
    <Route
      path="/videos/:id"
      element={
        <ProtectedRoute>
          <VideoItemDetails />
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default App
