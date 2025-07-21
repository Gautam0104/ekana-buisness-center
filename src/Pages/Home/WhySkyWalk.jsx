import React from "react";

const WhySkyWalk = () => {
  return (
    <section id="project-highlights" className="bg-white  ">
      <div className="container mx-auto ">
        <div className="max-w-5xl mx-auto text-center ">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Why Sky Walk ?
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-3 md:mb-6 rounded"></div>
          <p className="text-gray-600 font-medium text-xs sm:text-sm tracking-wider md:leading-relaxed px-4 md:px-8">
            Eldeco Skywalk derives its name from its signature feature, the beautifully curated Skywalk Terrace, an elevated leisure zone that crowns the towers. This thoughtfully designed rooftop space brings the community together in the sky, offering a unique blend of wellness, recreation, and tranquillity. It includes a multipurpose area, sit-out plaza, sculpture court, activity space, juice corner with pergola, feature and screen walls, elder sit-out zones, and a dedicated game zone. The Skywalk Terrace isn't just an amenity, it's a lifestyle statement that elevates everyday living, making the project truly deserving of its name.
          </p>
        </div>

        <div className="mt-3 md:mt-6 ">
          <img
            src="/skywalk1.webp"
            alt="About Eldeco City"
            loading="lazy"
            className="w-full h-[300px] md:h-[420px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySkyWalk;
