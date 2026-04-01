import React from "react";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 300 },
];

const CartPage = () => {
  return (
    <div className="bg-zinc-950 p-8">
      <h1 className="text-white text-2xl mb-6">장바구니</h1>
      <table className="w-full border-collapse border border-zinc-700">
        <thead>
          <tr>
            <th className="border border-zinc-700 p-4 bg-zinc-800 text-white">제품 ID</th>
            <th className="border border-zinc-700 p-4 bg-zinc-800 text-white">제품 이름</th>
            <th className="border border-zinc-700 p-4 bg-zinc-800 text-white">가격</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-zinc-900">
              <td className="border border-zinc-700 p-4">{product.id}</td>
              <td className="border border-zinc-700 p-4">{product.name}</td>
              <td className="border border-zinc-700 p-4">{product.price.toLocaleString('en-US')}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;