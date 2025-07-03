import { Container, Box, Flex, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
    <Container width="dvw"  background="#f5f5f5" py={5}>
        <SimpleGrid minChildWidth="sm" templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
          spacing={8} rowGap="4">
            <Box>
                <Flex direction="column" alignItems={"center"}>
                    <Text fontWeight="bold" textStyle="2xl">TIGER88</Text>
                    <Text fontWeight="bold" textStyle="2xl">Banhmi & Boba</Text>
                </Flex>
            </Box>

            <Box>
                <Flex direction="column" alignItems={"center"}>
                    <Text fontWeight="bold" color={'yellow.300'} fontSize={'large'}>Address</Text>
                    <Text>12055 Manchester Rd, Des Peres, MO 63131</Text>
                </Flex>
            </Box>

            <Box>
                <Flex direction="column" alignItems={"center"}>
                    <Text fontWeight="bold" color={'yellow.300'} fontSize={'large'}>Phone</Text>
                    <Text>314-287-6868</Text>
                </Flex>
            </Box>
                
            <Box>
                <Flex direction="column" alignItems={"center"}>
                    <Text fontWeight="bold" color={'yellow.300'} fontSize={'large'}>Opening Hours</Text>
                    <Text>Monday – Sunday : 11:00 AM – 8:00 PM</Text>
                    <Text>Closed on Wednesday</Text>
                </Flex>
            </Box>
        </SimpleGrid>  
    </Container>
  )
}

export default Footer