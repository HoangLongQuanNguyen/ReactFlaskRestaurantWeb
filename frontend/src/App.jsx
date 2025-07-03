import {Container, Stack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Promotion from "./components/Promotion"
import MainMenu from "./components/MainMenu"
import ItemGrid from "./components/ItemGrid"
import Footer from "./components/Footer"
import { useState } from "react"

export const BASE_URL = "http://127.0.0.1:5000/api"

function App() {
  const [items, setItems] = useState([]);
  return (
    <Stack minH={"100vh"} minW={"100vh"}>
      <Navbar setItems = {setItems}/>
      <Container fluid>
        <Promotion/>
        <MainMenu/>
        <ItemGrid items = {items} setItems={setItems}/>
      </Container>
      <Footer/>
    </Stack>
  )
}

export default App
