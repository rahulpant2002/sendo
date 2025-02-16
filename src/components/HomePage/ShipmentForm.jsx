// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
 
// export default function ShipmentForm() {
//   const [shippingType, setShippingType] = useState("business");
//   const [importShipment, setImportShipment] = useState(false);
//   const [fromCountry, setFromCountry] = useState("India");
//   return (
// <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// <h2 className="text-2xl font-bold mb-4">I am shipping as a...</h2>
// <div className="flex border-b mb-4">
// <button 
//           className={`flex-1 p-2 text-lg ${shippingType === "business" ? "border-b-2 border-red-500 font-bold" : "text-gray-500"}`} 
//           onClick={() => setShippingType("business")}
// >Business</button>
// <button 
//           className={`flex-1 p-2 text-lg ${shippingType === "private" ? "border-b-2 border-red-500 font-bold" : "text-gray-500"}`} 
//           onClick={() => setShippingType("private")}
// >Private Person</button>
// </div>
// <div className="mb-4">
// <h3 className="font-bold">From</h3>
// <div className="flex items-center gap-2 p-2 border rounded">
// <span className="text-lg">🇮🇳</span>
// <span>{fromCountry}</span>
// <button className="text-red-500 text-sm ml-auto">Change location</button>
// </div>
// </div>
// <div className="flex items-center mb-4">
// <Switch checked={importShipment} onCheckedChange={setImportShipment} />
// <span className="ml-2">Create an import shipment</span>
// </div>
// <div className="grid grid-cols-2 gap-4 mb-4">
// <Input placeholder="City" />
// <Input placeholder="Pin Code" />
// </div>
// <div className="mb-4">
// <h3 className="font-bold">To</h3>
// <Select>
// <SelectTrigger>
// <SelectValue placeholder="Please start typing to select" />
// </SelectTrigger>
// <SelectContent>
// <SelectItem value="usa">USA</SelectItem>
// <SelectItem value="uk">UK</SelectItem>
// <SelectItem value="germany">Germany</SelectItem>
// </SelectContent>
// </Select>
// </div>
// <div className="grid grid-cols-2 gap-4 mb-4">
// <Input placeholder="City" />
// <Input placeholder="Pin Code" />
// </div>
// <Button className="w-full bg-red-500 text-white">Describe Your Shipment</Button>
// </div>
//   );
// }
import React from 'react'

const ShipmentForm = () => {
  return (
    <div>ShipmentForm</div>
  )
}

export default ShipmentForm