import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetQuoteBtn = () => {
    const navigate = useNavigate();

    const handleBtn = ()=>{
        navigate('/quote')
    }

  return (
    <div 
  onClick={handleBtn} 
  className="flex justify-center items-center w-[35%] sm:w-[50%] md:w-[35%] lg:w-[20%] h-[40px] m-auto mt-8"
>
  <button 
    className="w-full bg-yellow-400 text-black rounded-md p-2 font-bold cursor-pointer text-center transition-transform duration-300 hover:scale-105"
  >
    Get a Quote →
  </button>
</div>



  )
}

export default GetQuoteBtn