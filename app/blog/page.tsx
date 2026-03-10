import { useEffect, useState } from 'react';

interface Post {
  thumbnail: string;
  title: string;
  content: string;
  date: string;
  viewCount?: number;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page: number) => {
    try {
      const response = await fetch(`https://api.example.com/posts?page=${page}&limit=5`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Blog Posts</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {posts.map((post, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <img src={post.thumbnail} alt={post.title} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
            <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>{post.title}</h2>
            <p style={{ fontSize: '14px', color: '#555' }}>{post.content.slice(0, 80)}...</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#777' }}>{post.date}</span>
              {post.viewCount && <span style={{ fontSize: '12px', color: '#777' }}>{post.viewCount} views</span>}
              <button style={{ fontSize: '14px', padding: '5px 10px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            style={{
              fontSize: '14px',
              padding: '5px 10px',
              backgroundColor: currentPage === page ? '#0070f3' : '#f0f0f0',
              color: currentPage === page ? '#fff' : '#555',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              margin: '0 5px',
            }}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;