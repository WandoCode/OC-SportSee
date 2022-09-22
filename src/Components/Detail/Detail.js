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
