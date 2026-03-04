import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PostPage: React.FC = () => {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>게시글 페이지</title>
        <meta name="description" content="여기에 게시글에 대한 간단한 설명을 입력하세요." />
        <meta name="keywords" content="게시글, 예시, 설명" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <header className="max-w-3xl mx-auto text-center py-10">
            <h1 className="text-4xl font-bold mb-2">게시글 페이지</h1>
            <p className="text-xl text-gray-600">여기에 게시글에 대한 간단한 설명을 입력하세요.</p>
          </header>
          <main className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 게시글 리스트 */}
            <div className="flex flex-col space-y-4">
              {/* 게시글 1 */}
              <Card>
                <img src="https://via.placeholder.com/200" alt="게시글 썸네일" style={{ width: '100%', height: 'auto' }} />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">게시글 제목 1</h2>
                  <p className="text-gray-600">게시글 내용 1...</p>
                </div>
              </Card>
              {/* 게시글 2 */}
              <Card>
                <img src="https://via.placeholder.com/200" alt="게시글 썸네일" style={{ width: '100%', height: 'auto' }} />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">게시글 제목 2</h2>
                  <p className="text-gray-600">게시글 내용 2...</p>
                </div>
              </Card>
              {/* 게시글 3 */}
              <Card>
                <img src="https://via.placeholder.com/200" alt="게시글 썸네일" style={{ width: '100%', height: 'auto' }} />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">게시글 제목 3</h2>
                  <p className="text-gray-600">게시글 내용 3...</p>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default PostPage;