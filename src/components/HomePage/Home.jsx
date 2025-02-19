import BackgroundImg from "../BackgroundImg"
import ContactSection from "../ContactSection";
import LogisticsSlider from "./LogisticSider";
import ServicesSlider from "./ServiceSlider";
import SendoSolutions from "./SendoSolutions";
import ShipmentForm from './ShipmentForm'
import Form from "../Form"
import GetQuoteBtn from "./GetQuoteBtn";
import TestimonialSlider from "./TestimonialSlider";
import ScrollToTopButton from "../ScrollToTopButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const heading = "Sendo Logistics Transforming Services for All.";
  const text = "Seeking a logistics partner that’s affordable, advanced, and future-ready? Sendo Logistics delivers excellence with cutting-edge technology, strategic collaborations, and a strong commitment to sustainability—redefining the future of logistics."

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
        <BackgroundImg img='/Images/img22.jpg' heading={heading} text={text} scrollTo="serviceSlider"/>
        <GetQuoteBtn/>
        {/* <ShipmentForm/> */}

        <div id="solutions">
          <SendoSolutions/>
        </div>

        <LogisticsSlider/>

        <div id="serviceSlider">
          <ServicesSlider />
        </div>

        <TestimonialSlider/>

        <div id="getInTouch">
          <ContactSection/>
        </div>
        <Form/>

        <ScrollToTopButton/>
    </div>
  )
}

export default Home