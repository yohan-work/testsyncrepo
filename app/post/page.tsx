'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Post Title 1',
    description: 'This is the first post. It contains some text and a thumbnail image.',
    thumbnailUrl: '/thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Post Title 2',
    description: 'This is the second post. It also contains some text and a thumbnail image.',
    thumbnailUrl: '/thumbnail2.jpg',
  },
  // Add more posts as needed
];

export default function PostPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ margin: '20px 0' }}>
        <h1 style={{ fontSize: '2em', textAlign: 'center' }}>Posts</h1>
        <p style={{ color: '#666', textAlign: 'center' }}>Explore our latest posts.</p>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', width: '80%', margin: '20px 0' }}>
        {posts.map(post => (
          <Link key={post.id} href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden', width: '100%' }}>
              <Image src={post.thumbnailUrl} alt={post.title} width={300} height={200} style={{ maxWidth: '100%', height: 'auto' }} />
              <div style={{ padding: '10px' }}>
                <h2 style={{ fontSize: '1.5em', margin: 0 }}>{post.title}</h2>
                <p style={{ color: '#666', fontSize: '1em', margin: 0 }}>{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}