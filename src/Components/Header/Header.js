import Nav from '../Nav/Nav'
import logo from '../../Assets/logo.png'
import './header.css'

function Header() {
  return (
    <header className="header">
      <img id="main-logo" src={logo} alt="" />
      <Nav />
    </header>
  )
}

export default Header
