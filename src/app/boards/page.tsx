'use client';
import Link from 'next/link';

const BoardListPage = () => {
    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">보드 목록</h1>
            <ul>
                <li>
                    <Link href="/boards/1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">보드 1</Link>
                </li>
                <li>
                    <Link href="/boards/2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">보드 2</Link>
                </li>
                {/* Add more board links as needed */}
            </ul>
        </main>
    );
};

export default BoardListPage;