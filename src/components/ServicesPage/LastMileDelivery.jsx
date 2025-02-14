import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Efficient transportation",
    description: [
      "Minimizing delivery times and fuel costs.",
      "End-to-end successful deliveries.",
    ],
    icon: "🚚",
  },
  {
    title: "Logistics management",
    description: [
      "Top experts ensuring smooth operations.",
      "More improvements and cost savings.",
    ],
    icon: "📦",
  },
  {
    title: "Advanced tracking systems",
    description: [
      "More control over all deliveries.",
      "Streamlined processes and optimum visibility.",
    ],
    icon: "📍",
  },
];
 
const LastMileDelivery = () => {
  const navigate = useNavigate();

  const handleContactUs = ()=>{
    navigate('/contact');
  }
  
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800">
                  LAST-MILE DELIVERY
        </h2>
        <p className="text-gray-600 mt-2">
                  The final leg of the supply chain, ensuring products reach the end
                  customer from a distribution center or retail location.
        </p>
      
        <div className="grid md:grid-cols-3 gap-6 mt-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`border p-6 rounded-lg shadow-md bg-white ${
                index === 2 ? "border-yellow-500" : ""
                }`}>

                  <div className="text-3xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                      {service.title}
                  </h3>
                  <ul className="mt-2 text-gray-600">
                      {service.description.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                          • {point}
                        </li>
                      ))}
                  </ul>

                  <button onClick={handleContactUs} className="mt-4 text-yellow-600 font-semibold flex items-center cursor-pointer">
                                  Contact us <span className="ml-1">➝</span>
                  </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
 
export default LastMileDelivery;