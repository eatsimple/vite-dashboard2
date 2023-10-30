import React from 'react';
import DashboardStatsGrid from '../chart/DashboardStatsGrid';
import LineChart from '../chart/LineChart';
import BarChart from '../chart/BarChart';
import PieChart from '../chart/PieChart';

const Dashboard = () => {
  return (
    <div className=" space-y-9">
      <div>
        <DashboardStatsGrid />
      </div>
      <hr className=" border" />
      <div>
        <LineChart />
      </div>
      <hr className=" border" />

      <div>
        <BarChart />
      </div>
      <hr className=" border" />
      <div>
        <PieChart />
      </div>
      <hr />
    </div>
  );
};

export default Dashboard;
