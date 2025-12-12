import {Container, Stack, Flex, Text, Field, Input, Button, Box, Textarea} from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState } from "react"
import emailjs from 'emailjs-com'
import { toaster } from "@/components/ui/toaster"

function ContactUs() {
  const [setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  })

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send('service_yzbiuzu', 'template_5fy9o7u', formData, 'uka8wcvhiwl7eDhT-')
      .then(
        () => {
          toaster.create({
            title: 'Message sent!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          setFormData({ name: '', email: '', phone: '', comments: '' })
        },
        (error) => {
          console.error('EmailJS error:', error);
          toaster.create({
            title: 'Failed to send message.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
      )
  }
  return (
    <Stack height={"full"} width={"full"}>
      <Navbar setItems = {setItems}/>
      <Container fluid>
        <Flex alignItems={"center"} justifyContent={"center"} paddingY={10} direction="column" >
          <Text fontWeight="bold" textStyle="4xl" textAlign="center">Send Us a Message!</Text>
          <Text textAlign="center" paddingTop="10px">We would love to hear from you.</Text>
        </Flex>

        <Flex justify="center" align="center" minH="60vh" px={4}>   
          <Box
            as="form"
            onSubmit={handleSubmit}
            borderWidth="1px"
            borderRadius={15}
            p={6}
            w="full"
            maxW="md"
            bg="#f2f6f8"
            _dark={{bg: "black"}}
          >
            <Field.Root borderRadius={15}>
              <Field.Label>Name</Field.Label>
              <Input 
                name="name" 
                borderRadius={15}
                bg="white"
                value={formData.name} 
                onChange={handleChange} 
                required
              />
            </Field.Root>

            <Field.Root borderRadius={15}>
              <Field.Label pt={2}>Email</Field.Label>
              <Input
                name="email"
                type="email"
                borderRadius={15}
                bg="white"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field.Root>

            <Field.Root borderRadius={15}>
              <Field.Label pt={2}>Phone</Field.Label>
              <Input
                name="phone"
                type="tel"
                borderRadius={15}
                bg="white"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Field.Root>

            <Field.Root>
              <Field.Label pt={2}>Comments</Field.Label>
              <Textarea
                name="comments"
                borderRadius={15}
                bg="white"
                value={formData.comments}
                onChange={handleChange}
                required
              />
              <Text>*Let us know in the comments if you are interested in joining our family.</Text>
            </Field.Root>

            <Button type="submit" colorPalette={"yellow"} mt={4} width="full" borderRadius={15}>
              Submit
            </Button>
          </Box>
          
        </Flex>
      </Container>
      <Footer/>
    </Stack>
  )
}

export default ContactUs
