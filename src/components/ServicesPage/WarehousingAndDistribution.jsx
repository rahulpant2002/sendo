import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "State-of-the-Art Facilities",
    description: [
      "Modern, secure, and climate-controlled warehouses.",
      "Ensuring the safety and integrity of your inventory.",
    ],
    icon: "🏢",
  },
  {
    title: "Efficient Inventory Management",
    description: [
      "Advanced systems for accurate stock control.",
      "Enhancing efficiency in inventory handling.",
    ],
    icon: "📋",
  },
  {
    title: "Order Fulfillment Excellence",
    description: [
      "Swift and accurate order processing.",
      "Meet the demands of your business and customers seamlessly.",
    ],
    icon: "📦",
  },
  {
    title: "Real-time Visibility",
    description: [
      "Continuous monitoring of inventory levels.",
      "Gain real-time insights into your supply chain.",
    ],
    icon: "👁️",
    highlight: true, // Special highlight for this card
  },
];
 
const WarehousingAndDistribution = () => {
  const navigate = useNavigate();

  const handleContactUs = ()=>{
    navigate('/contact');
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
                  Warehousing and Distribution
        </h2>
      
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Warehousing</h3>
            <p className="text-gray-600 mt-2">
                          Storing and managing goods in a facility before they are
                          distributed.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Distribution</h3>
            <p className="text-gray-600 mt-2">
                          Sorting, packing, and shipping goods to various destinations.
            </p>
          </div>
        </div>
      
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border p-6 rounded-lg shadow-md bg-white ${
                service.highlight ? "border-yellow-500" : ""
              }`}>

                <div className="text-3xl">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                                {service.title}
                </h3>

                <ul className="mt-2 text-gray-600">
                      {service.description.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                          • {point}
                        </li>
                      ))}
                </ul>
                <button onClick={handleContactUs} className="mt-4 cursor-pointer text-yellow-600 font-semibold flex items-center">
                                Contact us <span className="ml-1">➝</span>
                </button>
            </div>
          ))}
        </div>
      </div>
    </section>
);
};
 
export default WarehousingAndDistribution;