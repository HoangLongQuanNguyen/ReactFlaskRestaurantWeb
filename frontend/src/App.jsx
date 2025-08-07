import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SubMenu from "./pages/SubMenu"
import ContactUs from "./pages/ContactUs"

export const BASE_URL = "https://reactflaskrestaurantweb.onrender.com/api"

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/SubMenu/:group" element={<SubMenu/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
      </Routes>
    </HashRouter>
      
  )
}

export default App
