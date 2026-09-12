import React, { useState } from "react";
import { ArrowRight, CheckCircle, Loader2, X, Users, Clock, MapPin } from "lucide-react";

type FormType = "rider" | "driver";

const WaitlistForm: React.FC<{ isOpen: boolean; onClose: () => void; defaultType?: FormType }> = ({
  isOpen,
  onClose,
  defaultType = "rider",
}) => {
  const [formType, setFormType] = useState<FormType>(defaultType);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-cyan-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <h2 className="text-2xl md:text-3xl font-black font-display text-gray-900 mb-1 tracking-tight">
                Join the Waitlist
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Be among the first to experience Keyen when we launch in your city.
              </p>

              {/* Toggle: Rider / Driver */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                {(["rider", "driver"] as FormType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormType(type)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold font-display uppercase tracking-wide transition-all duration-200 ${
                      formType === type
                        ? "bg-white text-primary shadow-md"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {type === "rider" ? "I'm a Rider" : "I'm a Driver"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      id="waitlist-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-900 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Phone Number
                    </label>
                    <input
                      id="waitlist-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 555 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                    Your City
                  </label>
                  <input
                    id="waitlist-city"
                    name="city"
                    type="text"
                    required
                    placeholder="e.g. Lagos, Abuja"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-900 text-sm transition-all"
                  />
                </div>

                <button
                  id="waitlist-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="group relative mt-2 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold font-display uppercase tracking-wide overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 pt-5 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  5,000+ on waitlist
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  10+ cities
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  Launching soon
                </div>
              </div>
            </>
          ) : (
            // Success State
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-black font-display text-gray-900 mb-2">
                You're on the list!
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thanks, <span className="font-bold text-gray-800">{form.name}</span>! We'll notify you at{" "}
                <span className="font-bold text-primary">{form.email}</span> when Keyen launches in{" "}
                <span className="font-bold text-gray-800">{form.city}</span>.
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-8 py-3 bg-primary text-white rounded-xl font-bold font-display uppercase tracking-wide hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;
