import MainLayout from "../components/layouts/MainLayout";
import CardPelanggan from "../components/fragments/Dashboard/CardPelanggan";
import CardUang from "../components/fragments/Dashboard/CardUang";
import CardStatistic from "../components/fragments/Dashboard/CardStatistic";
import Schedule from "../components/fragments/Dashboard/CardDate";
import Chart from "../components/fragments/Dashboard/CardHasil";
import CardPengeluaran from "../components/fragments/Dashboard/CardPengeluaran";
import CardAktifNonAktif from "../components/fragments/Dashboard/Cardaktif&nonaktif";
import TagihanPDAM from "../components/fragments/Dashboard/CardTagihan";
import DaftarPelangganPDAM from "../components/fragments/Dashboard/CardDaftar";

const Dashboard = () => {
  return (
    <MainLayout type="Dashboard">
      {/* Foto & Nama (Header Kecil) */}
      <div className="flex items-center space-x-4 pt-5 pl-2 sm:pl-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="/images/profile.png"
          alt="Profile"
        />
        <div className="flex flex-col">
          <span className="font-bold text-lg sm:text-xl text-white">
            Hallo, GUEST
          </span>
          <span className="text-white text-sm">Admin</span>
        </div>
      </div>

      {/* Kartu Info */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardPelanggan />
        <CardUang />
        <CardPengeluaran />
        <CardAktifNonAktif />
        <CardStatistic />
        <Chart />
      </div>

      {/* Jadwal & Daftar Pelanggan */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Schedule />
        </div>
        <div>
          <TagihanPDAM />
          <div className="mt-4">
            <DaftarPelangganPDAM />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
