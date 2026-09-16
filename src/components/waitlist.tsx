import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  User,
  CheckCircle2,
  ArrowRight,
  Check,
  ChevronDown,
  Loader2,
  Share2,
  Copy,
} from "lucide-react";

type RoleType = "rider" | "driver";

interface FormData {
  role: RoleType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  // Rider specific
  rideReason: string;
  // Driver specific
  driveArea: string;
  vehicleType: string;
  vehicleDescription: string;
  driverMotivations: string[];
  otherMotivation: string;
  vehicleInspection: "yes" | "no" | "";
}

const LAGOS_LGAS = [
  "Agege",
  "Ajeromi-Ifelodun",
  "Alimosho",
  "Amuwo-Odofin",
  "Apapa",
  "Badagry",
  "Epe",
  "Eti-Osa (Lekki / Ikoyi / VI)",
  "Ibeju-Lekki",
  "Ifako-Ijaiye",
  "Ikeja (GRA / Maryland / Alausa)",
  "Ikorodu",
  "Kosofe (Gbagada / Ketu / Ojota)",
  "Lagos Island (Marina / CMS)",
  "Lagos Mainland (Yaba / Ebute Metta)",
  "Mushin",
  "Ojo",
  "Oshodi-Isolo",
  "Shomolu (Bariga / Fadeyi)",
  "Surulere",
  "Abuja (FCT)",
  "Port Harcourt (Rivers)",
  "Ibadan (Oyo)",
  "Other LGA / City",
];

const RIDE_REASONS = [
  "Heading out on my own / Daily commute",
  "Delivering a parcel",
  "Sharing rides with friends",
  "Airport trips",
  "Night out & events",
  "Business & work meetings",
  "Other",
];

const VEHICLE_TYPES = ["A car", "A motorcycle"];

const DRIVE_AREAS = ["Mainland", "Island", "Both (Mainland & Island)"];

const DRIVER_MOTIVATIONS = [
  "Better earnings",
  "Lower commission",
  "Better driver support",
  "Safety",
  "Other",
];

const Waitlist: React.FC = () => {
  const [role, setRole] = useState<RoleType>("rider");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const [form, setForm] = useState<FormData>({
    role: "rider",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    rideReason: "",
    driveArea: "",
    vehicleType: "",
    vehicleDescription: "",
    driverMotivations: [],
    otherMotivation: "",
    vehicleInspection: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleRoleChange = (newRole: RoleType) => {
    setRole(newRole);
    setForm((prev) => ({ ...prev, role: newRole }));
    setErrors({});
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleMotivationToggle = (motivation: string) => {
    setForm((prev) => {
      const exists = prev.driverMotivations.includes(motivation);
      const updated = exists
        ? prev.driverMotivations.filter((m) => m !== motivation)
        : [...prev.driverMotivations, motivation];
      return { ...prev, driverMotivations: updated };
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.location)
      newErrors.location = "Please select your location / LGA";

    if (role === "driver") {
      if (!form.phone.trim())
        newErrors.phone = "Phone number is required for drivers";
      if (!form.driveArea)
        newErrors.driveArea = "Please specify where you mainly drive";
      if (!form.vehicleType)
        newErrors.vehicleType = "Please select your vehicle type";
      if (!form.vehicleInspection)
        newErrors.vehicleInspection =
          "Please select an option for vehicle inspection";
      if (form.driverMotivations.length === 0)
        newErrors.driverMotivations = "Please select at least one reason";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      const randomTicket = Math.floor(1000 + Math.random() * 9000).toString();
      setTicketNumber(randomTicket);
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      role: "rider",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      rideReason: "",
      driveArea: "",
      vehicleType: "",
      vehicleDescription: "",
      driverMotivations: [],
      otherMotivation: "",
      vehicleInspection: "",
    });
    setErrors({});
  };

  return (
    <section
      id="waitlist"
      className="bg-white font-noto py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Subheadline */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-gray-900 tracking-tight leading-[1.1] mb-6">
              Join the waitlist
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              Fill the form to be the first to know when this goes live
            </p>
          </div>

          {/* Right Column: Single Form */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <div className="max-w-2xl">
                {/* Role Selector */}
                <div className="mb-8">
                  <div className="flex bg-gray-100/80 p-1 rounded-xl max-w-md">
                    <button
                      type="button"
                      id="role-rider-btn"
                      onClick={() => handleRoleChange("rider")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        role === "rider"
                          ? "bg-white text-gray-900 shadow-sm font-bold"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span>I need a ride</span>
                    </button>

                    <button
                      type="button"
                      id="role-driver-btn"
                      onClick={() => handleRoleChange("driver")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        role === "driver"
                          ? "bg-white text-gray-900 shadow-sm font-bold"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span>I want to drive</span>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* First name & Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-800 mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:ring-1 ${
                          errors.firstName
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1.5 text-xs text-red-500 font-medium">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-800 mb-2"
                      >
                        Last Name{" "}
                        <span className="text-gray-400 text-xs font-normal">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Email address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:ring-1 ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Phone Number{" "}
                      {role === "driver" ? (
                        <span className="text-red-500 text-xs">
                          * (Driver Required)
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs font-normal">
                          (Optional to Rider)
                        </span>
                      )}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="+234 800 000 0000"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Location (LGA Dropdown) */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Location (Dropdown menu with LGA areas){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleInputChange}
                        className={`w-full appearance-none px-4 py-3 pr-10 rounded-lg border text-sm text-gray-900 bg-white transition-all focus:outline-none focus:ring-1 ${
                          errors.location
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-primary focus:ring-primary"
                        }`}
                      >
                        <option value="">Select LGA area...</option>
                        {LAGOS_LGAS.map((lga) => (
                          <option key={lga} value={lga}>
                            {lga}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.location && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  {/* Conditional Fields: Rider */}
                  <AnimatePresence mode="wait">
                    {role === "rider" ? (
                      <motion.div
                        key="rider-fields"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <div>
                          <label
                            htmlFor="rideReason"
                            className="block text-sm font-medium text-gray-800 mb-2"
                          >
                            Why do you need a ride? (Rider)
                          </label>
                          <div className="relative">
                            <select
                              id="rideReason"
                              name="rideReason"
                              value={form.rideReason}
                              onChange={handleInputChange}
                              className="w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                              <option value="">Select an option</option>
                              {RIDE_REASONS.map((reason) => (
                                <option key={reason} value={reason}>
                                  {reason}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* Conditional Fields: Driver */
                      <motion.div
                        key="driver-fields"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6 pt-2"
                      >
                        {/* Where do you mainly drive */}
                        <div>
                          <label
                            htmlFor="driveArea"
                            className="block text-sm font-medium text-gray-800 mb-2"
                          >
                            Where do you mainly drive(mainland/island){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="driveArea"
                              name="driveArea"
                              value={form.driveArea}
                              onChange={handleInputChange}
                              className={`w-full appearance-none px-4 py-3 pr-10 rounded-lg border text-sm text-gray-900 bg-white transition-all focus:outline-none focus:ring-1 ${
                                errors.driveArea
                                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                                  : "border-gray-200 focus:border-primary focus:ring-primary"
                              }`}
                            >
                              <option value="">
                                Select mainland / island...
                              </option>
                              {DRIVE_AREAS.map((area) => (
                                <option key={area} value={area}>
                                  {area}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.driveArea && (
                            <p className="mt-1.5 text-xs text-red-500 font-medium">
                              {errors.driveArea}
                            </p>
                          )}
                        </div>

                        {/* What type of vehicle do you drive? */}
                        <div>
                          <label
                            htmlFor="vehicleType"
                            className="block text-sm font-medium text-gray-800 mb-2"
                          >
                            What type of vehicle do you drive? (Driver){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="vehicleType"
                              name="vehicleType"
                              value={form.vehicleType}
                              onChange={handleInputChange}
                              className={`w-full appearance-none px-4 py-3 pr-10 rounded-lg border text-sm text-gray-900 bg-white transition-all focus:outline-none focus:ring-1 ${
                                errors.vehicleType
                                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                                  : "border-gray-200 focus:border-primary focus:ring-primary"
                              }`}
                            >
                              <option value="">
                                A car/A motorcycle (Dropdown menu)
                              </option>
                              {VEHICLE_TYPES.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.vehicleType && (
                            <p className="mt-1.5 text-xs text-red-500 font-medium">
                              {errors.vehicleType}
                            </p>
                          )}
                        </div>

                        {/* Vehicle description */}
                        <div>
                          <label
                            htmlFor="vehicleDescription"
                            className="block text-sm font-medium text-gray-800 mb-2"
                          >
                            Vehicle description
                          </label>
                          <input
                            type="text"
                            id="vehicleDescription"
                            name="vehicleDescription"
                            value={form.vehicleDescription}
                            onChange={handleInputChange}
                            placeholder="e.g. 2018 Toyota Corolla, Silver"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 bg-white transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                        </div>

                        {/* What would make you consider driving with Keyen? */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-3">
                            What would make you consider driving with Keyen?
                            (Driver) <span className="text-red-500">*</span>
                          </label>
                          <div className="space-y-2.5">
                            {DRIVER_MOTIVATIONS.map((motivation) => {
                              const isChecked =
                                form.driverMotivations.includes(motivation);
                              return (
                                <label
                                  key={motivation}
                                  onClick={() =>
                                    handleMotivationToggle(motivation)
                                  }
                                  className="flex items-center gap-3 cursor-pointer select-none text-sm text-gray-700 hover:text-gray-900"
                                >
                                  <div
                                    className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                                      isChecked
                                        ? "bg-primary text-white"
                                        : "border border-gray-300 bg-white"
                                    }`}
                                  >
                                    {isChecked && (
                                      <Check className="w-3 h-3 stroke-[3]" />
                                    )}
                                  </div>
                                  <span>{motivation}</span>
                                </label>
                              );
                            })}
                          </div>
                          {form.driverMotivations.includes("Other") && (
                            <div className="mt-3">
                              <input
                                type="text"
                                name="otherMotivation"
                                value={form.otherMotivation}
                                onChange={handleInputChange}
                                placeholder="Please specify other..."
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              />
                            </div>
                          )}
                          {errors.driverMotivations && (
                            <p className="mt-1.5 text-xs text-red-500 font-medium">
                              {errors.driverMotivations}
                            </p>
                          )}
                        </div>

                        {/* Would you submit to a vehicle inspection? */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2.5">
                            Would you submit to a vehicle inspection? (Driver)
                            (Yes/no) <span className="text-red-500">*</span>
                          </label>
                          <div className="flex gap-4">
                            {(["yes", "no"] as const).map((option) => (
                              <label
                                key={option}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border text-sm font-medium cursor-pointer transition-all ${
                                  form.vehicleInspection === option
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="vehicleInspection"
                                  value={option}
                                  checked={form.vehicleInspection === option}
                                  onChange={() =>
                                    setForm((prev) => ({
                                      ...prev,
                                      vehicleInspection: option,
                                    }))
                                  }
                                  className="sr-only"
                                />
                                <span>{option === "yes" ? "Yes" : "No"}</span>
                              </label>
                            ))}
                          </div>
                          {errors.vehicleInspection && (
                            <p className="mt-1.5 text-xs text-red-500 font-medium">
                              {errors.vehicleInspection}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      id="join-waitlist-btn"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join the waitlist.
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-left"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-display uppercase tracking-wider mb-3">
                  Ticket #KYN-{ticketNumber}
                </div>

                <h3 className="text-3xl font-black font-display text-gray-900 mb-3 tracking-tight">
                  You're on the waitlist!
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                  Thank you,{" "}
                  <strong className="text-gray-900">{form.firstName}</strong>!
                  We've reserved your spot as a{" "}
                  <strong className="text-primary capitalize">{role}</strong> in{" "}
                  <strong className="text-gray-900">{form.location}</strong>.
                  We'll be in touch at{" "}
                  <span className="text-primary font-semibold">
                    {form.email}
                  </span>{" "}
                  when we go live.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        Link Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Waitlist Link
                      </>
                    )}
                  </button>

                  <button
                    onClick={resetForm}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    Submit Another
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
