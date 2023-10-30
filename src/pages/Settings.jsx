import React from 'react';

const Settings = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Pengaturan Akun</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nama Pengguna</label>
        <input type="text" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200" placeholder="Masukkan nama pengguna Anda" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200" placeholder="Masukkan alamat email Anda" />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Kata Sandi</label>
        <input type="password" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200" placeholder="Masukkan kata sandi Anda" />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Konfirmasi Kata Sandi</label>
        <input type="password" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200" placeholder="Masukkan kata sandi Anda" />
      </div>
      <div className="text-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Simpan Perubahan</button>
      </div>
    </div>
  );
};

export default Settings;
