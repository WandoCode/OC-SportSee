import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import OvalBlack from '../../Assets/Oval.svg'
import OvalRed from '../../Assets/OvalRed.svg'
import userStore from '../../store/userStore'
import './histogram.css'

function renderTooltip({ payload }) {
  return (
    <div className="histogram-tooltip">
      <ul>
        {payload.map((entry, value) => {
          const unit = entry.dataKey === 'calories' ? 'Kcal' : 'kg'
          return (
            <li key={value}>
              {entry.value}
              {unit}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const getLastTenSessions = (sessions) => {
  let rep
  if (sessions.length > 10) {
    rep = sessions.slice(sessions.length - 10, sessions.length)
  } else {
    rep = sessions
  }
  return rep
}

function Histogram({ userId }) {
  const [userActivity, setUserActivity] = useState()
  const [domainCalories, setDomainCalories] = useState()

  const loadUserActivity = async () => {
    const rep = await userStore.getActivity(userId)

    const lastTenSessions = getLastTenSessions(rep.sessions)
    setUserActivity(lastTenSessions)

    const maxCalories = Math.max(
      ...rep.sessions.map((sess) => {
        return sess.calories
      })
    )
    setDomainCalories([0, maxCalories + 30])
  }

  useEffect(() => {
    loadUserActivity()
  }, [])

  return (
    <figure className="histogram chart">
      <div className="histogram-header">
        <h3>Activité quotidienne</h3>
        <figcaption>
          <div>
            <img src={OvalBlack} alt="" /> Poids (kg)
          </div>
          <div>
            <img src={OvalRed} alt="" /> Calories brûlées (kCal)
          </div>
        </figcaption>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userActivity}
          margin={{
            top: 62,
            right: 0,
            left: 31,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 4" vertical={false} />
          <YAxis
            dataKey="kilogram"
            tickCount={3}
            yAxisId="kilogram"
            orientation="right"
            axisLine={false}
            tickMargin={30}
            tickLine={false}
          />

          <YAxis
            dataKey="calories"
            hide={true}
            domain={domainCalories}
            yAxisId="calories"
          />

          <XAxis
            dataKey="day"
            padding={{ left: -27, right: -27 }}
            tickMargin={16}
            tickLine={false}
          />
          <Tooltip content={renderTooltip} wrapperStyle={{ outline: 0 }} />

          <Bar
            dataKey="kilogram"
            className="kilogram"
            yAxisId="kilogram"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
          <Bar
            dataKey="calories"
            className="calories"
            yAxisId="calories"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </figure>
  )
}

export default Histogram
