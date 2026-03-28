"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BoardDetailPage() {
    const { boardId } = useParams();
    const [boardData, setBoardData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBoardData = async () => {
            try {
                const response = await fetch(`/api/boards/${boardId}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setBoardData(data);
            } catch (error) {
                console.error('Error fetching board data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBoardData();
    }, [boardId]);

    if (loading) return <div>Loading...</div>;

    if (!boardData) return <div>No board found.</div>;

    const { title, creationDate, author, content } = boardData;

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="mb-2">작성일: {creationDate.toLocaleDateString()}</p>
            <p>작성자: {author}</p>
            <pre>{content}</pre>

            <div className="mt-4">
                <Link href="/boards" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">이전 페이지</Link>
                <Link href="/boards" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">다음 페이지</Link>
            </div>
        </main>
    );
}