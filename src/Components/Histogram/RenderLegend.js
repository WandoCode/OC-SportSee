const RenderLegend = (props) => {
  const { payload } = props
  payload[0].text = 'Poids (kg)'
  payload[1].text = 'Calories brûlées (kCal)'

  return (
    <div className="histogram-header">
      <h3>Activité quotidienne</h3>
      <ul className="graph-legend">
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>
            <svg
              viewBox="0 0 32 32"
              className="svg-dot"
              id={`svg-dot-${entry.value}`}
            >
              <path
                cx="16"
                cy="16"
                transform="translate(16, 16)"
                d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
              ></path>
            </svg>
            {entry.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RenderLegend
