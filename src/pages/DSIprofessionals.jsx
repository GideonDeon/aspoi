import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import { dsiOfficers } from "../data/dsiOfficers";

function DSIprofessionals() {
  return (
    <>
      <PageNav />
      <Header />
      <Carousel />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="bg-[url(/images/bodyguard.png)] bg-no-repeat bg-cover bg-right h-[40vh] w-full bg-blend-color bg-black/20 sm:h-[60vh] sm:bg-position-[0%_20%]">
      <h1 className="text-white text-center text-2xl uppercase font-roboto font-extrabold pt-20 sm:pr-10 sm:pl-10 sm:pt-30 sm:text-4xl lg:text-6xl">
        International certified DSi professionals
      </h1>
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

  console.log(index);
  return (
    <div>
      <div className=" relative border-l-4 border-b-4 border-black m-5 rounded-4xl">
        <img
          src={dsiOfficers[index].image}
          alt={dsiOfficers[index].name}
          className="h-[20rem] w-[40rem] rounded-3xl"
        />
        <button
          onClick={prevSlide}
          className="p-4 bg-black/20 hover:bg-black text-white text-4xl rounded-4xl cursor-pointer absolute top-[40%] left-[1%]"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="p-4 bg-black/20 hover:bg-black text-white text-4xl rounded-4xl cursor-pointer absolute top-[40%] right-[1%]"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center w-full gap-1">
          {dsiOfficers.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`inline-block w-3 h-3 rounded-full  ${
                i === index ? "bg-white" : "bg-black/20"
              }`}
            ></span>
          ))}
        </div>
    </div>
  );
}
export default DSIprofessionals;
