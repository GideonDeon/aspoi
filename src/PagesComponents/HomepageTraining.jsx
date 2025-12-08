import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default Training;
