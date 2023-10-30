import React from 'react';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import Pdf from './Pdf';

const tableData = [
  {
    id: 1,
    name: 'Vendor 1',
    phoneNumber: '123-456-7890',
    email: 'vendor1@example.com',
    address: 'Jl. Sukajati No. 92 RT 02/09 Siliwangi Cicadas Jakarta Timur 40128',
  },
  {
    id: 2,
    name: 'Vendor 2',
    phoneNumber: '987-654-3210',
    email: 'vendor2@example.com',
    address: '456 Elm St, Town',
  },
  {
    id: 3,
    name: 'Vendor 3',
    phoneNumber: '555-555-5555',
    email: 'vendor3@example.com',
    address: '789 Oak Rd, Village',
  },
  {
    id: 4,
    name: 'Vendor 4',
    phoneNumber: '111-222-3333',
    email: 'vendor4@example.com',
    address: '456 Pine St, Town',
  },
  {
    id: 5,
    name: 'Vendor 5',
    phoneNumber: '999-888-7777',
    email: 'vendor5@example.com',
    address: '100 Elm St, City',
  },
  {
    id: 6,
    name: 'Vendor 6',
    phoneNumber: '333-444-5555',
    email: 'vendor6@example.com',
    address: '555 Cedar Rd, Village',
  },
  {
    id: 7,
    name: 'Vendor 7',
    phoneNumber: '777-888-9999',
    email: 'vendor7@example.com',
    address: '222 Oak St, Town',
  },
  {
    id: 8,
    name: 'Vendor 8',
    phoneNumber: '555-444-3333',
    email: 'vendor8@example.com',
    address: '333 Maple Rd, City',
  },
  {
    id: 9,
    name: 'Vendor 9',
    phoneNumber: '123-987-6543',
    email: 'vendor9@example.com',
    address: '789 Birch St, Village',
  },
  {
    id: 10,
    name: 'Vendor 10',
    phoneNumber: '555-666-7777',
    email: 'vendor10@example.com',
    address: '999 Oak Rd, Town',
  },
];

const itemsPerPage = 5; // Jumlah item per halaman

const TableVendor = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage; //* offset 0 (1-10)
  const pageCount = Math.ceil(tableData.length / itemsPerPage);

  const displayedData = tableData.slice(offset, offset + itemsPerPage).map((row, index) => (
    <tr key={row.id} className=" border-b">
      <td className="  text-center px-6 py-4 whitespace-normal max-w-[150px]">{index + 1}</td>
      <td className="  text-center px-6 py-4 whitespace-normal max-w-[150px]">{row.name}</td>
      <td className="  text-center px-6 py-4 whitespace-normal max-w-[150px]">{row.phoneNumber}</td>
      <td className="  text-center px-6 py-4 whitespace-normal max-w-[150px]">{row.email}</td>
      <td className="  text-center px-6 py-4 whitespace-normal max-w-[150px]">{row.address}</td>
      <td className=" flex items-center space-x-2 my-6">
        <button className=" bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md text-white">Edit</button>
        <button className=" bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-white ">Delete</button>
      </td>
    </tr>
  ));

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className=" bg-white h-screen space-y-10 w-full overflow-x-auto">
      <table className="w-full border bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider border bg-blue-500">No.</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Nama Vendor</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">No. Telp</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Email</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Alamat</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider border bg-green-500">Tindakan</th>
          </tr>
        </thead>
        <tbody>{displayedData}</tbody>
      </table>

      <div className=" ">
        <ReactPaginate
          className=" flex flex-row justify-center space-x-5"
          previousLabel={'<< Previous'}
          nextLabel={'Next >>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'flex justify-center items-center my-10'}
          subContainerClassName={'space-x-2'}
          pageClassName={'cursor-pointer text-blue-500 hover:text-blue-700 transition duration-300  w-8 h-8 flex items-center justify-center'}
          activeClassName={' text-black bg-blue-500 w-8 h-8 flex items-center justify-center'}
          previousClassName={'mr-2 text-blue-500 hover:text-blue-700 transition duration-300'}
          nextClassName={'ml-2 text-blue-500 hover:text-blue-700 transition duration-300'}
          disabledClassName={' cursor-not-allowed'}
        />
      </div>

      <div>
        <Pdf />
      </div>
    </div>
  );
};

export default TableVendor;
