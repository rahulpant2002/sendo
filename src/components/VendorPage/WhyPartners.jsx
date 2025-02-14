import { HandCoins, Percent, Wallet, Car } from "lucide-react";

const benefits = [
  {
    icon: <HandCoins size={40} color="white" />, 
    title: "Regular Earnings"
  },
  {
    icon: <Percent size={40} color="white" />, 
    title: "No need to scout the market"
  },
  {
    icon: <Wallet size={40} color="white" />, 
    title: "On-time payments"
  },
  {
    icon: <Car size={40} color="white" />, 
    title: "Driver training"
  }
];
 
export default function WhyPartner() {
  return (
<section className="py-16 bg-gray-100 text-center">
<h2 className="text-3xl font-semibold text-gray-900 mb-8">Why Partner With Us?</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
<div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
<div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {benefit.icon}
</div>
<p className="text-gray-800 text-lg font-medium">{benefit.title}</p>
</div>
        ))}
</div>
</section>
  );
}