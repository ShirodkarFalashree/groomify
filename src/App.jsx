import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Featured from "./Components/Featured";
import HowWeWork from "./Components/HowWeWork";
import Packages from "./Components/Packages";
import Customize from "./Components/Customize";
import Transformations from "./Components/Transformations";
import Testimonials from "./Components/Testimonials";
import FAQs from "./Components/FAQs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Marquee from "./Components/Marquee";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="featured">
        <Featured />
      </div>
      <div id="how">
        <HowWeWork />
      </div>
      <div id="packages">
        <Packages />
      </div>
      <div id="customize">
        <Customize />
      </div>
      <div id="transformations">
        <Transformations />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
