import { Container, Box, Flex, HStack, Button, Link} from '@chakra-ui/react'
import React from 'react'
import AddItem from './AddItem'


const Navbar = () => {
  return (
    <Container>
        <Box px={4} my={4}>
            <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                    <img src='/logo.png' alt='logo' width={120} height={120}></img>
                </Flex>
                <Flex alignItems={"center"} gap={5}>
                  <HStack wrap="wrap" gap="6">
                    <AddItem/>
                    <Button variant="plain">Home</Button>
                    <Button variant="plain">Menu</Button>
                    <Link href="/ContactUs">Contact Us</Link>
                    <Link href="https://pos.chowbus.com/online-ordering/store/restaurant/15068" isExternal>Order Now</Link>
                    
                  </HStack>
                </Flex>
            </Flex>  
        </Box>
    </Container>
  )
}

export default Navbar