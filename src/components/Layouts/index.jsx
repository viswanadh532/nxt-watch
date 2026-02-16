import Header from '../Header'
import Sidebar from '../Sidebar'
import {LayoutWrap, MainWrap, PageWrap} from './styledComponents'

const Layout = ({children}) => (
  <LayoutWrap>
    <Header />
    <MainWrap>
      <Sidebar />
      <PageWrap>{children}</PageWrap>
    </MainWrap>
  </LayoutWrap>
)

export default Layout
