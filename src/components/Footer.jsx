import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
    <div className="bg-black py-12 px-6 md:px-10 lg:px-14">
      <h2 className="text-2xl font-bold text-center text-white mb-10 font-aldrich">
        Get in Touch with Us
      </h2>
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#feff00] text-2xl mr-4"
            />
            <div>
              <h3 className="text-white font-medium">Phone</h3>
              <p className="text-gray-300">
                (+234) 7044252647, (+234) 8038079547
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#feff00] text-2xl mr-4"
            />
            <div>
              <h3 className="text-white font-medium">Email</h3>
              <p className="text-gray-300">info@spoc.com.ng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div className="bg-black py-12 px-6 md:px-10 lg:px-14">
      <h2 className="text-2xl font-bold text-center text-white mb-10 font-aldrich">
        Our Address
      </h2>
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex items-start mb-6">
            <div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faHome}
                  className="text-[#feff00] text-2xl mr-4"
                />
                <p className="text-gray-300 ">
                  Road No 90, Delta Life Tower (4th Floor), Gulshan - 2, Dhaka -
                  1212
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faHome}
                  className="text-[#feff00] text-2xl mr-4"
                />
                <p className="text-gray-300">
                  Akinwumi Mamabibeli Street, Oke-iya Road, Ijoka, Akure, Ondo
                  State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="bg-black py-12 px-6 md:px-10 lg:px-14">
      <h2 className="text-2xl font-bold text-center text-white mb-10 font-aldrich">
        Quick Links
      </h2>
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 p-8 rounded-lg">
          <ul className="space-y-4 text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium hover:text-[#feff00] ${
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
                  `font-medium hover:text-[#feff00] ${
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
                  `font-medium hover:text-[#feff00] ${
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
                  `font-medium hover:text-[#feff00] ${
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
                  `font-medium hover:text-[#feff00] ${
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
                  `font-medium hover:text-[#feff00] ${
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
                  `font-medium hover:text-[#feff00] ${
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
                  `font-medium hover:text-[#feff00] ${
                    isActive ? "text-[#feff00]" : "text-gray-300"
                  }`
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Foot() {
  return (
    <div className="bg-gray-800 py-6 px-4 md:px-8 lg:px-12">
      <div className="max-w-md mx-auto">
        <hr className="w-full h-1 bg-gray-600 rounded-full mb-4" />
        <p className="text-gray-400 text-sm text-center">&copy; ASPOI {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
