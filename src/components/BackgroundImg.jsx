import React from 'react'

const BackgroundImg = ({img, heading, text, scrollTo}) => {

  const handleBtn = () => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo); // Target the section dynamically
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div className="w-screen h-full relative">
        <img src={img} alt="bgImg" className="w-full h-[70vh] object-cover opacity-65" />

        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 max-w-lg bg-gradient-to-r from-black/80 to-transparent  rounded-lg font-bold p-2">
            <h1 className="text-4xl bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text">{heading}</h1>
            <p className="mt-4 bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text">
              {text}
            </p>
            <button onClick={handleBtn} className="mt-4 px-6 py-2 cursor-pointer bg-balck text-white font-semibold rounded-lg transition-all duration-300 hover:scale-110">
            Know More
            </button>
        </div>

    </div>
  )
}

export default BackgroundImg