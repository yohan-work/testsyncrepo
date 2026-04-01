'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const data = [
  { id: 1, product: '상품 A', sales: 100, date: '2024-01-01' },
  { id: 2, product: '상품 B', sales: 50, date: '2024-01-01' },
];

const DashboardPage = () => {
  const [searchParams, setSearchParams] = useState(new URLSearchParams());

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* 상단 요약 섹션 */}
      <section>
        <h2>주요 지표</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-zinc-800 text-white p-4 rounded">
            총 매출: $1500
          </div>
          <div className="bg-zinc-800 text-white p-4 rounded">
            방문자 수: 200
          </div>
          <div className="bg-zinc-800 text-white p-4 rounded">
            사용자 수: 150
          </div>
        </div>
      </section>

      {/* 그래프 섹션 */}
      <section>
        <h2>매출 추세</h2>
        {/* Placeholder for chart component */}
        <canvas className="w-full h-64 bg-zinc-900"></canvas>
      </section>

      {/* 테이블 섹션 */}
      <section>
        <h2>상품별 판매량</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>상품</th>
              <th>판매</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.sales}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 내용 텍스트 섹션 */}
      <section>
        <h2>최근 뉴스 및 알림</h2>
        <div className="bg-zinc-800 text-white p-4 rounded">
          <p>새로운 기능 출시 예정!</p>
          <p>이벤트 참가 안내 등</p>
        </div>
      </section>

      {/* 검색 및 필터 섹션 */}
      <section className="flex gap-2">
        <Label htmlFor="search">검색:</Label>
        <Input id="search" placeholder="상품명 또는 날짜" />
        <Button type="button" onClick={() => setSearchParams(searchParams)}>검색</Button>
      </section>
    </div>
  );
};

export default DashboardPage;