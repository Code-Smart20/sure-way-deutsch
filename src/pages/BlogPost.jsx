import { useParams } from 'react-router-dom'; // or use Next.js router
// Sample blog post content (you can fetch this from an API or CMS)
const blogContent = {
  "start-with-aws": {
    title: "How to Start with AWS",
    date: "2025-06-01",
    content: `AWS stands for Amazon Web Services. It's a cloud platform...`
  },
  "react-to-s3": {
    title: "Deploying React Apps to S3",
    date: "2025-05-28",
    content: `To deploy a React app to S3, first build the app...`
  }
};

export default function BlogPost() {
  const { slug } = useParams(); // grabs "start-with-aws", etc.
  const post = blogContent[slug];

  if (!post) return <p className="text-center mt-10">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Published on {post.date}</p>
      <article className="prose prose-lg">
        <p>{post.content}</p>
      </article>
    </div>
  );
}
