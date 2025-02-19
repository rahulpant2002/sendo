import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Home from "./components/HomePage/Home"
import About from "./components/AboutPage/About"
import Services from "./components/ServicesPage/Services"
import Contact from "./components/ContactPage/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Vendor from "./components/VendorPage/Vendor"
import Quote from "./components/GetQuotePage/Quote"
import { Helmet } from "react-helmet"

function App() {

  return (
    <div>
      <Helmet>
        <title>Sendo Logistics</title>
        <meta name="description" content="Sendo Logistics offers fast, secure, and affordable logistics solutions." />
        <meta name="keywords" content="logistics, sendonow, sendo, shipping, delivery, fast shipping, sendo logistics" />

      
        <meta property="og:title" content="Sendo Logistics - Fast & Secure Logistics Solutions" />
        <meta property="og:description"
          content="Sendo Logistics provides worldwide logistics solutions with speed, security, and affordability." />
        <meta property="og:image" content="/public/og-image.jpg" /> 
        <meta property="og:url" content="https://www.sendonow.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sendo Logistics - Fast & Secure Logistics Solutions" />
        <meta name="twitter:description"
          content="Get the best logistics solutions with Sendo Logistics. Secure, fast, and affordable shipping worldwide." />
        <meta name="twitter:image" content="/public/twitter-image.jpg" />
        <meta name="twitter:site" content="@SendoLogistics" />
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
