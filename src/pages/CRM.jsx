import React from 'react';
import Kontak from '../chart/Kontak-CRM';
import Customer from '../chart/Customer-CRM';

const CRM = () => {
  return (
    <div className=' space-y-6'>
      <Kontak />
      <Customer />
    </div>
  );
};

export default CRM;
