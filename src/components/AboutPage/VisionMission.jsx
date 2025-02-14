import React from "react";
 
const VisionMission = () => {

  return (
<div className="flex justify-center items-center gap-8 p-8 bg-white">

      {/* Vision Section */}
<div className="w-1/2 p-6 bg-gradient-to-b from-black to-yellow-600 text-white rounded-xl shadow-lg text-center">
<div className="flex flex-col items-center">
<span className="text-4xl mb-4">👁️</span>
<h2 className="text-2xl font-semibold">Our Vision</h2>
<p className="mt-4 text-sm">

            Sendo Logistics is committed to making international logistics smoother and more sustainable than ever by leveraging cutting-edge technology, strategic partnerships, robust networks, and strict adherence to global regulations.
</p>
</div>
</div>
 
      {/* Mission Section */}
<div className="w-1/2 p-6 bg-gradient-to-b from-yellow-600 to-black text-white rounded-xl shadow-lg text-center relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://source.unsplash.com/800x600/?logistics,transportation')" }}></div>
<div className="flex flex-col items-center relative z-10">
<span className="text-4xl mb-4">🎯</span>
<h2 className="text-2xl font-semibold">Our Mission</h2>
<p className="mt-4 text-sm">

            Our mission is to revolutionize global logistics by making it more seamless, efficient, and sustainable. We achieve this through cutting-edge technology, strategic partnerships, and a robust network while ensuring compliance with international standards. At Sendo Logistics, we are committed to delivering innovative, reliable, and eco-friendly solutions that drive the future of logistics.
</p>
</div>
</div>
</div>

  );

};
 
export default VisionMission;