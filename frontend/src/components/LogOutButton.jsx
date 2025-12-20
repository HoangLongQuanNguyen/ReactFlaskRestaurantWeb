import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

const LogOutButton = ({fontSize}) => {
    const { logout, isAuthenticated } = useAuth0()
  return (
    isAuthenticated && (
        <Button variant="plain" _hover={{color:"yellow.400"}} fontSize={fontSize} onClick={() => logout()}>
            Sign Out
        </Button>
    )
  )
}

export default LogOutButton
