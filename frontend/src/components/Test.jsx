import { Button, CloseButton, DataList, Dialog, Portal, Textarea, VStack,} from '@chakra-ui/react'
import React from 'react'


const Test = () => {
    return (
    <>
        <VStack alignItems="start">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline">Add Item</Button>
        </Dialog.Trigger>
        <Portal>
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
                    <Textarea/>
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.ItemLabel>Item Description</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Textarea/>
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.ItemLabel>Price</DataList.ItemLabel>
                    <DataList.ItemValue>
                    <Textarea/>
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </VStack>
    </> 
  )
}

export default Test