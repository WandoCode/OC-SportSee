/** @namespace Detail */
/**
 * React component generating a small icon and description of a specific food category
 * @memberof Detail
 * @param {String} value The value to display
 * @param {File} icon The file of the icon to use
 * @param {String} description The food category
 * @param {String} unit The unit associated the the value
 */
function Detail({ value, icon, description, unit }) {
  return (
    <div className={`detail ${description.toLowerCase()}`}>
      <div className="img-wrapper">
        <img src={icon} alt="calories" />
      </div>
      <div className="detail-text">
        <div className="detail-value">{`${value}${unit}`} </div>
        <div className="detail-description">{description}</div>
      </div>
    </div>
  )
}

export default Detail
