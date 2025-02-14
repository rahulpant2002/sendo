import BackgroundImg from "../BackgroundImg"
import img2 from "../../Images/img2.jpg"
import ContactSection from "../ContactSection"
import TransportationServices from "./TransportationServices"
import LastMileDelivery from "./LastMileDelivery"
import WarehousingAndDistribution from "./WarehousingAndDistribution"
import SupplyChainPlanning from "./SupplyChainPlanning"

const Services = () => {
  const heading = "Trusted Packers & Movers for All Your Relocation Needs"
  const text = "On-time Delivery. Guaranteed Damage-free Relocation. Real-time Tracking."
  return (
    <div>
      <BackgroundImg img={img2} heading={heading} text={text}/>;
      <TransportationServices/>
      <LastMileDelivery/>
      <WarehousingAndDistribution/>
      <SupplyChainPlanning/>
      <ContactSection/>
    </div>
  )
}

export default Services