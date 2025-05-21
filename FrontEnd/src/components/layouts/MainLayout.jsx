import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-blue-900 overflow-x-hidden">
      {/* Navbar (Sidebar) */}
      <div className=" fixed left-0 top-0 h-full w-28 sm:w-72 bg-defaultBlack z-50">
        <Navbar />
      </div>

      {/* Bagian Kanan: Header + Content */}
      <div className="flex-1 sm:ml-72 ml-28">
        <Header />
        <main className="px-4 sm:px-6 py-4 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
