import { useEffect, useState } from 'react';
import Link from 'next/link';

const PostDetailPage = () => {
  const [post, setPost] = useState({
    title: '',
    date: '',
    author: '',
    content: '',
    prevPost: '',
    nextPost: '',
  });

  useEffect(() => {
    // Fetch post data based on the id from the URL
    const fetchPostData = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPostData();
  }, []);

  const { title, date, author, content, prevPost, nextPost } = post;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{title}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span>{date}</span>
        <span>{author}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ lineHeight: '1.6', fontSize: '16px' }}
      />
      <div style={{ marginTop: '20px' }}>
        {prevPost && (
          <Link href={`/post/${prevPost.id}`} style={{ marginRight: '10px' }}>
            이전 글
          </Link>
        )}
        {nextPost && (
          <Link href={`/post/${nextPost.id}`}>
            다음 글
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;