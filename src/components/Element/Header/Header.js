import React from 'react'
import PropTypes from 'prop-types'
import { HeaderBase } from 'rebass'
import styled from 'styled-components'

const Reset = styled(HeaderBase)`
  background: red;
  box-shadow: 5px 10px;
  font-weight: normal;
  padding-top: 20px 
  padding-bottom: 10px
  border-radius: 0;
  cursor: pointer;
`

export const Header = ({ children, ...props }) => (
  <Reset {...props}>{children}</Reset>
)

Header.propTypes = {
  children: PropTypes.node.isRequired
}