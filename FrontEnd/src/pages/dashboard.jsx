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
          <span className="font-bold text-[20px] text-white">Hallo, GUEST</span>
          <span className="text-white text-sm">Admin</span>
        </div>
      </div>

      <div className="pb-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <CardPelanggan />
        <CardUang />
        <CardPengeluaran />
        <CardAktifNonAktif />
        <CardStatistic />
        <Chart />
      </div>
      <div className="pb-5"></div>
      <div className="md:grid md:grid-cols-2 md:gap-x-6">
        <div className="col-span-1">
          <Schedule />
        </div>
        <div className="col-span-1">
          <TagihanPDAM />
          <div className="pb-5"></div>
          <DaftarPelangganPDAM />
        </div>
      </div>
    </MainLayout>
  );
};
export default DashboardPage;
