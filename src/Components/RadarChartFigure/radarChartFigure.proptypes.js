import PropTypes from 'prop-types'

const propTypesDef = {
  user: PropTypes.shape({
    performance: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.number,
        kind: PropTypes.string,
      })
    ),
  }),
}

export default propTypesDef
