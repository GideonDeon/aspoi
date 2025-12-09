import PageNav from "../components/PageNav";
import Foot from "../components/Copyright";
import { NavLink } from "react-router-dom";

const membershipCards = [
  {
    title: "FIELD OPERATIONAL MEMBERSHIP",
    price: "₦ 37,500",
    period: "Registration fee",
    desc: "FIELD OPERATION MEMBERSHIP (SPOI AND SPON OFFICERS). This is for active full-uniformed men and women who are members and officers of Safety and Protection Officers International operating in different countries.",
    note: "Your payment receipt is required to verify your account before confirmation!!!",
    popular: true,
    bgColor: "bg-linear-to-r from-gray-700 via-gray-600 to-gray-500",
    borderColor: "border-gray-900",
    textColor: "text-white",
    btnBg: "bg-black",
    btnHoverBg: "hover:bg-gray-400",
    btnText: "text-white",
    btnHoverText: "",
  },
  {
    title: "PHILANTHROPIC MEMBERS",
    price: "₦ 225,000",
    period: "Registration fee",
    desc: "PHILANTHROPIC MEMBERSHIP is for well-meaning and devoted members of the public who sponsor safety and protection initiatives. Philanthropic members may or may not wear ASPOI uniform.",
    note: "Your payment receipt is required to verify your payment before your account is confirmed!!!",
    popular: false,
    bgColor: "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500",
    borderColor: "border-indigo-700",
    textColor: "text-white",
    btnBg: "bg-black",
    btnHoverBg: "hover:bg-purple-300",
    btnText: "text-white",
    btnHoverText: "",
  },
  {
    title: "PROFESSIONAL MEMBERSHIP INDIVIDUAL",
    price: "₦ 180,000",
    period: "Registration fee",
    desc: "PROFESSIONAL SERVICE PRACTITIONERS MEMBERSHIP is for serving or retired military, paramilitary, and private security personnel ready to support justice and safety initiatives. May or may not wear ASPOI uniform.",
    note: "Your payment receipt is required to verify your payment before your account is confirmed!!!",
    popular: true,
    bgColor: "bg-linear-to-r from-green-400 via-teal-300 to-green-200",
    borderColor: "border-green-600",
    textColor: "text-gray-900",
    btnBg: "bg-black",
    btnHoverBg: "hover:bg-green-600",
    btnText: "text-white",
    btnHoverText: "hover:text-black",
  },
  {
    title: "CORPORATE MEMBERSHIP",
    price: "₦ 750,000",
    period: "Registration fee",
    desc: "CORPORATE MEMBERSHIP is for organizations partnering with ASPOI to ensure safety, protection, and justice globally.",
    note: "Your payment receipt is required to verify your payment before your account is confirmed!!!",
    popular: false,
    bgColor: "bg-linear-to-r from-yellow-400 via-orange-300 to-yellow-200",
    borderColor: "border-yellow-600",
    textColor: "text-gray-900",
    btnBg: "bg-black",
    btnHoverBg: "hover:bg-yellow-600",
    btnText: "text-white",
    btnHoverText: "hover:text-black",
  },
];

function Membership() {
  return (
    <>
      <PageNav />
      <Header />
      <Body />
      <Foot />
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
          <span className="text-white font-semibold"> growth</span>,
          <span className="text-white font-semibold"> connection</span>, and
          <span className="text-white font-semibold"> exclusive perks</span>.
        </p>
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
              <span className="font-semibold"> safety</span> and
              <span className="font-semibold"> humanitarian service</span>.
              Choose your category and become part of a global network promoting
              <span className="font-semibold"> peace</span> and
              <span className="font-semibold"> justice</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {membershipCards.map((card, idx) => (
              <div
                key={idx}
                className={`max-w-md mx-auto ${card.bgColor} rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-300 overflow-hidden border-l-8 ${card.borderColor}`}
              >
                <div className="p-6 space-y-6 relative">
                  {card.popular && (
                    <span className="absolute -top-0.5 right-4 bg-black text-white font-bold px-3 py-1.5 rounded-full text-sm shadow-md uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                  <h3 className={`text-3xl font-extrabold ${card.textColor}`}>
                    {card.title}
                  </h3>
                  {card.period && (
                    <p className={`${card.textColor} font-medium`}>
                      {card.period}
                    </p>
                  )}
                  <p className={`text-2xl font-bold ${card.textColor}`}>
                    {card.price}
                  </p>
                  
                  <p className={`${card.textColor} leading-relaxed`}>
                    {card.desc}
                  </p>
                  <NavLink
                    to="/register"
                    className={`w-full inline-block ${card.btnBg} ${
                      card.btnText
                    } py-3 rounded-xl ${card.btnHoverBg} ${
                      card.btnHoverText
                    } transition font-semibold text-center ${
                      card.title === "CORPORATE MEMBERSHIP"
                        ? "mt-0 lg:mt-22"
                        : card.title === "PHILANTHROPIC MEMBERS"
                        ? "mt-0 lg:mt-17"
                        : "mt-0"
                    }`}
                  >
                    REGISTER
                  </NavLink>

                  <p
                    className={`text-sm italic mt-2 ${
                      card.title === "FIELD OPERATIONAL MEMBERSHIP" ||
                      card.title === "PHILANTHROPIC MEMBERS"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {card.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Membership;
