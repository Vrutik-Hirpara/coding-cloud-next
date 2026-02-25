
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { API, BASE_URL } from "@/lib/api";

// type Course = {
//   id: number;
//   name: string;
//   image: string;
//   text: string;
//   duration: string | null;
//   lecture: string | null;
//   students: string | null;
//   level: string | null;
//   language: string | null;
//   category_details: {
//     name: string;
//   };
// };

// export default function RelatedCourses() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST);
//         const data = await res.json();

//         // 🔥 only first 2 courses
//         setCourses(data.data.slice(0, 2));
//       } catch (err) {
//         console.error("Course fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <section className="py-16 bg-[#f8fafc]">
//       <div className="container-custom">

//         {/* HEADER */}
//         <div className="mb-12">
//           <span className="inline-block px-4 py-1 mb-3 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
//             MORE SIMILAR COURSES
//           </span>

//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Related Courses
//           </h2>
//         </div>

//         {/* LOADING */}
//         {loading ? (
//           <div className="text-center font-semibold text-blue-600">
//             Loading courses...
//           </div>
//         ) : (
//          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//   {/* 🔥 Actual Courses */}
//   {courses.map((course) => {
//     const imageUrl = course.image
//       ? `${BASE_URL}${course.image}`
//       : "/images/fallback.png";

//     return (
//       <div
//         key={course.id}
//         className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
//       >
//         {/* IMAGE */}
//         <div className="relative h-[200px] overflow-hidden">
//           <Image
//             src={imageUrl}
//             alt={course.name}
//             fill
//             className="object-cover group-hover:scale-105 transition duration-500"
//           />

//           <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold">
//             {course.duration || "Course"}
//           </span>
//         </div>

//         {/* CONTENT */}
//         <div className="p-6">
//           <div className="text-orange-400 text-sm mb-2">
//             ⭐⭐⭐⭐⭐ <span className="text-gray-500 ml-2">(5 Reviews)</span>
//           </div>

//           <h3 className="text-xl font-bold text-gray-900 mb-2">
//             {course.name}
//           </h3>

//           <div className="flex gap-4 text-sm text-gray-500 mb-3">
//             <span>📘 {course.lecture || 0} Lessons</span>
//             <span>👨‍🎓 {course.students || 0} Students</span>
//           </div>

//           <p className="text-gray-500 text-sm mb-4 line-clamp-2">
//             {course.text}
//           </p>

//           <div className="text-xs text-gray-400 mb-4">
//             Category: {course.category_details?.name}
//           </div>

//           <div className="flex items-center justify-between">


//             <button className="text-blue-600 font-semibold hover:underline">
//               Learn More →
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   })}

//   {/* 🔥 EMPTY PLACEHOLDER CARD (for layout spacing) */}
//   {courses.length === 2 && (
//     <div className="hidden lg:block"></div>
//   )}

// </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { API, BASE_URL } from "@/lib/api";

type Course = {
  id: number;
  name: string;
  image: string;
  text: string;
  duration: string | null;
  lecture: string | null;
  students: string | null;
  level: string | null;
  language: string | null;
  slug: string;
  category_details: {
    name: string;
  };
};

export default function RelatedCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 helper for full image url
  const getImageUrl = (path?: string) => {
    if (!path) return "/images/fallback.png";

    // already full url hoy to direct return
    if (path.startsWith("http")) return path;

    // remove starting slash to avoid double //
    const clean = path.startsWith("/") ? path.slice(1) : path;

    return `${BASE_URL}/${clean}`;
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(API.COURSES.LIST);
        const data = await res.json();

        const list = data.data || [];

        // only first 2 courses
        setCourses(list.slice(0, 2));
      } catch (err) {
        console.error("Course fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-16 bg-[var(--color-bg-light)]">
      <div className="container-custom">

        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1 mb-3 text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full">
            MORE SIMILAR COURSES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)]">
            Related Courses
          </h2>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="text-center font-semibold text-[var(--color-primary)]">
            Loading courses...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((course) => {
              const imageUrl = getImageUrl(course.image);

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  {/* IMAGE */}
                  <div className="relative h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden">                    <Image
                    src={imageUrl}
                    alt={course.name}
                    fill
                    unoptimized
                    className="object-fill group-hover:scale-101 transition duration-500"
                  />

                    <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold">
                      {course.duration || "Course"}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="text-orange-400 text-sm mb-2">
                      ⭐⭐⭐⭐⭐ <span className="text-gray-500 ml-2">(5 Reviews)</span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">
                      {course.name}
                    </h3>

                    <div className="flex gap-4 text-sm text-[var(--color-muted)] mb-3">
                      <span>📘 {course.lecture || 0} Lessons</span>
                      <span>👨‍🎓 {course.students || 0} Students</span>
                    </div>

                    <p className="text-[var(--color-muted)] text-sm mb-4 line-clamp-2">
                      {course.text}
                    </p>

                    <div className="text-xs text-gray-400 mb-4">
                      Category: {course.category_details?.name}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-[var(--color-primary)] font-semibold hover:underline"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* placeholder for grid balance */}
            {courses.length === 2 && (
              <div className="hidden lg:block"></div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}