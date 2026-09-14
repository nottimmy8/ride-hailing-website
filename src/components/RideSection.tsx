import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Calendar,
  MapPin,
  Navigation,
  ShieldCheck,
  Clock,
  CreditCard,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
  Smartphone,
  ChevronRight,
} from "lucide-react";

// Types
type RideType = "on-demand" | "reserve" | "city-to-city" | "rental";

interface RideOption {
  id: RideType;
  title: string;
  badge?: string;
  description: string;
  eta: string;
  basePrice: string;
  icon: React.ElementType;
  features: string[];
}

const RIDE_OPTIONS: RideOption[] = [
  {
    id: "on-demand",
    title: "Keyen Daily",
    badge: "Most Popular",
    description:
      "Fast, reliable on-demand city rides in minutes with verified drivers.",
    eta: "2–4 mins pickup",
    basePrice: "From $4.50",
    icon: Car,
    features: [
      "Upfront guaranteed pricing",
      "Live GPS route sharing",
      "Clean & vetted vehicles",
    ],
  },
  {
    id: "reserve",
    title: "Keyen Reserve",
    badge: "Scheduled",
    description:
      "Book up to 30 days in advance. Driver arrives 5 mins early guaranteed.",
    eta: "Scheduled ETA",
    basePrice: "From $8.00",
    icon: Calendar,
    features: [
      "Flight & schedule sync",
      "Extended wait times",
      "Zero cancellation fees",
    ],
  },
  {
    id: "city-to-city",
    title: "Keyen Intercity",
    badge: "Long Distance",
    description:
      "Comfortable, premium travel between major regional corridors.",
    eta: "On-demand or booked",
    basePrice: "From $35.00",
    icon: Navigation,
    features: [
      "Executive vehicles",
      "Luggage assistance",
      "Fixed highway fares",
    ],
  },
  {
    id: "rental",
    title: "Keyen Rentals",
    badge: "Chauffeur & Self",
    description:
      "Hourly or daily vehicle rentals with dedicated professional drivers.",
    eta: "Flexible duration",
    basePrice: "From $18/hr",
    icon: Sparkles,
    features: [
      "Hourly flexible packages",
      "Premium fleet tier",
      "Personal dedicated chauffeur",
    ],
  },
];

export const RideSection = () => {
  const [selectedRide, setSelectedRide] = useState<RideType>("on-demand");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimatedFare, setEstimatedFare] = useState<string | null>(null);

  const activeRideData = RIDE_OPTIONS.find((r) => r.id === selectedRide)!;

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !dropoff) return;

    setIsEstimating(true);
    setTimeout(() => {
      setIsEstimating(false);
      setEstimatedFare(
        selectedRide === "on-demand"
          ? "$12.40"
          : selectedRide === "reserve"
            ? "$18.00"
            : "$65.00",
      );
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-hidden relative">
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Keyen Mobility • Ride
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1]">
              Every journey, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                crafted with comfort.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Move effortlessly across town, schedule advance rides, or take
              intercity trips with Keyen’s intelligent mobility network.
              Transparent pricing, verified drivers, zero hassle.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-800/80 w-full max-w-lg">
              <div>
                <p className="text-2xl font-extrabold text-white">99.8%</p>
                <p className="text-xs text-slate-400 mt-1">On-time Pickups</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">&lt; 3 min</p>
                <p className="text-xs text-slate-400 mt-1">Average Dispatch</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">4.9 ★</p>
                <p className="text-xs text-slate-400 mt-1">Driver Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Estimator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-blue-950/20 relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Car className="w-5 h-5 text-blue-400" />
                  Request a Ride
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                  Instant Match
                </span>
              </div>

              {/* Ride Selector Tabs */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-950 rounded-xl mb-6 border border-slate-800/60">
                {RIDE_OPTIONS.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => {
                        setSelectedRide(type.id);
                        setEstimatedFare(null);
                      }}
                      className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                        selectedRide === type.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                          : "text-slate-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="truncate max-w-full">
                        {type.title.replace("Keyen ", "")}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Form Input */}
              <form onSubmit={handleEstimate} className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3.5 top-3.5 text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup location"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-sm text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3.5 top-3.5 text-indigo-400">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="Where are you heading?"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-sm text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>

                {/* Dynamic Info Line */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 px-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {activeRideData.eta}
                  </span>
                  <span>{activeRideData.basePrice}</span>
                </div>

                {/* Estimate Result Display */}
                <AnimatePresence>
                  {estimatedFare && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs text-blue-300 font-medium">
                          Estimated Upfront Fare
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Fixed rate, zero surge guarantee
                        </p>
                      </div>
                      <span className="text-2xl font-black text-white">
                        {estimatedFare}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isEstimating || !pickup || !dropoff}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 font-bold text-sm text-white transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {isEstimating ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>
                        {estimatedFare
                          ? "Confirm Ride Request"
                          : "Calculate Fare"}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ride Options Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for how you move
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Select the tier that matches your style, schedule, and trip
            destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RIDE_OPTIONS.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedRide === item.id;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedRide(item.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-blue-500/80 shadow-xl shadow-blue-950/40 ring-1 ring-blue-500/50"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-800 text-blue-300 border border-slate-700">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {item.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    {item.basePrice}
                  </span>
                  <span className="text-blue-400 font-semibold flex items-center gap-1 group">
                    Select{" "}
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Safety & Technology Pillars */}
      <section className="bg-slate-900/50 py-20 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Verified Drivers & Vehicles
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every Keyen partner undergoes strict background checks,
                real-time facial verification, and regular vehicle safety
                inspections.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Transparent Fixed Fares
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Know exact fares upfront before confirming. Pay via Keyen
                Wallet, card, or cash with guaranteed zero surge gouging.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Navigation className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Live Route & SOS Protection
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Share live journey links with emergency contacts with one tap
                and get 24/7 dedicated in-app incident monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Moving with Keyen is simple
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Book your ride in 3 quick steps from any mobile device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="flex flex-col items-center text-center p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 font-black flex items-center justify-center text-lg mb-4">
              1
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Request Your Ride
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Open the Keyen app, enter your destination, and pick from
              On-Demand, Reserve, or Intercity options.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
            <div className="w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-black flex items-center justify-center text-lg mb-4">
              2
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Get Matched Instantly
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Our intelligent dispatch engine connects you to the closest
              verified partner within seconds.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30 font-black flex items-center justify-center text-lg mb-4">
              3
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Track & Enjoy</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Follow your trip on the live GPS map, enjoy climate-controlled
              comfort, and pay seamlessly upon arrival.
            </p>
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-blue-900/80 via-slate-900 to-slate-950 border border-blue-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wide mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              Download Passenger App
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Ready to ride smarter with Keyen?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Get the Keyen App today for iOS and Android. Use promo code{" "}
              <span className="text-blue-400 font-mono font-bold">
                KEYENRIDE
              </span>{" "}
              to get 20% off your first 3 trips.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 z-10 w-full md:w-auto">
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-2xl font-bold transition-all shadow-lg"
            >
              <AppleIcon className="w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-semibold text-slate-600 leading-none">
                  Download on
                </p>
                <p className="text-sm font-black leading-tight">App Store</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg"
            >
              <GooglePlayIcon className="w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-semibold text-slate-400 leading-none">
                  Get it on
                </p>
                <p className="text-sm font-black leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// SVG Icon Helpers
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M3.18 1.13C2.49 1.52 2 2.28 2 3.18v17.64c0 .9.49 1.66 1.18 2.05l.1.05 9.87-9.87v-.22L3.28 1.08l-.1.05Z"
      fill="#4285F4"
    />
    <path
      d="M16.44 16.16l-3.29-3.29v-.22l3.29-3.29.07.04 3.9 2.21c1.11.63 1.11 1.66 0 2.3l-3.9 2.21-.07.04Z"
      fill="#FBBC04"
    />
    <path
      d="M16.51 16.12 13.15 12.78 3.18 22.87c.37.39.94.41 1.58.05l11.75-6.8"
      fill="#EA4335"
    />
    <path
      d="M16.51 7.88 4.76 1.08C4.12.72 3.55.74 3.18 1.13l9.97 9.97 3.36-3.22Z"
      fill="#34A853"
    />
  </svg>
);

export default RideSection;
