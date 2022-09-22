import { ResponsiveContainer, RadialBar, RadialBarChart } from 'recharts'

function PieChartFigure({ user }) {
  return (
    <figure className="pie chart">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={560}
          endAngle={200}
          data={user.score}
          outerRadius={70}
          innerRadius={50}
        >
          <RadialBar dataKey="todayScore" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
    </figure>
  )
}

export default PieChartFigure
