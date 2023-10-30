import React from 'react';

const Neraca = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Neraca</h2>
      {/* Tabel Neraca */}
      <table className="w-full border bg-white">
        {/* Header Tabel */}
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-blue-500">Aset</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Kewajiban</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Ekuitas Pemilik</th>
          </tr>
        </thead>
        {/* Data Tabel */}
        <tbody>
          <tr>
            <td>$100,000</td>
            <td>$50,000</td>
            <td>$50,000</td>
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

export default Neraca;
