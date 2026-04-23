import FaqClient from "@/component/FaqClient";
import { createMetadata } from "@/lib/seo";
const BASEURL = "https://codingcloudapi.codingcloud.co.in"

export async function generateMetadata({ params }: any) {
  const slug = params.slug;

  const res = await fetch(`${BASEURL}/course/${slug}`);
  const data = await res.json();

  const course = data?.data?.[0] || data;

  return createMetadata({
    title: `${course?.name} FAQs`,
    description: `Find answers to common questions about ${course?.name}.`,
    path: `/courses/${slug}/faq`,
  });
}

export default async function Page({ params }: any) {
  const slug = params.slug;

  // 👉 get course to extract ID
  const res = await fetch(`${BASEURL}/course/${slug}`);
  const data = await res.json();

  const course = data?.data?.[0] || data;

  return <FaqClient courseId={course?.id} />;
}