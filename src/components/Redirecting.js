import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { replace } from 'gatsby'

class Redirecting extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      replace(this.props.to)
    }, 500)
  }

  render() {
    return <p>Redirecting you...</p>
  }
}

Redirecting.propTypes = {
  to: PropTypes.string.isRequired,
}

export default Redirecting
