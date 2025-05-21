import React, { useState } from "react";
import Card from "../../elements/card";

const DaftarPelangganPDAM = () => {
  // Contoh data pelanggan
  const dummyPelanggan = [
    { id: 1, nama: "Ahmad", alamat: "Jl. Merpati No. 10" },
    { id: 2, nama: "Siti", alamat: "Jl. Kenari No. 5" },
    { id: 3, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    { id: 4, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    { id: 5, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    { id: 6, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    { id: 7, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    { id: 8, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    { id: 9, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    { id: 10, nama: "Budi", alamat: "Jl. Rajawali No. 8" },
    
  ];

  const [pelanggan] = useState(dummyPelanggan);

  return (
    <Card
      variant="w-full"
      title="Daftar Pelanggan"
      desc={
        <div className="overflow-y-auto max-h-[400px] mt-2">
          <table className="w-full text-sm text-left bg-white rounded overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Alamat</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {pelanggan.length > 0 ? (
                pelanggan.map((item, index) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.nama}</td>
                    <td className="px-4 py-2">{item.alamat}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-600">
                    Tidak ada data pelanggan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      }
    />
  );
};

export default DaftarPelangganPDAM;
