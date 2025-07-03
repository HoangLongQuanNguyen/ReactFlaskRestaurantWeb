import { Container, Box, Flex, HStack, Button, Text, Link, IconButton, Menu, Portal} from '@chakra-ui/react'
import React from 'react'
import AddItem from './AddItem'
import { GiHamburgerMenu } from 'react-icons/gi'
import { col } from 'framer-motion/client'


const Navbar = () => {
  return (
    <Container width="dvw">
        <Box my={4}>
            <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                    <img src='/logo.png' alt='logo' width={120} height={120}></img>
                    <Flex direction="column" alignItems={"center"}>
                      <Text fontWeight="bold" textStyle="2xl">TIGER88</Text>
                      <Text fontWeight="bold" textStyle="2xl">Banhmi & Boba</Text>
                    </Flex>
                </Flex>
                
                <Flex alignItems={"center"} gap={5} display={['none', 'none', 'none', 'flex']}>
                  <HStack wrap="wrap" gap="6">
                    <Link href="/">
                      <Button variant="plain">Menu</Button>
                    </Link>
                    <Link href="https://pos.chowbus.com/online-ordering/store/restaurant/15068" isExternal>
                      <Button variant="solid" colorPalette="yellow">Order Online</Button>
                    </Link>
                    <Button variant="plain">Call 314-287-6868 to order</Button>
                    <Button variant="plain">Contact Us</Button>
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
                          <Link href="./">
                            <Button variant="plain">Menu</Button>
                          </Link>
                          <Link href="https://pos.chowbus.com/online-ordering/store/restaurant/15068" isExternal>
                            <Button variant="plain" color={'yellow.300'}>Order Online</Button>
                          </Link>
                          <Button variant="plain">Call 314-287-6868 to order</Button>
                          <Button variant="plain">Contact Us</Button>
                          <AddItem/> 
                        </Flex>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
                  
            </Flex>             
        </Box>
    </Container>
  )
}

export default Navbar