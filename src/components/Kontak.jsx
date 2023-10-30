import React from 'react';

const Kontak = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Kontak</h2>
      {/* Tabel Kontak */}
      <table className="min-w-full border bg-white">
        {/* Header Tabel */}
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-blue-500">Nama</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Email</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">No. Telepon</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Alamat</th>
          </tr>
        </thead>
        {/* Data Tabel */}
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>(123) 456-7890</td>
            <td>123 Main St, City</td>
            <td className=" flex space-x-2 my-6">
              <button className=" bg-green-400 px-4 py-1 rounded-md text-white">Edit</button>
              <button className=" bg-red-600 px-4 py-1 rounded-md text-white ">Delete</button>
            </td>
          </tr>
          {/* Tambahkan lebih banyak data kontak jika diperlukan */}
        </tbody>
      </table>
    </div>
  );
};

export default Kontak;
