import { BASE_URL } from '@/App'
import { Button, CloseButton, DataList, Dialog, Portal, VStack, Input} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Toaster, toaster } from "@/components/ui/toaster"

const AddItem = ({fontSize}) => {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    description: "",
    group: "",
    groupId: "",
  })

  const handleAddItem = async (e) => {
    try {
      const res = await fetch(BASE_URL + "/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs)
      })
      const data = await res.json()
      
      if(!res.ok){
        throw new Error(data.error)
      }

      toaster.create({
        title: "Item added successfully!",
      })

    } catch (error) {
      toaster.create({
        title: "Error - Item was not added",
      })
    } finally {
      setInputs({
        name: "",
        price: "",
        description: "",
        group: "",
        groupId: "",
      })
    }
  }
    return (
    <>
    <Toaster />
    <VStack alignItems="start">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="plain" _hover={{color:"yellow.400"}} fontSize={fontSize}>Add Item</Button>
        </Dialog.Trigger>
        <Portal>
          <form onSubmit={handleAddItem}>
          <Dialog.Backdrop/>
          <Dialog.Positioner>
            <Dialog.Content >
              <Dialog.Header>
                <Dialog.Title>Add new item</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body pb="8">
                <DataList.Root orientation="horizontal">
                  <DataList.Item>
                    <DataList.ItemLabel>Item Name</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='Item Name' 
                      value={inputs.name}
                      onChange={(e) => setInputs({...inputs, name: e.target.value})} borderRadius={15}/>
                    </DataList.ItemValue>
                  </DataList.Item>
                  
                  <DataList.Item>
                    <DataList.ItemLabel>Item Description</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='Description' 
                      value={inputs.description}
                      onChange={(e) => setInputs({...inputs, description: e.target.value})} borderRadius={15}/>
                    </DataList.ItemValue>
                  </DataList.Item>
                  
                  <DataList.Item>
                    <DataList.ItemLabel>Price</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='Price' 
                      value={inputs.price}
                      onChange={(e) => setInputs({...inputs, price: e.target.value})} borderRadius={15}/>
                    </DataList.ItemValue>
                  </DataList.Item>

                  <DataList.Item>
                    <DataList.ItemLabel>Group</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='A/B/C/...' 
                      value={inputs.group}
                      onChange={(e) => setInputs({...inputs, group: e.target.value})} borderRadius={15}/>
                    </DataList.ItemValue>
                  </DataList.Item>

                  <DataList.Item>
                    <DataList.ItemLabel>Group Id</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='1/2/3/...' 
                      value={inputs.groupId}
                      onChange={(e) => setInputs({...inputs, groupId: e.target.value})} borderRadius={15}/>
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Dialog.Body>
              
              <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline" color={'yellow.300'} borderRadius={15} _hover={{ bg: "yellow.500" }} boxShadow="md">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button type='submit' variant="solid" colorPalette="yellow" color="white" borderRadius={15} _hover={{ bg: "yellow.500" }} boxShadow="md">Add</Button>
                </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
          </form>
        </Portal>
      </Dialog.Root>
    </VStack>
    </> 
  )
}

export default AddItem