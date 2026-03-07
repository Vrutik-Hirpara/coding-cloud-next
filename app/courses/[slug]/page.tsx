
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import CourseTabs from "@/component/CourseTabs";
import { motion } from "framer-motion";
import CourseSidebar from "@/component/CourseSidebar";
import RelatedCourses from "@/component/RelatedCourses";
import { riverEnter, riverLeave } from "@/app/utils/riverAnimation";
import event1 from "@/public/images/courses/course-online-01.jpg";
import event2 from "@/public/images/courses/course-online-02.jpg";
import user1 from "@/public/images/avatars/avatar-02.png";
import user2 from "@/public/images/avatars/avatar-01.png";
import { BASE_URL } from "@/lib/api";
import Link from "next/link";
interface Course {
  id: number;
  slug: string;
  name: string;
  image: string;
  banner_img: string;
  text: string;
  duration: string;
  lecture: string;
  students: string;
  level: string;
  language: string;
  certificate: string;
  category_details: { name: string };
}
const getImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${BASE_URL}${path}`;
};
export default function Page() {
  const { slug } = useParams();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);
  const [avgRating, setAvgRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  // 🔥 FETCH COURSE BY SLUG
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/course/?slug=${slug}`
        );

        const json = await res.json();

        const list = Array.isArray(json.data) ? json.data : [];

        // API already filter by slug but still safety
        const selected =
          list.find((c: Course) => c.slug === slug) || list[0];

        setCourse(selected || null);
      } catch (err) {
        console.error("Course fetch error", err);
      }
    };

    getCourse();
  }, [slug]);
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await fetch(
          `https://codingcloud.pythonanywhere.com/course_average_rating/?course_id=${course?.id}`
        );

        const json = await res.json();

        const data = json.course_average_rating?.[0];

        if (data) {
          setAvgRating(data.average_rating);
          setTotalReviews(data.total_reviews);
        }
      } catch (err) {
        console.error("Rating fetch error", err);
      }
    };

    if (course?.id) fetchRating();
  }, [course?.id]);
  if (!course) {
    return <div className="p-10 text-center">Loading...</div>;
  }


  return (
    <div className="bg-[var(--color-bg-light)]">
      {/* 🔥 HEADER */}
      {/* <section className="bg-gradient-to-b from-[#ede9fe] to-white pt-16 pb-28 text-center">
        <div className="flex justify-center items-center gap-4 text-sm mb-4 flex-wrap">
          <span className="bg-[var(--color-white)] px-3 py-1 rounded-full shadow text-[var(--color-accent-purple)] font-semibold">
            Bestseller
          </span>
          <span className="text-yellow-500 font-semibold">
            {avgRating} ★★★★★
          </span>

          <span className="text-[var(--color-muted)]">
            ({totalReviews} ratings)
          </span>
          <span className="text-[var(--color-muted)]">
            {course.students || 0} students
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-accent-purple)]">
          {course.name}
        </h1>


      </section>


      <div className="w-full -mt-20 md:-mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full h-[440px] sm:h-[260px] md:h-[500px] overflow-hidden shadow-xl border-y-4 border-white"
        >
          <Image
            src={getImageUrl(course.banner_img || course.image)}
            alt={course.name}
            fill
            sizes="100vw"
            priority
            unoptimized
            className="object-fill"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />
        </motion.div>
      </div> */}

      <section className="bg-gradient-to-b from-[#f6f3ff] to-white pt-16 pb-16 pl-12">
        <div className="container-custom max-w-7xl mx-auto px-4">
          {/* Main Content */}
          <div className="max-w-5xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              {/* Home */}
              <Link href="/" className="hover:text-[var(--color-accent-purple)]  transition">
                Home
              </Link>

              <span>›</span>
              <Link href="/course" className="hover:text-[var(--color-accent-purple)]  transition">
                Course
              </Link>
              <span>›</span>

              {/* Course Name */}
              <span
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer hover:text-[var(--color-accent-purple)] transition"
              >
                {course?.name}
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[var(--color-accent-purple)]">{course.name}</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-3xl  mb-8">
              Master Python by building 100 projects in 100 days. Learn data science,
              automation, build websites, games and apps!
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 mb-8">              {/* Bestseller Badge */}


              {/* Rating */}
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900">{avgRating}</span>
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-500 text-sm">({totalReviews} ratings)</span>
              </div>

              {/* Students */}
              <div className="text-gray-500 text-sm">
                {course.students || 0} students
              </div>

              {/* Instructor */}
              {/* <div className="text-gray-500 text-sm">
          By Angela In Development
        </div> */}
            </div>

            {/* Course Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">              <span>🎓 English</span>
              <span>🏆 Certified Course</span>
            </div>
          </div>


        </div>
      </section>
      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* <div className="flex flex-col lg:grid lg:grid-cols-[1fr_280px] gap-6 lg:gap-8"> */}
        <div className="flex flex-col lg:grid lg:grid-cols-[0.9fr_340px] gap-6 lg:gap-8">

          {/* LEFT SIDE */}
          <div className="w-full">
            <CourseTabs course={course} />
          </div>

          {/* RIGHT SIDEBAR */}
          {/* <div className="lg:sticky lg:top-[140px] lg:self-start"> */}
          {/* <div className="lg:-mt-40 lg:sticky lg:top-[120px] lg:self-start">
      <CourseSidebar
        course={course}
        setIsEnrollOpen={setIsEnrollOpen}
      />
    </div> */}
          {/* <div className="lg:relative lg:top-1/2 lg:-translate-y-1/2 lg:sticky lg:self-start">
            <CourseSidebar
              course={course}
              setIsEnrollOpen={setIsEnrollOpen}
            />
          </div> */}
          {/* <div className="pt-4 lg:sticky lg:top-[120px] lg:self-start "> */}
          {/* <div className="lg:-mt-48 pt-4 lg:sticky  lg:top-[120px] lg:self-start">
            <CourseSidebar
              course={course}
              setIsEnrollOpen={setIsEnrollOpen}
            />
          </div> */}
          <div className="pt-4 lg:-mt-[220px] lg:sticky lg:top-[120px] lg:self-start">
            <CourseSidebar
              course={course}
              setIsEnrollOpen={setIsEnrollOpen}
            />
          </div>
        </div>
      </div>

      <RelatedCourses />
    </div >
  );
}