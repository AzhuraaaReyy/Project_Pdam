import React, { useState, useEffect } from "react";
import Card from "../../elements/card";
const TagihanPDAM = () => {
  const TARIF_PER_BULAN = 5000; // Rp 5.000,00 per bulan

  // Mendapatkan bulan dan tahun saat ini
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // Bulan (1-12)
  const currentYear = today.getFullYear();

  // Mengambil data dari localStorage jika ada
  const getStoredTagihan = () => {
    const storedData = JSON.parse(localStorage.getItem("tagihanPDAM"));
    return storedData || { bulan: currentMonth, tahun: currentYear, total: 0 };
  };

  const [tagihan, setTagihan] = useState(getStoredTagihan);

  useEffect(() => {
    const storedData = getStoredTagihan();

    // Jika bulan atau tahun sudah berubah, tambahkan tagihan baru
    if (storedData.bulan !== currentMonth || storedData.tahun !== currentYear) {
      const newTotal = storedData.total + TARIF_PER_BULAN;
      const updatedTagihan = {
        bulan: currentMonth,
        tahun: currentYear,
        total: newTotal,
      };

      setTagihan(updatedTagihan);
      localStorage.setItem("tagihanPDAM", JSON.stringify(updatedTagihan));
    }
  }, [currentMonth, currentYear]);

  // Fungsi untuk "membayar" dan reset tagihan
  const bayarTagihan = () => {
    const updatedTagihan = {
      bulan: currentMonth,
      tahun: currentYear,
      total: 0,
    };
    setTagihan(updatedTagihan);
    localStorage.setItem("tagihanPDAM", JSON.stringify(updatedTagihan));
    alert("Tagihan telah dibayar!");
  };

  return (
    <Card
      variant=""
      title="Total Pemasukan"
      desc={
        <div className="p-5 bg-white shadow-md rounded-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Tagihan PDAM
          </h2>

          {/* Menampilkan total tagihan */}
          <div className="mt-4 p-3 bg-blue-100 border rounded-md">
            <p className="text-lg font-medium text-blue-800">
              Total yang harus dibayar:
            </p>
            <p className="text-2xl font-bold text-red-600">
              Rp {tagihan.total.toLocaleString("id-ID")},00
            </p>
            <p className="text-gray-600 text-sm">
              Periode: {tagihan.bulan}/{tagihan.tahun}
            </p>
          </div>

          {/* Tombol untuk membayar */}
          {/*
      <button
        onClick={bayarTagihan}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 w-full"
      >
        Bayar Sekarang
      </button>
      */}
        </div>
      }
    />
  );
};

export default TagihanPDAM;
