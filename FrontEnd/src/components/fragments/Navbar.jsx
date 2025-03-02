import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "../elements/icon";
import Logo from "../elements/logo";
import { ThemeContext } from "../../Context/themeContext";
import { useContext, useState, useEffect } from "react";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [userName, setUserName] = useState("GUEST");

  const menus = [
    {
      id: "Dashboard",
      link: "/home",
      icon: <Icon.Dashboard />,
      label: "Beranda",
    },
    {
      id: "Pelanggan",
      link: "/",
      icon: <Icon.Pelanggan />,
      label: "Pelanggan",
    },
    {
      id: "Airku",
      link: "/",
      icon: <Icon.Airku />,
      label: "Airku",
    },
    {
      id: "Pembayaran",
      link: "/",
      icon: <Icon.Tagihan />,
      label: "Pembayaran",
    },
    {
      id: "Message",
      link: "/",
      icon: <Icon.Message />,
      label: "Message",
    },
    { id: "Laporan", link: "/", icon: <Icon.Laporan />, label: "Laporan" },
  ];
  const menuss = [
    {
      id: "Settings",
      link: "/home",
      icon: <Icon.Setting />,
      label: "Pengaturan",
    },
    {
      id: "Logout",
      link: "/",
      icon: <Icon.Logout />,
      label: "Keluar",
    },
  ];
  return (
    <div className={`bg-defaultBlack ${theme.name}`}>
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <NavLink to="/" className="flex justify-center mb-10">
            <Logo variant="text-primary text-sm sm:text-2xl" />
          </NavLink>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md zoom-in"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md zoom-in"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>

        <div>
          <div className="border-b my-10 border-b-special-bg"></div>
          <NavLink
            to="/"
            //onClick={Logout}
            className="flex hover:bg-special-bg3 px-4 py-3 rounded-sm hover:text-white zoom-in"
          >
            <div className="mx-auto sm:mx-0 text-primary">
              <Icon.Setting />
            </div>
            <div className="ms-3 hidden sm:block">Pengaturan</div>
          </NavLink>
          <div className="pt-1">
            <NavLink
              to="/"
              //onClick={Logout}
              className="flex hover:bg-special-bg3 px-4 py-3 rounded-sm hover:text-white zoom-in"
            >
              <div className="mx-auto sm:mx-0 text-primary">
                <Icon.Info />
              </div>
              <div className="ms-3 hidden sm:block">Info</div>
            </NavLink>
          </div>
          <div className="pt-1">
            <NavLink
              to="/"
              //onClick={Logout}
              className="flex hover:bg-special-bg3 px-4 py-3 rounded-sm hover:text-white zoom-in"
            >
              <div className="mx-auto sm:mx-0 text-primary">
                <Icon.Logout />
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
