
export default function Benefits() {
  const benefits = [
    {
      image: '/Images/img1.jpg', // Replace with actual image URL
      title: "Transparency in the payments",
    },
    {
      image: '/Images/img2.jpg', // Replace with actual image URL
      title: "Regular medical checkups for the drivers",
    },
    {
      image: '/Images/img3.jpg', // Replace with actual image URL
      title: "Assistance in the family and medical health insurance",
    },
    {
      image: '/Images/img4.jpg', // Replace with actual image URL
      title: "Assistance in vehicle insurance",
    },
    {
      image: '/Images/img5.jpg', // Replace with actual image URL
      title: "Educating the drivers in adapting tech and digitalization",
    },
    {
      image: '/Images/women.jpg', // Replace with actual image URL
      title: "Empowering the women drivers",
      highlight: true,
    },
  ];
 
  return (
<div className="py-10 px-5 md:px-20 bg-gray-50">
<h2 className="text-3xl font-semibold text-black text-center mb-8">
        Benefits of Partnership
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
        {benefits.map((benefit, index) => (
<div
            key={index}
            className="bg-white p-5 shadow-lg rounded-xl flex flex-col items-center text-center"
>
<img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
<p
              className={`text-lg font-medium ${
                benefit.highlight ? " font-semibold" : ""
              }`}
>
              {benefit.title}
</p>
</div>
        ))}
</div>
</div>
  );
}