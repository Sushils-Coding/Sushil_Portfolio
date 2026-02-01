import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import CustomCursor from "./components/CustomCursor";
import Cursor from "./components/Cursor";


function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth cursor-pointer sm:cursor-none bg-[#0f172b]">
      <BrowserRouter>
        {/* Custom Cursor - Desktop Only */}
        <div className="hidden sm:block">
          <CustomCursor />
          <Cursor />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
