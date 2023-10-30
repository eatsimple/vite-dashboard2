import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // Data untuk grafik batang (contoh data)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Penjualan',
        data: [12, 19, 3, 5, 2, 3], // Data untuk sumbu Y (jumlah penjualan)
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Warna latar belakang batang
        borderColor: 'rgba(75, 192, 192, 1)', // Warna border batang
        borderWidth: 1, // Ketebalan border
      },
    ],
  };

  // Konfigurasi grafik
  const options = {
    scales: {
      y: {
        beginAtZero: true, // Memulai sumbu Y dari 0
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
