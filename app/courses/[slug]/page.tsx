import CourseDetailClient from "@/component/CourseDetailClient";
import { createMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic"
 const BASEURL = "https://codingcloudapi.codingcloud.co.in"

// 🔥 dynamic metadata
export async function generateMetadata({ params }: any) {
  const slug = params.slug;

  // 🔥 fetch course
  const res = await fetch(`${BASEURL}/course/${slug}`);
  const data = await res.json();

  const course = data?.data?.[0] || data;

  return createMetadata({
    title: course?.name,
    description: course?.short_description,
    path: `/courses/${slug}`,
    image: course?.banner_img || course?.image,
  });
}

export default function Page({ params }: any) {
  return <CourseDetailClient slug={params.slug} />;
}