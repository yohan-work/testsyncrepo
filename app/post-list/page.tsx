'use client';

import { useEffect, useState } from 'react';

const PostListPage = () => {
  const [posts, setPosts] = useState<{ id: number; title: string; content: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      // Ensure the Content-Type is application/json before calling response.json()
      .then(data => setPosts(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <h2>Error</h2>
        <p className="text-foreground">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 bg-background">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Board List</h1>
      <table className="w-full border-collapse border border-border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td className="border border-border p-2">{post.id}</td>
              <td className="border border-border p-2">{post.title}</td>
              <td className="border border-border p-2">{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostListPage;