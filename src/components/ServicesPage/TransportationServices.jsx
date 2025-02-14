import { FaShippingFast } from "react-icons/fa";
import { MdDirectionsBoat } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
 
const TransportationServices = () => {
  const navigate = useNavigate();
  const handleContactUs = ()=>{
    navigate('/contact')
  }
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Transportation Services</h2>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold text-yellow-500">FREIGHT TRANSPORTATION</span>
          <br />
                  Involves the movement of goods via various modes such as road, rail.
        </p>
      </div>
    
      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Expedited Shipping */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
          <FaShippingFast className="text-4xl text-gray-700 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Expedited Shipping</h3>
          <p className="text-gray-600 text-center mt-2">
                      Guaranteed fast and timely delivery. Swift handling for time-sensitive shipments.
          </p>
          <button onClick={handleContactUs} className="cursor-pointer block mx-auto mt-4 text-yellow-500 font-semibold hover:underline">
                      Contact us →
          </button>
        </div>
        
                {/* Versatile Fleet */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
          <MdDirectionsBoat className="text-4xl text-gray-700 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Versatile Fleet</h3>
          <p className="text-gray-600 text-center mt-2">
                      Diverse transportation options: ground, air, and sea. Flexibility to meet unique shipping requirements.
          </p>
          <button onClick={handleContactUs} className="cursor-pointer block mx-auto mt-4 text-yellow-500 font-semibold hover:underline">
                      Contact us →
          </button>
        </div>
        
                {/* Real-time Tracking */}
        <div className="bg-white p-6 shadow-lg rounded-xl border-2 border-yellow-500 hover:shadow-2xl transition duration-300">
          <FiMapPin className="text-4xl text-gray-700 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Real-time Tracking</h3>
          <p className="text-gray-600 text-center mt-2">
                      Advanced tracking systems for shipment visibility. Monitor your cargo in real time for increased transparency.
          </p>
          <button onClick={handleContactUs} className="cursor-pointer block mx-auto mt-4 text-yellow-500 font-semibold hover:underline">
                      Contact us →
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default TransportationServices;