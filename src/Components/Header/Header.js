import Nav from '../Nav/Nav'
import logo from '../../Assets/logo.png'
/** @namespace Header */
/**
 * React component generating the header of the website
 * @memberof Header
 */
function Header() {
  return (
    <header className="header">
      <img id="main-logo" src={logo} alt="" />
      <Nav />
    </header>
  )
}

export default Header
