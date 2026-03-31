'use client';

import { useState, useEffect } from 'react';

const DashboardSalesWidget = () => {
  const [salesData, setSalesData] = useState([[100], [200], [300]]);

  useEffect(() => {
    // Mock data fetching logic
    setSalesData([[100], [200], [300]]);
  }, []);

  return (
    <div className="p-4 bg-zinc-800 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Sales</h2>
      <table className="w-full border-collapse table-fixed">
        <thead className="bg-zinc-700">
          <tr>
            <th className="border p-4 text-left">Date</th>
            <th className="border p-4 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((data, index) => (
            <tr key={index}>
              <td className="border p-4">{`Day ${index + 1}`}</td>
              <td className="border p-4">${data[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardSalesWidget;