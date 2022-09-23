import Detail from '../Detail/Detail'
import Histogram from '../Histogram/Histogram'
import LineChart from '../LineChartFigure/LineChartFigure'
import PieChartFigure from '../PieChartFigure/PieChartFigure'
import RadarChartFigure from '../RadarChartFigure/RadarChartFigure'
import Calory from '../../Assets/calory.png'
import Protein from '../../Assets/protein.png'
import Glucid from '../../Assets/glucide.png'
import Lipid from '../../Assets/lipide.png'
import propTypesDef from './Charts.proptypes'

/** @namespace Charts */
/**
 * React component generating the complete display of user statistics
 * @memberof Charts
 * @param {User} user The user informations
 */
function Charts({ user }) {
  return (
    <section className="charts">
      <div className="charts-container">
        <div className="charts-container">
          <Histogram user={user} />
          <div className="charts-subcontainer">
            <LineChart user={user} />
            <RadarChartFigure user={user} />
            <PieChartFigure user={user} />
          </div>
        </div>
      </div>
      <div className="details">
        <Detail
          icon={Calory}
          value={user.nutrition.calorieCount}
          description="Calories"
          unit="kCal"
        />
        <Detail
          icon={Protein}
          value={user.nutrition.proteinCount}
          description="Proteines"
          unit="g"
        />
        <Detail
          icon={Glucid}
          value={user.nutrition.carbohydrateCount}
          description="Glucides"
          unit="g"
        />
        <Detail
          icon={Lipid}
          value={user.nutrition.lipidCount}
          description="Lipides"
          unit="g"
        />
      </div>
    </section>
  )
}

Charts.propTypes = propTypesDef
export default Charts
