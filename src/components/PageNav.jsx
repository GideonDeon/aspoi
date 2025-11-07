import { NavLink } from "react-router-dom";
import { useRef } from "react";

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
    <div className="grid grid-cols-[1fr_1fr] bg-black h-25 w-full relative lg:hidden ">
      <div>
        <img
          src="/images/aspoi-logo.png"
          alt="logo"
          className="w-[5rem] h-[5rem] mt-2 ml-5"
        />
      </div>
      <div className="">
        <div className="w-10 h-8 absolute right-[2rem] top-[2rem]">
          <div className="bg-[#feff00] w-8 h-1.5 m-[2px] rounded-[5px]"></div>
          <div className="bg-[#feff00] w-8 h-1.5 m-[2px] rounded-[5px]"></div>
          <div className="bg-[#feff00] w-8 h-1.5 m-[2px] rounded-[5px]"></div>
        </div>
        <input
          type="checkbox"
          ref={checkboxRef}
          className="w-10 h-8 absolute right-[2rem] top-[2rem] peer cursor-pointer opacity-0"
        />
        <ul
          className="bg-black w-[20rem] h-0 absolute right-[2rem] top-[6rem] peer-checked:h-[20rem]
                       overflow-hidden transition-all duration-300 ease-in-out font-aldrich text-center"
        >
          <li>
            <NavLink
              to="/"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/membership"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              Membership
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ppa-professionals"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              PPA professionals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cpid-professionals"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              CPID professionals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dsi-professionals"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              DSI professionals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/members"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              Members
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              onClick={HandleLinkClick}
              className={({ isActive }) =>
                `w-full h-8 pt-1 mt-2 block hover:bg-white hover:text-black font-aldrich ${
                  isActive ? "bg-white text-red-500" : "text-white"
                }`
              }
            >
              Register
            </NavLink>
          </li>
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
          className="w-[5rem] h-[5rem] mt-2 ml-5"
        />
      </div>
      <ul className="flex flex-8 gap-[20px] items-center justify-end-safe">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/membership"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            Membership
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ppa-professionals"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out transform ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            PPA professionals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cpid-professionals"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            CPID professionals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dsi-professionals"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            DSI professionals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/members"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            Members
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] transition-all duration-600 ease-in-out ${
                isActive ? "text-[#feff00]" : "text-gray-300"
              }`
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
