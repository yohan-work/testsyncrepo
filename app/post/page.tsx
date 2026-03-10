import Link from 'next/link';

const PostList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <PostItem
        thumbnail="/thumbnail1.jpg"
        title="Post 1"
        description="This is the first post."
      />
      <PostItem
        thumbnail="/thumbnail2.jpg"
        title="Post 2"
        description="This is the second post."
      />
      <PostItem
        thumbnail="/thumbnail3.jpg"
        title="Post 3"
        description="This is the third post."
      />
    </div>
  );
};

const PostItem = ({ thumbnail, title, description }: { thumbnail: string, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href="/post/1" className="block">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="mt-2 text-xl font-bold">{title}</h2>
        <p className="mt-1 text-gray-700">{description}</p>
      </Link>
    </div>
  );
};

export default PostList;