import PropTypes from 'prop-types'

const propTypesDef = {
  user: PropTypes.shape({
    avgSessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        sessionLength: PropTypes.number,
      })
    ),
  }),
}

export default propTypesDef
