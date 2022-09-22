import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'

function RadarChartFigure({ user }) {
  return (
    <figure className="radar chart chart-dark chart-small">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={user.performance}
          outerRadius={85}
          startAngle={210}
          endAngle={570}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey="data" />
        </RadarChart>
      </ResponsiveContainer>
    </figure>
  )
}

export default RadarChartFigure
