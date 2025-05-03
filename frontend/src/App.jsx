import {Container, Stack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Promotion from "./components/Promotion"
import ItemGrid from "./components/ItemGrid"
import { useState } from "react"

export const BASE_URL = "http://127.0.0.1:5000/api"

function App() {
  const [items, setItems] = useState([]);
  return (
    <Stack minH={"100vh"}>
      <Navbar setItems = {setItems}/>
      <Container maxW={"1200px"}>
        <Promotion/>
        <ItemGrid items = {items} setItems={setItems}/>
      </Container>
    </Stack>
  )
}

export default App
