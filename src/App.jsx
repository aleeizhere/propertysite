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
import LandingPage from "./pages/LandingPage/LandingPage"
import PropertyDetails from "./pages/PropertyPage/PropertyDetails"
import ProfilePage from "./pages/Profile/Profile"
import Properties from "./pages/adminPanel/AdminProperties/Properties"
import AddProperty from "./pages/adminPanel/AdminProperties/AddProperty"
import PurchaseRequests from "./pages/adminPanel/PurchaseRequests/PurchaseRequests"
import UsersList from "./pages/adminPanel/users/UsersList"
import RentDetails from "./pages/adminPanel/rentDetails/RentDetails"
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
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/property/:propertyNumber" element={<PropertyDetails />} />
        <Route path="profilePage" element={<ProfilePage />}/>

        {/* Admin Panel pages */}
        <Route path="/adminPanel" element={<Properties />}/>
        <Route path="/adminPanel/addProperty" element={<AddProperty /> }/>
        <Route path="/purchaseRequests" element={<PurchaseRequests />} />
        <Route path="/usersList" element={<UsersList />} />
        <Route path="/rentDetails" element={<RentDetails />} />



      </Routes>

    
    
    </>
  )
}

export default App
