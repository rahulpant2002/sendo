import React from "react";
import cao from "../../Images/cao.png";
import cto from "../../Images/cto.png";
import ceo from "../../Images/ceo.png";
import director1 from "../../Images/director1.png";
import director2 from "../../Images/director2.png";

const Founders = () => {
  return (
    <div>
      <div className="text-center font-bold text-black text-3xl my-6">
        Meet Our Team
      </div>

      {/* Team Members Container */}
      <div className="flex flex-wrap justify-center text-black w-full px-5 gap-6 md:gap-10 lg:gap-12">
        {/* CEO */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center">
          <img
            src={ceo}
            alt="ceoImg"
            className="h-32 w-32 object-cover rounded-full"
          />
          <p className="font-semibold mt-2">LAVAKUMAR.N</p>
          <p className="text-sm text-gray-600">CEO & Founder</p>
        </div>

        {/* Director 2 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center">
          <img
            src={director2}
            alt="dir2Img"
            className="h-32 w-32 object-cover rounded-full"
          />
          <p className="font-semibold mt-2">MANJUNATH.N</p>
          <p className="text-sm text-gray-600">Director</p>
        </div>

        {/* Director 1 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center">
          <img
            src={director1}
            alt="dir1Img"
            className="h-32 w-32 object-cover rounded-full"
          />
          <p className="font-semibold mt-2">MALLIKARJUNA.B PAMOJI</p>
          <p className="text-sm text-gray-600">Director</p>
        </div>

        {/* CAO */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center">
          <img
            src={cao}
            alt="caoImg"
            className="h-32 w-32 object-cover rounded-full"
          />
          <p className="font-semibold mt-2">ARUN KUMAR.N</p>
          <p className="text-sm text-gray-600">CAO</p>
        </div>

        {/* CTO */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center">
          <img
            src={cto}
            alt="ctoImg"
            className="h-32 w-32 object-cover rounded-full"
          />
          <p className="font-semibold mt-2">SIMHALA SAI SREENIVAS</p>
          <p className="text-sm text-gray-600">CTO</p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
