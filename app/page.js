import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";



async function getPost(){
  const posts = await prisma.post.findMany()
  return posts
}

export default async function Home() {
  const posts = await getPost()
  //console.log({posts})
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Link href={'/add-post'} className="px-4 py-2 bg-green-400 rounded-lg">Add Post</Link>
      </div>
      {
        posts.map((post) => {
          return (
            <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author?.name}
            />
          )
        })
      }
    </div>
  );
}
