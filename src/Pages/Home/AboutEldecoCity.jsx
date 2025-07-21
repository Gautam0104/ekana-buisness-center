import React from "react";

const AboutEldecoCity = () => {
  return (
    <section className="bg-white  ">
      <div className="container mx-auto ">
        <div className="max-w-5xl mx-auto text-center ">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            About Eldeco City
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-3 md:mb-6 rounded"></div>
          <p className="text-gray-600 font-medium text-xs sm:text-sm tracking-wide md:leading-relaxed px-4 md:px-8">
            Eldeco City is a landmark township on IIM Road, Lucknow, known for
            its expansive 133-acre layout, modern infrastructure, and serene
            green environment. With wide roads, 23 lush parks, schools, shopping
            complexes, and top-notch security, it offers a complete lifestyle
            within a self-sustained community. Designed for comfort and
            convenience, Eldeco City sets a new benchmark for integrated urban
            living.
          </p>
        </div>

        <div className="mt-2 md:mt-6 ">
          <img
            src="/Eldeco-SkyWalk-Info-Deck.png"
            loading="lazy"
            alt="About Eldeco City"
            className="w-full h-[300px] md:h-[420px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEldecoCity;
