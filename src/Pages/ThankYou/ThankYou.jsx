import React from "react";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ThankYou = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);


  return (
    <div className="min-h-screen lg:mr-[300px] flex-1 bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div data-aos="fade-up" className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-600 py-6 px-6 text-center">
          <svg
            className="mx-auto h-16 w-16 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-white">Thank You!</h2>
        </div>

        <div className="px-6 py-8 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Your enquiry has been successfully submitted. Our team will contact
            you shortly.
          </p>

          <div className="bg-green-50 rounded-md p-4 mb-6">
            <p className="text-green-700 font-medium">What happens next?</p>
            <ul className="mt-2 text-left text-gray-700 text-sm space-y-1 pl-5 list-disc">
              <li>Our representative will contact you within 24 hours</li>
              <li>You'll receive project details via email</li>
              <li>Schedule a site visit if interested</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 mb-3">Need immediate assistance?</p>
            <div className="space-y-2">
              <p className="flex items-center justify-center text-gray-700">
                <span className="mr-2">📩</span>
                <span>
                  Email:{" "}
                  <a
                    href="mailto:eldecoskywalk@gmail.com"
                    className="text-green-600 hover:underline"
                  >
                    eldecoskywalk@gmail.com
                  </a>
                </span>
              </p>
              <p className="flex items-center justify-center text-gray-700">
                <span className="mr-2">📞</span>
                <span>
                  Phone:{" "}
                  <a
                    href="tel:+917042412266"
                    className="text-green-600 hover:underline"
                  >
                    +91-7042412266
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-4 text-center">
          <a
            href="/"
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
