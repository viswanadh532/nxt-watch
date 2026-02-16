import {NavLink} from 'react-router-dom'

import {
  SidebarContainer,
  LinksList,
  LinkItem,
  StyledNavLink,
  ContactSection,
  ContactHeading,
  SocialIconsRow,
  SocialIcon,
  ContactText,
} from './styledComponents'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LinksList>
        <LinkItem>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </LinkItem>

        <LinkItem>
          <StyledNavLink to="/trending">
            Trending
          </StyledNavLink>
        </LinkItem>

        <LinkItem>
          <StyledNavLink to="/gaming">
            Gaming
          </StyledNavLink>
        </LinkItem>

        <LinkItem>
          <StyledNavLink to="/saved-videos">
            Saved Videos
          </StyledNavLink>
        </LinkItem>
      </LinksList>

      <ContactSection>
        <ContactHeading>CONTACT US</ContactHeading>

        <SocialIconsRow>
          <SocialIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialIconsRow>

        <ContactText>
          Enjoy! Now to see your channels and recommendations!
        </ContactText>
      </ContactSection>
    </SidebarContainer>
  )
}

export default Sidebar
