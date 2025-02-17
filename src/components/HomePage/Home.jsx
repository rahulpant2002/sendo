import BackgroundImg from "../BackgroundImg"
import img14 from "../../Images/img14.jpg"
import ContactSection from "../ContactSection";
import LogisticsSlider from "./LogisticSider";
import ServicesSlider from "./ServiceSlider";
import SendoSolutions from "./SendoSolutions";
import ShipmentForm from './ShipmentForm'
import Form from "../Form"

const Home = () => {
  const heading = "Sendo Logistics Transforming Services for All.";
  const text = "Seeking a logistics partner that’s affordable, advanced, and future-ready? Sendo Logistics delivers excellence with cutting-edge technology, strategic collaborations, and a strong commitment to sustainability—redefining the future of logistics."
  return (
    <div>
        <BackgroundImg img={img14} heading={heading} text={text} scrollTo="serviceSlider"/>
        {/* <ShipmentForm/> */}
        <SendoSolutions/>
        <LogisticsSlider/>
        <div id="serviceSlider">
          <ServicesSlider />
        </div>
        <ContactSection/>
        <Form/>
    </div>
  )
}

export default Home