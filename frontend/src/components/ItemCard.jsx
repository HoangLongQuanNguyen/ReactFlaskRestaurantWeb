import { Card, Button, Image } from '@chakra-ui/react'
import React from 'react'
import EditItem from './EditItem'
import { BASE_URL } from '@/App'

const ItemCard = ({item, setItems}) => {
  const handleDeleteItem = async () => {
    try {
      const res = await fetch(BASE_URL + "/items/" + item.id, {
        method: "DELETE"
      })
      const data = await res.json()
      if(!res.ok){
        throw new Error(data.error)
      }

      setItems((prevItems) => prevItems.filter((u) => u.id !== item.id))
    } catch (error) {
      
    }
  }
  const imageName = "/" + item.group + item.groupId + ".png"
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Image src={imageName} height={250}/>
        <Card.Title mt="2">{item.group + item.groupId + ". " + item.name}</Card.Title>
        <Card.Description>{item.description}</Card.Description>
        <Card.Description color={'yellow.300'} fontWeight="bold" fontSize={20}>{"$" + item.price}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <EditItem item={item} setItems={setItems}/>
        <Button onClick={handleDeleteItem} variant="solid" colorPalette="yellow" color="white">Delete</Button>
      </Card.Footer>
    </Card.Root>
    
  )
}

export default ItemCard