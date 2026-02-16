import styled from 'styled-components'

export const HomeBg = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$dark ? '#181818' : '#f9f9f9')};
  padding: 16px;
`

export const ContentWrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 16px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`

export const BannerLeft = styled.div`
  max-width: 420px;
`

export const BannerLogo = styled.img`
  width: 140px;
  margin-bottom: 10px;
`

export const BannerText = styled.p`
  color: #1e293b;
  font-size: 14px;
  margin: 0 0 12px;
`

export const GetItNowButton = styled.button`
  background: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
`

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`


export const SearchBarWrap = styled.div`
  display: flex;
  max-width: 500px;
  margin-bottom: 16px;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #cbd5e1;
  outline: none;
`

export const SearchButton = styled.button`
  width: 60px;
  border: 1px solid #cbd5e1;
  background: #f1f5f9;
  cursor: pointer;
`


export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`


export const FailureWrap = styled.div`
  text-align: center;
  margin-top: 40px;

  h1 {
    font-size: 22px;
  }
  p {
    color: #616e7c;
  }
`

export const FailureImg = styled.img`
  width: 260px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
`

export const NoVideosWrap = styled.div`
  text-align: center;
  margin-top: 40px;

  h1 {
    font-size: 22px;
  }
  p {
    color: #616e7c;
  }
`

export const NoVideosImg = styled.img`
  width: 260px;
`


export const VideosUl = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const VideoLi = styled.li``

export const ThumbImg = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VideoBottom = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 999px;
`

export const VideoMeta = styled.div`
  flex: 1;
`

export const VideoTitle = styled.p`
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.$dark ? '#f8fafc' : '#1e293b')};
`

export const VideoInfo = styled.p`
  margin: 0 0 4px;
  font-size: 12px;
  color: ${props => (props.$dark ? '#94a3b8' : '#475569')};
`
