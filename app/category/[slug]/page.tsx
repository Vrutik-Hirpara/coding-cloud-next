

// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { API, BASE_URL } from "@/lib/api";

// interface Course {
//   id: number;
//   name: string;
//   slug: string;
//   image?: string;
//   category: number;
//   text: string;
//   category_details?: {
//     id: number;
//     name: string;
//     slug: string;
//     image: string;
//   };
// }

// export default function CategoryCoursesPage() {
//   const params = useParams();
//   const categorySlug = params.slug as string;

//   console.log("📌 Category slug from URL:", categorySlug);

//   const [courses, setCourses] = useState<Course[]>([]);
//   const [categoryName, setCategoryName] = useState("");
//   const [loading, setLoading] = useState(true);

//   const getImage = (img?: string) => {
//     if (!img) return null;
//     if (img.startsWith("http")) return img;
//     return `${BASE_URL}${img.startsWith("/") ? img : "/" + img}`;
//   };

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const apiUrl = API.CATEGORY.DETAIL_BY_SLUG(categorySlug) ;
//         console.log("🌐 Fetching from URL:", apiUrl);
        
//         const res = await fetch(apiUrl);
//         console.log("📡 Response status:", res.status);
        
//         const data = await res.json();
//         console.log("📦 Response data:", data);

//         if (data.success) {
//           setCourses(data.data || []);
          
//           if (data.data && data.data.length > 0) {
//             setCategoryName(data.data[0].category_details?.name || categorySlug);
//           }
//         } else {
//           setCourses([]);
//         }

//       } catch (err) {
//         console.error("❌ Error:", err);
//         setCourses([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (categorySlug) {
//       fetchCourses();
//     }
//   }, [categorySlug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading courses...</p>
//         </div>
//       </div>
//     );
//   }

//   if (courses.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">
//             Category: {categorySlug}
//           </h1>
//           <p className="text-gray-600">No courses found in this category</p>
//           <Link 
//             href="/"
//             className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Go Back Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container-custom py-16">
//       <h1 className="text-3xl font-bold mb-10 text-center">
//         {categoryName} Courses ({courses.length})
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => {
//           const img = getImage(course.image);

//           return (
//             <Link
//               key={course.id}
//               href={`/courses/${course.slug}`}
//               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//             >
//               <div className="h-48 bg-gray-100 relative overflow-hidden">
//                 {img ? (
//                   <Image
//                     src={img}
//                     alt={course.name}
//                     fill
//                     className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center text-gray-400">
//                     No Image
//                   </div>
//                 )}
//               </div>

//               <div className="p-6">
//                 <h3 className="font-semibold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
//                   {course.name}
//                 </h3>

//                 <div
//                   className="text-gray-600 line-clamp-2"
//                   dangerouslySetInnerHTML={{
//                     __html: course?.text || "No description available",
//                   }}
//                 />
                
//                 <div className="text-[var(--color-accent-purple)] font-semibold hover:underline mt-auto">
//                   Learn More →
             
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { API, BASE_URL } from "@/lib/api";
import { motion } from "framer-motion";

interface Course {
  id: number;
  name: string;
  slug: string;
  image?: string;
  category: number;
  text: string;
  duration?: string;
  lecture?: string;
  students?: string;
  category_details?: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
}

export default function CategoryCoursesPage() {
  const params = useParams();
  const categorySlug = params.slug as string;

  console.log("📌 Category slug from URL:", categorySlug);

  const [courses, setCourses] = useState<Course[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState<Record<number, any>>({});

  const getImage = (img?: string) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return `${BASE_URL}${img.startsWith("/") ? img : "/" + img}`;
  };

  // Format students count
  const formatStudents = (students?: string) => {
    if (!students) return "0";
    const num = parseInt(String(students).replace(/\D/g, ""));
    return isNaN(num) ? "0" : num.toString();
  };

  // Fetch ratings for courses
  const fetchRatings = async (courseList: Course[]) => {
    const ratingData: Record<number, any> = {};

    await Promise.all(
      courseList.map(async (course) => {
        try {
          const res = await fetch(
            `${BASE_URL}/course_average_rating/?course_id=${course.id}`
          );
          const json = await res.json();
          const data = json.course_average_rating?.[0];
          if (data) {
            ratingData[course.id] = data;
          }
        } catch (err) {
          console.error("Rating error", err);
        }
      })
    );

    setRatings(ratingData);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const apiUrl = API.CATEGORY.DETAIL_BY_SLUG(categorySlug);
        console.log("🌐 Fetching from URL:", apiUrl);
        
        const res = await fetch(apiUrl);
        console.log("📡 Response status:", res.status);
        
        const data = await res.json();
        console.log("📦 Response data:", data);

        if (data.success) {
          setCourses(data.data || []);
          
          if (data.data && data.data.length > 0) {
            setCategoryName(data.data[0].category_details?.name || categorySlug);
          }

          // Fetch ratings for courses
          if (data.data && data.data.length > 0) {
            fetchRatings(data.data);
          }
        } else {
          setCourses([]);
        }

      } catch (err) {
        console.error("❌ Error:", err);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    if (categorySlug) {
      fetchCourses();
    }
  }, [categorySlug]);

  // Loading Skeleton
  if (loading) {
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-10">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="w-[335px] p-2 rounded-3xl bg-white shadow-sm animate-pulse">
              <div className="h-[180px] sm:h-[200px] w-full bg-gray-200 rounded-t-2xl mb-2"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="flex gap-4 mb-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Category: {categorySlug}
          </h1>
          <p className="text-gray-600">No courses found in this category</p>
          <Link 
            href="/"
            className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-[var(--color-text-strong)]"
      >
        {categoryName} Courses ({courses.length})
      </motion.h1>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="flex flex-wrap justify-center gap-4 mx-auto"
>
  {courses.map((course, index) => {
    const img = getImage(course.image);
    const rating = ratings[course.id]?.average_rating || 0;
    const reviews = ratings[course.id]?.total_reviews || 0;

    return (
      <motion.div
        key={course.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="w-[335px] flex-shrink-0"
      >
        <Link
          href={`/courses/${course.slug}`}
          className="block p-2 rounded-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white shadow-sm hover:shadow-xl h-full"
        >
          <div className="flex flex-col w-full h-full">
            {/* Image Container */}
            <div className="relative h-[180px] sm:h-[200px] w-full bg-[var(--color-bg-light)] rounded-t-2xl overflow-hidden mb-2">
              {img ? (
                <Image
                  src={img}
                  alt={course.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="flex items-center justify-center h-full text-gray-400 bg-gray-100">
                        <span class="text-sm">Image not available</span>
                      </div>
                    `;
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 bg-gray-100">
                  <span className="text-sm">No Image</span>
                </div>
              )}
              
              {/* Duration Badge */}
              {course.duration && (
                <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                  {course.duration}
                </span>
              )}
            </div>

            {/* Content Section */}
            <div className="p-4 pt-2">
              {/* Rating */}
              <div className="text-orange-400 text-sm mb-2">
                ★ {rating.toFixed(1)}
                <span className="text-[var(--color-muted)] ml-2">
                  ({reviews} {reviews === 1 ? 'Review' : 'Reviews'})
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--color-dark)] mb-2 line-clamp-1">
                {course.name}
              </h3>

              {/* Stats */}
              <div className="flex gap-4 text-sm text-[var(--color-muted)] mb-3">
                <span>📘 {course.lecture || "0"} Lessons</span>
                <span>👨‍🎓 {formatStudents(course.students)} Students</span>
              </div>

              {/* Description */}
              <div
                className="text-[var(--color-muted)] text-sm mb-4 line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: course?.text?.replace(/<[^>]*>/g, "") || "No description available",
                }}
              />

              {/* Category */}
              {course.category_details?.name && (
                <div className="text-xs text-[var(--color-muted-light)] mb-4">
                  Category: {course.category_details.name}
                </div>
              )}

              {/* Learn More Link */}
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-accent-purple)] font-semibold hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  })}
</motion.div>
    </div>
  );
}