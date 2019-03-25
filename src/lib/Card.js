// import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SHADOWS, COLORS } from './styles'
import { Section } from './Section'

export const Card = styled.div(({ height }) => {
  const shadows = SHADOWS[height]

  return `
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;
    padding: 0rem 1rem;

    background-color: ${COLORS.WHITE};
    border-radius: 0.2rem;
    overflow: hidden;
    ${shadows}
  `
})

Card.propTypes = {
  height: PropTypes.oneOf(['LOW', 'MEDIUM', 'HIGH']),
}
Card.defaultProps = {
  height: 'LOW',
}

export const CardHeader = styled.div`
  box-sizing: border-box;
  margin: 0 -1rem;
  padding: 0.5rem 1rem;
  background-color: ${COLORS.BLUE};
`
