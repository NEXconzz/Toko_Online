'use client'

import Modal from '@/components/modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { TambahBarang } from '@/service/barang';

export const FormBarang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama_barang, setNamaBarang] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [harga, setHarga] = useState(0);
  const [stok, setStok] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi dulu sebelum request
    if (!image) {
      toast("Please select a file", {
        hideProgressBar: true, containerId: 'UploudImage',
        type: "error", autoClose: 3000
      });
      return;
    }

    const formData = new FormData();
    formData.append('nama_barang', nama_barang);
    formData.append('deskripsi', deskripsi);
    formData.append('harga', harga.toString());
    formData.append('stok', stok.toString());
    formData.append('image', image);

    const response = await TambahBarang(formData);
    console.log(response);
    if (response.status) {
      toast("Barang berhasil ditambahkan", {
        hideProgressBar: true, containerId: 'UploudImage',
        type: "success", autoClose: 3000
      });
      setIsOpen(false);
      router.refresh();
    } else {
      toast("Gagal menambahkan barang", {
        hideProgressBar: true, containerId: 'UploudImage',
        type: "error", autoClose: 3000
      });
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-200"
      >
        Tambah Lek
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Form Barang">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="nama_barang" className="text-sm font-medium text-slate-700">
              Nama Barang
            </label>
            <input
              type="text"
              id="nama_barang"
              name="nama_barang"
              value={nama_barang}
              onChange={(e) => setNamaBarang(e.target.value)}
              className="border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="deskripsi" className="text-sm font-medium text-slate-700">
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="border border-gray-300 rounded-xl py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-2">
              <label htmlFor="harga" className="text-sm font-medium text-slate-700">
                Harga
              </label>
              <input
                type="number"
                id="harga"
                name="harga"
                value={harga}
                onChange={(e) => setHarga(Number(e.target.value))}
                className="border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="stok" className="text-sm font-medium text-slate-700">
                Stok
              </label>
              <input
                type="number"
                id="stok"
                name="stok"
                value={stok}
                onChange={(e) => setStok(Number(e.target.value))}
                className="border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="image" className="text-sm font-medium text-slate-700">
              Gambar
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-5 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition duration-200"
          >
            Simpan
          </button>
        </form>
      </Modal>
    </div>
  )
}


/*  
return (
    <div>
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Tambah Lek
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Form Barang">
        <h1>Form Barang</h1>
        <form>
          <div>
            <label htmlFor="nama_barang">Nama Barang:</label>
            <input
              type='text'
              id="nama_barang"
              name="nama_barang"
              value={namaBarang}
              onChange={(e) => setNamaBarang(e.target.value)}
              className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor="deskripsi">Deskripsi:</label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor="harga">Harga:</label>
            <input
              type="number"
              id="harga"
              name="harga"
              value={harga}
              onChange={(e) => setHarga(Number(e.target.value))}
              className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor="stok">Stok:</label>
            <input
              type="number"
              id="stok"
              name="stok"
              value={stok}
              onChange={(e) => setStok(Number(e.target.value))}
              className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor="image">Gambar:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.files ? e.target.files[0].name : '')}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
            Simpan
          </button>
          */