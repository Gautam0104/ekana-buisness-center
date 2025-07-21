import React from "react";

const SkyWalkAmenities = () => {
  const features = [
    {
      title: "Kids Play Area",
      img: "/Picture9.webp",
    },
    {
      title: "Multi-Purpose Court",
      img: "/Picture10.png",
    },
    {
      title: "Open Gym",
      img: "/Picture11.png",
    },
    {
      title: "Badminton Court",
      img: "/Picture12.png",
    },
    {
      title: "Half Basketball Court",
      img: "/Picture13.png",
    },
    {
      title: "Amphitheater",
      img: "/Picture14.png",
    },
    {
      title: "CCTV Security",
      img: "/Picture15.png",
    },
  ];

  return (
    <section id="amenities" className="bg-white py-8 md:py-10  ">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Sky Walk Amenities
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 md:mb-12 rounded"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center relative bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center justify-center mx-auto w-12 h-12 mb-5 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors duration-300">
                <img
                  src={feature.img}
                  loading="lazy"
                  alt={feature.title}
                  className="w-12 h-12 object-contain mx-auto"
                />
              </div>

              <h3 className="text-sm font-medium text-black mb-2 group-hover:text-primary-700 transition-colors duration-300">
                {feature.title}
              </h3>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkyWalkAmenities;
