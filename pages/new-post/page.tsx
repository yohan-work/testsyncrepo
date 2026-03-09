import React from 'react';

const NewPostPage: React.FC = () => {
  return (
    <main className="container mx-auto p-4">
      <section className="mb-8">
        <h1 className="text-2xl font-bold">새 게시글</h1>
        <p>새 게시글을 작성하고 관리할 수 있습니다.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* 게시글 목록을 동적으로 렌더링할 부분 */}
        {[1, 2, 3, 4, 5].map((post, index) => (
          <div key={index} className="bg-white p-4 border rounded shadow-md">
            <img src={`https://via.placeholder.com/150x100?text=Post+${index + 1}`} alt={`Post ${index + 1}`} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">제목 {index + 1}</h2>
            <p className="text-gray-600">게시글 내용 {index + 1}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default NewPostPage;