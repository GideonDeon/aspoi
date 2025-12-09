function Header() {
  return (
    <div className=" relative bg-[url(/images/bodyguard.png)] bg-no-repeat bg-cover bg-right min-h-[40vh] md:min-h-[70vh] sm:bg-position-[0%_20%] pb-10">
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-transparent"></div>
      <div className="pt-10">
        <h1 className="text-3xl md:text-6xl mt-10 md:mt-20 text-center font-extrabold text-white tracking-wider leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]">
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

export default Header;
