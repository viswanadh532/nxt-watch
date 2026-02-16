import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const SidebarContainer = styled.div`
  width: 240px;
  min-height: calc(100vh - 64px);
  background-color: #ffffff;   
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const LinkItem = styled.li`
  margin-bottom: 8px;
`

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #475569;
  font-weight: 500;

  &.active {
    background-color: #e2e8f0;
    color: #000000;
  }
`

export const ContactSection = styled.div`
  padding: 10px 6px;
`

export const ContactHeading = styled.p`
  margin: 0 0 12px 0;
  font-weight: 700;
  color: #1e293b;   
`

export const SocialIconsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`

export const SocialIcon = styled.img`
  width: 28px;
  height: 28px;
`

export const ContactText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #475569;  
`
