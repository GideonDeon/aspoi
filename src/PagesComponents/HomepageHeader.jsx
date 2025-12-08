import { NavLink } from "react-router-dom";

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

export default Header;
