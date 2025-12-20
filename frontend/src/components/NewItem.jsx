import { Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'

function NewItem() {
  return (
    <Flex
        p={{ base: 6, md: 10 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        bg="#f2f6f8"
        boxShadow="md"
        borderRadius="15px"
    >
        <Box flex="1">
            <img src="/NewDish.png"/>
        </Box>

        <Box flex="1"> 
            <Flex
                direction="column"
                align="left"
                paddingTop={5}
                pl={{ base: "0px", md: "55px" }}>
                <Text fontWeight="bold" fontSize="4xl" marginBottom={5}>SPICY BEEF NOODLE SOUP</Text>
                <Text fontSize="1xl">A spicy and pungent Vietnamese beef and pork knuckle noodle soup from Huế, characterized by its thick vermicelli noodles, strong lemongrass flavor, and use of fermented shrimp paste.</Text>
            </Flex>
        </Box> 
    </Flex>
  )
}

export default NewItem