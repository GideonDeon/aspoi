import { useEffect, useState } from "react";
import Foot from "../components/Copyright";
import PageNav from "../components/PageNav";

function PPAprofessionals() {
  const images = Array.from(
    { length: 46 },
    (_, i) => `/images/ppa/PPIimage${i + 1}.png`
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }),
    [currentIndex];
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <PageNav />
      <section
        className="relative bg-cover bg-center min-h-[40vh] md:min-h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/PPAprof.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/20"></div>

        <div className="relative z-3 text-center px-6">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-wider leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]">
            INTERNATIONAL CERTIFIED
            <br className="hidden md:block" />
            <span className="text-yellow-400"> PPA PROFESSIONALS</span>
          </h1>
          <p className="mt-4 md:mt-6 text-gray-200 text-lg md:text-2xl font-light">
            Building global standards in peace, protection, and advancement.
          </p>
        </div>
      </section>

      <main className="py-8 px-2 flex flex-col items-center">
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center">
            <button
              className="absolute left-2 md:left-0 bg-black/50 hover:bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 md:p-5 rounded-full z-10 shadow-md transition-all cursor-pointer"
              onClick={prevImage}
            >
              &#10094;
            </button>

            <div className="overflow-hidden w-full">
              <img
                src={images[currentIndex]}
                alt={`PPA Professional ${currentIndex + 1}`}
                key={currentIndex}
                className="w-full h-[60vh] md:h-[70vh] object-contain rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform"
              />
            </div>

            <button
              className="absolute right-2 md:right-0 bg-black/50 hover:bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 md:p-5 rounded-full z-10 shadow-md transition-all cursor-pointer"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>
          <div className="flex overflow-x-auto mt-3 space-x-2 w-full max-w-5xl px-1 py-1">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`h-14 w-20 object-cover rounded-lg cursor-pointer border-2 transition-transform duration-200 ${
                  i === currentIndex
                    ? "border-yellow-400 scale-110"
                    : "border-transparent hover:scale-105"
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </main>
      <Foot />
    </>
  );
}

export default PPAprofessionals;
