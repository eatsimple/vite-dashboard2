import React from 'react';

function WhatsApp() {
  const phoneNumber = 'PHONE_NUMBER'; // Ganti dengan nomor WhatsApp yang sesuai
  const message = 'Halo! Saya ingin menghubungi Anda.';

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 focus:outline-none"
      onClick={handleWhatsAppClick}
    >
      WhatsApp
    </button>
  );
}

export default WhatsApp;
