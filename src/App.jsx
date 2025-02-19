import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Home from "./components/HomePage/Home"
import About from "./components/AboutPage/About"
import Services from "./components/ServicesPage/Services"
import Contact from "./components/ContactPage/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Vendor from "./components/VendorPage/Vendor"
import Quote from "./components/GetQuotePage/Quote"

function App() {

  return (
    <div>
      <Helmet>
        <title>Sendo Logistics</title>
        <meta name="description" content="Sendo Logistics offers fast, secure, and affordable logistics solutions." />
        <meta name="keywords" content="logistics, shipping, delivery, fast shipping, sendo logistics" />
      </Helmet>

      <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Body/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/vendor" element={<Vendor/>}/> 
                <Route path="/quote" element={<Quote/>} />
                <Route/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
