import { BASE_URL } from '@/App'
import { Button, CloseButton, DataList, Dialog, Portal, Textarea, VStack, Input} from '@chakra-ui/react'
import React, { useState } from 'react'

const EditItem = ({item, setItems}) => {
  const [inputs, setInputs] = useState({
    name: item.name,
    price: item.price,
    description: item.description,
  })
  const handleEditItem = async (e) => {
    try {
      const res = await fetch(BASE_URL + "/items/" + item.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      })
      const data = await res.json()

      if(!res.ok){
        throw new Error(data.error)
      }
      setItems((prevItems) => prevItems.map((u) => u.id === item.id ? data: u))
    } catch (error) {
      
    }
  }
    return (
    <>
        <VStack alignItems="start">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline" color={'yellow.300'}>Edit Item</Button>
        </Dialog.Trigger>
        <Portal>
          <form onSubmit={handleEditItem}>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Edit item</Dialog.Title>
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

                  <DataList.Item>
                    <DataList.ItemLabel>Group</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Input placeholder='A/B/C/...' 
                      value={inputs.group}
                      onChange={(e) => setInputs({...inputs, group: e.target.value})}/>
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Dialog.Body>
              
              <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button type='submit'>Save</Button>
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

export default EditItem