import PropTypes from 'prop-types'

const propTypesDef = {
  user: PropTypes.shape({
    score: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        todayScore: PropTypes.number,
        opacity: PropTypes.number,
        fill: PropTypes.string,
      })
    ),
  }),
}

export default propTypesDef
