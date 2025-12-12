import {Container, Stack } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Promotion from "@/components/Promotion"
import MainMenu from "@/components/MainMenu"
import Footer from "@/components/Footer"
import NewItem from "@/components/NewItem"
import { useState } from "react"

function Home() {
  const [items, setItems] = useState([]);
  return (
    <Stack width={"full"} height={"full"}>
      <Navbar setItems = {setItems}/>
      <Container height={"full"} width={"full"} pt={3} spaceY={5}>
        <Promotion/>
        <NewItem/>
        <MainMenu/>
      </Container>
      <Footer/>
    </Stack>
  )
}

export default Home
