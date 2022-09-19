import { useState, useEffect } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import userStore from '../../store/userStore'
import './histogram.css'

function Histogram({ userId }) {
  const [userActivity, setUserActivity] = useState()
  const [domainCalories, setDomainCalories] = useState()

  const loadUserActivity = async () => {
    const rep = await userStore.getActivity(userId)

    const lastTenSessions = getLastTenSessions(rep.sessions)
    setUserActivity(lastTenSessions)

    const maxDomainCalories = Math.max(
      ...rep.sessions.map((sess) => {
        return sess.calories
      })
    )
    setDomainCalories([0, maxDomainCalories + 30])
  }

  useEffect(() => {
    loadUserActivity()
  }, [])

  return (
    <div className="histogram">
      <BarChart
        width={750}
        height={230}
        data={userActivity}
        margin={{
          top: 50,
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
        <Tooltip />

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
  console.log(rep)
  return rep
}

export default Histogram
