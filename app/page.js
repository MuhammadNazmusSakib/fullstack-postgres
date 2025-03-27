import prisma from "@/lib/prisma";
import Post from "./components/Post";



async function getPost(){
  const posts = await prisma.post.findMany()
  return posts
}

export default async function Home() {
  const posts = await getPost()
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        <Post posts={posts}/>
      }
    </div>
  );
}
