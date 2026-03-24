"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock data for dashboard widgets
const mockSalesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 2000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
];

const mockCustomerData = [
  { type: 'Total', count: 1250 },
  { type: 'New', count: 320 },
  { type: 'Churned', count: 180 },
];

const mockRevenueData = [
  { month: 'Jan', revenue: 40000 },
  { month: 'Feb', revenue: 35000 },
  { month: 'Mar', revenue: 30000 },
  { month: 'Apr', revenue: 32000 },
  { month: 'May', revenue: 28000 },
  { month: 'Jun', revenue: 31000 },
];

const mockProductData = [
  { product: 'Product A', sales: 400 },
  { product: 'Product B', sales: 300 },
  { product: 'Product C', sales: 200 },
  { product: 'Product D', sales: 150 },
  { product: 'Product E', sales: 100 },
];

// Simple chart components
const LineChart = ({ data }: { data: { month: string; sales: number }[] }) => (
  <div className="h-64 flex items-end justify-between p-4 border rounded-lg">
    {data.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <div 
          className="w-8 bg-blue-500 rounded-t"
          style={{ height: `${(item.sales / 4000) * 100}%` }}
        ></div>
        <span className="text-xs mt-2">{item.month}</span>
      </div>
    ))}
  </div>
);

const BarChart = ({ data }: { data: { type: string; count: number }[] }) => (
  <div className="h-64 flex items-end justify-between p-4 border rounded-lg">
    {data.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <div 
          className="w-8 bg-green-500 rounded-t"
          style={{ height: `${(item.count / 1250) * 100}%` }}
        ></div>
        <span className="text-xs mt-2">{item.type}</span>
      </div>
    ))}
  </div>
);

const ProductBarChart = ({ data }: { data: { product: string; sales: number }[] }) => (
  <div className="h-64 flex items-end justify-between p-4 border rounded-lg">
    {data.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <div 
          className="w-8 bg-purple-500 rounded-t"
          style={{ height: `${(item.sales / 400) * 100}%` }}
        ></div>
        <span className="text-xs mt-2">{item.product}</span>
      </div>
    ))}
  </div>
);

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="mb-6 flex items-center gap-4">
        <div className="flex-1">
          <Label htmlFor="filter" className="mb-2 block">Filter by date</Label>
          <Input 
            id="filter" 
            placeholder="Select date range" 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <Button className="mt-6">Apply Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Sales Volume</h2>
          <LineChart data={mockSalesData} />
          <p className="mt-4 text-gray-600">Total sales for the last 3 months</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Customer Statistics</h2>
          <BarChart data={mockCustomerData} />
          <p className="mt-4 text-gray-600">Total customers, new and churned</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <LineChart data={mockRevenueData} />
          <p className="mt-4 text-gray-600">Monthly revenue trend</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Top Products</h2>
          <ProductBarChart data={mockProductData} />
          <p className="mt-4 text-gray-600">Top 5 products by sales</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;