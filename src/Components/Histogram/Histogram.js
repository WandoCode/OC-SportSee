import { useState, useEffect } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'

import userStore from '../../store/userStore'

function Histogram({ userId }) {
  const [userActivity, setUserActivity] = useState()

  const loadUserActivity = async () => {
    const rep = await userStore.getActivity(userId)
    setUserActivity(rep)
  }

  useEffect(() => {
    loadUserActivity()
  }, [])

  return (
    <div className="histogram" style={{ height: '500px', width: '800px' }}>
      <BarChart
        width={800}
        height={300}
        data={userActivity?.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Bar dataKey="calories" fill="#8884d8" className="calories" />
        <Bar dataKey="kilogram" fill="#82ca9d" className="kilogram" />
      </BarChart>
    </div>
  )
}

export default Histogram
