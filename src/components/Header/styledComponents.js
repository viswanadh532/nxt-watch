import styled from 'styled-components'

export const HeaderWrap = styled.nav`
  height: 64px;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#ffffff')};
  border-bottom: 1px solid ${props => (props.$dark ? '#313131' : '#ebebeb')};
`

export const HeaderInner = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 32px;
`

export const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const ThemeBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
`

export const LogoutBtn = styled.button`
  background: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`
export const PopupWrap = styled.div`
  padding: 18px;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#ffffff')};
  color: ${props => (props.$dark ? '#ffffff' : '#0f0f0f')};
  border-radius: 8px;
  width: 280px;
  text-align: center;
`

export const PopupBtns = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 12px;
`

export const CancelBtn = styled.button`
  background: transparent;
  border: 1px solid #64748b;
  color: #64748b;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`

export const ConfirmBtn = styled.button`
  background: #3b82f6;
  border: none;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`
