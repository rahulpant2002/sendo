import Form from "../Form"
import BackgroundImg from "../BackgroundImg"
import ScrollToTopButton from "../ScrollToTopButton"
const Contact = () => {
  const heading = "Contact with Sendo";
  const text = "Have questions about your order or need assistance with our products? We’re here to help! Reach out to us on Sendo for inquiries, support, or feedback. Our team is committed to providing you with a smooth shopping experience. Contact us today, and we’ll get back to you as soon as possible!"

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
        <BackgroundImg img='/Images/img20.jpg' heading={heading} text={text} scrollTo='form' />
        <div id="form">
          <Form/>
        </div>

        <ScrollToTopButton/>

        {/* <div className="flex flex-col justify-center items my-5">
          <h2 className="bg-yellow-400 mx-auto text-3xl font-bold rounded-2xl px-2 my-5">Sendo Distribution Model</h2>
          <img src={flowChart} alt="img" />
        </div> */}

    </div>
  )
}

export default Contact