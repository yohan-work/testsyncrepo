"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function LandingPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-fuchsia-50 min-h-screen flex flex-col justify-between">
      <header className="bg-fuchsia-50 text-center py-8">
        <h1 className="text-4xl font-bold">Introduction to TestSync</h1>
        <Image src="/logo.png" alt="TestSync Logo" width={100} height={100} />
        <p className="text-gray-700">Welcome to TestSync</p>
      </header>

      <main className="flex-1 flex justify-around px-4">
        <section className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <div className="flex justify-between gap-4">
            <div>
              <Image src="/feature1.png" alt="Feature 1" width={150} height={150} />
              <p className="text-gray-700">Feature 1 Description</p>
            </div>
            <div>
              <Image src="/feature2.png" alt="Feature 2" width={150} height={150} />
              <p className="text-gray-700">Feature 2 Description</p>
            </div>
            <div>
              <Image src="/feature3.png" alt="Feature 3" width={150} height={150} />
              <p className="text-gray-700">Feature 3 Description</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-fuchsia-50 text-center py-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>Email: contact@testsync.com</p>
        <p>Phone: +1 123 456 7890</p>
        <p className="text-gray-700">© 2024 TestSync. All Rights Reserved.</p>
      </footer>
    </div>
  );
}