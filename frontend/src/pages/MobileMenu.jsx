import { IconButton, Flex, Text, Icon, Button } from "@chakra-ui/react"
import { IoClose } from "react-icons/io5"
import { useNavigate, Link} from "react-router-dom"
import LogInButton from '@/components/LogInButton'
import LogOutButton from '@/components/LogOutButton'
import AddItem from '@/components/AddItem'
import { useUserRoles } from "@/components/useUserRoles"

function MobileMenu() {
  const navigate = useNavigate()
  const roles = useUserRoles()
  return (
    <Flex
      minH="100dvh"
      w="100vw"
      direction="column"
      p={4}
      bg="white"
    >
      <Flex h="16" alignItems={"center"} justifyContent={"space-between"} marginBottom={4}>
        <Flex alignItems={"center"} display={{base:"flex", sm:"flex"}}>
          <Link to="/" textDecoration="none" outline={'none'}>
            <img src='/logo.png' alt='logo' width={80} height={80}></img>
          </Link>
          <Link to="/" textDecoration="none" outline={'none'}>
            <Flex direction="column" alignItems={"center"}>
              <Text fontWeight="bold" textStyle="2xl">TIGER88</Text>
              <Text fontWeight="bold" textStyle="2xl">Vietnamese Café</Text>
            </Flex>
          </Link>  
        </Flex>

        <IconButton
          aria-label="Close menu"
          onClick={() => navigate(-1)}
        >
          <Icon as={IoClose} boxSize={8} />
        </IconButton> 
      </Flex>
      <hr></hr>
      
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex="1"
        gap={6}
      >
        <Link to="/">
          <Button variant="plain" _hover={{color:"yellow.400"}} fontSize="2xl">Menu</Button>
        </Link>

        <Link to="https://pos.chowbus.com/online-ordering/store/restaurant/15068">
          <Button variant="solid" colorPalette="yellow" borderRadius={15} _hover={{ bg: "yellow.500" }} boxShadow="md" fontSize="2xl">Order Online</Button>
        </Link>

        <Link to="">
          <Button variant="plain" _hover={{color:"yellow.400"}} fontSize="2xl">Call 314-287-6868 to Order</Button>
        </Link>

        <Link to="/Contact">
          <Button variant="plain" _hover={{color:"yellow.400"}} fontSize="2xl">Contact Us</Button>
        </Link> 

        {roles.includes("Admin") && (<AddItem fontSize="2xl"/>)}        
        <LogInButton fontSize="2xl"/>
        <LogOutButton fontSize="2xl"/> 
      </Flex>
    </Flex>
  );
}

export default MobileMenu