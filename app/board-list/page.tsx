'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const BoardList = () => {
  const [boards, setBoards] = useState<{ id: string; title: string; description: string; createdAt: Date }[]>([]);

  useEffect(() => {
    // Mock data instead of fetching from a real API
    const mockData = [
      { id: '1', title: 'Board Title 1', description: 'Description for board 1', createdAt: new Date('2023-04-01T00:00:00') },
      { id: '2', title: 'Board Title 2', description: 'Description for board 2', createdAt: new Date('2023-04-02T00:00:00') },
      { id: '3', title: 'Board Title 3', description: 'Description for board 3', createdAt: new Date('2023-04-03T00:00:00') }
    ];

    setBoards(mockData);
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-bold mb-4">Board List</h1>
      <Table className="border-collapse border-spacing-y-4 w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="border px-4 py-2">제목</TableHead>
            <TableHead className="border px-4 py-2">설명</TableHead>
            <TableHead className="border px-4 py-2">생성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {boards.map((board) => (
            <TableRow key={board.id}>
              <TableCell className="font-medium border px-4 py-2">
                <Link href={`/board/${board.id}`}>
                  {board.title}
                </Link>
              </TableCell>
              <TableCell className="border px-4 py-2">{board.description}</TableCell>
              <TableCell className="border px-4 py-2">{Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(board.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BoardList;