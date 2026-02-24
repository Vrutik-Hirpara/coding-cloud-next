// "use client";

// import Image from "next/image";

// type EventItem = {
//   id: number;
//   image: string;
//   title: string;
//   subtitle: string;
//   author: string;
//   dateRange: string;
//   lessons: number;
//   students: number;
//   reviews: number;
//   price: string;
//   oldPrice: string;
//   category: string;
//   instructor: string;
//   instructorImage: string;
// };

// interface Props {
//   events: EventItem[];
// }

// export default function RelatedCourses({ events }: Props) {
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

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((ev) => (
//             <div
//               key={ev.id}
//               className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
//             >
//               {/* IMAGE */}
//               <div className="relative h-[200px] overflow-hidden">
//                 <Image
//                   src={ev.image}
//                   alt={ev.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition duration-500"
//                 />

//                 <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold">
//                   {ev.dateRange}
//                 </span>
//               </div>

//               {/* CONTENT */}
//               <div className="p-6">
//                 {/* Reviews */}
//                 <div className="text-orange-400 text-sm mb-2">
//                   ⭐⭐⭐⭐⭐ <span className="text-gray-500 ml-2">({ev.reviews} Reviews)</span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {ev.title}
//                 </h3>

//                 {/* Lessons & Students */}
//                 <div className="flex gap-4 text-sm text-gray-500 mb-3">
//                   <span>📘 {ev.lessons} Lessons</span>
//                   <span>👨‍🎓 {ev.students} Students</span>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-500 text-sm mb-4">
//                   {ev.subtitle} course to improve your skills in {ev.category}.
//                 </p>

//                 {/* Instructor */}
                

//                 {/* Price + CTA */}
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-xl font-bold text-gray-900">
//                       {ev.price}
//                     </span>
//                     <span className="text-sm line-through text-gray-400 ml-2">
//                       {ev.oldPrice}
//                     </span>
//                   </div>

//                   <button className="text-blue-600 font-semibold hover:underline">
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  category_details: {
    name: string;
  };
};

export default function RelatedCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(API.COURSES.LIST);
        const data = await res.json();

        // 🔥 only first 2 courses
        setCourses(data.data.slice(0, 2));
      } catch (err) {
        console.error("Course fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container-custom">

        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1 mb-3 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            MORE SIMILAR COURSES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Related Courses
          </h2>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="text-center font-semibold text-blue-600">
            Loading courses...
          </div>
        ) : (
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* 🔥 Actual Courses */}
  {courses.map((course) => {
    const imageUrl = course.image
      ? `${BASE_URL}${course.image}`
      : "/images/fallback.png";

    return (
      <div
        key={course.id}
        className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
      >
        {/* IMAGE */}
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={course.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
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

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {course.name}
          </h3>

          <div className="flex gap-4 text-sm text-gray-500 mb-3">
            <span>📘 {course.lecture || 0} Lessons</span>
            <span>👨‍🎓 {course.students || 0} Students</span>
          </div>

          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {course.text}
          </p>

          <div className="text-xs text-gray-400 mb-4">
            Category: {course.category_details?.name}
          </div>

          <div className="flex items-center justify-between">
           

            <button className="text-blue-600 font-semibold hover:underline">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    );
  })}

  {/* 🔥 EMPTY PLACEHOLDER CARD (for layout spacing) */}
  {courses.length === 2 && (
    <div className="hidden lg:block"></div>
  )}

</div>
        )}
      </div>
    </section>
  );
}