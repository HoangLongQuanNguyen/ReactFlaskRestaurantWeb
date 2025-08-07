import { Box, Flex, Link, Text, Button, Container, SimpleGrid, Center} from '@chakra-ui/react'
import React from 'react'

function Promotion() {
  return (
    <Container bg="#fff" py={10}>
        <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={6}
        >
            <Box>
            <Center>
                <Flex
                direction="column"
                align="center"
                gap={6}
                py={10}
                >
                <Text fontWeight="bold" fontSize="3xl" color="yellow.300">
                    Welcome
                </Text>
                <Text fontSize="2xl" color="yellow.300" textAlign="center">
                    Buy 5 Sandwiches – Get 1 Free!
                </Text>
                <Link
                    href="https://pos.chowbus.com/online-ordering/store/restaurant/15068"
                    isExternal
                    _hover={{ textDecoration: 'none' }}
                >
                    <Button colorPalette="yellow" color="white" variant="solid" fontSize="lg">
                        Order Now
                    </Button>
                </Link>
                </Flex>
            </Center>
            </Box>

            <Box>
            <Center>
                <img src="/promotion.png" alt="promotion" width={300} height={300} />
            </Center>
            </Box>
        </SimpleGrid>
    </Container>
  )
}

export default Promotion