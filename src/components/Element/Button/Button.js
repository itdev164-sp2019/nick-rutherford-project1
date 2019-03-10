import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`

`

export const Button = props => <StyledButton {...props} />

Button.propTypes = {
  variant: PropTypes.string
}