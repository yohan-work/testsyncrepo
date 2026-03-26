import Link from 'next/link';

const DummyDataGenerator = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Dummy Data Generator</h1>
      
      <nav className="mb-4">
        <Link href="/dummy-data-generator/mini-font" className="p-2 rounded-md border border-gray-300 mr-4 text-black">Mini Font Size</Link>
        <Link href="/dummy-data-generator/all-fonts" className="p-2 rounded-md border border-gray-300 text-black">All Font Sizes</Link>
      </nav>

      <main className="flex flex-col items-center justify-center">
        <div className="text-base mb-4 text-black">
          Mini Font Size: This is some dummy text to test the mini font size. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        
        <div className="text-lg text-black">
          All Font Sizes: This is some dummy text to test all font sizes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </main>
    </div>
  );
};

export default DummyDataGenerator;