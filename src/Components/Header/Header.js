import Nav from '../Nav/Nav'
import logo from '../../Assets/logo.png'

function Header() {
  return (
    <header className="header">
      <img id="main-logo" src={logo} alt="" />
      <Nav />
    </header>
  )
}

export default Header
