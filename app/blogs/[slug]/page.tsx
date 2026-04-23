import BlogDetailClient from "@/component/BlogDetailClient";
import { createMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic"
 const BASEURL = "https://codingcloudapi.codingcloud.co.in"
// 🔥 reusable dynamic metadata
export async function generateMetadata({ params }: any) {
  const res = await fetch(`${BASEURL}/blogs/${params.slug}`);
  const data = await res.json();

  const blog = data?.data || data;

  return createMetadata({
    title: blog?.title,
    description: blog?.short_description,
    path: `/blogs/${params.slug}`,
    image: blog?.featured_image,
  });
}

export default function Page({ params }: any) {
  return <BlogDetailClient slug={params.slug} />;
}