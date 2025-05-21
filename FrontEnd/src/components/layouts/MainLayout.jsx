import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-screen min-h-screen max-w-full bg-blue-900">
      {/* Navbar (Sidebar) */}

      <Navbar />

      {/* Bagian Kanan: Header + Content */}
      <div className="w-screen">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="px-6 py-4 min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
