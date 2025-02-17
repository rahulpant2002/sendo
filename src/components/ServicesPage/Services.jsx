import BackgroundImg from "../BackgroundImg"
import img18 from "../../Images/img18.jpg"
import ContactSection from "../ContactSection"
import TransportationServices from "./TransportationServices"
import LastMileDelivery from "./LastMileDelivery"
import WarehousingAndDistribution from "./WarehousingAndDistribution"
import SupplyChainPlanning from "./SupplyChainPlanning"
import { Warehouse } from "lucide-react"

const Services = () => {
  const heading = "Trusted Sendo Logistics for All Your Relocation Needs"
  const text = "On-time Delivery. Guaranteed Damage-free Relocation. Real-time Tracking."
  return (
    <div>
      <BackgroundImg img={img18} heading={heading} text={text} scrollTo="warehouse"/>;
      <TransportationServices/>
      <LastMileDelivery/>
      <div id="warehouse">
        <WarehousingAndDistribution/>
      </div>
      <SupplyChainPlanning/>
      <ContactSection/>
    </div>
  )
}

export default Services