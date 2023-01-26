import { Route, Routes } from "react-router-dom"
import Wallet from "./pages/Wallet"
import ConfirmEmail from "./pages/ConfirmEmail"
import CreatePassword from "./pages/CreatePassword"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import PhoneNumber from "./pages/PhoneNumber"
import SignUp from "./pages/SignUp"
import VerfiyPhone from "./pages/VerfiyPhone"
import Portfolio from "./pages/Portfolio"


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

      </Routes>
    </>
  )
}

export default App
