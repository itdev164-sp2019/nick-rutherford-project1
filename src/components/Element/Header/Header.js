import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'rebass';



const Display = styled(Flex)`
    background-color: #9FB5A8;  
    margin-bottom: 1px;
`;

export const Header = ({ children, ...props }) => (
  <Display {...props}>{children}</Display>
)




export default Header;