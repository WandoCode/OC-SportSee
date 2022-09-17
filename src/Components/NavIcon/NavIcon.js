import './navIcon.css'

function NavIcon(props) {
  const { icon, name } = props

  return (
    <div className="navIcon">
      <img src={icon} alt={name} />
    </div>
  )
}

export default NavIcon
