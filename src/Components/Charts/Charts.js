import Histogram from '../Histogram/Histogram'
import './charts.css'

function Charts({ userId }) {
  return (
    <section className="charts">
      <Histogram userId={userId} />
    </section>
  )
}

export default Charts
