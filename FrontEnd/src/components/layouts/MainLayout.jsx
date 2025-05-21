import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-special-mainBg overflow-x-hidden">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 sm:w-72 bg-defaultBlack z-50">
        <Navbar />
      </div>

      {/* Konten di sebelah kanan */}
      <div className="flex-1 ml-20 sm:ml-72 w-full">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="px-4 py-4 min-h-[calc(100vh-4rem)] bg-special-mainBg">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
