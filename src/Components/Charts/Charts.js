import Histogram from '../Histogram/Histogram'
import LineChart from '../LineChartFigure/LineChartFigure'
import PieChartFigure from '../PieChartFigure/PieChartFigure'

function Charts({ user }) {
  return (
    <section className="charts">
      <Histogram user={user} />
      <div className="charts-subcontainer">
        <LineChart user={user} />
        <PieChartFigure user={user} />
      </div>
    </section>
  )
}

export default Charts
