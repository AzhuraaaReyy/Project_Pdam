import MainLayout from "../components/layouts/MainLayout";
import CardPelanggan from "../components/fragments/Dashboard/CardPelanggan";
import CardUang from "../components/fragments/Dashboard/CardUang";
import CardStatistic from "../components/fragments/Dashboard/CardStatistic";
import Schedule from "../components/fragments/Dashboard/CardDate";
import Chart from "../components/fragments/Dashboard/CardHasil";
import CardPengeluaran from "../components/fragments/Dashboard/CardPengeluaran";
import CardAktifNonAktif from "../components/fragments/Dashboard/Cardaktif&nonaktif";
import TagihanPDAM from "../components/fragments/Dashboard/CardTagihan";
const DashboardPage = () => {
  return (
    <MainLayout type="Dashboard">
      {/* Foto & Nama (Kiri) */}
      <div className="flex items-center space-x-4 pt-5 pl-1">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="/public/images/profile.png"
          alt="Profile"
        />
        <div className="flex flex-col">
          <span className="font-bold text-[20px]">Hallo, GUEST</span>
          <span className="text-gray-500 text-sm">Admin</span>
        </div>
      </div>

      <div className="pb-10"></div>
      <div className="md:grid md:grid-cols-4 md:gap-x-6">
        <CardPelanggan />
        <CardUang />
        <CardPengeluaran />
        <CardAktifNonAktif />
        <CardStatistic />
        <Chart />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-6">
        <Schedule />
        <TagihanPDAM />
      </div>
    </MainLayout>
  );
};
export default DashboardPage;
