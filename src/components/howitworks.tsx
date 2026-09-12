import React, { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  Car,
  Search,
  Star,
  Navigation,
  ChevronRight,
} from "lucide-react";

const stepsData = [
  {
    id: 1,
    title: "Request",
    description: "Choose your service and enter your destination in seconds.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Connect",
    description: "Keyen matches you with the right mobility partner nearby.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Move",
    description: "Track your journey live and enjoy a seamless experience.",
    icon: <Car className="w-6 h-6" />,
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(0);

  // Auto-play the steps
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setActiveStep((current) => (current % 3) + 1);
          return 0;
        }
        return oldProgress + 2; // 50 * 2 = 100 -> approx 5 seconds per step
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (id: number) => {
    setActiveStep(id);
    setProgress(0);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary/5 to-white font-noto overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6">
        {/* Header Description / Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h6 className="text-[10px] font-bold mb-4 uppercase tracking-widest text-primary font-display">
            Seamless Mobility
          </h6>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-4 tracking-tight">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
            Experience effortless, verified rides with Keyen in three simple
            steps.
          </p>
        </div>

        {/* Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Steps List */}
          <div className="flex flex-col gap-8 md:gap-12 order-2 lg:order-1 relative z-10 md:pl-4">
            {stepsData.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`relative flex items-start gap-5 md:gap-6 cursor-pointer transition-all duration-500 group ${
                    isActive
                      ? "opacity-100 translate-x-2"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  {/* Number Badge */}
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 font-bold text-lg font-display transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/40 ring-4 ring-primary/20"
                        : "bg-gray-200 text-gray-500 group-hover:bg-gray-300"
                    }`}
                  >
                    0{step.id}.
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 md:pt-1.5">
                    <h3
                      className={`text-lg md:text-xl font-bold font-display uppercase tracking-wide mb-2 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base leading-relaxed max-w-sm transition-colors duration-300 ${
                        isActive ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Active Progress Bar */}
                    {isActive && (
                      <div className="w-full max-w-[200px] h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="flex justify-center items-center order-1 lg:order-2 relative">
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000" />
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${activeStep === 2 ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}
            />

            {/* The Phone Frame */}
            <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-primary/20 ring-1 ring-gray-900/10 transform transition-transform duration-700 hover:scale-[1.02]">
              {/* Phone Top Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-30" />

              {/* Phone Screen Container */}
              <div className="relative w-full h-full bg-gray-50 rounded-[2.25rem] overflow-hidden flex flex-col z-20 shadow-inner">
                {/* Dynamic Content Based on Active Step */}

                {/* Screen 1: Request */}
                <div
                  className={`absolute inset-0 bg-[#f8f9fa] transition-all duration-700 ease-in-out ${activeStep === 1 ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}`}
                >
                  {/* Fake Map Background */}
                  <div className="absolute inset-0 opacity-40">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "radial-gradient(#CBD5E1 1.5px, transparent 1.5px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* Route Line SVG */}
                  <svg
                    className="absolute top-1/4 left-[10%] w-[80%] h-[50%]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M10,90 Q40,40 90,10"
                      stroke="#3B82F6"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                      className="opacity-60"
                    />
                  </svg>

                  {/* Location Pin */}
                  <div className="absolute top-[28%] left-[75%] -translate-x-1/2 bg-gray-900 text-white p-2.5 rounded-full shadow-xl shadow-gray-900/20">
                    <MapPin className="w-5 h-5 animate-bounce" />
                  </div>

                  {/* Start Pin */}
                  <div className="absolute bottom-[40%] left-[15%] -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md" />

                  {/* Bottom UI Sheet */}
                  <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[2rem] p-6 shadow-[0_-15px_40px_rgba(0,0,0,0.08)]">
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
                    <h4 className="font-bold text-xl mb-5 text-gray-900 font-display">
                      Where to?
                    </h4>
                    <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-3.5 rounded-xl mb-4 shadow-sm">
                      <Search className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-400 text-sm font-medium">
                        Enter destination
                      </span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                      <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">
                          Home
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                          123 Main St, City Center
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen 2: Connect */}
                <div
                  className={`absolute inset-0 bg-white transition-all duration-700 ease-in-out ${activeStep === 2 ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"}`}
                >
                  {/* Connecting Animation Background */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 overflow-hidden">
                    <div
                      className="w-72 h-72 border-[1.5px] border-primary/20 rounded-full animate-ping absolute"
                      style={{ animationDuration: "3s" }}
                    />
                    <div
                      className="w-56 h-56 border-[1.5px] border-primary/40 rounded-full animate-ping absolute"
                      style={{
                        animationDuration: "3s",
                        animationDelay: "0.7s",
                      }}
                    />
                    <div
                      className="w-32 h-32 border-[1.5px] border-primary/60 rounded-full animate-ping absolute"
                      style={{
                        animationDuration: "3s",
                        animationDelay: "1.4s",
                      }}
                    />
                    <div className="w-24 h-24 bg-gradient-to-tr from-primary to-blue-400 rounded-full absolute shadow-lg shadow-primary/30 flex items-center justify-center">
                      <Search className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>

                  <div className="absolute top-20 w-full text-center px-4 z-20">
                    <h4 className="font-bold text-2xl text-gray-900 font-display mb-1.5">
                      Connecting...
                    </h4>
                    <p className="text-sm text-gray-500 font-medium">
                      Finding the nearest driver
                    </p>
                  </div>

                  {/* Driver Card Sliding Up */}
                  <div
                    className={`absolute bottom-6 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl shadow-gray-200/60 border border-white transition-all duration-700 delay-300 ease-out z-20 ${activeStep === 2 ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <img
                              src="https://i.pravatar.cc/150?img=11"
                              alt="Driver"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 text-sm">
                            Michael D.
                          </h5>
                          <div className="flex items-center text-xs font-bold text-gray-600 mt-1">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
                            4.9{" "}
                            <span className="text-gray-400 font-normal ml-1">
                              (120+ rides)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-gray-800 mb-1">
                          ABC 123
                        </div>
                        <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                          Toyota Camry
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-11 bg-gray-900 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md hover:bg-gray-800 transition-colors">
                      Contact Driver
                    </div>
                  </div>
                </div>

                {/* Screen 3: Move */}
                <div
                  className={`absolute inset-0 bg-[#f0f3f5] transition-all duration-700 ease-in-out ${activeStep === 3 ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}`}
                >
                  {/* Live Map Background */}
                  <div className="absolute inset-0 opacity-60">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "radial-gradient(#94A3B8 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* Moving Car Path */}
                  <svg
                    className="absolute top-[30%] left-[10%] w-[80%] h-[40%]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      id="route"
                      d="M10,80 C30,40 70,30 90,10"
                      stroke="#3B82F6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                  </svg>

                  {/* Car Icon on Map */}
                  <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl shadow-blue-900/20 border-2 border-primary animate-pulse z-10">
                    <Car className="w-6 h-6 text-primary" />
                  </div>

                  {/* Destination Pin */}
                  <div className="absolute top-[25%] left-[82%] -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-md z-10" />

                  {/* Top Status Bar */}
                  <div
                    className={`absolute top-12 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg shadow-gray-200/50 border border-white flex items-center justify-between transition-all duration-700 delay-300 ease-out z-20 ${activeStep === 3 ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2.5 rounded-full">
                        <Navigation className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                          Arriving in
                        </p>
                        <h5 className="font-bold text-gray-900 text-lg leading-none">
                          4 mins
                        </h5>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                        Distance
                      </p>
                      <h5 className="font-bold text-gray-900 text-lg leading-none">
                        1.2 km
                      </h5>
                    </div>
                  </div>

                  {/* Bottom Safety Toolkit */}
                  <div
                    className={`absolute bottom-6 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 flex items-center justify-between border border-gray-100 transition-all duration-700 delay-500 ease-out z-20 ${activeStep === 3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                        <div className="relative w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary rounded-full" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm">
                          Live Tracking
                        </h5>
                        <p className="text-xs text-gray-500 font-medium mt-0.5">
                          Sharing route with family
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-full">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
