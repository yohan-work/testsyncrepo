'use client';

import { useState, useEffect } from 'react';

const DashboardVisitorsWidget = () => {
  const [visitorsData, setVisitorsData] = useState([100, 150, 200]);

  useEffect(() => {
    // Mock data fetching logic
    setVisitorsData([100, 150, 200]);
  }, []);

  return (
    <div className="p-4 bg-zinc-800 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Visitors</h2>
      <ul>
        {visitorsData.map((value, index) => (
          <li key={index} className="border-b p-4">
            <strong>Day {index + 1}</strong>: {value.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardVisitorsWidget;