import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context/themeContext";
import { FiSearch, FiBell } from "react-icons/fi";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  //const { /*setName,*/ name } = useContext("GUEST"); // Ambil name dari AuthContext

  const [userName, setUserName] = useState("GUEST"); // State untuk nama pengguna
  {
    /*
  useEffect(() => {
    // Cek apakah name ada di localStorage dan set ke state
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setUserName(storedName); // Ambil name dari localStorage
    }
  }, []);

*/
  }

  const date = new Date().toDateString().slice(4);
  return (
    <header
      className={`border-b-2 py-4 px-4 md:px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between bg-black ${theme.name}`}
    >
      {/* Bagian Kiri: Dashboard */}
      <div className="flex justify-between items-center md:justify-start">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Dashboard</h1>
      </div>

      {/* Bagian Tengah: Search Bar */}
      <div className="relative w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm text-sm md:text-base"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Bagian Kanan: Profil User */}
      <div className="flex items-center justify-between bg-blue-500 py-2 px-4 md:px-6 rounded-xl shadow-md w-full md:w-1/4">
        {/* Foto & Nama */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <img
            className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
            src="/public/images/profile.png"
            alt="Profile"
          />
          <div className="flex flex-col text-sm md:text-base">
            <span className="font-bold text-white ">GUEST</span>
            <span className="text-black text-xs md:text-sm">Admin</span>
          </div>
        </div>

        {/* Notifikasi */}
        <div className="relative">
          <FiBell className="text-white text-xl md:text-2xl cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
