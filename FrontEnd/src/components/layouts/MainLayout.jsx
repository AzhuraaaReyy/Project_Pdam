import { useState } from "react";
import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";
import { Menu } from "lucide-react"; // atau gunakan ikon lain

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-blue-900">
      {/* Sidebar untuk desktop */}
      <aside className="hidden sm:block fixed top-0 left-0 h-full w-28 sm:w-72 bg-defaultBlack z-50">
        <Navbar />
      </aside>

      {/* Sidebar mobile drawer */}
      {sidebarOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex">
          <div className="w-64 bg-defaultBlack h-full shadow-lg">
            <Navbar />
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Konten utama */}
      <div className="flex flex-col w-full sm:ml-28 md:ml-72">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 sm:hidden bg-defaultBlack">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="text-white w-6 h-6" />
          </button>
          <span className="text-white font-bold">Aplikasi PDAM</span>
        </div>

        <Header />
        <main className="px-4 py-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
