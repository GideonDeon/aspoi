import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import { dsiOfficers } from "../data/dsiOfficers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function DSIprofessionals() {
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
    <div className=" relative bg-[url(/images/bodyguard.png)] bg-no-repeat bg-cover bg-right min-h-[40vh] md:min-h-[70vh] sm:bg-position-[0%_20%] pb-10">
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-transparent"></div>
      <div className="pt-10">
        <h1 className="text-3xl md:text-6xl text-center font-extrabold text-white tracking-wider leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]">
          INTERNATIONAL CERTIFIED
          <br className="hidden md:block" />
          <span className="text-yellow-400"> DSI PROFESSIONALS</span>
        </h1>
        <p className="mt-4 md:mt-6 text-center text-white text-lg md:text-2xl font-light">
          Building global standards in peace, protection, and advancement.
        </p>
      </div>
    </div>
  );
}
function Body() {
  return (
    <div className="mt-2 xl:grid grid-cols-[2fr_1fr] items-center">
      <Search />
      <Carousel />
    </div>
  );
}
function Carousel() {
  const [index, setIndex] = useState(0);

  // Timed slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }),
    [index];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % dsiOfficers.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + dsiOfficers.length) % dsiOfficers.length);
  };

  return (
    <div>
      <div className=" relative border-black m-5 rounded-4xl">
        <img
          src={dsiOfficers[index].image}
          alt={dsiOfficers[index].name}
          className="h-80 w-160 border-l-4 border-b-4 rounded-3xl sm:w-120 sm:relative sm:left-[50%] sm:-translate-x-[50%]"
        />
        <button
          onClick={prevSlide}
          className="p-4 bg-black/20 hover:bg-black text-white text-4xl rounded-4xl cursor-pointer absolute top-[40%] left-[1%]"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="p-4 bg-black/20 hover:bg-black text-white text-4xl rounded-4xl cursor-pointer absolute top-[40%] right-[1%]"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

function Search() {
  const [search, setSearch] = useState("");

  const filtered = dsiOfficers.filter((x) =>
    x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <label className="block ml-2 pl-2 border-3 rounded-2xl w-fit h-7">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none"
        />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </label>
      <div className="h-120 overflow-y-scroll no-scrollbar mb-7 sm:h-120 md:grid grid-cols-2">
        {filtered.map((Officers) => (
          <div
            key={Officers.id}
            className="border-2 m-3 p-2 rounded-2xl shadow hover:-translate-y-1 transition"
          >
            <img
              src={Officers.image}
              alt={Officers.name}
              className="w-full h-60 object-contain rounded"
            />
            <p className="text-center font-roboto mt-2">
              Dr.&nbsp;
              <Link to={`/dsi/${Officers.id}`} key={Officers.id} className="font-extrabold font-aldrich">
                {Officers.name}
              </Link>&nbsp;
              DSI is an honorary doctor of Security intelligence DSi, worthy of
              the honor by professional security experiences, exposures,
              commitments and services over the years A reputable and
              responsible security expert with vast knowledge on various aspects
              of security and protections of lives and properties. Please accord
              this important dignitary with deserved recognition as may be
              deemed fit at anytime
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DSIprofessionals;
