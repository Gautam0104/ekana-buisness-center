import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import MainContent from "./Pages/MainContent/Index";
import Policy from "./Pages/Policy/Policy";
import Terms from "./Pages/Terms/Terms";
import ThankYou from "./Pages/ThankYou/ThankYou";

import "./App.css";

//  Default Layout
const DefaultLayout = ({ children }) => (
  <div className="min-h-[100vh] flex flex-col relative !font-Montserrat">
    <div className="hidden lg:block">
      <Sidebar />
    </div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

//  Plain Layout 
const PlainLayout = ({ children }) => (
  <div className="min-h-[100vh] flex flex-col relative !font-Montserrat">
    <main>{children}</main>
  </div>
);

const App = () => {
  return (
    <Routes>
      {/* Default Layout Routes */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <MainContent title="ELDECO SKYWALL" /> 
          </DefaultLayout>
        }
      />

      <Route
        path="/privacy-policy"
        element={
          <DefaultLayout>
            <Policy title="PRIVACY AND POLICY" />
          </DefaultLayout>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <DefaultLayout>
            <Terms title="TERMS AND CONDITIONS"  />
          </DefaultLayout>
        }
      />
      <Route
        path="/thank-you"
        element={
          <DefaultLayout>
            <ThankYou />
          </DefaultLayout>
        }
      />

    </Routes>
  );
};

export default App;
