import { Globe } from "lucide-react";
import { useState } from "react";
import logo from "../assets/keyenlogo.png";
import menu from "../assets/jam_menu.svg";
import cancle from "../assets/cancle.svg";
const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className=" w-full h-[70px]   bg-white z-50">
      <div className="max-w-7xl w-full mx-auto px-4 py-1 h-full flex items-center  justify-between ">
        {/* Logo */}
        <div className="w-23">
          <img src={logo} alt="" className="w-full object-cover" />
        </div>
        <div className="flex items-center gap-8">
          {/* Language */}
          <div className=" rounded-md bg-gray-300/40 px-3 py-2 flex items-center gap-1 text-xs font-semibold cursor-pointer hover:bg-gray-300 duration-300 ">
            <Globe size={18} />
            EN
          </div>
          {/* CTA */}
          <button className="bg-[#2563EB] text-white px-5 py-2 rounded-md cursor-pointer text-sm font-medium ">
            Join Driver's Waitlist
          </button>

          {/* Menu */}
          <div
            className="cursor-pointer relative z-50"
            onClick={() => setIsOpen(!IsOpen)}
          >
            {IsOpen ? (
              <div>
                <img
                  src={cancle}
                  alt="Close menu"
                  className="w-[35px] h-[35px] object-contain"
                />
              </div>
            ) : (
              <div>
                <img
                  src={menu}
                  alt="Open menu"
                  className="w-[35px] h-[35px] object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
