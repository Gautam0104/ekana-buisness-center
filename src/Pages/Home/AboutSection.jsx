import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import EnquiryFormModal from "../../components/EnquiryFormModal";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section id="about" className="py-8 lg:py-16  bg-white  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 px-4 md:px-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
            About Eldeco Sky Walk
          </h2>
          <p className="text-gray-700 text-xs md:text-sm mb-6 leading-relaxed font-medium">
            <strong>Eldeco Skywalk</strong> is an exclusive residential offering within the established <strong>Eldeco City township</strong>, centrally positioned in Lucknow. It features four towers of <strong>2</strong> and <strong>3 BR</strong> apartments, thoughtfully designed to welcome natural light and fresh air. What truly sets it apart is the beautifully landscaped <strong>Skywalk atop Towers</strong> Life 1 & 2: an elevated, tranquil space where mornings begin in peace and evenings wind down under a starlit sky.
          </p>

          <button
            onClick={openModal}
            className="bg-[#16945F] hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-xs md:text-sm font-semibold flex items-center gap-2 transition"
          >
            Request Brochure <AiOutlineDownload className="size-6" />
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
        </div>

        <div className="md:w-1/2">
          <img
            src="/skywalkelevation.webp"
            alt="Eldeco Skywalk"
            loading="lazy"
            className="md:rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
