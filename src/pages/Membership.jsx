import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Membership() {
  return (
    <>
      <PageNav />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[40vh] md:min-h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Handshake.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-transparent"></div>

      <div className="relative z-3 text-center max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
          MEMBERSHIP
        </h1>

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Be part of something bigger — experience
          <span className="text-white font-semibold">growth</span>,
          <span className="text-white font-semibold"> connection</span>, and
          <span className="text-white font-semibold">exclusive perks</span>.
        </p>

        <div className="mt-8">
          <NavLink
            to="/register"
            className="inline-block bg-[#feff00] text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Join Now
          </NavLink>
        </div>
      </div>
    </section>
  );
}

function Body() {
  return (
    <>
      <div className="mt-12 max-w-3xl mx-auto border-l-4 border-yellow-500 pl-6 text-gray-800 text-lg leading-relaxed">
        <p className="italic">
          “Membership in the association is open to all citizens of the world —
          those who have served or are serving in the military, paramilitary, or
          private security sectors, and individuals driven by a genuine passion
          for protecting and safeguarding people.”
        </p>
      </div>
      <main className="bg-gray-50 py-20 px-6 md:px-16 font-roboto text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
              MEMBERSHIP CATEGORIES
            </h2>
            <p className="text-gray-700 text-lg md:text-xl mb-12 leading-relaxed">
              ASPOI membership is open to everyone committed to
              <span className="font-semibold">safety</span> and
              <span className="font-semibold"> humanitarian service</span>.
              Choose your category and become part of a global network promoting
              <span className="font-semibold">peace</span> and
              <span className="font-semibold">justice</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-300 overflow-hidden border-l-8 border-black">
              <div className="p-6 space-y-6 relative">
                <span className="absolute -top-0.5 right-4 bg-linear-to-r from-yellow-400 to-[#feff00] text-black font-bold px-3 py-1.5 rounded-full text-sm shadow-md uppercase tracking-wide">
                  Popular
                </span>
                <h3 className="text-3xl font-extrabold text-gray-900">
                  FIELD OPERATIONAL MEMBERSHIP
                </h3>
                <p className="text-2xl font-bold text-gray-800">$</p>
                <p className="text-gray-700 font-medium">
                  Contact your National Director/Commander General
                </p>
                <p className="text-gray-600 leading-relaxed">
                  FIELD OPERATION MEMBERSHIP (SPOI AND SPON OFFICERS). This is
                  for active full-uniformed men and women who are members and
                  officers of Safety and Protection Officers International
                  operating in different countries.
                </p>
                <NavLink
                  to="/register"
                  className="w-full inline-block bg-black text-white py-3 rounded-xl hover:bg-[#feff00] hover:text-black transition font-semibold text-center"
                >
                  REGISTER
                </NavLink>
                <p className="text-sm text-red-600 italic mt-2">
                  NOTE: Your payment receipt is required to verify your account
                  before confirmation!!!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-300 overflow-hidden border-l-8 border-black">
              <div className="p-6 space-y-6 relative">
                <h3 className="text-3xl font-extrabold text-gray-900">
                  PHILANTHROPIC MEMBERS
                </h3>
                <p className="text-2xl font-bold text-gray-800">$100</p>
                <p className="text-gray-700 font-medium">Annually</p>
                <p className="text-gray-600 leading-relaxed">
                  PHILANTROPIC MEMBERSHIP is for well-meaning and devoted
                  members of the public who have been sponsoring and supporting
                  the provisions of adequate safety and protection of lives,
                  properties, and fundamental rights of all humans in the world.
                  Philanthropic members may or may not wear ASPOI uniform.
                </p>
                <NavLink
                  to="/register"
                  className="w-full inline-block bg-black text-white py-3 rounded-xl hover:bg-[#feff00] hover:text-black transition font-semibold text-center"
                >
                  REGISTER
                </NavLink>

                <p className="text-sm text-red-600 italic mt-2">
                  NOTE: your payment receipt is required to verify your payment
                  before your account is confirmed!!!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-300 overflow-hidden border-l-8 border-black">
              <div className="p-6 space-y-6 relative">
                <span className="absolute -top-0.5 right-4 bg-linear-to-r from-yellow-400 to-[#feff00] text-black font-bold px-3 py-1.5 rounded-full text-sm shadow-md uppercase tracking-wide">
                  Popular
                </span>
                <h3 className="text-3xl font-extrabold text-gray-900">
                  PROFESSIONAL MEMBERSHIP INDIVIDUAL
                </h3>
                <p className="text-2xl font-bold text-gray-800">$50</p>
                <p className="text-gray-700 font-medium">Annually</p>
                <p className="text-gray-600 leading-relaxed">
                  PROFESSIONAL SERVICE PRACTITIONERS MEMBERSHIP is for the
                  serving or retired military, paramilitary, and private
                  security personnel and officers who are willing, able, and
                  ready to use their resources in knowledge and financial
                  sponsorship to support the course of justice towards ensuring
                  the safety and protection of lives, properties, and
                  fundamental rights of all humans in the world. Professional
                  members may or may not wear ASPOI uniform.
                </p>
                <NavLink
                  to="/register"
                  className="w-full inline-block bg-black text-white py-3 rounded-xl hover:bg-[#feff00] hover:text-black transition font-semibold text-center"
                >
                  REGISTER
                </NavLink>
                <p className="text-sm text-red-600 italic mt-2">
                  NOTE: your payment receipt is required to verify your payment
                  before your account is confirmed!!!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-300 overflow-hidden border-l-8 border-black">
              <div className="p-6 relative flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    CORPORATE MEMBERSHIP
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">$150</p>
                  <p className="text-gray-700 font-medium">Annually</p>
                  <p className="text-gray-600 leading-relaxed">
                    CORPORATE MEMBERSHIP is for security organizations or
                    companies who are willing to partner with ASPOI in providing
                    adequate safety and protection of lives, properties, and
                    fundamental rights of all humans in the world.
                  </p>
                </div>
                <div className="mt-6 space-y-7">
                  <NavLink
                    to="/register"
                    className="w-full inline-block bg-black text-white py-3 rounded-xl hover:bg-[#feff00] hover:text-black transition font-semibold text-center"
                  >
                    REGISTER
                  </NavLink>

                  <p className="text-sm text-red-600 italic">
                    NOTE: your payment receipt is required to verify your
                    payment before your account is confirmed!!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto mt-16 bg-blue-50 border-l-4 border-yellow-300 rounded-lg p-6 flex flex-col items-center space-y-3 shadow-md">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
            </svg>
            <h3 className="text-xl font-bold text-blue-900">
              Payment Information
            </h3>
            <p className="text-gray-700 text-center">
              Western Union Money Transfer payable to:
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Akinwumi Oluwole Gideon
            </p>
            <p className="text-gray-700">+234 803 807 9547</p>
          </div>
        </div>
      </main>
    </>
  );
}
export default Membership;
