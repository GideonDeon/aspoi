import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function Footer() {
  return (
    <div>
      <FooterMain />
    </div>
  );
}

function FooterMain() {
  return (
    <div>
      <div className="lg:grid grid-cols-3 bg-black">
        <Contact />
        <Address />
        <QuickLinks />
      </div>
      <div className="bg-black">
        <Foot />
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="text-white">
      <h1 className="text-center text-3xl font-aldrich uppercase lg:mt-[10px]">
        Contact Us
      </h1>
      <div className="font-roboto">
        <span className="block w-full text-center">
          <FontAwesomeIcon
            icon="fa-solid fa-phone"
            className="text-2xl mr-[10px] text-[#feff00]"
          />
          <p className="inline-block text-gray-300">
            (+234)7044252647, (+234)8038079547
          </p>
        </span>
        <span className="block w-full text-center">
          <FontAwesomeIcon
            icon="fa-solid fa-envelope"
            className="text-2xl mr-[10px] text-[#feff00]"
          />
          <p className="inline-block text-gray-300">info@spoc.com.ng</p>
        </span>
      </div>
    </div>
  );
}
function Address() {
  return (
    <div className="text-white">
      <h1 className="text-center text-3xl font-aldrich uppercase mt-[10px]">
        Our Address
      </h1>
      <div className="font-roboto">
        <span className="block w-full text-center">
          <FontAwesomeIcon
            icon="fa-solid fa-location-dot"
            className="text-2xl mr-[10px] mb-[20px] sm:mr-[5px] sm:mb-[0] lg:mr-[10px] lg:mb-[20px] text-[#feff00]"
          />
          <p className="inline-block w-[80%] text-gray-300 sm:mb-[10px]">
            Road No 90, Delta Life Tower (4th Floor), Gulshan - 2, Dhaka - 1212
          </p>
        </span>
        <span className="block w-full text-center">
          <FontAwesomeIcon
            icon="fa-solid fa-location-dot"
            className="text-2xl mr-[10px] mb-[20px] sm:mr-[5px] sm:mb-[-5px] lg:mr-[10px] lg:mb-[20px] text-[#feff00]"
          />
          <p className="inline-block w-[80%] text-gray-300">
            Akinwumi Mamabibeli Street, Oke-iya Road, Ijoka, Akure, Ondo State,
            Nigeria
          </p>
        </span>
      </div>
    </div>
  );
}
function QuickLinks() {
  return (
    <div className="text-white">
      <h1 className="text-center text-3xl font-aldrich uppercase mt-[10px]">
        Quick Links
      </h1>
      <ul className="w-[50%] relative left-[50%] translate-x-[-50%] text-white text-center font-roboto lg:mb-[5px]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
              `w-full h-8 pt-1 mt-2 font-aldrich hover:text-[#feff00] ${
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
function Foot() {
  return (
    <>
      <hr className="w-[80%] h-[5px] bg-white ml-[10%]" />
      <span className="block text-gray-300 text-center w-full text-[10px]">
        &copy; ASPOI 2020
      </span>
    </>
  );
}

export default Footer;
