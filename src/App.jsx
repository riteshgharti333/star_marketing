import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import WebDesign from "./pages/DesignService/WebDesign/WebDesign";
import GraphicDesign from "./pages/DesignService/GraphicDesign/GraphicDesign";
import Branding from "./pages/DesignService/Branding/Branding";
import Production from "./pages/DesignService/Production/Production";

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





        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
