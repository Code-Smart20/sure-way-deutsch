import React from "react"
const posts = [
  {
    id: 1,
    title: "How to Start with AWS",
    summary: "This guide walks you through AWS basics as a beginner...",
    date: "2025-06-01",
    slug: "start-with-aws"
  },
  {
    id: 2,
    title: "Deploying React Apps to S3",
    summary: "Learn how to deploy your static React apps using AWS S3...",
    date: "2025-05-28",
    slug: "react-to-s3"
  }
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.summary}</p>
            <a
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
