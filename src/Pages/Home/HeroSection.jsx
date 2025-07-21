import React, { useState } from "react";
import EnquiryFormModal from "../../components/EnquiryFormModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="relative w-full h-[40vh] lg:h-[80vh] bg-cover bg-center flex items-center justify-start"
        style={{
          backgroundImage: "url('/Eldeco-Skywalk-Banner.jpg')",
        }}
      >
        <div className="absolute font-Montserrat top-0 right-0 py-4 px-4 md:px-6 flex flex-row items-center gap-4 bg-white/10 backdrop-blur-md rounded-bl-lg border border-white/20">
          <div className="p-1 bg-white rounded-sm">
            <img
              src="/Sky-Walk-qr-code.webp"
              alt="RERA QR Code"
              loading="lazy"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="text-[10px] tracking-wider text-black md:text-white leading-snug drop-shadow-md">
            <p className="font-semibold">
              <span className="text-primary-200">RERA NO.:</span>{" "}
              UPRERAPRJB59279/04/2025 |{" "}
              <a
                href="https://www.up-rera.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:underline"
              >
                www.up-rera.in
              </a>
            </p>

            <p>
              <span className="text-primary-200">Bank Collection Details:</span>{" "}
              HDFC Bank Ltd
            </p>
            <p>
              <span className="text-primary-200">Bank A/c No.:</span>{" "}
              999934566661
            </p>
            <p>
              <span className="text-primary-200">Launch -</span> 11 April 2025
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[380px] ml-10">
          <div className="bg-white/90 backdrop-blur-sm shadow-2xl text-center rounded-2xl relative z-10 border border-white/20">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white text-center px-6 py-2 rounded-t-md text-md font-bold tracking-wide">
              NEW LAUNCH
            </div>
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-1 tracking-tight">
                ELDECO SKYWALK
              </h2>
              <p className="text-md font-semibold text-gray-700 mt-1">
                At Eldeco City, IIM ROAD, LUCKNOW
              </p>
              <p className="text-sm text-gray-700 mt-1">
                A 133 Acres Integrated Township
              </p>
            </div>
            <div className="bg-primary/90 text-white text-xs py-3 w-full mb-4 leading-6 font-medium tracking-wide">
              <p>Project Area – 3 Acre</p>
              <p>Project Size – 4 Towers / 195 Units</p>
              <p>Floors – 14</p>
            </div>
            <div className="px-6 pb-6 mx-auto min-w-xs">
              <p className="text-sm text-gray-800 font-medium mb-3 leading-snug">
                Premium 2 & 3 BR
                <br /> Apartments In Lucknow
              </p>
              <button
                onClick={openModal}
                className="px-8 bg-primary hover:bg-green-800 text-white font-bold py-3 rounded-lg shadow-md transition transform hover:scale-105"
              >
                Enquire Now
              </button>

              <p className="text-xs text-black font-semibold mt-3 tracking-wide">
                RERA : UPRERAPRJ859279
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden w-screen px-8 mx-auto mt-8 mb-2  lg:mt-16 lg:mb-16">
        <div className="bg-white shadow-xl text-center rounded-2xl relative z-10">
          <div className="  transform w-auto mx-auto bg-primary text-white text-center px-4 py-1 rounded-t-md text-md font-semibold">
            NEW LAUNCH
          </div>
          <div className="px-6 py-2 border-x-2  border-gray-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              ELDECO SKYWALK
            </h2>
            <p className="text-sm font-semibold text-gray-700 mb-1">
              At Eldeco City, IIM ROAD, LUCKNOW
            </p>
            <p className="text-xs text-gray-00">
              A 133 Acres Integrated Township
            </p>
          </div>
          <div className="bg-primary text-white font-medium text-xs py-2 w-full mb-4 leading-6">
            <p>Project Area – 3 Acre</p>
            <p>Project Size – 4 Towers / 195 Units</p>
            <p>Floors – 14</p>
          </div>

          <div className="px-6 pb-6 mx-auto min-w-xs">
            <p className="text-sm text-gray-800 font-medium mb-4">
              Premium 2 & 3 BR
              <br /> Apartments In Lucknow
            </p>
            <button
              onClick={openModal}
              className="px-6 bg-primary hover:bg-green-800 text-white font-bold py-2 rounded shadow-md transition"
            >
              Enquire Now
            </button>
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg  shadow-xl max-w-xl w-full relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 p-2 rounded-bl-lg bg-primary  text-white "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <EnquiryFormModal />
                </div>
              </div>
            )}
            <p className="text-xs text-black font-semibold mt-4">
              RERA : UPRERAPRJ859279
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center  overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-xl mx-2 relative my-4">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 rounded-bl-lg bg-primary text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <EnquiryFormModal />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
