import { ShoppingCart, Store, Car, Cpu, Hammer, Utensils, Leaf, Zap, Shirt, HeartPulse } from "lucide-react";
 
const industries = [

  { name: "Retail", icon: Store },

  { name: "E-Commerce", icon: ShoppingCart },

  // { name: "Automotive", icon: Car },

  { name: "Technology", icon: Cpu },

  { name: "Construction", icon: Hammer },

  { name: "Food and Beverage", icon: Utensils },

  { name: "Agriculture", icon: Leaf },

  { name: "Energy", icon: Zap },

  { name: "Textiles and Apparel", icon: Shirt },

  // { name: "Healthcare & Pharmaceuticals", icon: HeartPulse }

];
 
export default function Industries() {

  return (
    <div className="max-w-5xl mx-auto text-center text-black py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Industries We Serve</h2>
      <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {industries.map((industry, index) => (
          <div
            key={index}
            className="p-10 border rounded-lg shadow-sm hover:shadow-md transition"
          >         
            <industry.icon className="w-10 h-10 mx-auto mb-3 text-gray-700" />
            <p className="text-lg font-medium" >{industry.name}</p>
          </div>

        ))}
      </div>
    </div>

);

}