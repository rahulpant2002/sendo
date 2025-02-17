import img8 from "../../Images/img8.jpg"
import BackgroundImg from "../BackgroundImg";
import ContactSection from "../ContactSection";
import Founders from "./Founders";
import Industries from "./Industries";
import VisionMission from "./VisionMission";

const About = () => {
  const heading = "Delivering Sendo Logistics Delivering Excellence Excellence";
  const text = "Sendo Logistics, a cutting-edge Bengaluru-based company, leverages advanced technology and strategic partnerships to deliver exceptional logistics solutions while prioritizing sustainability and employee well-being."
  return (
    <div>
        <BackgroundImg img={img8} heading={heading} text={text} scrollTo="industries"/>;
        <VisionMission/>
        <Founders/>
        <div id="industries">
          <Industries/>
        </div>
        <ContactSection/>
    </div>
  )
}

export default About;