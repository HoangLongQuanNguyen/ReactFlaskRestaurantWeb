import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import theme from "./theme";
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
      redirect_uri: window.location.origin  + "/callback",
      scope: "openid profile email",
  }}
    >
      <Provider value={theme}>
        <App />
      </Provider>
    </Auth0Provider>
  </StrictMode>,
)
