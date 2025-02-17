import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Network Optimization",
    description:
      "Analyzing and optimizing the logistics network for efficiency.",
  },
  {
    title: "Route Planning",
    description:
      "Determining the most efficient routes for transportation.",
  },
];
 
const detailedServices = [
  {
    title: "Network Optimization",
    icon: "🧠",
    points: [
      "Strategic planning for an efficient supply chain network.",
      "Maximize operational efficiency with well-optimized networks.",
    ],
  },
  {
    title: "Risk Mitigation",
    icon: "⚠️",
    points: [
      "Proactive measures to address potential disruptions.",
      "Ensure the stability of your supply chain.",
    ],
  },
  {
    title: "Adaptive Route Planning",
    icon: "📍",
    points: [
      "Dynamic adjustment based on real-time data.",
      "Optimize routes for time and cost efficiency.",
    ],
    highlight: true,
  },
];
 
const SupplyChainPlanning = () => {
  const navigate = useNavigate('/contact');
  
  const handleContactUs = ()=>{
    navigate('/contact');
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Supply Chain Planning
        </h2>
      
             
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                              {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      
              {/* Bottom detailed cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className={`border p-6 rounded-lg shadow-md bg-white `}
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                              {service.title}
              </h3>

              <ul className="mt-2 text-gray-600">
                {service.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                                      • {point}
                  </li>
                ))}
              </ul>
              <button onClick={handleContactUs} className="mt-4 cursor-pointer text-yellow-400 font-semibold flex items-center">
                              Contact us <span className="ml-1">➝</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default SupplyChainPlanning;