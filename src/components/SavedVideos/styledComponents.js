import styled from 'styled-components'

export const SavedBg = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
`

export const LayoutRow = styled.div`
  display: flex;
  width: 100%;
`

export const ContentWrap = styled.div`
  flex: 1;
  padding: 16px;
  min-height: calc(100vh - 64px); /* Header height 64px assume */
`

export const NoSavedWrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px); /* header తీసేసి fit అవుతుంది */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  box-sizing: border-box;
`

export const NoSavedImg = styled.img`
  width: clamp(220px, 40vw, 340px); /*
  height: auto;
  margin-bottom: 14px;
`

export const NoSavedHeading = styled.h1`
  font-size: 20px;
  margin: 0 0 8px;
  color: ${props => (props.$dark ? '#ffffff' : '#000000')};
`

export const NoSavedText = styled.p`
  margin: 0;
  max-width: 520px; 
  color: ${props => (props.$dark ? '#94a3b8' : '#475569')};
`
