import React from "react"
import { Flex, Box, Link } from 'rebass'
import styled from 'styled-components'
import { Github } from 'styled-icons/boxicons-logos/Github'

const StyledGitHub = styled(Github)`
  color: white;
  width: 40px;
  height: 40px;

  `


const Header = () => {
  return (
  <Flex flexDirection='row'>
      <Box width={[1]} my={9}>
      <Link href='https://github.com/brendanpettis'> 
          <StyledGitHub />
        </Link>
  </Box>
  </Flex>
)
  }

export default Header