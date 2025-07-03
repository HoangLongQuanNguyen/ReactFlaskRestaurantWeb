import { Button, Card, Image, Text, Flex, Stack } from "@chakra-ui/react"
import React from 'react'

const MainMenu = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} py={10}>
        <Text fontWeight="bold" textStyle="3xl">Menu</Text>
      </Flex>
      <Stack gap="4" direction="row" wrap="wrap" alignItems={"center"} justifyContent={"center"}>
        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/B1.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Vietnamese Sandwich</Card.Title>
          <Card.Description>
            Vietnamese Sandwich
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/V3.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Vietnamese Bowls</Card.Title>
          <Card.Description>
            Vietnamese Bowls
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/P9.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Vietnamese Pho</Card.Title>
          <Card.Description>
            Vietnamese Pho
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/A1.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Asian Street Food</Card.Title>
          <Card.Description>
            Asian Street Food
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/CoinWaffle.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Coin Waffle</Card.Title>
          <Card.Description>
            Coin Waffle
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/T23.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Fruit Tea</Card.Title>
          <Card.Description>
            Fruit Tea
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/T9.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Milk Tea</Card.Title>
          <Card.Description>
            Milk Tea
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/T36.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Smoothie & Slush</Card.Title>
          <Card.Description>
            Smoothie & Slush
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden">
        <Image
          src='/SugarCane.png' width={300} height={300}
        />
        <Card.Body gap="2">
          <Card.Title>Sugar Cane</Card.Title>
          <Card.Description>
            Sugar Cane
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" colorPalette="yellow" color="white">View All</Button>
        </Card.Footer>
        </Card.Root>
      </Stack>
      
    </>
    
  )
}
export default MainMenu
