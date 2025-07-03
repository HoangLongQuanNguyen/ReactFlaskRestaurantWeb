import { BASE_URL } from '@/App'
import { Button, CloseButton, DataList, Dialog, Portal, VStack, Input} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Toaster, toaster } from "@/components/ui/toaster"

const AddItem = () => {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    description: "",
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
      })
    }
  }
    return (
    <>
    <Toaster />
    <VStack alignItems="start">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="plain">Add Item</Button>
        </Dialog.Trigger>
        <Portal>
          <form onSubmit={handleAddItem}>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
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
                      onChange={(e) => setInputs({...inputs, name: e.target.value})}/>
                    </DataList.ItemValue>
                  </DataList.Item>
                  
                  <DataList.Item>
                    <DataList.ItemLabel>Item Description</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='Description' 
                      value={inputs.description}
                      onChange={(e) => setInputs({...inputs, description: e.target.value})}/>
                    </DataList.ItemValue>
                  </DataList.Item>
                  
                  <DataList.Item>
                    <DataList.ItemLabel>Price</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='Price' 
                      value={inputs.price}
                      onChange={(e) => setInputs({...inputs, price: e.target.value})}/>
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Dialog.Body>
              
              <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button type='submit'>Add</Button>
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