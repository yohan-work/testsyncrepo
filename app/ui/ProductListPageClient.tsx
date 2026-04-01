"use client";

import React from 'react';

interface Props {
  data: { id: number, name: string, image: string, price: string }[];
}

const ProductListPageClient = ({ data }: Props) => {
  return (
    <table className="w-full border-collapse border-zinc-800">
      <thead>
        <tr>
          <th className="border px-4 py-2">Product Name</th>
          <th className="border px-4 py-2">Image</th>
          <th className="border px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">
              <img src={item.image} alt={`Product ${item.id}`} width={100} height={100} />
            </td>
            <td className="border px-4 py-2">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductListPageClient;