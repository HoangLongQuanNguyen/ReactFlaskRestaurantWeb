import { Box, Flex, Link, Text, Button, Container, SimpleGrid, Center} from '@chakra-ui/react'
import React from 'react'

function Promotion() {
  return (
    <Flex
        bg="#f2f6f8"
        boxShadow="md"
        p={{ base: 6, md: 10 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        borderRadius="15px"
    >
        <Box flex="1"> 
            <Center>
                <Flex
                direction="column"
                align="center"
                gap={6}
                py={10}>
                <Text fontWeight="bold" fontSize="4xl">Welcome</Text>
                <Text fontSize="3xl" textAlign="center">Buy 5 Sandwiches – Get 1 Free!</Text>
                <Link
                    href="https://pos.chowbus.com/online-ordering/store/restaurant/15068"
                    isExternal
                    _hover={{ textDecoration: 'none' }}>
                    <Button colorPalette="yellow" color="white" variant="solid" fontSize="lg" borderRadius={15} _hover={{ bg: "yellow.500" }}>
                        Order Now
                    </Button>
                </Link>
                </Flex>
            </Center>
        </Box>

        <Box flex="1">
            <img src="/promotion.png" alt="promotion" borderRadius="16px" w="100%" h="500px" objectFit="cover" />
        </Box>
        
    </Flex>
  )
}

export default Promotion