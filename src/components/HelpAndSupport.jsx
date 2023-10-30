import React from 'react';

const HelpAndSupport = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Bantuan & Dukungan</h1>
      <div className="mb-4">
        <p className="text-gray-700">
          Jika Anda memerlukan bantuan atau dukungan, silakan hubungi tim dukungan kami melalui salah satu opsi di bawah ini:
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Hubungi Kami:</h2>
        <ul className="list-disc pl-6">
          <li>Email: support@example.com</li>
          <li>Nomor Telepon: 123-456-7890</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Jam Operasional:</h2>
        <p className="text-gray-700">Senin - Jumat: 9:00 AM - 5:00 PM</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Pusat Bantuan Online:</h2>
        <a
          href="https://support.example.com"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kunjungi Pusat Bantuan Online Kami
        </a>
      </div>
    </div>
  );
};

export default HelpAndSupport;
