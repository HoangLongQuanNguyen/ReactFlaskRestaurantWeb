import { Container } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Container>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <img src='/intro.png' alt='intro' height={150}></img>
        </Flex>
    </Container>

  )
}

export default Home