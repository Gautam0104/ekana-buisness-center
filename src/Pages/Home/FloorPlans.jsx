import React from "react";

const FloorPlans = () => {
  const images = [
    {
      src: "/floorplan1.jpg",
      alt: "2BHK + 2T Floor Plan",
    },
    {
      src: "/floorplan1.jpg",
      alt: "2BHK + 2T + Study Floor Plan",
    },
    {
      src: "/floorplan2.jpg",
      alt: "3BHK + 3T Floor Plan",
    },
    {
      src: "/floorplan2.jpg",
      alt: "3BHK + 3T + Study Floor Plan",
    },
  ];

  return (
    <section id="floor-plans" className="bg-white   py-8 md:py-10">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Floor Plans
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-6 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg group shadow-lg"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-[220px] aspect-video group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer blur-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
