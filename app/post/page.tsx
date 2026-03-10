"use client";

import Image from "next/image";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Post Page",
//   description: "A page displaying a list of posts with thumbnails, titles, and text",
// };

export default function PostPage() {
  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      text: "This is the text for post 1.",
      thumbnail: "/path/to/post1-thumbnail.jpg",
    },
    {
      id: 2,
      title: "Post Title 2",
      text: "This is the text for post 2.",
      thumbnail: "/path/to/post2-thumbnail.jpg",
    },
    {
      id: 3,
      title: "Post Title 3",
      text: "This is the text for post 3.",
      thumbnail: "/path/to/post3-thumbnail.jpg",
    },
  ];

  return (
    <main>
      <h1>Posts</h1>
      <p>Here are some of our latest posts.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4">
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={200}
              height={200}
              className="mb-2"
            />
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}