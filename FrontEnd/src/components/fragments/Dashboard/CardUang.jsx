import { Link } from "react-router-dom";
import Card from "../../elements/card";
import { Icon } from "../../elements/icon";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/themeContext";

const CardUang = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      variant=""
      title="Total Pemasukan"
      desc={
        <div className={` ${theme.name}`}>
          <div className="flex items-center p-4 gap-4 mt-8">
            {/* Icon Pelanggan */}
            <div className="flex items-center justify-center p-3 bg-gray-600 text-white rounded-full">
              <Icon.Pemasukan />
            </div>
            {/* Text Section */}
            <div className="flex flex-col text-center flex-1">
              <span className="text-white text-lg font-medium pb-2">
                Pemasukan
              </span>
              <span className="text-2xl font-bold text-gray-900">10</span>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CardUang;
