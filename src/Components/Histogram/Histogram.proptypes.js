import PropTypes from 'prop-types'

const propTypesDef = {
  user: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
  }),
}

export default propTypesDef
