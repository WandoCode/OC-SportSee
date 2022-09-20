import Histogram from '../Histogram/Histogram'
import LineChart from '../LineChart/LineChartFigure'
import './charts.css'

function Charts({ userId }) {
  return (
    <section className="charts">
      <Histogram userId={userId} />
      <LineChart userId={userId} />
    </section>
  )
}

export default Charts
