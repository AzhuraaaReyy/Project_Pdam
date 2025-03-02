import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-screen min-h-screen">
      {/* Navbar (Sidebar) */}
      <div className="fixed left-0 top-0 h-full w-28 sm:w-72 bg-defaultBlack">
        <Navbar />
      </div>

      {/* Bagian Kanan: Header + Content */}
      <div className="flex-1 ml-28 sm:ml-72">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="px-6 py-4 min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
