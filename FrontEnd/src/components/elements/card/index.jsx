const Card = (props) => {
  const { title = false, desc, variant, children } = props;

  return (
    <div
      className={`flex flex-col flex-1 mb-6 ${variant}`}
      // Tambahkan ini
    >
      {title &&
        (title.length === 1 ? (
          <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">
            {title}
          </div>
        ) : (
          <div className="text-lg text-black mb-4 text-white">{title}</div>
        ))}
      <div className="bg-blue-500 rounded-lg px-6 py-5 shadow-xl flex-1">
        {desc}
      </div>
    </div>
  );
};

export default Card;
