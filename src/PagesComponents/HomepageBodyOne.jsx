import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default BodyOne;

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
