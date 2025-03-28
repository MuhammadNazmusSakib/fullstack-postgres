
const Post = ({ title, content, authorName }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Post</h2>
      <ul className="space-y-4">


        <li className="p-4 bg-gray-200 rounded-md">
          <h3 className="font-semibold">{title}</h3>
          <p>{content}</p>
          <p className="text-sm text-gray-500">By {authorName || "Unknown"}</p>
        </li>


      </ul>
    </div>
  );
};

export default Post;
