import PropTypes from "prop-types";

const IconWrapper = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const DashboardIcon = () => (
  <IconWrapper>
    <path
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 10L16 8"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.77778 20C4.1535 18.6966 2.97101 16.9153 2.3942 14.903C1.81738 12.8908 1.8748 10.7472 2.55849 8.76939C3.24219 6.79156 4.5183 5.07742 6.20998 3.86451C7.90167 2.6516 9.92515 2 12 2C14.0749 2 16.0983 2.6516 17.79 3.86451C19.4817 5.07742 20.7578 6.79156 21.4415 8.76939C22.1252 10.7472 22.1826 12.8908 21.6058 14.903C21.029 16.9153 19.8465 18.6966 18.2222 20H5.77778Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const PelangganIcon = () => (
  <IconWrapper>
    <path
      d="M7.99998 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 7.99998 2C5.79084 2 3.99998 3.79086 3.99998 6C3.99998 8.20914 5.79084 10 7.99998 10Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 20V18C2 16.9391 2.42143 15.9217 3.17157 15.1716C3.92172 14.4214 4.93913 14 6 14H10C11.0609 14 12.0783 14.4214 12.8284 15.1716C13.5786 15.9217 14 16.9391 14 18V20"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const AirkuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g id="SVGRepo_tracerCarrier" strokeLinejoin="round" />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <g id="Environment / Water_Drop">
        {" "}
        <path
          id="Vector"
          d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinejoin="round"
        />{" "}
      </g>{" "}
    </g>
  </svg>
);
const TagihanIcon = () => (
  <IconWrapper>
    <path
      d="M18.875 14.0908V17.159C18.875 17.4303 18.7565 17.6904 18.5455 17.8822C18.3345 18.074 18.0484 18.1818 17.75 18.1818H4.25C3.65326 18.1818 3.08097 17.9662 2.65901 17.5827C2.23705 17.1991 2 16.6788 2 16.1363V3.86357M16.625 5.90902V2.84084C16.625 2.5696 16.5065 2.30946 16.2955 2.11767C16.0845 1.92587 15.7984 1.81812 15.5 1.81812H4.25C3.65326 1.81812 3.08097 2.03362 2.65901 2.41721C2.23705 2.80081 2 3.32108 2 3.86357C2 4.40606 2.23705 4.92633 2.65901 5.30992C3.08097 5.69352 3.65326 5.90902 4.25 5.90902H17.75C18.0484 5.90902 18.3345 6.01678 18.5455 6.20857C18.7565 6.40037 18.875 6.66051 18.875 6.93175V9.99993L16.625 5.90902Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 9.99994V14.0908H15.5C14.9033 14.0908 14.331 13.8753 13.909 13.4917C13.4871 13.1082 13.25 12.5879 13.25 12.0454C13.25 11.5029 13.4871 10.9826 13.909 10.599C14.331 10.2154 14.9033 9.99994 15.5 9.99994H20Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const MessageIcon = () => (
  <IconWrapper>
    <path
      d="M2 19V5.1875C2 4.34212 2.33583 3.53137 2.9336 2.9336C3.53137 2.33583 4.34212 2 5.1875 2H15.8125C16.6579 2 17.4686 2.33583 18.0664 2.9336C18.6642 3.53137 19 4.34212 19 5.1875V11.5625C19 12.4079 18.6642 13.2186 18.0664 13.8164C17.4686 14.4142 16.6579 14.75 15.8125 14.75H6.25L2 19Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25 6.25H14.75"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25 10.5H12.625"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const LaporanIcon = () => (
  <IconWrapper>
    <path
      d="M8.2057 2.86511H4.48228C3.82394 2.86511 3.19256 3.12664 2.72704 3.59215C2.26152 4.05767 2 4.68905 2 5.34739V16.5176C2 17.176 2.26152 17.8074 2.72704 18.2729C3.19256 18.7384 3.82394 18.9999 4.48228 18.9999H15.6525C16.3109 18.9999 16.9423 18.7384 17.4078 18.2729C17.8733 17.8074 18.1348 17.176 18.1348 16.5176V12.7942"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.95005 13.05H10.6849L18.4336 5.30126C18.7963 4.93859 19 4.44672 19 3.93383C19 3.42095 18.7963 2.92907 18.4336 2.56641C18.071 2.20374 17.5791 2 17.0662 2C16.5533 2 16.0615 2.20374 15.6988 2.56641L7.95005 10.3151V13.05Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.75 4.54993L16.45 6.24993"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const SettingIcon = () => (
  <IconWrapper>
    <path
      d="M10.1389 3.46333C10.6122 1.51222 13.3878 1.51222 13.8611 3.46333C13.9321 3.75644 14.0714 4.02864 14.2675 4.25778C14.4636 4.48691 14.711 4.6665 14.9896 4.78194C15.2682 4.89738 15.5702 4.94539 15.8709 4.92208C16.1716 4.89876 16.4625 4.80478 16.72 4.64778C18.4344 3.60333 20.3978 5.56556 19.3533 7.28111C19.1966 7.53851 19.1027 7.82926 19.0795 8.12975C19.0562 8.43023 19.1042 8.73197 19.2195 9.01042C19.3348 9.28888 19.5142 9.5362 19.743 9.73228C19.9719 9.92836 20.2438 10.0677 20.5367 10.1389C22.4878 10.6122 22.4878 13.3878 20.5367 13.8611C20.2436 13.9321 19.9714 14.0714 19.7422 14.2675C19.5131 14.4636 19.3335 14.711 19.2181 14.9896C19.1026 15.2682 19.0546 15.5702 19.0779 15.8709C19.1012 16.1716 19.1952 16.4625 19.3522 16.72C20.3967 18.4344 18.4344 20.3978 16.7189 19.3533C16.4615 19.1966 16.1707 19.1027 15.8703 19.0795C15.5698 19.0562 15.268 19.1042 14.9896 19.2195C14.7111 19.3348 14.4638 19.5142 14.2677 19.743C14.0716 19.9719 13.9323 20.2438 13.8611 20.5367C13.3878 22.4878 10.6122 22.4878 10.1389 20.5367C10.0679 20.2436 9.92864 19.9714 9.73254 19.7422C9.53644 19.5131 9.28901 19.3335 9.01039 19.2181C8.73176 19.1026 8.42982 19.0546 8.12913 19.0779C7.82844 19.1012 7.5375 19.1952 7.28 19.3522C5.56556 20.3967 3.60222 18.4344 4.64667 16.7189C4.80345 16.4615 4.89728 16.1707 4.92054 15.8703C4.9438 15.5698 4.89583 15.268 4.78052 14.9896C4.66522 14.7111 4.48584 14.4638 4.25697 14.2677C4.02809 14.0716 3.75618 13.9323 3.46333 13.8611C1.51222 13.3878 1.51222 10.6122 3.46333 10.1389C3.75644 10.0679 4.02864 9.92864 4.25778 9.73254C4.48691 9.53644 4.6665 9.28901 4.78194 9.01039C4.89738 8.73176 4.94539 8.42982 4.92208 8.12913C4.89876 7.82844 4.80478 7.5375 4.64778 7.28C3.60333 5.56556 5.56556 3.60222 7.28111 4.64667C8.39222 5.32222 9.83222 4.72444 10.1389 3.46333Z"
      stroke="#BABEC6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.3334C13.841 15.3334 15.3333 13.841 15.3333 12C15.3333 10.1591 13.841 8.66669 12 8.66669C10.1591 8.66669 8.66667 10.1591 8.66667 12C8.66667 13.841 10.1591 15.3334 12 15.3334Z"
      stroke="#BABEC6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const LogoutIcon = () => (
  <IconWrapper>
    <path
      d="M8.3335 14.1663L12.5002 9.99967L8.3335 5.83301"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 10H2.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const InfoIcon = () => (
  <IconWrapper>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#BABEC6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7.55579H12.0114"
      stroke="#BABEC6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.889 12H12.0001V16.4444H13.1112"
      stroke="#BABEC6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const IconPemasukan = () => (
  <IconWrapper>
    <path
      d="M24.2222 7.5556H10.3333C8.79917 7.5556 7.55551 8.79926 7.55551 10.3334V18.6667C7.55551 20.2009 8.79917 21.4445 10.3333 21.4445H24.2222C25.7563 21.4445 27 20.2009 27 18.6667V10.3334C27 8.79926 25.7563 7.5556 24.2222 7.5556Z"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.4445 7.55557V4.77778C21.4445 4.04107 21.1518 3.33453 20.6309 2.81359C20.11 2.29266 19.4034 2 18.6667 2H4.77778C4.04107 2 3.33453 2.29266 2.81359 2.81359C2.29266 3.33453 2 4.04107 2 4.77778V13.1111C2 13.8479 2.29266 14.5544 2.81359 15.0753C3.33453 15.5963 4.04107 15.8889 4.77778 15.8889H7.55557"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.8667 12.7501C18.7459 12.5668 18.5704 12.4156 18.3591 12.3129C18.1477 12.2101 17.9083 12.1596 17.6667 12.1667H16.3333C15.9797 12.1667 15.6406 12.2897 15.3905 12.5084C15.1405 12.7272 15 13.024 15 13.3334C15 13.6428 15.1405 13.9396 15.3905 14.1584C15.6406 14.3772 15.9797 14.5001 16.3333 14.5001H17.6667C18.0203 14.5001 18.3594 14.623 18.6095 14.8418C18.8595 15.0606 19 15.3573 19 15.6667C19 15.9762 18.8595 16.2729 18.6095 16.4917C18.3594 16.7105 18.0203 16.8334 17.6667 16.8334H16.3333C16.0917 16.8405 15.8523 16.79 15.6409 16.6872C15.4296 16.5845 15.2541 16.4334 15.1333 16.2501"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 16.8333V18M17 11V12.1667V11Z"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
const IconPengeluaran = () => (
  <IconWrapper>
    <path
      d="M18.6667 10.5555H4.77778C3.24366 10.5555 2 11.7992 2 13.3333V21.6666C2 23.2008 3.24366 24.4444 4.77778 24.4444H18.6667C20.2008 24.4444 21.4445 23.2008 21.4445 21.6666V13.3333C21.4445 11.7992 20.2008 10.5555 18.6667 10.5555Z"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3112 15.7499C13.1904 15.5666 13.015 15.4155 12.8036 15.3128C12.5922 15.21 12.3529 15.1595 12.1112 15.1666H10.7779C10.4242 15.1666 10.0851 15.2895 9.83504 15.5083C9.585 15.7271 9.44452 16.0239 9.44452 16.3333C9.44452 16.6427 9.585 16.9394 9.83504 17.1582C10.0851 17.377 10.4242 17.4999 10.7779 17.4999H12.1112C12.4648 17.4999 12.8039 17.6229 13.054 17.8417C13.304 18.0605 13.4445 18.3572 13.4445 18.6666C13.4445 18.976 13.304 19.2728 13.054 19.4916C12.8039 19.7104 12.4648 19.8333 12.1112 19.8333H10.7779C10.5362 19.8404 10.2968 19.7899 10.0855 19.6871C9.87409 19.5844 9.69862 19.4333 9.57785 19.2499"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.4445 19.8332V20.9999M11.4445 13.9999V15.1666V13.9999Z"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9618 7.11349L11.9618 1.35957"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.44445 3.63724L12.0817 1.00002"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7189 3.63724L12.0817 1.00002"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const Icon = {
  Dashboard: DashboardIcon,
  Pelanggan: PelangganIcon,
  Airku: AirkuIcon,
  Tagihan: TagihanIcon,
  Message: MessageIcon,
  Laporan: LaporanIcon,
  Setting: SettingIcon,
  Logout: LogoutIcon,
  Info: InfoIcon,
  Pemasukan: IconPemasukan,
  Pengeluaran: IconPengeluaran,
};
IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
