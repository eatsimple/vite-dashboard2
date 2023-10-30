import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyPDF from '../components/MyPDF';

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

const Pdf = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div>
      {showPDF ? (
        <div>
          <button onClick={() => setShowPDF(false)} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
            Tutup PDF
          </button>
          <PDFDownloadLink
            document={<MyPDF tableData={tableData} />}
            fileName="contoh.pdf"
            style={{
              textDecoration: 'none',
              padding: '10px',
              color: '#fff',
              backgroundColor: '#007acc',
              border: '1px solid #fff',
              borderRadius: '5px',
              display: 'block',
              width: '100px',
              margin: '20px auto',
              textAlign: 'center',
            }}
          >
            {({ blob, url, loading, error }) => (loading ? 'Loading dokumen...' : 'Unduh Dokumen')}
          </PDFDownloadLink>
        </div>
      ) : (
        <button onClick={() => setShowPDF(true)} className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
          Buka PDF
        </button>
      )}
    </div>
  );
};

export default Pdf;
