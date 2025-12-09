import { NavLink } from "react-router-dom";
import { useRef } from "react";

const navItems = [
  { to: "/", label: "Homepage" },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/ppa-professionals", label: "PPA professionals" },
  { to: "/cpid-professionals", label: "CPID professionals" },
  { to: "/dsi-professionals", label: "DSI professionals" },
  { to: "/members", label: "Members" },
  { to: "/register", label: "Register" },
];

function PageNav() {
  return (
    <>
      <PageNavMobile />
      <PageNavDesktop />
    </>
  );
}

function PageNavMobile() {
  const checkboxRef = useRef(null);

  const HandleLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = true;
    }
  };

  return (
    <div className="flex items-center justify-between bg-black h-25 w-full px-5 lg:hidden relative">
      <img src="/images/aspoi-logo.png" alt="logo" className="w-13 h-13" />

      <div className="relative">
        <div className="w-10 h-8 flex flex-col justify-center items-center space-y-1.5 pointer-events-none">
          <div className="bg-[#feff00] w-8 h-1.5 rounded-[5px]"></div>
          <div className="bg-[#feff00] w-8 h-1.5 rounded-[5px]"></div>
          <div className="bg-[#feff00] w-8 h-1.5 rounded-[5px]"></div>
        </div>

        <input
          type="checkbox"
          ref={checkboxRef}
          className="absolute inset-0 w-10 h-8 opacity-0 cursor-pointer peer"
        />

        <ul
          className="bg-black w-0 h-100 fixed top-25 right-0 
            peer-checked:w-[70vw]
            overflow-hidden transition-all duration-500 ease-in-out 
            font-aldrich pl-4 pt-6 space-y-4
            opacity-0 peer-checked:opacity-100 z-50 border-l border-white/20"
        >
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={HandleLinkClick}
                className={({ isActive }) =>
                  `block text-lg hover:text-[#feff00] ${
                    isActive ? "text-[#feff00]" : "text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PageNavDesktop() {
  return (
    <div className="hidden lg:grid grid-cols-[1fr_4fr] bg-black h-25 w-full relative ">
      <div>
        <img
          src="/images/aspoi-logo.png"
          alt="logo"
          className="w-20 h-20 mt-2 ml-5"
        />
      </div>

      <ul className="flex flex-8 gap-5 items-center justify-end-safe pr-3">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] 
                transition-all duration-600 ease-in-out ${
                  isActive ? "text-[#feff00]" : "text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageNav;
