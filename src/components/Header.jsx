import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="flex lg:mr-[300px] flex-1 flex-row items-center justify-between px-4 py-3 shadow-md  ">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/ebc/project-logo.webp"
            loading="lazy"
            alt="Ekana Business Center"
            className="h-12"
          />
        </Link>

        <div className="flex items-center justify-between w-full md:w-auto space-x-4">
          <div className="flex items-center">
            {" "}
            <nav className="hidden lg:flex space-x-6 text-sm font-medium">
              <a
                href="/"
                className="text-primary  font-semibold border-r border-gray-300 pr-4"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-black hover:text-primary hover:font-semibold border-r border-gray-300 pr-4"
              >
                About
              </a>
              <a
                href="#amenities"
                className="text-black hover:text-primary hover:font-semibold border-r border-gray-300 pr-4"
              >
                Amenities
              </a>
             {/* <a
                href="#project-highlights"
                className="text-black hover:text-primary hover:font-semibold border-r border-gray-300 pr-4"
              >
                Project Highlights
              </a>  */}
              <a
                href="#floor-plans"
                className="text-black hover:text-primary hover:font-semibold border-r border-gray-300 pr-4"
              >
                Floor Plans
              </a>
              <a
                href="#gallery"
                className="text-black hover:text-primary hover:font-semibold border-r border-gray-300 pr-4"
              >
                Gallery
              </a>
              <a
                href="#location"
                className="text-black hover:text-primary hover:font-semibold border-r border-gray-300 pr-4"
              >
                Location
              </a>
              <a
                href="#builder"
                className="text-black hover:text-primary hover:font-semibold border-r border-gray-300 pr-4"
              >
                Builder
              </a>
            </nav>
            {/* Brochure Button */}
            <div className="hidden lg:block mt-2 md:mt-0 pl-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Eldeco_SkyWalk_Brochure.pdf";
                  link.download = "Eldeco_SkyWalk_Brochure.pdf";
                  link.click();
                }}
                className="bg-primary text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-secondary transition"
              >
                Brochure
              </button>
            </div>
          </div>

          {/* Mobile Burger Button */}
          <button
            className="lg:hidden ml-auto p-2 rounded-md focus:outline-none"
            onClick={toggleDrawer}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer/Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-96 bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <div className="flex items-center border-4 border-primary justify-between p-4">
          <img
            src="/ebc/project-logo.webp"
            loading="lazy"
            alt="Ekana Buisness Center"
            className="h-10"
          />
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-md focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col py-2 px-4 space-y-0 border-4 -mt-1 border-primary h-full">
          <a
            href="/"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            About
          </a>
          <a
            href="#amenities"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            Amenities
          </a>
          <a
            href="#project-highlights"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            Project Highlights
          </a>
          <a
            href="#floor-plans"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            Floor Plans
          </a>
          <a
            href="#gallery"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            Gallery
          </a>
          <a
            href="#location"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            Location
          </a>
          <a
            href="#builder"
            className="text-primary font-semibold py-2"
            onClick={toggleDrawer}
          >
            Builder
          </a>
          <a
            href="/Eldeco_SkyWalk_Brochure.pdf"
            className="text-primary font-semibold py-2"
            download="Eldeco_SkyWalk_Brochure.pdf"
            onClick={toggleDrawer}
          >
            Brochure
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
}
