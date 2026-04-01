// @ts-nocheck
"use client";

import { useState } from "react";
import Link from 'next/link';
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Input } from '@/components/ui/input';

const data = [
  { id: 1, name: '상품명 1', price: 10000, quantity: 10, description: '상세 설명 1' },
  { id: 2, name: '상품명 2', price: 20000, quantity: 5, description: '상세 설명 2' }
];

const Button = ({ children, type, fullWidth, variant }) => {
  return (
    <button
      type={type}
      className={`bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded ${
        fullWidth ? 'w-full' : ''
      } ${variant ? `border border-${variant}` : ''}`}
    >
      {children}
    </button>
  );
};

const ProductDetailPage = () => {
  const [loading, setLoading] = useState(false);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      // Mock data fetching
      // const response = await fetch('/api/product');
      // const productData = await response.json();
      // setData(productData);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">상품 상세 정보</h1>
      {loading ? (
        <div>로딩 중...</div>
      ) : (
        <Table border="1" width="100%">
          <TableHeader>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>가격</TableCell>
              <TableCell>재고수량</TableCell>
              <TableCell>상세 설명</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell border="1">{item.id}</TableCell>
                <TableCell border="1">{item.name}</TableCell>
                <TableCell border="1">{item.price.toLocaleString()}</TableCell>
                <TableCell border="1">{item.quantity}</TableCell>
                <TableCell border="1">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Link href="#" onClick={fetchProductData} disabled={loading}>
        데이터 가져오기
      </Link>
    </div>
  );
};

export default ProductDetailPage;