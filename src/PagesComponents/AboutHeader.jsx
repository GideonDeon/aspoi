function Header() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[40vh] md:min-h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/AboutImage.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-transparent"></div>

      <div className="relative z-3 text-center max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
          About <span className="text-yellow-400">ASPOI</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We are a non-political, non-armed organization devoted to advancing
          <span className="text-white font-semibold">safety</span>,
          <span className="text-white font-semibold">peace</span>, and
          <span className="text-white font-semibold">protection</span> through
          intelligence, collaboration, and non-violent solutions.
        </p>
      </div>
    </section>
  );
}

export default Header;
