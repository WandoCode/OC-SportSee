import {
  ResponsiveContainer,
  RadialBar,
  RadialBarChart,
  Legend,
} from 'recharts'

function PieChartFigure({ user }) {
  const renderLegend = () => {
    return (
      <figcaption className="pieLegend">
        <span className="bold">{user.score[1].todayScore}%</span>
        <br />
        de votre
        <br />
        objectif
      </figcaption>
    )
  }

  return (
    <figure className="pie chart chart-small">
      <h3>Score</h3>
      <ResponsiveContainer width="80%" height="80%">
        <RadialBarChart
          startAngle={560}
          endAngle={200}
          data={user.score}
          outerRadius={93}
          innerRadius={73}
        >
          <RadialBar dataKey="todayScore" cornerRadius={10} />
          <Legend verticalAlign="middle" content={renderLegend} />
        </RadialBarChart>
      </ResponsiveContainer>
    </figure>
  )
}

export default PieChartFigure
