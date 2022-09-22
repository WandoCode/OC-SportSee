import Histogram from '../Histogram/Histogram'
import LineChart from '../LineChartFigure/LineChartFigure'
import PieChartFigure from '../PieChartFigure/PieChartFigure'

function Charts({ user }) {
  return (
    <section className="charts">
      <Histogram user={user} />
      <LineChart user={user} />
      <PieChartFigure user={user} />
    </section>
  )
}

export default Charts
