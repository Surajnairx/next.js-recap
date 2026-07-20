import Link from 'next/dist/client/link'
import React from 'react'

 async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  return (
   <div className="mx-auto max-w-3xl px-6 py-12">
  <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-slate-900">
    Post Page
  </h1>

  <ul className="space-y-4">
    {posts.slice(0, 5).map((post: any) => (
      <li key={post.id}>
        <Link
          href={`/posts/${post.id}`}
          className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
            Post #{post.id}
          </span>

          <h2 className="text-xl font-semibold text-slate-900 transition-colors hover:text-blue-600">
            {post.title}
          </h2>
        </Link>
      </li>
    ))}
  </ul>
</div>
  )
}

export default page
