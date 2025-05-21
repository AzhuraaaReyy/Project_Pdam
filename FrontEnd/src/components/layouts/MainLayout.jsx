import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-screen min-h-screen bg-blue-900">
      {/* Sidebar (kiri) */}
      <div className="w-24 sm:w-28 lg:w-72 bg-defaultBlack min-h-screen fixed left-0 top-0">
        <Navbar />
      </div>

      {/* Konten utama (di kanan sidebar) */}
      <div className="flex-1 ml-24 sm:ml-28 lg:ml-72 flex flex-col">
        {/* Header */}
        <Header />

        {/* Konten */}
        <main className="px-4 py-4 min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
