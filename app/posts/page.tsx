import Link from 'next/dist/client/link'
import React from 'react'

 async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  return (
    <>
    <h1 className="max-w-xs text-3xl text-center font-semibold leading-10 tracking-tight text-black ">
    Post Page
    </h1>
    <ul>
      {posts.slice(0, 5).map((post: any) => (
        <li key={post.id} className="border-b border-zinc-300 py-4">
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default page
