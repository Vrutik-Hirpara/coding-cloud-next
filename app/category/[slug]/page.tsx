import CategoryCoursesClient from "@/component/CategoryCoursesClient";
import { createMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic"
 const BASEURL = "https://codingcloudapi.codingcloud.co.in"

// 🔥 dynamic reusable SEO
export async function generateMetadata({ params }: any) {
  const slug = params.slug;

  // optional API call (better)
  const res = await fetch(`${BASEURL}/category/${slug}`);
  const data = await res.json();

  const name =
    data?.data?.[0]?.category_details?.name ||
    slug.replace("-", " ");

  return createMetadata({
    title: `${name} Courses`,
    description: `Explore ${name} courses at Coding Cloud with practical training and career support.`,
    path: `/courses/category/${slug}`,
  });
}

export default function Page({ params }: any) {
  return <CategoryCoursesClient slug={params.slug} />;
}