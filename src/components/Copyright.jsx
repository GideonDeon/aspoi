export default function Foot() {
  return (
    <div className="bg-gray-800 py-6 px-4 md:px-8 lg:px-12">
      <div className="max-w-md mx-auto">
        <hr className="w-full h-1 bg-gray-600 rounded-full mb-4" />
        <p className="text-gray-400 text-sm text-center">
          &copy; ASPOI {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
