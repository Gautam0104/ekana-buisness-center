import React from "react";
import { FaCheck } from "react-icons/fa";
const HighlightsSection = () => {
    return (
        <section id="highlights" className="bg-white">
            {/* Header Banner */}
            <div
                className="relative w-full h-32 md:h-48 bg-cover bg-center bg-fixed flex items-center justify-center"
                style={{ backgroundImage: "url('/ebc/highlights/banner.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
                {/* Heading */}
                <h1 className="relative text-white text-2xl md:text-4xl font-bold text-center px-4">
                    Eldeco Latitude 27 - Highlights
                </h1>
            </div>
            {/* Two-Column Content */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 mb-8 px-4 md:px-8 py-8">
                {/* Left Column */}
                <div className="md:w-1/2">
                    {/* Green Tab */}
                    <div className="bg-primary text-center py-3 min-w-full">
                        <h2 className="text-2xl md:text-3xl text-white font-semibold">Highlights</h2>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4 mt-4">
                        Ekana Business Center Connectivity Highlights
                    </h3>
                    <p className="text-gray-700 text-xs md:text-sm mb-6 leading-relaxed font-medium">
                     Based in the prime location of Lucknow in Uttar Pradesh, Ekana Business Centre is 
                     well-served by various modes of public transportation, including buses, autos, and 
                     taxis. Gomti Nagar Railway Station and Lucknow Airport, is within a convenient distance.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 ">
                            <FaCheck className="text-primary mt-1" />
                            <p className="text-gray-800 cursor-pointer font-medium text-sm sm:text-md leading-relaxed">
                                Shaheed Path - 2 mins
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheck className="text-primary mt-1" />
                            <p className="text-gray-800 cursor-pointer font-medium text-sm sm:text-md leading-relaxed">
                                Lucknow Airport- 20 mins
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheck className="text-primary mt-1" />
                            <p className="text-gray-800 cursor-pointer font-medium text-sm sm:text-md leading-relaxed">
                                Ayodhya-Lucknow Highway - 10 mins
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheck className="text-primary mt-1" />
                            <p className="text-gray-800 cursor-pointer font-medium text-sm sm:text-md leading-relaxed">
                                Ekana Stadium- 2 mins
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheck className="text-primary mt-1" />
                            <p className="text-gray-800 cursor-pointer font-medium text-sm sm:text-md leading-relaxed">
                                Sultanpur-Lucknow Highway - 5 mins
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheck className="text-primary mt-1" />
                            <p className="text-gray-800 cursor-pointer font-medium text-sm sm:text-md leading-relaxed">
                               UP Police Head Office - 2 mins
                            </p>
                        </li>
                        
                    </ul>
                </div>
                {/* Right Column */}
                <div className="md:w-1/2">
                    <img
                        src="/ebc/highlights/highlight.jpg"
                        alt="Project Highlights"
                        className="w-full rounded-xl shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
