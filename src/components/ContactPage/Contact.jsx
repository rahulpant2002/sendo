import img20 from "../../Images/img20.jpg"
import flowChart from "../../Images/flowChart.svg"
import Form from "./Form"
const Contact = () => {

  return (
    <div>
        <img src={img20} alt="bgImg" className="w-full h-[65vh] object-cover" />
        <h1 className="absolute font-bold top-1/3 left-10 text-4xl bg-gradient-to-r from-white to-pink-600 text-transparent bg-clip-text">Contact Us</h1>
        <Form/>

        {/* <div className="flex flex-col justify-center items my-5">
          <h2 className="bg-yellow-400 mx-auto text-3xl font-bold rounded-2xl px-2 my-5">Sendo Distribution Model</h2>
          <img src={flowChart} alt="img" />
        </div> */}

    </div>
  )
}

export default Contact