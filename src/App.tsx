import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import HowItWorks from "./components/howitworks";
import AboutUs from "./components/aboutUs";
import EarnWithKeyen from "./components/earnwithkeyen";
import DownloadApp from "./components/downloadApp";
import Footer from "./components/footer";
// import WaitlistForm from "./components/waitlistForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <AboutUs />
      <EarnWithKeyen />
      {/* <DownloadApp /> */}
      <Footer />
    </div>
  );
};

export default App;
