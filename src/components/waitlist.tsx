import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  Car,
  User,
  CheckCircle2,
  ArrowRight,
  Check,
  ChevronDown,
  Loader2,
  Share2,
  RotateCcw,
} from "lucide-react";

type RoleType = "rider" | "driver";

interface FormData {
  role: RoleType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  rideReason: string;
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

export const Waitlist: React.FC = () => {
  const { t } = useLanguage();
  const [role, setRole] = useState<RoleType>("rider");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [_copied, setCopied] = useState(false);
  const [_ticketNumber, setTicketNumber] = useState("");

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
    if (errors.driverMotivations) {
      setErrors((prev) => ({ ...prev, driverMotivations: "" }));
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, value.join(", "));
        } else {
          formData.append(key, value as string);
        }
      });
      formData.append("timestamp", new Date().toISOString());

      await fetch(
        "https://script.google.com/u/3/home/projects/1gGRnoGggKz9x950ftQPTVtAy2egnSt8vUwki07Z26Yz4tJ3HqJOY6Fh3/edit",
        {
          method: "POST",
          body: formData,
          // mode: "no-cors",
        },
      );

      const randomTicket = Math.floor(1000 + Math.random() * 9000).toString();
      setTicketNumber(randomTicket);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      // alert("There was an error submitting your form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join the Keyen Waitlist",
          text: "I just joined the waitlist for Keyen!",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      handleCopyLink();
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setRole("rider");
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
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-gray-900 tracking-tight leading-[1.1] mb-6">
              {t.waitlist_title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              {t.waitlist_desc}
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            {!submitted ? (
              <div className="max-w-2xl">
                {/* Role Selector */}
                <div className="mb-8">
                  <div className="flex bg-gray-100/80 p-1 rounded-xl max-w-md">
                    <button
                      type="button"
                      id="role-rider-btn"
                      onClick={() => handleRoleChange("rider")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                        role === "rider"
                          ? "bg-white text-gray-900 shadow-sm font-bold"
                          : "text-gray-500 hover:text-gray-800 font-semibold"
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span>{t.waitlist_rider}</span>
                    </button>

                    <button
                      type="button"
                      id="role-driver-btn"
                      onClick={() => handleRoleChange("driver")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                        role === "driver"
                          ? "bg-white text-gray-900 shadow-sm font-bold"
                          : "text-gray-500 hover:text-gray-800 font-semibold"
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span>{t.waitlist_driver}</span>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* First Name & Last Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
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
                          (Optional for Rider)
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

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Location / LGA <span className="text-red-500">*</span>
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

                  {/* Dynamic Rider / Driver Fields */}
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
                            Why do you need a ride?
                          </label>
                          <div className="relative">
                            <select
                              id="rideReason"
                              name="rideReason"
                              value={form.rideReason}
                              onChange={handleInputChange}
                              className="w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                              <option value="">Select an option...</option>
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
                      <motion.div
                        key="driver-fields"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6 pt-2"
                      >
                        {/* Drive Area */}
                        <div>
                          <label
                            htmlFor="driveArea"
                            className="block text-sm font-medium text-gray-800 mb-2"
                          >
                            Where do you mainly drive?{" "}
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

                        {/* Vehicle Type */}
                        <div>
                          <label
                            htmlFor="vehicleType"
                            className="block text-sm font-medium text-gray-800 mb-2"
                          >
                            What type of vehicle do you drive?{" "}
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
                              <option value="">Select vehicle type...</option>
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

                        {/* Vehicle Description */}
                        <div>
                          <label
                            htmlFor="vehicleDescription"
                            className="block text-sm font-medium text-gray-800 mb-2"
                          >
                            Vehicle Description{" "}
                            <span className="text-gray-400 text-xs font-normal">
                              (Optional)
                            </span>
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

                        {/* Motivations */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-3">
                            What would make you consider driving with Keyen?{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="space-y-2.5">
                            {DRIVER_MOTIVATIONS.map((motivation) => {
                              const isChecked =
                                form.driverMotivations.includes(motivation);
                              return (
                                <button
                                  type="button"
                                  key={motivation}
                                  onClick={() =>
                                    handleMotivationToggle(motivation)
                                  }
                                  className="flex items-center gap-3 cursor-pointer select-none text-sm text-gray-700 hover:text-gray-900 text-left w-full focus:outline-none"
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
                                </button>
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

                        {/* Vehicle Inspection */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2.5">
                            Would you submit to a vehicle inspection?{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="flex gap-4">
                            {(["yes", "no"] as const).map((option) => (
                              <button
                                type="button"
                                key={option}
                                onClick={() => {
                                  setForm((prev) => ({
                                    ...prev,
                                    vehicleInspection: option,
                                  }));
                                  if (errors.vehicleInspection) {
                                    setErrors((prev) => ({
                                      ...prev,
                                      vehicleInspection: "",
                                    }));
                                  }
                                }}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border text-sm font-medium cursor-pointer transition-all ${
                                  form.vehicleInspection === option
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                                }`}
                              >
                                <span>{option === "yes" ? "Yes" : "No"}</span>
                              </button>
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

                  {/* Submit Button */}
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
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <span>Join the waitlist</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Complete Success State */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-left max-w-xl"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                {/* <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-display uppercase tracking-wider mb-3">
                  Ticket #KYN-{ticketNumber}
                </div> */}

                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  You're on the list!
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  Thank you,{" "}
                  <span className="font-semibold text-gray-800">
                    {form.firstName}
                  </span>
                  . We've saved your spot. We'll send an exclusive invite to{" "}
                  <span className="font-semibold text-gray-800">
                    {form.email}
                  </span>{" "}
                  as soon as Keyen is ready in {form.location || "your area"}.
                </p>

                {/* Share / Copy Actions */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700">
                    Spread the word with friends & colleagues
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {/* <button
                      type="button"
                      onClick={handleCopyLink}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span>Link copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy link</span>
                        </>
                      )}
                    </button> */}

                    <button
                      type="button"
                      onClick={handleShare}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share waitlist</span>
                    </button>
                  </div>
                </div>

                {/* Submit another entry */}
                <div className="mt-10">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit another response</span>
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
