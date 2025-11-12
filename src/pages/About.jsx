import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function About() {
  return (
    <>
      <PageNav />

      <section
        className="relative bg-cover bg-center min-h-[40vh] md:min-h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/AboutImage.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-transparent"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
            About <span className="text-yellow-400">ASPOI</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are a non-political, non-armed organization devoted to advancing{" "}
            <span className="text-white font-semibold">safety</span>,{" "}
            <span className="text-white font-semibold">peace</span>, and{" "}
            <span className="text-white font-semibold">protection</span> through
            intelligence, collaboration, and non-violent solutions.
          </p>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The{" "}
            <strong>
              Association of Safety and Protection Officers International
              (ASPOI)
            </strong>
            unites safety professionals, retired officers, and passionate
            individuals working to uphold the fundamental human right to safety
            and security. We believe in a peaceful, intelligent, and
            community-driven approach to protection and public welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4 group-hover:bg-yellow-300 transition">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Our Identity</h3>
              <p className="leading-relaxed text-[17px] text-gray-700">
                ASPOI is a registered organization of experts and advocates
                dedicated to strengthening community protection, safety
                awareness, and social peace through structured training and
                collaboration.
              </p>
            </div>
          </div>

          <div className="group bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4 group-hover:bg-yellow-300 transition">
                <i className="fas fa-bullseye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="leading-relaxed text-[17px] text-gray-700">
                We aim to foster a world where safety and human rights are
                prioritized. Our mission is to resolve conflict, prevent
                violence, and build resilience using intelligence and
                non-violent measures.
              </p>
            </div>
          </div>

          <div className="group bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4 group-hover:bg-yellow-300 transition">
                <i className="fas fa-shield-alt text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Our Field Arm</h3>
              <p className="leading-relaxed text-[17px] text-gray-700">
                The{" "}
                <strong>
                  Safety and Protection Officers International (SPOI)
                </strong>{" "}
                serves as our field unit — a uniformed, disciplined, yet unarmed
                body committed to human rights defense and peace maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US SECTION */}
      <section className="bg-yellow-50 py-16 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Join the Movement for Safety & Peace
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Become part of a global community dedicated to protecting lives,
            promoting safety, and defending human rights through unity and
            non-violence. Your participation makes a difference.
          </p>

          <NavLink
            to="/register"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Join Now
          </NavLink>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
