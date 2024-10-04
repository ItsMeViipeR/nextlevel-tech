import { Mdx } from "@/features/mdx/Mdx";
import { getPost } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = await getPost(props.params.slug);

  if (!post) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
};

export default async function RoutePage(props: { params: { slug: string } }) {
  const post = await getPost(props.params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="prose prose-invert prose-sm lg:prose-lg prose-img:mb-0">
      <div className="flex items-center gap-2">
        <p className="text-xs text-muted-foreground">
          <span>
            Le {formatDate(post.publishedAt)}{" "}
            {post.lastEdited && post.lastEdited !== post.publishedAt
              ? `– Modifié le ${formatDate(post.lastEdited)}`
              : ""}
          </span>
        </p>
      </div>
      <h1>{post.title}</h1>
      <Mdx>{post.content}</Mdx>
    </div>
  );
}
