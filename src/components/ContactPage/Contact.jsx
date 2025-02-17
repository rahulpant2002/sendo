import img3 from "../../Images/img3.jpg"
import flowChart from "../../Images/flowChart.svg"
import ContactForm from "./ContactForm"
const Contact = () => {

  return (
    <div>
        <img src={img3} alt="bgImg" className="w-full h-[55vh] object-cover opacity-80" />
        <h1 className="absolute font-bold top-1/3 left-10 text-4xl bg-gradient-to-r from-white to-pink-600 text-transparent bg-clip-text">Contact Us</h1>
        <ContactForm/>

        {/* <div className="flex flex-col justify-center items my-5">
          <h2 className="bg-yellow-500 mx-auto text-3xl font-bold rounded-2xl px-2 my-5">Sendo Distribution Model</h2>
          <img src={flowChart} alt="img" />
        </div> */}

    </div>
  )
}

export default Contact