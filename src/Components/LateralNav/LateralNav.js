import NavIcon from '../NavIcon/NavIcon'
import yoga from '../../Assets/yoga.png'
import swim from '../../Assets/swim.png'
import bike from '../../Assets/bike.png'
import fitness from '../../Assets/fitness.png'
/** @namespace LaterlNav */
/**
 * React component generating the lateral navigation
 * @memberof LaterlNav
 */
function LaterlNav() {
  return (
    <nav className="lateralNav">
      <ul>
        <li>
          <a href="#">
            <NavIcon icon={yoga} name="yoga" />
          </a>
        </li>
        <li>
          <a href="#">
            <NavIcon icon={swim} name="swim" />
          </a>
        </li>
        <li>
          <a href="#">
            <NavIcon icon={bike} name="bike" />
          </a>
        </li>
        <li>
          <a href="#">
            <NavIcon icon={fitness} name="fitness" />
          </a>
        </li>
      </ul>
      <small>Copyright, SportSee 2020</small>
    </nav>
  )
}

export default LaterlNav
