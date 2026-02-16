import styled from 'styled-components'

export const GamingBg = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
`

export const LayoutRow = styled.div`
  display: flex;
`

export const ContentWrap = styled.div`
  flex: 1;
  padding: 16px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`

export const FailureWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  text-align: center;
`

export const FailureImg = styled.img`
  width: min(450px, 90%);
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
`

export const VideosUl = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`

export const GameCard = styled.li`
  background: transparent;
`

export const ThumbImg = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const Title = styled.p`
  margin: 8px 0 4px;
  color: ${props => (props.$dark ? '#ffffff' : '#000000')};
  font-weight: 500;
`

export const Views = styled.p`
  margin: 0;
  color: ${props => (props.$dark ? '#94a3b8' : '#475569')};
  font-size: 13px;
`
