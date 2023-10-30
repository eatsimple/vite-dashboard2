import React from 'react';

const Sales = () => {
  const tableData = [
    {
      id: 1,
      name: 'Product 1',
      hp: '0898-8491-8184',
      alamat: 'Jl. Cirata',
    },
    {
      id: 2,
      name: 'Product 2',
      hp: '0898-8491-8184',
      alamat: 'Jl. Cirata',
    },
    {
      id: 3,
      name: 'Product 3',
      hp: '0898-8491-8184',
      alamat: 'Jl. Cirata',
    },
    // Tambahkan lebih banyak data produk jika diperlukan
  ];

  return (
    <div className="bg-white h-screen">
      <table className="min-w-full border bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-blue-500">No.</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Nama Sales</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">No. Handphone</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Alamat</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((row, index) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-normal max-w-[150px]">{index + 1}</td>
              <td className="px-6 py-4 whitespace-normal max-w-[150px]">{row.name}</td>
              <td className="px-6 py-4 whitespace-normal max-w-[150px]">{row.hp}</td>
              <td className="px-6 py-4 whitespace-normal max-w-[150px]">{row.alamat}</td>
              <td className=" flex space-x-2 my-6">
                <button className=" bg-green-400 px-4 py-1 rounded-md text-white">Edit</button>
                <button className=" bg-red-600 px-4 py-1 rounded-md text-white ">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
