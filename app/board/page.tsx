'use client';

import React from 'react';
import { useState } from 'react';

const data = [
  { id: 1, title: '게시판 A', description: '첫 번째 게시판 설명', created_at: '2024-01-01' },
  { id: 2, title: '게시판 B', description: '두 번째 게시판 설명', created_at: '2024-01-02' },
  { id: 3, title: '게시판 C', description: '세 번째 게시판 설명', created_at: '2024-01-03' },
];

const BoardListPage = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-col flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50">게시판 목록</h1>
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
        >
          {showAll ? '전체보기 숨기기' : '전체'}
        </button>
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border-collapse">
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-950 dark:text-zinc-200">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-950 dark:text-zinc-200">
                  제목
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-950 dark:text-zinc-200">
                  설명
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-950 dark:text-zinc-200">
                  생성일시
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-200 dark:bg-zinc-800 dark:divide-zinc-700">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-zinc-950 dark:text-zinc-200">{item.id}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-zinc-950 dark:text-zinc-200">{item.title}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-zinc-950 dark:text-zinc-200">{item.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BoardListPage;