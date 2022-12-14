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

import propTypesDef from './Histogram.proptypes'

/** @namespace Histogram */
/**
 * Function generating the tooltip for [Recharts Tooltip component]{@link https://recharts.org/en-US/api/Tooltip}
 * @memberof Histogram
 *
 * @param {Object[]} payload Informations about the point at the current position defined by Recharts
 * @param {string} payload.dataKey Data category of the informations contained in the current object, defined by Recharts
 * @param {string} payload.unit Unit associated to the value in the current object, defined by Recharts
 * @param {number} payload.value Value of current point, defined by Recharts
 * @returns {HTMLElement} HTML element displayed as the tooltip for the Histogram component
 */
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

/**
 * React component generating a double bar histogram
 * @memberof Histogram
 * @param {User} user User informations
 */
function Histogram({ user }) {
  const [domainCalories, setDomainCalories] = useState()

  useEffect(() => {
    const maxCalories = Math.max(
      ...user.sessions.map((sess) => {
        return sess.calories
      })
    )
    setDomainCalories([0, maxCalories + 30])
  }, [user])

  return (
    <figure className="histogram chart">
      <div className="histogram-header">
        <h3>Activité quotidienne</h3>
        <figcaption>
          <div>
            <img src={OvalBlack} alt="legend poids" /> Poids (kg)
          </div>
          <div>
            <img src={OvalRed} alt="legend calories" /> Calories brûlées (kCal)
          </div>
        </figcaption>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={user.sessions}
          margin={{
            top: 52,
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

Histogram.propTypes = propTypesDef

export default Histogram
