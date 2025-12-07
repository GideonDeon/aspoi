import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Members() {
  const [members, setMembers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await fetch(
          "https://aspoi-backend.vercel.app/api/debug-users"
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setMembers(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMembers();
  }, []);

  // Search Filter
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(members);
      setCurrentPage(1);
      return;
    }
    const filteredData = members.filter(
      (m) =>
        m.fullname.toLowerCase().includes(search.toLowerCase()) ||
        m.email.toLowerCase().includes(search.toLowerCase()) ||
        m.membership.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredData);
    setCurrentPage(1);
  }, [search, members]);

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentMembers = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <>
      <PageNav />

      <section
        className="relative bg-cover bg-center min-h-[40vh] md:min-h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/Members.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-transparent"></div>
        <div className="relative z-3 text-center max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
            Registered Members
          </h1>
        </div>
      </section>

      <main className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Members Directory</h2>
          <input
            type="text"
            placeholder="Search by name, email, membership..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg shadow-sm w-72 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {loading && <p>Loading members...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {!loading && !error && filtered.length === 0 && (
          <p>No members match your search.</p>
        )}

        {!loading && !error && filtered.length > 0 && (
          <>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentMembers.map((member) => (
                <li
                  key={member.id}
                  className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition-all text-center"
                >
                  <img
                    src={`https://aspoi-backend.vercel.app${member.imageUrl}`}
                    alt={member.fullname}
                    className="w-28 h-28 rounded-2xl object-cover mx-auto shadow-md"
                  />

                  <h3 className="text-xl font-bold text-gray-900 mt-4">
                    {member.fullname}
                  </h3>

                  <span className="inline-block mt-3 bg-blue-600/10 text-blue-700 text-sm px-4 py-1 rounded-full font-semibold">
                    {member.membership}
                  </span>
                </li>
              ))}
            </ul>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 gap-3">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>

              <span className="text-lg font-semibold">
                {currentPage} / {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Members;
