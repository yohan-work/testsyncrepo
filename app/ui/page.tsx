'use client';

import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const mockData: Product[] = [
  { id: 1, name: "Product 1", image: "https://dummyimage.com/400x300/000/fff", price: 19.99 },
  { id: 2, name: "Product 2", image: "https://dummyimage.com/400x300/000/fff", price: 29.99 },
  { id: 3, name: "Product 3", image: "https://dummyimage.com/400x300/000/fff", price: 15.99 },
  { id: 4, name: "Product 4", image: "https://dummyimage.com/400x300/000/fff", price: 25.99 },
  { id: 5, name: "Product 5", image: "https://dummyimage.com/400x300/000/fff", price: 18.99 },
  { id: 6, name: "Product 6", image: "https://dummyimage.com/400x300/000/fff", price: 22.99 }
];

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>(mockData);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Product List</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">
                  <Image src={product.image} alt={`Product ${product.id}`} width={100} height={100} />
                </td>
                <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ProductListPage;