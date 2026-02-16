import styled from 'styled-components'

export const PageBg = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
`

export const LayoutRow = styled.div`
  display: flex;
`

export const ContentWrap = styled.div`
  flex: 1;
  padding: 18px;
  display: flex;
  justify-content: center;
`

export const LoaderWrap = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureImg = styled.img`
  width: min(420px, 90%);
`

export const RetryBtn = styled.button`
  margin-top: 12px;
  background-color: #4f46e5;
  color: #ffffff;
  border: 0;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
`

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 980px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
`

export const VideoTitle = styled.h2`
  width: 100%;
  max-width: 980px;
  margin: 14px 0 10px;
  font-size: 20px;
  line-height: 1.3;
  color: ${props => (props.$dark ? '#ffffff' : '#000000')};
`

export const MetaRow = styled.div`
  width: 100%;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`

export const MetaText = styled.p`
  margin: 0;
  color: ${props => (props.$dark ? '#cbd5e1' : '#475569')};
`

export const ActionRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`

export const ActionBtn = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 600;
`

export const Hr = styled.hr`
  width: 100%;
  max-width: 980px;
  border: 0;
  border-top: 1px solid #d7dfe9;
  margin: 16px 0;
`

export const ChannelRow = styled.div`
  width: 100%;
  max-width: 980px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`

export const ChannelName = styled.p`
  margin: 0;
  font-weight: 600;
  color: ${props => (props.$dark ? '#ffffff' : '#000000')};
`

export const ChannelSubs = styled.p`
  margin: 4px 0 0;
  color: ${props => (props.$dark ? '#94a3b8' : '#64748b')};
  font-size: 13px;
`

export const Description = styled.p`
  width: 100%;
  max-width: 980px;
  margin-top: 12px;
  color: ${props => (props.$dark ? '#e2e8f0' : '#475569')};
  line-height: 1.6;
`
