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
      className={`border-b-2 py-4 px-6 flex items-center justify-between bg-gray-500  ${theme.name}`}
    >
      {/* Bagian Kiri: Dashboard */}
      <div className="flex">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      {/* Bagian Tengah: Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Bagian Kanan: Profil User */}
      <div className="flex items-center bg-white py-2 px-6 rounded-[20px] shadow-md w-1/5 justify-between">
        {/* Foto & Nama (Kiri) */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="/public/images/profile.png"
            alt="Profile"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg">GUEST</span>
            <span className="text-gray-500 text-sm">Admin</span>
          </div>
        </div>

        {/* Notifikasi (Kanan) */}
        <div className="relative">
          <FiBell className="text-gray-500 text-2xl cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
