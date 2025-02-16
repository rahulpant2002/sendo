import React from 'react'
import logo from "../Images/Logo.png"
const LogoFooter = () => {
  return (
    <div>
        <div className="md:w-1/3">
            <div className='w-40'>
              <img src={logo} alt="logo" />
            </div>
            {/* <p className="ml-4 text-sm mt-2 text-black">
                ISO 9001: 2015, ISO 27001: 2013 Certified Company
            </p>
            <p className="ml-4 text-sm text-black">CIN: L63090DL2011PLC221234</p> */}
        </div>
    </div>
  )
}

export default LogoFooter