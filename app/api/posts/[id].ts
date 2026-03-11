import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id as string;

  // Dummy data for demonstration
  const posts = [
    { id: '1', title: 'First Post', date: '2023-10-27T14:30:00Z', author: '홍길동', content: 'This is the content of the first post.' },
    { id: '2', title: 'Second Post', date: '2023-10-28T14:30:00Z', author: '김철수', content: 'This is the content of the second post.' },
    // Add more posts as needed
  ];

  const post = posts.find((p) => p.id === postId);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
}