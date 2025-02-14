import BackgroundImg from "../BackgroundImg"
import img5 from "../../Images/img5.jpg"
import ContactSection from "../ContactSection";
import LogisticsSlider from "./LogisticSider";
import ServicesSlider from "./ServiceSlider";
import SendoSolutions from "./SendoSolutions"

const Home = () => {
  const heading = "Sendo Logistics Transforming Services for All.";
  const text = "Seeking a logistics partner that’s affordable, advanced, and future-ready? Sendo Logistics delivers excellence with cutting-edge technology, strategic collaborations, and a strong commitment to sustainability—redefining the future of logistics."
  return (
    <div>
        <BackgroundImg img={img5} heading={heading} text={text}/>
        <SendoSolutions/>
        <LogisticsSlider/>
        <ServicesSlider/>
        <ContactSection/>
    </div>
  )
}

export default Home