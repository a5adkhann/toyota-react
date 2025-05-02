import React, { useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./components/ThemeContext";

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme == "light" ? "bg-white text-black" : "bg-[#212121] text-white"} transition-colors duration-300 ease-in-out`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

export default App;
