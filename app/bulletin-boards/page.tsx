'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

//bulletin
interface BulletinBoard {
    id: string;
    title: string;
    createdAt: Date;
    views: number;
}

const fetchBoards = async (): Promise<BulletinBoard[]> => {
    const response = await fetch('/bulletin-boards.json');
    if (!response.ok) {
        throw new Error('Failed to fetch bulletin boards');
    }
    const data: BulletinBoard[] = await response.json();
    return data;
};

const dummyBoards: BulletinBoard[] = [
    {
        id: crypto.randomUUID(),
        title: '첫 번째 게시물',
        createdAt: new Date(),
        views: 100
    },
    {
        id: crypto.randomUUID(),
        title: '두 번째 게시물',
        createdAt: new Date(new Date().getTime() - 86400000), // one day ago
        views: 50
    }
];

const BulletinBoardList = ({ boards }: { boards: BulletinBoard[] }) => (
    <table className="w-full border-collapse">
        <thead>
            <tr>
                <th className="border p-4 font-bold">제목</th>
                <th className="border p-4 font-bold">작성일</th>
                <th className="border p-4 font-bold">조회수</th>
            </tr>
        </thead>
        <tbody>
            {boards.map((board) => (
                <tr key={board.id} className="hover:bg-lightgray">
                    <td className="border p-4">{board.title}</td>
                    <td className="border p-4">{Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(board.createdAt)}</td>
                    <td className="border p-4">{board.views}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const LoadingSpinner = () => (
    <div role="status">
        <svg
            aria-hidden="true"
            className="inline w-20 h-20 mr-3 text-gray-200 animate-spin dark:text-white fill-blue-600"
            viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5984C100 78.2051 77.6149 100 50 100C22.3851 100 0 77.6149 0 50.5984C0 22.3851 22.3851 0 50 0C77.6149 0 100 22.3851 100 50.5984ZM9.08144 50.5984C9.08144 73.1891 23.6036 90.4869 46.6507 90.4869C69.7007 90.4869 93.2228 73.1891 93.2228 50.5984C93.2228 27.9974 69.7007 10.6996 46.6507 10.6996C23.6036 10.6996 9.08144 27.9974 9.08144 50.5984Z"
                fill="currentColor"></path>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.8624 33.4412C97.8624 30.9709 96.393 28.4788 93.9676 27.8417L55.7758 7.03443C52.3771 4.41478 47.8152 4 42.7501 4C37.6852 4 33.1231 4.41478 29.7244 7.03443L5.81645 44.0166C3.41481 46.4286 1.81472 50.7929 1.81472 55.2501C1.81472 60.7073 3.41481 65.0716 5.81645 67.4836L29.7244 93.4657C33.1231 96.0859 37.6852 96.4996 42.7501 96.4996C47.8152 96.4996 52.3771 96.0859 55.7758 93.4657L93.9676 55.2501C96.393 52.8382 96.393 46.4038 93.9676 43.9919L42.7501 17.4836C39.0629 14.1712 33.1231 14 29.7244 14C26.3257 14 20.3869 14.1712 16.6994 17.4836L5.81645 44.0166C3.41481 46.4286 1.81472 50.7929 1.81472 55.2501C1.81472 60.7073 3.41481 65.0716 5.81645 67.4836L29.7244 93.4657C33.1231 96.0859 37.6852 96.4996 42.7501 96.4996C47.8152 96.4996 52.3771 96.0859 55.7758 93.4657L93.9676 55.2501C96.393 52.8382 96.393 46.4038 93.9676 43.9919Z"
                fill="currentFill"></path>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
);

const BulletinBoardPage = () => {
    const [boards, setBoards] = useState<BulletinBoard[]>(dummyBoards);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBoards();
                setBoards(data);
            } catch (error) {
                console.error('Error fetching bulletin boards:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">게시판 목록</h1>
            <Link href="/bulletin-board/new" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-4">
                새 게시물 추가
            </Link>
            <BulletinBoardList boards={boards} />
        </div>
    );
};

export default BulletinBoardPage;