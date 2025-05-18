import { useContext } from "react";
import Card from "../../elements/card";
import { Icon } from "../../elements/icon";
import { ThemeContext } from "../../../Context/themeContext";

const CardAktifNonAktif = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      variant=""
      title="Pelanggan Aktif & Non Aktif"
      desc={
        <div className={`${theme.name} p-4 flex flex-col gap-4`}>
          {/* Pelanggan Aktif */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full">
                <Icon.Pelanggan />
              </div>
              <span className="text-white text-lg font-medium">
                Pelanggan Aktif
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900">10</span>
          </div>

          {/* Pelanggan Non Aktif */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full">
                <Icon.Pelanggan />
              </div>
              <span className="text-white text-lg font-medium">
                Pelanggan Non Aktif
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900 ">5</span>
          </div>
        </div>
      }
    />
  );
};

export default CardAktifNonAktif;
