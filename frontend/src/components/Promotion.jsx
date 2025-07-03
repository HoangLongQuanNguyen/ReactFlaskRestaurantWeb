import { Box, Flex, Link, Text, Button, Container, SimpleGrid, Center} from '@chakra-ui/react'
import React from 'react'

function Promotion() {
  return (
    <Container width="dvw"  background="#f5f5f5" py={5}>
        <SimpleGrid minChildWidth="sm" templateColumns={{ sm: '1fr', md: '1fr 1fr' }} spacing={8} rowGap="4">
            <Box>
                <Center>
                    <Flex direction="column" alignItems={"center"} spaceY={5} py={50}>
                        <Text fontWeight="bold" textStyle="2xl">Welcome</Text>
                        <Text fontSize={20}>Buy 5 Sandwitches, Get 1 Free</Text>
                        <Link href="https://pos.chowbus.com/online-ordering/store/restaurant/15068" isExternal>
                            <Button variant="solid" colorPalette="yellow" fontSize={20} color="white">Order Now</Button>
                        </Link>
                    </Flex> 
                </Center> 
            </Box> 
            <Box>
                <Center>
                    <img src='/promotion.png' alt='promotion' width={500} height={500} ></img>
                </Center>   
            </Box> 
        </SimpleGrid>  
    </Container>             

  )
}

export default Promotion