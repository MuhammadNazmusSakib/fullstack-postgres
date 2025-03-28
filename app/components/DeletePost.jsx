'use client'
import { useRouter } from "next/navigation"

export default function DeletePost({postId}) {
    const router = useRouter()
    async function handleClick() {
        try{
            await fetch(`api/post/${postId}`, {
                method: 'DELETE'
            })
            router.refresh()
        } catch(error) {
            console.error(error)
        }
    }
    return(
        <button onClick={handleClick} className="px-4 py-1 bg-red-400 rounded-lg">
            Delete
        </button>
    )
}