import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import HowItWorks from "./components/howitworks";
import AboutUs from "./components/aboutUs";
import EarnWithKeyen from "./components/earnwithkeyen";
import Footer from "./components/footer";
import DownloadApp from "./components/downloadApp";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <AboutUs />
      <EarnWithKeyen />

      <div className="relative pt-8 md:pt-16">
        <div className="relative z-30 max-w-6xl mx-auto px-4 -mb-20 md:-mb-28">
          <DownloadApp />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
