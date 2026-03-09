"use client";

import { useEffect, useState } from "react";

const PostListPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate fetching posts from an API
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
      <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Welcome to the Post Page</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>Here you can find all the latest posts.</p>
      </div>
      {posts.map((post, index) => (
        <div key={index} style={{ background: '#fff', padding: '20px', borderRadius: '8px', display: 'flex' }}>
          <img src={post.thumbnail} alt={post.title} style={{ width: '100px', height: '100px', borderRadius: '8px', marginRight: '20px' }} />
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{post.title}</h2>
            <p style={{ fontSize: '14px', color: '#555' }}>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostListPage;