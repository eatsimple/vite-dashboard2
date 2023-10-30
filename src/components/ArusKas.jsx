import React from 'react';

const ArusKas = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Arus Kas</h2>
      {/* Tabel Arus Kas */}
      <table className="min-w-full border bg-white">
        {/* Header Tabel */}
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-blue-500">Pemasukan Bersih</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Pengeluaran Bersih</th>
          </tr>
        </thead>
        {/* Data Tabel */}
        <tbody>
          <tr>
            <td>$60,000</td>
            <td>$40,000</td>
            <td className=" flex space-x-2 my-6">
              <button className=" bg-green-400 px-4 py-1 rounded-md text-white">Edit</button>
              <button className=" bg-red-600 px-4 py-1 rounded-md text-white ">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ArusKas;
