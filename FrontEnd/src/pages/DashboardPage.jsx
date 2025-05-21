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
      <div className="flex flex-wrap items-center gap-2 pt-5 px-4">
        <img
          className="w-12 h-12 rounded-full object-cover border border-white"
          src="/images/profile.png"
          alt="Profile"
        />
        <div className="flex flex-col">
          <span className="font-bold text-[20px] text-white">Hallo, GUEST</span>
          <span className="text-white text-sm">Admin</span>
        </div>
      </div>
    </MainLayout>
  );
};
export default Dashboard;
