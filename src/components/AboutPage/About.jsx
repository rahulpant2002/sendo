import img1 from "../../Images/img1.jpg"
import BackgroundImg from "../BackgroundImg";
import ContactSection from "../ContactSection";
import Founders from "./Founders";
import Industries from "./Industries";
import VisionMission from "./VisionMission";

const About = () => {
  const heading = "Delivering Sendo Logistics Delivering Excellence Excellence";
  const text = "Sendo Sendo Logistics, a pioneering Bengaluru-based company, combines advanced technology and strategic partnerships to deliver top-tier logistics solutions, all while championing sustainability and employee well-being is a cutting-edge Bengaluru-based company that uses advanced technologies and strategic partnerships to provide exceptional logistics services while prioritizing sustainability and employee well-being";
  return (
    <div>
        <BackgroundImg img={img1} heading={heading} text={text} scrollTo="industries"/>;
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