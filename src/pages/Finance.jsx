import React from 'react';
import Neraca from '../chart/Neraca';
import LabaRugi from '../chart/LabaRugi';
import ArusKas from '../chart/ArusKas';
import DashboardStatsGrid from '../chart/DashboardStatsGrid';

const Finance = () => {
  return (
    <div className="">
      <div className=" space-y-6">
        <DashboardStatsGrid />
      </div>
      <div className=" space-y-6 mt-6">
        <Neraca />
        <LabaRugi />
        <ArusKas />
      </div>
    </div>
  );
};

export default Finance;
