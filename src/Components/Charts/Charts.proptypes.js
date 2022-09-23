import PropTypes from 'prop-types'

const propTypesDef = {
  user: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
    avgSessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        sessionLength: PropTypes.number,
      })
    ),
    score: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        todayScore: PropTypes.number,
        opacity: PropTypes.number,
        fill: PropTypes.string,
      })
    ),
    performance: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.number,
        kind: PropTypes.string,
      })
    ),
    userInfos: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
    }),
    nutrition: PropTypes.objectOf(PropTypes.string),
  }),
}

export default propTypesDef
