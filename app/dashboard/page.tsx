import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your dashboard page'
};

const DashboardPage = () => (
  <main className="bg-zinc-950 text-white p-4 min-h-screen">
    <header className="mb-8">
      <h1 className="text-3xl font-bold">대시보드</h1>
      {/* Filter options could go here */}
    </header>

    <section className="grid gap-8 max-w-3xl mx-auto">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2>판매량</h2>
        <img src="https://dummyimage.com/600x400/000/fff" alt="Sales Data" />
        {/* Placeholder for sales graph */}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2>방문자 수</h2>
        <p>{/* Placeholder for visitor count */}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2>전환율</h2>
        <p>{/* Placeholder for conversion rate */}%</p>
      </div>
    </section>

    <footer className="mt-8 text-center">
      © 2023 Your Company. All rights reserved.
    </footer>
  </main>
);

export default DashboardPage;