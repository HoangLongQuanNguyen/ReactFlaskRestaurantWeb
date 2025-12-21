import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import theme from "./theme";
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-x1ex0kswcbzr736n.us.auth0.com"
      clientId="cXZMK3Wqi6L6TWGDIkw5gxs8SeeZRxnN"
      authorizationParams={{
    redirect_uri: window.location.origin,
  }}
    >
      <Provider value={theme}>
        <App />
      </Provider>
    </Auth0Provider>
  </StrictMode>,
)
