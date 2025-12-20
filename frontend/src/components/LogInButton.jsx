import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

const LogInButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    !isAuthenticated && (
        <Button variant="plain" _hover={{color:"yellow.400"}} onClick={() => loginWithRedirect()}>
            Sign In
        </Button>
    )
  )
}

export default LogInButton
