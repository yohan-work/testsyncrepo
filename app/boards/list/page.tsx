"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "게시판 리스트",
  description: "전체 게시판 목록을 보여주는 페이지",
};

interface Board {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

const BoardListPage = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await fetch(`/api/boards?page=${currentPage}`);
        if (!response.ok) {
          throw new Error("Failed to fetch boards");
        }
        const data = await response.json();
        setBoards(data.boards);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    fetchBoards();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">게시판 리스트</h1>
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="border-b border-gray-200 p-2">
            <Link href={`/boards/${board.id}`}>
              <h2 className="font-bold">{board.title}</h2>
              <p>작성자: {board.author}</p>
              <p>작성일: {board.date}</p>
              <p>조회수: {board.views}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2 py-1 mx-1 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoardListPage;