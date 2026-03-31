import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the Home Page',
};

const HomePage = () => {
  return (
    <main className="bg-zinc-950 text-white p-4 min-h-screen">
      <section className="max-w-3xl mx-auto py-16">
        <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
        <p className="mt-2">This is the hero section with a call-to-action button.</p>
      </section>

      <section className="max-w-3xl mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Product Introduction</h2>
        <img src="https://dummyimage.com/600x400/000/fff" alt="Product Image" />
        <p>This is a brief description of our product.</p>
      </section>

      <section className="max-w-3xl mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <table>
          <thead>
            <tr>
              <th>Feature 1</th>
              <th>Feature 2</th>
              <th>Feature 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Detail 1</td>
              <td>Detail 2</td>
              <td>Detail 3</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="max-w-3xl mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Customer Reviews</h2>
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-zinc-800 p-4 rounded-lg flex items-center space-x-4">
              <img src="https://dummyimage.com/50x50/000/fff" alt="Customer Image" />
              <p>This is a customer review.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Call to Action</h2>
        <Link href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          Get Started Now
        </Link>
      </section>
    </main>
  );
};

export default HomePage;