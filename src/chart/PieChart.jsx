import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  // Data untuk grafik pie (contoh data)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2], // Data untuk sektor-sektor pie
        backgroundColor: ['red', 'blue', 'green', 'orange', 'purple'], // Warna latar belakang setiap sektor
      },
    ],
  };

  // Konfigurasi grafik
  const options = {
    // Beberapa konfigurasi opsional dapat ditambahkan di sini
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
