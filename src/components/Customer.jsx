import React from 'react';

const Customer = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Pelanggan</h2>
      {/* Tabel Pelanggan */}
      <table className="min-w-full border bg-white">
        {/* Header Tabel */}
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-blue-500">Nama Pelanggan</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Perusahaan</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Email</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">No. Telepon</th>
          </tr>
        </thead>
        {/* Data Tabel */}
        <tbody>
          <tr>
            <td>Jane Smith</td>
            <td>ABC Inc.</td>
            <td>janesmith@abcinc.com</td>
            <td>(987) 654-3210</td>
            <td className=" flex space-x-2 my-6">
              <button className=" bg-green-400 px-4 py-1 rounded-md text-white">Edit</button>
              <button className=" bg-red-600 px-4 py-1 rounded-md text-white ">Delete</button>
            </td>
          </tr>
          {/* Tambahkan lebih banyak data pelanggan jika diperlukan */}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
