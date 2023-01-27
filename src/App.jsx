import { Route, Routes } from "react-router-dom"
import Wallet from "./pages/wallet/Wallet"
import ConfirmEmail from "./pages/AuthPages/ConfirmEmail"
import CreatePassword from "./pages/AuthPages/CreatePassword"
import HomePage from "./pages/properties/HomePage"
import PhoneNumber from "./pages/AuthPages/PhoneNumber"
import SignUp from "./pages/AuthPages/SignUp"
import VerfiyPhone from "./pages/AuthPages/VerfiyPhone"
import Login from "./pages/AuthPages/Login"
import Portfolio from "./pages/portfolio/Portfolio"
import Cart from "./pages/cart/Cart"


function App() {
  return (
    <>
      {/* <VerfiyPhone /> */}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/confirmEmail" element={<ConfirmEmail />}/>
        <Route path="/createPassword" element={<CreatePassword />}/>
        <Route path="/phNumber" element={<PhoneNumber/>}/>
        <Route path="/verifyNum" element={<VerfiyPhone/>}/>
        <Route path="/homePage" element={<HomePage/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/cart" element={<Cart/>}/>


      </Routes>
    </>
  )
}

export default App
