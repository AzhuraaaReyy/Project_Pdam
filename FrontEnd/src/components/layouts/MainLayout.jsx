import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-blue-900">
      {/* Sidebar - disembunyikan di mobile */}
      <aside className="hidden sm:block fixed top-0 left-0 h-full w-28 sm:w-72 bg-defaultBlack z-50">
        <Navbar />
      </aside>

      {/* Konten utama */}
      <div className="flex flex-col w-full sm:ml-28 md:ml-72">
        <Header />
        <main className="px-4 py-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
