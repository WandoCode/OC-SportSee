import proptypes from './navIcon.proptypes.js'

/**
 * An icon contained in a square
 * @param {String} icon The icon file
 * @param {String} name The icon alt text
 */
function NavIcon(props) {
  const { icon, name } = props

  return (
    <div className="navIcon">
      <img src={icon} alt={name} />
    </div>
  )
}

NavIcon.propTypes = proptypes

export default NavIcon
