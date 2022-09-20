import { useEffect, useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from 'recharts'
import userStore from '../../store/userStore'
import './lineChartFigure.css'

function LineChartFigure({ userId }) {
  const weekDaysAbrv = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const [avgSessions, setAvgSessions] = useState()

  const nameSessionDays = (sessions) => {
    return sessions.map((sess) => {
      return {
        day: weekDaysAbrv.at(sess.day - 1),
        sessionLength: sess.sessionLength,
      }
    })
  }

  const getAvgSessions = async () => {
    const rep = await userStore.getAvgSession(userId)
    const sessionsWithNamedDays = nameSessionDays(rep.sessions)
    setAvgSessions(sessionsWithNamedDays)
  }

  useEffect(() => {
    getAvgSessions()
  }, [])

  return (
    <figure className="lineChart chart chart-red">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={avgSessions}
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
