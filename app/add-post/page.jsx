'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;
    
    try{
        await fetch('/api/add-post', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            }, 
            body: JSON.stringify({title, content})
        })
        router.refresh()
    } catch(error) {
        console.error(error)
    }

    //console.log({title, content})
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 mt-10 bg-white shadow-md rounded-md">
        <div className="py-5">
            <Link href={'/'} className="px-4 py-2 bg-green-400 rounded-lg ">Home</Link>
        </div>
      <h2 className="text-xl font-bold mb-4">Create a Post</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <textarea
          className="w-full p-2 border rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
