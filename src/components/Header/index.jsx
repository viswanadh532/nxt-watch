import {useContext} from 'react'
import Cookies from 'js-cookie'
import {useNavigate, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {ThemeContext} from '../../context/ThemeContext'

import {
  HeaderWrap,
  HeaderInner,
  Logo,
  RightBox,
  ThemeBtn,
  ProfileImg,
  LogoutBtn,
  PopupWrap,
  PopupBtns,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

const Header = () => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeContext)
  const navigate = useNavigate()

  const onConfirmLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }

  return (
    <HeaderWrap $dark={isDarkTheme}>
      <HeaderInner>
        <Link to="/">
          <Logo
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
        </Link>

        <RightBox>
          <ThemeBtn
            type="button"
            data-testid="theme"
            onClick={toggleTheme}
            $dark={isDarkTheme}
            aria-label="theme"
          >
            {isDarkTheme ? '🌙' : '☀️'}
          </ThemeBtn>

          <ProfileImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />

          <Popup
            modal
            trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
            className="popup-content"
          >
            {close => (
              <PopupWrap $dark={isDarkTheme}>
                <p>Are you sure you want to logout?</p>

                <PopupBtns>
                  <CancelBtn type="button" onClick={() => close()}>
                    Cancel
                  </CancelBtn>
                  <ConfirmBtn
                    type="button"
                    onClick={() => {
                      close()
                      onConfirmLogout()
                    }}
                  >
                    Confirm
                  </ConfirmBtn>
                </PopupBtns>
              </PopupWrap>
            )}
          </Popup>
        </RightBox>
      </HeaderInner>
    </HeaderWrap>
  )
}

export default Header
