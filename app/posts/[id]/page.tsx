import React from 'react'

async function page({params}: any) {
    const {id} = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    console.log(res)
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">
      <article className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
          Post #{post.id}
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
          {post.title}
        </h1>

        <div className="my-6 h-px bg-slate-200" />

        <p className="text-lg leading-8 text-slate-700">
          {post.body}
        </p>
      </article>
    </main>
  )
}

export default page