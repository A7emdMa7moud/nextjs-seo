import ClapButton from "@/components/ClapButton";
import { delay } from "@/lib/utils";
import { BlogPost, BlogPostsResponse } from "@/models/BlogPost";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface BlogPostPageProps {
  params: { postId: string };
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  return posts.map(({ id }) => id);
}

// Manually deduplicate requests if not using fetch
// const getPost = cache(async (postId: string) => {
//   const post = await prisma.post.findUnique(postId);
//   return post;
// })

export async function generateMetadata({
  params: { postId },
}: BlogPostPageProps): Promise<Metadata> {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post: BlogPost = await response.json();

  return {
    title: `${post.title} | Ahmed Mahmoud MERN Stack Blog`,
    description: `${post.body.substring(
      0,
      150
    )}... By Ahmed Mahmoud, MERN Stack Developer.`,
    keywords: [
      "Ahmed Mahmoud",
      "MERN Stack",
      "Blog",
      "Web Development",
      "JavaScript",
      "Full Stack",
    ],
    openGraph: {
      title: `${post.title} | Ahmed Mahmoud MERN Stack Blog`,
      description: `${post.body.substring(
        0,
        150
      )}... By Ahmed Mahmoud, MERN Stack Developer.`,
      images: [
        {
          url: "https://res.cloudinary.com/test-image-upload-2/image/upload/v1750335983/opengraph-image_j72cxs.png",
          width: 1200,
          height: 630,
          alt: "Ahmed Mahmoud MERN Stack Blog Post Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Ahmed Mahmoud MERN Stack Blog`,
      description: `${post.body.substring(
        0,
        150
      )}... By Ahmed Mahmoud, MERN Stack Developer.`,
      images: [
        {
          url: "https://res.cloudinary.com/test-image-upload-2/image/upload/v1750335983/opengraph-image_j72cxs.png",
          width: 1200,
          height: 630,
          alt: "Ahmed Mahmoud MERN Stack Blog Post Twitter Image",
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params: { postId },
}: BlogPostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const { title, body }: BlogPost = await response.json();

  if (response.status === 404) {
    notFound();
  }

  await delay(1000);

  return (
    <article className="max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-lg">{body}</p>
      <ClapButton />
    </article>
  );
}
