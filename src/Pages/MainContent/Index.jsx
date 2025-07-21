import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../Home/Index";
import Sidebar from "../../components/Sidebar";

const MainContent = () => {
  return (
    <div className="lg:mr-[300px] flex-1">
      <Home />
    </div>
  );
};

export default MainContent;
