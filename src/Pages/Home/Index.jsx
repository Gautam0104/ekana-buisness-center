import React from "react";
import HeroSection from "./HeroSection";
import FeatureHighlights from "./FeatureHighlights";
import AboutSection from "./AboutSection";
import AboutEldecoCity from "./AboutEldecoCity";
import EldecoCityFeatures from "./EldecoCityFeatures";
import SkyWalkAmenties from "./SkyWalkAmenties";
import WhySkyWalk from "./WhySkyWalk";
import FlatVarients from "./FlatVarients";
import FloorPlans from "./FloorPlans";
import Gallery from "./Gallery";
import Location from "./Location";
import AboutBuilder from "./AboutBuilder";
import HighlightsSection from "./HighlightsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      
      <AboutSection />
      <Gallery />
      <HighlightsSection />
      <Location />
      {/* <EldecoCityFeatures />
      <SkyWalkAmenties />
      
      <FlatVarients />
      <FloorPlans />
      <Gallery />
      <Location />
      <AboutBuilder /> */}
    </>
  );
};

export default Home;
