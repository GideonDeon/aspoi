import { useEffect, useState } from "react";
import { dsiOfficers } from "../data/dsiOfficers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Body() {
  return (
    <div className="mt-8 xl:grid grid-cols-[2fr_1fr] items-center">
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
      <label className="flex items-center ml-3 border-2 rounded-2xl w-fit h-10 px-3 mb-4 bg-white text-black">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none bg-transparent placeholder-gray-500 w-full"
        />
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          className="ml-2 text-gray-500"
        />
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
              <Link
                to={`/dsi/${Officers.id}`}
                key={Officers.id}
                className="font-extrabold font-aldrich"
              >
                {Officers.name}
              </Link>
              &nbsp; DSI is an honorary doctor of Security intelligence DSi,
              worthy of the honor by professional security experiences,
              exposures, commitments and services over the years A reputable and
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

export default Body;
