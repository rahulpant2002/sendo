import img20 from "../../Images/img20.jpg"
import flowChart from "../../Images/flowChart.svg"
import Form from "../Form"
import BackgroundImg from "../BackgroundImg"
const Contact = () => {
  const heading = "Contact Us";
  const text = "Have questions about your order or need assistance with our products? We’re here to help! Reach out to us on Sendo for inquiries, support, or feedback. Our team is committed to providing you with a smooth shopping experience. Contact us today, and we’ll get back to you as soon as possible!"
  return (
    <div>
        <BackgroundImg img={img20} heading={heading} text={text} />
        <Form/>

        {/* <div className="flex flex-col justify-center items my-5">
          <h2 className="bg-yellow-400 mx-auto text-3xl font-bold rounded-2xl px-2 my-5">Sendo Distribution Model</h2>
          <img src={flowChart} alt="img" />
        </div> */}

    </div>
  )
}

export default Contact