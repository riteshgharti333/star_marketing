import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import WebDesign from "./pages/DesignService/WebDesign/WebDesign";
import GraphicDesign from "./pages/DesignService/GraphicDesign/GraphicDesign";
import Branding from "./pages/DesignService/Branding/Branding";
import Production from "./pages/DesignService/Production/Production";
import WebDevelopment from "./pages/Developement/WebDevelopment/WebDevelopment";
import SweDevelopment from "./pages/Developement/SweDevelopment/SweDevelopment";
import ECommerce from "./pages/Developement/ECommerce/ECommerce";
import AppDevelopemenr from "./pages/Developement/AppDevelopement/AppDevelopement";
import AppDevelopement from "./pages/Developement/AppDevelopement/AppDevelopement";
import Support from "./pages/Developement/Support/Support";
import Testing from "./pages/Developement/Testing/Testing";
import Wordpress from "./pages/Developement/Wordpress/Wordpress";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />

          {/* Design */}
          <Route path="/design/web-design" element={<WebDesign />} />
          <Route path="/design/graphic-design" element={<GraphicDesign />} />
          <Route path="/design/branding" element={<Branding />} />
          <Route path="/design/production" element={<Production />} />

          {/* Development */}
          <Route
            path="/development/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/development/software-development"
            element={<SweDevelopment />}
          />
          <Route path="/development/e-commerce" element={<ECommerce />} />
          <Route
            path="/development/app-development"
            element={<AppDevelopement />}
          />
          <Route
            path="/development/support-and-maintenance"
            element={<Support />}
          />

          <Route path="/development/testing" element={<Testing />} />
          <Route path="/development/wordpress-development" element={<Wordpress />} />

        </Routes>

        

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
