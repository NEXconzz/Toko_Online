'use state'

import { GetBarang } from "@/service/barang";
import React from "react";
import { FormBarang } from "./formbarang";
import ViewImage from "./viewImage";
import Modal from "@/components/modal";
import { FormEditBarang } from "./editbarang";
import { HapusBarangButton } from "./dropbarang";


const BarangPage = async () => {
  const { data, status } = await GetBarang()
  console.log(data);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Admin Barang</h1>
      <p className="text-black mb-2">Welcome to the admin barang page.</p>
      <FormBarang />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {data && data.map((barang) => (
          <div key={barang.id} className="border border-black text-black rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold">{barang.nama_barang}</h2>
            <p> Deskripsi: {barang.deskripsi}</p>
            <p> Harga: Rp {barang.harga}</p>
            <p> Stok: {barang.stok}</p>

            <ViewImage
              label="View Image"
              imageUrl={barang.image}
              nama={barang.nama_barang}
              className="bg-green-400 text-white cursor-pointer hover:bg-green-600 px-2 py-1 rounded"
            />

            <FormEditBarang
              id={barang.id}
              nama_barang={barang.nama_barang}
              deskripsi={barang.deskripsi}
              harga={barang.harga}
              stok={barang.stok}
            />

            <HapusBarangButton billId={barang.id} />

          </div>
        ))}
      </div>

    </div>
  )
}

export default BarangPage;

// teko pak bidin se

/*import { GetBarang } from "@/servisces/barang";

const BarangPage = async () => {
    const { data } = await GetBarang();
    console.log(data);
    return (
        <div>
            <h1>kelolah Barang</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nama Barang</th>
                        <th>Harga</th>
                        <th>Stok</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nama_barang}</td>
                                <td>{item.harga}</td>
                                <td>{item.stok}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Hapus</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default BarangPage;*/
/*<div className="flex justify-center">
  <img
    className="w-full object-cover rounded-lg"
    src={
      image
       ? 'Url seng neng env/${image}'
        : '/img/Ranok_image.png' 
    }
    alt={nama}
  />
</div>
  />
<div/>*/