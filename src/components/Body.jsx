import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Body = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white overflow-x-hidden'>
      <NavBar/>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
  
}

export default Body