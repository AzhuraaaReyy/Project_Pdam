import { Link } from "react-router-dom";
import Card from "../../elements/card";
import { Icon } from "../../elements/icon";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/themeContext";

const CardPelanggan = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      variant="w-[270px]"
      title="Total Balance"
      desc={
        <div className={` ${theme.name}`}>
          <div className="flex items-center p-4 gap-4">
            {/* Icon Pelanggan */}
            <div className="flex items-center justify-center p-3 bg-gray-600 text-white rounded-full">
              <Icon.Pelanggan />
            </div>
            {/* Text Section */}
            <div className="flex flex-col text-center flex-1">
              <span className="text-gray-700 text-lg font-medium pb-2">
                Total Pelanggan
              </span>
              <span className="text-2xl font-bold text-gray-900">10</span>
            </div>
          </div>
        </div>
      }
      width="300px"
    />
  );
};

export default CardPelanggan;
