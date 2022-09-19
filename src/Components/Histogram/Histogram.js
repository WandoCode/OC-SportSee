import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

import userStore from '../../store/userStore'

function Histogram({ userId }) {
  const [userActivity, setUserActivity] = useState()
  const [domainCalories, setDomainCalories] = useState()
  const [domainKilogram, setDomainKilogram] = useState()

  const loadUserActivity = async () => {
    const rep = await userStore.getActivity(userId)
    setUserActivity(rep)

    const minDomainCalories = Math.min(
      ...rep.sessions.map((sess) => {
        return sess.calories
      })
    )

    const maxDomainCalories = Math.max(
      ...rep.sessions.map((sess) => {
        return sess.calories
      })
    )

    setDomainCalories([0, maxDomainCalories + 100])

    const minDomainKilogram = Math.min(
      ...rep.sessions.map((sess) => {
        return sess.kilogram
      })
    )

    const maxDomainKilogram = Math.max(
      ...rep.sessions.map((sess) => {
        return sess.kilogram
      })
    )

    setDomainKilogram([0, maxDomainKilogram])
    console.log(rep.sessions)
  }

  useEffect(() => {
    loadUserActivity()
  }, [])

  const CustomBar = (props) => {
    const { x, y, width, height } = props
    const getPath = (x, y, width, height) =>
      `M${x} ${y + height} H${x + width} V${y + 5} C${
        x + width
      } ${y} ${x} ${y} ${x} ${y + 5}Z`

    return <path d={getPath(x, y, width, height)} stroke="none" fill="black" />
  }

  return (
    <div
      className="histogram"
      style={{ height: '450px', width: '800px', marginTop: '20px' }}
    >
      <BarChart
        width={800}
        height={350}
        data={userActivity?.sessions}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="5 4" vertical={false} />
        <YAxis
          dataKey="kilogram"
          tickCount={3}
          yAxisId="kilogram"
          orientation="right"
        />

        <YAxis
          dataKey="calories"
          hide={true}
          domain={domainCalories}
          yAxisId="calories"
        />

        <XAxis dataKey="day" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="calories"
          className="calories"
          yAxisId="calories"
          barSize={7}
          shape={<CustomBar />}
        />
        <Bar
          dataKey="kilogram"
          className="kilogram"
          yAxisId="kilogram"
          barSize={7}
          shape={<CustomBar />}
        />
      </BarChart>
    </div>
  )
}

export default Histogram
