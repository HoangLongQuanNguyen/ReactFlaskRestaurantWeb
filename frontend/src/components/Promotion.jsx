import { Box, Flex, Link, Text} from '@chakra-ui/react'
import React from 'react'

function Promotion() {
  return (
    <div>
        <Box px={4} my={4}>
            <Flex h="250" alignItems={"center"} justifyContent={"space-between"}> 
                <Box>
                    <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                        <Text>Welcome</Text>
                    </Flex> 
                    <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                        <Text>Buy 4 Sandwitches, Get 1 Free Drink</Text>
                    </Flex> 
                    <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                        <Text>*Fruit Tea, Milk Tea or Coffee only</Text>
                    </Flex> 
                    <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                        <Link href="https://pos.chowbus.com/online-ordering/store/restaurant/15068" isExternal>Order Now</Link>
                    </Flex>  
                </Box> 
                <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                    <img src='/promotion.png' alt='promotion' width={250} height={250}></img>
                </Flex> 
                  
            </Flex>
            
        </Box>
    </div>
  )
}

export default Promotion