import proptypes from './navIcon.proptypes.js'

/** @namespace NavIcon */
/**
 * React component generating an icon contained in a square
 * @memberof NavIcon
 * @param {String} icon The icon file
 * @param {String} name The icon alt text
 */
function NavIcon({ icon, name }) {
  return (
    <div className="navIcon">
      <img src={icon} alt={name} />
    </div>
  )
}

NavIcon.propTypes = proptypes

export default NavIcon
