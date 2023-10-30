import React from 'react';

const Inbox = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Kotak Masuk</h1>
      <div className="mb-4">
        <div className="bg-blue-500 text-white p-2 rounded-md">
          <h2 className="text-lg font-semibold">Pesan Baru</h2>
          <p className="text-sm">Anda memiliki 3 pesan baru.</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Pesan Terakhir</h2>
        <ul className="mt-2">
          <li className="flex items-start mb-2">
            <div className="bg-blue-200 text-blue-700 p-2 rounded-md">
              <span class="text-xl">1</span>
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold">Judul Pesan 1</h3>
              <p className="text-sm">Pesan singkat mengenai topik tertentu.</p>
            </div>
          </li>
          <li className="flex items-start mb-2">
            <div className="bg-blue-200 text-blue-700 p-2 rounded-md">
              <span class="text-xl">2</span>
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold">Judul Pesan 2</h3>
              <p className="text-sm">Pesan singkat mengenai topik lainnya.</p>
            </div>
          </li>
          <li className="flex items-start mb-2">
            <div className="bg-blue-200 text-blue-700 p-2 rounded-md">
              <span class="text-xl">3</span>
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold">Judul Pesan 3</h3>
              <p className="text-sm">Pesan singkat mengenai topik yang berbeda.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <a href="/inbox" className="text-blue-500 hover:underline">Lihat Semua Pesan</a>
      </div>
    </div>
  );
};

export default Inbox;
