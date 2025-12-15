import { Container, Box, Flex, HStack, Button, Text, IconButton, Icon, Spacer} from '@chakra-ui/react'
import React from 'react'
import AddItem from './AddItem'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <Container width="full">
        <Box my={4}>
            <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} display={{base:"flex", sm:"flex"}}>
                  <Link to="/" textDecoration="none" outline={'none'}>
                    <img src='/logo.png' alt='logo' width={80} height={80}></img>
                  </Link>
                  <Link to="/" textDecoration="none" outline={'none'}>
                    <Flex direction="column" alignItems={"center"}>
                      <Text fontWeight="bold" textStyle="2xl">TIGER88</Text>
                      <Text fontWeight="bold" textStyle="2xl">Vietnamese Café</Text>
                    </Flex>
                  </Link>  
                </Flex>
                <Spacer />
                <Flex alignItems={"center"} display={['none', 'none', 'none', 'flex']}>
                  <HStack wrap="wrap" gap="6">
                    <Link to="/" textDecoration="none" outline={'none'}>
                      <Button variant="plain" onClick={() => {
                      const element = document.getElementById('mainMenu')
                      element?.scrollIntoView({behavior: 'smooth'})}} _hover={{color:"yellow.400"}}>Menu</Button>
                    </Link>
                    
                    <Link to="https://pos.chowbus.com/online-ordering/store/restaurant/15068" textDecoration="none" outline={'none'} isExternal>
                      <Button variant="solid" colorPalette="yellow" borderRadius={15} _hover={{ bg: "yellow.500" }} boxShadow="md">Order Online</Button>
                    </Link>
                    <Button variant="plain" _hover={{color:"yellow.400"}}>Call 314-287-6868 to Order</Button>
                    <Link to="/Contact" textDecoration="none" outline={'none'}>
                      <Button variant="plain" _hover={{color:"yellow.400"}}>Contact Us</Button>
                    </Link>
                    <AddItem/> 
                  </HStack>
                </Flex>

                <Link to="/menu">
                  <IconButton aria-label="HamburgerIcon" display={['flex', 'flex', 'flex', 'none']}>
                    <Icon as={GiHamburgerMenu} boxSize={8} />
                  </IconButton> 
                </Link>
            </Flex>             
        </Box>
      <hr/>
    </Container>
  )
}

export default Navbar