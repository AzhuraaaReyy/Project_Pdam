const Logo = (props) => {
  const { variant = "text-primary text-4xl" } = props;

  return (
    <div className="flex items-center justify-center text-center text-[#1e90ff]">
      <div>
        <span className="font-bold block mb-3">Selamat Datang di</span>
        <span className="font-bold block text-4xl">APLIKASI PDAM</span>
      </div>
    </div>
  );
};

export default Logo;
