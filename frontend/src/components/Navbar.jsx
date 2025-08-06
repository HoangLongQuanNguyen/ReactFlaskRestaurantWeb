import { Container, Box, Flex, HStack, Button, Text, IconButton, Menu, Portal} from '@chakra-ui/react'
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
                      <Text fontWeight="bold" textStyle="2xl">Banhmi & Boba</Text>
                    </Flex>
                  </Link>
                    
                </Flex>
                
                <Flex alignItems={"center"} display={['none', 'none', 'none', 'flex']}>
                  <HStack wrap="wrap" gap="6">
                    <Link to="/" textDecoration="none" outline={'none'}>
                      <Button variant="plain" onClick={() => {
                      const element = document.getElementById('mainMenu')
                      element?.scrollIntoView({behavior: 'smooth'})}}>Menu
                      </Button>
                    </Link>
                    
                    <Link to="https://pos.chowbus.com/online-ordering/store/restaurant/15068" textDecoration="none" outline={'none'} isExternal>
                      <Button variant="solid" colorPalette="yellow">Order Online</Button>
                    </Link>
                    <Button variant="plain">Call 314-287-6868 to order</Button>
                    <Link to="/Contact" textDecoration="none" outline={'none'}>
                      <Button variant="plain">Contact Us</Button>
                    </Link>
                    <AddItem/> 
                  </HStack>
                </Flex>

                <Menu.Root>
                  <Menu.Trigger asChild>
                    <IconButton aria-label="HamburgerIcon" display={['flex', 'flex', 'flex', 'none']}>
                      <GiHamburgerMenu />
                    </IconButton> 
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner display={['flex', 'flex', 'flex', 'none']}>
                      <Menu.Content>
                        <Flex flexDir="column" align="flex-start">
                          <Link to="/" textDecoration="none" outline={'none'}>
                            <Button variant="plain" onClick={() => {
                            const element = document.getElementById('mainMenu')
                            element?.scrollIntoView({behavior: 'smooth'})}}>Menu
                            </Button>
                          </Link>
                          <Link to="https://pos.chowbus.com/online-ordering/store/restaurant/15068" textDecoration="none" isExternal>
                            <Button variant="plain" color={'yellow.300'}>Order Online</Button>
                          </Link>
                          <Button variant="plain">Call 314-287-6868 to order</Button>
                          <Link to="/Contact" textDecoration="none" outline={'none'}>
                            <Button variant="plain">Contact Us</Button>
                          </Link>
                          <AddItem/> 
                        </Flex>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
                  
            </Flex>             
        </Box>
        <hr></hr>
    </Container>
  )
}

export default Navbar