'use client';

import { useState, useEffect } from 'react';

const DashboardConversionRateWidget = () => {
  const [conversionRate, setConversionRate] = useState(50);

  useEffect(() => {
    // Mock data fetching logic
    setConversionRate(50);
  }, []);

  return (
    <div className="p-4 bg-zinc-800 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Conversion Rate</h2>
      <p>Conversion Rate: {conversionRate}%</p>
      <p>This is a brief description of conversion rate.</p>
    </div>
  );
};

export default DashboardConversionRateWidget;