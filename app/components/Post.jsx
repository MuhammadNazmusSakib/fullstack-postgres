
const Post = ({ posts }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <ul className="space-y-4">
        {posts.length > 0 ? (
          posts.map(({ id, title, content, authorName }) => (
            <li key={id} className="p-4 bg-gray-200 rounded-md">
              <h3 className="font-semibold">{title}</h3>
              <p>{content}</p>
              <p className="text-sm text-gray-500">By {authorName || "Unknown"}</p>
            </li>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </ul>
    </div>
  );
};

export default Post;
