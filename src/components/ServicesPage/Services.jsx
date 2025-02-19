import BackgroundImg from "../BackgroundImg"
import ContactSection from "../ContactSection"
import TransportationServices from "./TransportationServices"
import LastMileDelivery from "./LastMileDelivery"
import WarehousingAndDistribution from "./WarehousingAndDistribution"
import SupplyChainPlanning from "./SupplyChainPlanning"
import { Warehouse } from "lucide-react"
import ScrollToTopButton from "../ScrollToTopButton"

const Services = () => {
  const heading = "Trusted Sendo Logistics for All Your Relocation Needs"
  const text = "On-time Delivery. Guaranteed Damage-free Relocation. Real-time Tracking."

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <BackgroundImg img="/Images/img18.jpg" heading={heading} text={text} scrollTo="warehouse"/>;
      <TransportationServices/>
      <LastMileDelivery/>
      <div id="warehouse">
        <WarehousingAndDistribution/>
      </div>
      <SupplyChainPlanning/>
      <ContactSection/>
      <ScrollToTopButton/>
    </div>
  )
}

export default Services