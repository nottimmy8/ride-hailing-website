import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative min-h-[620px] overflow-hidden rounded-t-[34px] bg-[#080808] px-6 sm:px-10 pt-32 md:pt-40 pb-12 text-white z-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Top row */}
        <div className="relative flex items-center justify-between border-b border-white/15 pb-5">
          <div className="text-[20px] font-medium tracking-[-0.04em] text-white/80">
            Keyen
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white/80 text-[10px] font-bold text-black">
              X
            </div>

            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white/80 text-[10px] font-bold text-black">
              ◎
            </div>

            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white/80 text-[10px] font-bold text-black">
              in
            </div>
          </div>
        </div>

        {/* Footer information */}
        <div className="relative flex items-center justify-between gap-8 pt-7 text-xs leading-[1.6]">
          {/* Description */}
          <div className="max-w-[235px] text-white/50">
            <p className="text-xs ">
              Your smarter, safer, and fairer way to move. We're building a new
              kind of ride experience where drivers and riders are treated with
              respect.
            </p>
          </div>

          {/* Links */}
          {/* <div>
            <h3 className="mb-2 font-medium text-white/80">Navigation</h3>
            <div className="space-y-1.5 text-white/50">
              <p className="hover:text-white text-xs cursor-pointer transition-colors">
                Ride
              </p>
              <p className="hover:text-white text-xs cursor-pointer transition-colors">
                Drive
              </p>
              <p className="hover:text-white text-xs cursor-pointer transition-colors">
                Earn
              </p>
              <p className="hover:text-white text-xs cursor-pointer transition-colors">
                Company
              </p>
            </div>
          </div> */}

          {/* Call us */}
          {/* <div>
            <h3 className="mb-2 font-medium text-white/80">Call us on</h3>
            <div className="space-y-1.5 text-white/50">
              <p>+234 812 345 6789</p>
              <p>+234 803 456 7890</p>
            </div>
          </div> */}

          {/* Questions */}
          <div>
            <h3 className="mb-2 font-medium text-white/80">Have a question</h3>
            <p className="text-white/50">info@keyen.com</p>
          </div>
        </div>

        {/* Large Keyen wordmark background */}
        <div className="pointer-events-none absolute bottom-[-35px] left-[5%] w-[90%] overflow-hidden">
          <div
            className="
              select-none
              text-center
              text-[180px] sm:text-[240px] md:text-[300px]
              font-bold
              leading-[0.72]
              tracking-[-0.085em]
              text-transparent
              bg-clip-text
              bg-gradient-to-b
              from-[#e8e8e8]
              via-[#929292]
              to-[#090909]
            "
          >
            Keyen
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Keyen. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
