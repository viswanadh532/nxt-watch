import styled from 'styled-components'

export const TrendingBg = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
`

export const ContentWrap = styled.div`
  flex: 1;
  padding: 24px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const FailureWrap = styled.div`
  text-align: center;
`

export const FailureImg = styled.img`
  width: 300px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`

export const VideosUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

export const VideoLi = styled.li`
  width: 300px;
  margin: 16px;
`

export const ThumbImg = styled.img`
  width: 100%;
`

export const VideoBottom = styled.div`
  display: flex;
  margin-top: 12px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
`

export const VideoMeta = styled.div``

export const VideoTitle = styled.p`
  color: ${props => (props.$dark ? '#ffffff' : '#000000')};
  font-weight: 500;
`

export const VideoInfo = styled.p`
  color: #64748b;
  font-size: 14px;
`
