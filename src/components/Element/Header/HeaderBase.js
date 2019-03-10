import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header'
import styled from 'styled-components'

const StyledButton = styled(Header)`

`

export const HeaderBase = props => <StyledButton {...props} />

HeaderBase.propTypes = {
  variant: PropTypes.string
}