import { Button, Card, Image, Grid, Flex, Text} from "@chakra-ui/react"
import React from 'react'
import { Link } from 'react-router-dom'

const cards = [
  { src: '/B1.png', title: 'Vietnamese Sandwich', to: '/SubMenu/B' },
  { src: '/V3.png', title: 'Vietnamese Bowls', to: '/SubMenu/V' },
  { src: '/P9.png', title: 'Vietnamese Pho', to: '/SubMenu/P' },
  { src: '/A1.png', title: 'Asian Street Food', to: '/SubMenu/A' },
  { src: '/F23.png', title: 'Fruit Tea', to: '/SubMenu/F' },
  { src: '/M9.png', title: 'Milk Tea', to: '/SubMenu/M' },
  { src: '/S36.png', title: 'Smoothie & Slush', to: '/SubMenu/S' },
  { src: '/C2.png', title: 'Sugar Cane', to: '/SubMenu/C' },
  { src: '/N5.png', title: 'Caffeine-Free', to: '/SubMenu/N' },
  { src: '/E1.png', title: 'Vietnamese Coffee', to: '/SubMenu/E' },
];

const MainMenu = () => {
  return (
    <div id="mainMenu">
      <Flex alignItems={"center"} justifyContent={"center"} py={10}>
        <Text fontWeight="bold" textStyle="3xl">Menu</Text>
      </Flex>

      <Grid templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          }} gap={15} py={4} justifyItems={"center"} alignItems={"center"} maxWidth={"full"}>
          {cards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card.Root width="320px">
                <Image src={item.src} width={300} height={300} />
                <Card.Body gap="1">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Description>{item.title}</Card.Description>
                </Card.Body>
                <Card.Footer gap="1">
                  <Link to={item.to}>
                    <Button variant="solid" colorPalette="yellow" color="white">
                      View All
                    </Button>
                  </Link>
                </Card.Footer>
              </Card.Root>
            </Grid>
          ))}
        </Grid> 
    </div>
  )
}
export default MainMenu
