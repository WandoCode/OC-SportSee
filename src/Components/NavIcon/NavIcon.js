import PropTypes from 'prop-types'
import './navIcon.css'

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

// TODO: (mentor) On peut utiliser un plugin pour JSDOC comme better-doc?
NavIcon.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
}

export default NavIcon
