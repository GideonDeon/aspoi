import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Homepage() {
  return (
    <>
      <PageNav />
      <Header />
      <BodyOne />
      <Training />
      <BodyTwo />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div
      className="bg-[url(/images/security.png)] bg-no-repeat bg-position-[30%_100%] 
                    sm:bg-position-[0%_80%] bg-cover bg-black/70 bg-blend-color h-120 sm:h-152 
                    w-full text-white p-10 font-roboto font-extrabold"
    >
      <h1 className="text-3xl text-center mb-5 sm:text-4xl sm:mt-20 md:text-6xl md:mt-30">
        ASSOCIATION OF SAFETY AND PROTECTION OFFICERS INTERNATIONAL (ASPOI)
      </h1>
      <p className="underline mb-10 text-center md:text-2xl">
        “For security, safety and protection of the nation”
      </p>
      <div className="flex w-full relative left-[50%] -translate-x-[50%] md:w-[60%] lg:w-[40%] justify-between">
        <span>
          <NavLink
            to="/register"
            className="block bg-[#ff3d00] h-12 w-32 text-center pt-2.5 rounded-[10px] 
                     hover:bg-[#feff00] hover:text-black font-aldrich "
          >
            Join Now
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/about"
            className="block bg-black  h-12 w-32 text-center text-white border-2 border-gray-500 pt-2.5 rounded-[10px] 
                       hover:bg-[#feff00] hover:text-black font-aldrich"
          >
            Learn More
          </NavLink>
        </span>
      </div>
    </div>
  );
}

function BodyOne() {
  const box = [
    {
      font: "fa-solid fa-handshake",
      head: "COMMUNITY SUPPORT",
      body: "ASPOI works with other agencies across the globe to control activities which may breach security during large gatherings, by dispatching trained officers to ensure that law and order is maintained through non violent means.",
    },
    {
      font: "fa-solid fa-shield-alt",
      head: "PROTECT LIVES AND PROPERTIES",
      body: "One of the core values of ASPOI is security of human lives and properties through the use of technology combined with human knowledge and intelligence to ensure that crimes are prevented to enable adequate protection for humans and facilities across the nation.",
    },
    {
      font: "fa-solid fa-dove",
      head: "NON-VIOLENT CONFLICT RESOLUTION",
      body: "ASPOI members are trained to mediate in situations that could lead to serious violence, conflicts or crime through proper dialogue and conflict resolving tactics to ensure that peace is restored between conflicting parties.",
    },
    {
      font: "fa-solid fa-scale-balanced",
      head: "HUMAN RIGHTS PROTECTION",
      body: "ASPOI works with other law enforcements agencies and human rights organization across the globe to ensue the human rights are not violated. ASPOI ensures the protection and defense of human rights and seek justice through legal means for victims",
    },
  ];
  return (
    <div>
      <div className="bg-black text-white text-center font-roboto border border-gray-300 p-2.5">
        <p className="text-[12px]">
          ASSOCIATION OF SAFETY AND PROTECTION OFFICERS INTERNATIONAL (ASPOI)
          <br />
          <span className="underline">a parent body for</span>
          <br />
          SAFETY AND PROTECTION OFFICERS INTERNATIONAL (SPOI)
        </p>
      </div>
      <h1 className="font-bold font-aldrich text-2xl text-center ">
        WHAT WE DO
      </h1>
      <p className="text-justify p-2.5 lg:pl-20 lg:pr-20 md:text-[20px] lg:text-center">
        The association of safety and protection officers international is a
        registered association of personnel (serving and retired) and other
        individual with the passion, vision and mission of creating an enabling
        environment for safety and protection of individuals, groups, community
        and nations at large. <br /> SAFETY AND PROTECTION OFFICERS
        INTERNATIONAL (SPOI) is a recognized body of association of safety and
        protection officers international carrying out the field operational
        roles and duties of protecting lives, properties and human rights of the
        people. More Organizations across the world are expected to join this
        international organization for expansion of this passion for safety and
        protection of lives. properties and fundamental rights of all human
        being in all countries of the world.
      </p>
      <div className="w-full font-roboto grid lg:grid-cols-[1fr_1fr_1fr_1fr]">
        {box.map((boxObj) => (
          <DoBox boxes={boxObj} key={boxObj.head} />
        ))}
      </div>
    </div>
  );
}
function DoBox({ boxes }) {
  return (
    <div
      className="m-2.5 p-2.5 bg-black text-white rounded-2xl hover:-translate-y-1.5
                        transition-all duration-300 ease-in-out"
    >
      <span className="block text-center text-2xl w-full text-[#feff00]">
        <FontAwesomeIcon icon={boxes.font} />
      </span>
      <h1 className="text-center font-bold">{boxes.head}</h1>
      <p className="text-center text-gray-300">{boxes.body}</p>
    </div>
  );
}
function Training() {
  return (
    <div
      className="bg-black text-white rounded-2xl hover:-translate-y-1.5
                transition-all duration-300 ease-in-out m-2.5 p-2.5 
                lg:w-[20rem] lg:relative lg:left-[50%] lg:-translate-x-[50%]"
    >
      <span className="block text-center text-2xl w-full text-[#feff00]">
        <FontAwesomeIcon icon="fa-solid fa-scroll" />
      </span>
      <h1 className="text-center font-bold">PROFESSIONAL TRAININGS</h1>
      <p className="text-center text-gray-300">
        "ASPOI also provides regular teachings and campaigns for individuals,
        groups, organizations and communities on the need to maintain peace and
        unity regardless of colors, races, ethnicity, religion and language
        differences. ASPOI also gives adequate trainings on several topics which
        bothers on Safety and Protection knowledge for any interested groups and
        organizations from any part of the world. ASPOI awards International
        Professional Training qualifications at CERTIFICATE, DIPLOMA, ADVANCED
        DIPLOMA AND POST-GRADUATE DIPLOMA levels.",
      </p>
    </div>
  );
}
function BodyTwo() {
  return (
    <div className="lg:grid grid-cols-[1fr_1fr] w-full h-fit">
      <div className="bg-black pb-28 md:pl-15 md:pr-15 sm:pt-10 lg:pt-30 ">
        <h1 className="text-center text-4xl text-white font-bold font-aldrich pt-3">
          <span className="bg-[#ff3d00]/70 inline-block p-1.5">Our</span> Core
          Values
        </h1>
        <p className="underline text-center text-white">
          “For security, safety and protection of the nation”
        </p>
        <div className="font-roboto">
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Accountabiliy
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We take responsibility for our actions and decisions, ensuring
              that every duty is carried out with integrity.
            </span>
          </div>
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Trustworthy
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We uphold honesty and reliability so that the community and
              partners can confidently depend on us.
            </span>
          </div>
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Transparent
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We operate openly, making our processes, intentions, and decisions
              visible and understandable to all.
            </span>
          </div>
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Selfless Service
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We prioritize the welfare and safety of others above personal
              gain, serving with dedication and compassion.
            </span>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block">
        <img src="/images/bgvalue.png" alt="" className="w-full h-152" />
      </div>
    </div>
  );
}
export default Homepage;
