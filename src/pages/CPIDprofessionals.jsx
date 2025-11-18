import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function CPIDprofessionals() {
  return (
    <>
      <PageNav />
      <main
        className="relative bg-cover bg-center min-h-[40vh] md:min-h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/images/MaintenanceP.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-3 text-center px-6">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            This Page is Under Maintenance
          </h1>
          <p className="text-lg md:text-2xl text-gray-200">
            Kindly return to the{" "}
            <a href="/" className="text-yellow-400 underline">
              home page
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CPIDprofessionals;
