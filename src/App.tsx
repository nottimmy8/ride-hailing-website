import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import HowItWorks from "./components/howitworks";
import AboutUs from "./components/aboutUs";
import EarnWithKeyen from "./components/earnwithkeyen";
import Footer from "./components/footer";
import DownloadApp from "./components/downloadApp";
import RideSection from "./components/RideSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Gradient from "./components/gradient";

// Landing Page Group
const Home = () => (
  <>
    <Hero />
    {/* <Launch /> */}
    <Services />
    <WhyChooseUs />
    <Gradient />
    <HowItWorks />
    <AboutUs />
    <EarnWithKeyen />
  </>
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<RideSection />} />
        </Routes>
      </main>

      <div className="relative pt-8 md:pt-16">
        <div className="relative z-30 max-w-6xl mx-auto px-4 -mb-20 md:-mb-28">
          <DownloadApp />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
