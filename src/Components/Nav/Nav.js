/** @namespace Nav */
/**
 * React component generating the main navigation
 * @memberof Nav
 */
function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Profil</a>
        </li>
        <li>
          <a href="#">Réglage</a>
        </li>
        <li>
          <a href="#">Communauté</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
