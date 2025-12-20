import { Card, Button, Image } from '@chakra-ui/react'
import React from 'react'
import EditItem from './EditItem'
import { BASE_URL } from '@/App'
import { useUserRoles } from "./useUserRoles";

const ItemCard = ({item, setItems}) => {

  const roles = useUserRoles();

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
    <Card.Root width="320px" borderRadius={15} bg="#f2f6f8" boxShadow="md">
      <Card.Body gap="2">
        <Image src={imageName} height={250}/>
        <Card.Title fontWeight="bold" textStyle="2xl" mt="2">{item.group + item.groupId + ". " + item.name}</Card.Title>
        <Card.Description textStyle="md">{item.description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="space-between">
        <Card.Description color={'yellow.300'} fontWeight="bold" fontSize={25}>{"$" + item.price}</Card.Description>
        {roles.includes("Admin") && ( 
        <>
          <EditItem item={item} setItems={setItems}/>
          <Button onClick={handleDeleteItem} variant="solid" colorPalette="yellow" color="white" borderRadius={15} fontWeight="bold" _hover={{ bg: "yellow.500" }} boxShadow="md">Delete</Button>
        </>
        )}
      </Card.Footer>
    </Card.Root>
    
  )
}

export default ItemCard