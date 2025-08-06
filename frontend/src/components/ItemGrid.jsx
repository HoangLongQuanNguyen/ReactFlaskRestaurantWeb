import {Center, Flex, Grid, Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ItemCard from './ItemCard'
import { BASE_URL } from '@/App'

function ItemGrid({group, items, setItems}) {
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch(BASE_URL + "/items" + "?group=" + group)
        const data = await res.json()

        if(!res.ok){
          throw new Error(data.error)
        }
        
        setItems(data)
      } catch (error) {
        console.error(error)
      }
    }
    getItems()
  }, [setItems])
  return (
    <>
      <Grid templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        }} gap={25} py={4} justifyItems={"center"}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} setItems={setItems}/>
        ))}
      </Grid>
      {items.length === 0 && (
        <Flex justifyContent={'center'}>
          <Text>No item found! Please add your first item!</Text>
        </Flex>
      )}
    </>
    
    
  )
}
export default ItemGrid