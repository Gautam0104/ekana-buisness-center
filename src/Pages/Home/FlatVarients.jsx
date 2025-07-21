import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const flats = [
  { type: "2BHK + 2T", area: "726 Sq. Ft.", price: "₹ On Request" },
  { type: "2BHK + 2T + STUDY", area: "823-946 Sq. Ft.", price: "₹ On Request" },
  { type: "3BHK + 3T", area: "1,084 Sq. Ft." , price: "₹ On Request"},
  { type: "3BHK + 3T + STUDY", area: "1,287-1290 Sq. Ft." , price: "₹ On Request" },
];

const FlatVarients = () => {
  return (
    <div className="py-8 md:py-16 px-4 bg-white  ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Pricing
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-3 md:mb-6 rounded-full"></div>
          <p className="text-xs sm:text-sm tracking-wider font-medium text-gray-600 max-w-4xl mx-auto">
          Making premium living accessible, where elegance meets value.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flats.map((flat, index) => (
              <div
                key={index}
                className="group h-full transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="p-4 flex-grow">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg mb-6 group-hover:bg-green-100 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {flat.type}
                    </h3>
                    <p className="text-gray-600  text-md flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      {flat.area}
                    </p>
                    <a href="tel:+91 7042412266" className="text-gray-600  text-md flex items-center font-semibold">
                    {flat.price}
                    </a>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatVarients;
