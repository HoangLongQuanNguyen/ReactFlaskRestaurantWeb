import {Container, Stack, Flex, Text } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import ItemGrid from "@/components/ItemGrid"
import Footer from "@/components/Footer"
import { useState } from "react"
import { useParams } from "react-router-dom"

function SubMenu() {
  const { group } = useParams();
  const [items, setItems] = useState([]);
  const groupNames = {
  B: "Vietnamese Sandwich",
  V: "Vietnamese Bowls",
  P: "Beef Noodle Soup",
  A: "Asian Street Food",
  M: "Milk Tea",
  S: "Smoothie & Slush",
  C: "Sugar Cane",
  N: "Caffeine-Free",
  E: "Vietnamese Coffee",
  }
  const groupName = groupNames[group] || "Menu";
  return (
    <Stack height={"full"} width={"full"}>
      <Navbar setItems = {setItems}/>
      <Container height={"full"} width={"full"}>
        <Flex alignItems={"center"} justifyContent={"center"} py={10}>
          <Text fontWeight="bold" textStyle="3xl" id="groupName">{groupName}</Text>
        </Flex>
        <ItemGrid items = {items} setItems={setItems} group={group}/>
      </Container>
      <Footer/>
    </Stack>
  )
}

export default SubMenu
