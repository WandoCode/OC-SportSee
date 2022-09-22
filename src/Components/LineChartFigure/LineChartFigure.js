import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from 'recharts'

function LineChartFigure({ user }) {
  return (
    <figure className="lineChart chart chart-red chart-small">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={user.avgSessions}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 80,
          }}
        >
          <Tooltip cursor={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={15}
            type="category"
            interval="preserveStartEnd"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide />

          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#FEA2A3" />
              <stop offset="100%" stopColor="#FCE4E4" />
            </linearGradient>
          </defs>

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            dot={false}
            activeDot={{ stroke: 'white', strokeWidth: 4, r: 1 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </figure>
  )
}

export default LineChartFigure
