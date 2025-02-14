import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Home from "./components/HomePage/Home"
import About from "./components/AboutPage/About"
import Services from "./components/ServicesPage/Services"
import Contact from "./components/ContactPage/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Vendor from "./components/VendorPage/Vendor"

function App() {

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Body/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/vendor" element={<Vendor/>}/> 
                <Route/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
