
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { API, BASE_URL } from "@/lib/api";
// import { motion } from "framer-motion";

// interface Course {
//   id: number;
//     slug: string;

//   name: string;
//   banner_img?: string;
//   description?: string;
// }

// interface ApiResponse {
//   data?: Course[];
//   results?: Course[];
//   courses?: Course[];
//   [key: string]: any;
// }

// // 🔥 Base URL from API

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });

//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         const data = await res.json();
//         console.log("API Response:", data);

//         // Handle different possible response structures
//         let coursesArray: Course[] = [];

//         if (Array.isArray(data)) {
//           coursesArray = data;
//         } else if (data.data && Array.isArray(data.data)) {
//           coursesArray = data.data;
//         } else if (data.results && Array.isArray(data.results)) {
//           coursesArray = data.results;
//         } else if (data.courses && Array.isArray(data.courses)) {
//           coursesArray = data.courses;
//         } else if (data && typeof data === 'object') {
//           const possibleArray = Object.values(data).find(val => Array.isArray(val));
//           if (possibleArray) {
//             coursesArray = possibleArray as Course[];
//           }
//         }

//         setCourses(coursesArray);

//         if (coursesArray.length === 0) {
//           console.warn("No courses found in response");
//         }

//       } catch (err) {
//         console.error("Error fetching courses:", err);
//         setError(err instanceof Error ? err.message : "Failed to load courses");
//         setCourses([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getCourses();
//   }, []);

//   // 🔥 Helper function to get full image URL
//   const getFullImageUrl = (bannerImg?: string) => {
//     if (!bannerImg) return null;

//     // If it's already a full URL, return as is
//     if (bannerImg.startsWith('http://') || bannerImg.startsWith('https://')) {
//       return bannerImg;
//     }

//     // Remove leading slash if present to avoid double slashes
//     const cleanPath = bannerImg.startsWith('/') ? bannerImg.slice(1) : bannerImg;

//     // Return full URL with base
//     return `${BASE_URL}/${cleanPath}`;
//   };

//   // Loading Skeleton
//   if (loading) {
//     return (
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-[var(--color-text-strong)]">
//           All Courses
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           {[1, 2, 3, 4, 5, 6].map((n) => (
//             <div key={n} className="border rounded-xl p-4 shadow-sm animate-pulse">
//               <div className="h-40 sm:h-44 md:h-48 w-full bg-[var(--color-light)] rounded-lg mb-4"></div>
//               <div className="h-6 bg-[var(--color-light)] rounded w-3/4 mb-2"></div>
//               <div className="h-4 bg-[var(--color-light)] rounded w-full mb-1"></div>
//               <div className="h-4 bg-[var(--color-light)] rounded w-2/3"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[var(--color-text-strong)]">
//           All Courses
//         </h1>
//         <div className="text-center py-12">
//           <p className="text-[var(--color-danger)] mb-4">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-6 py-2 rounded-full hover:opacity-90 transition"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Empty State
//   if (!courses || courses.length === 0) {
//     return (
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[var(--color-text-strong)]">
//           All Courses
//         </h1>
//         <div className="text-center py-12">
//           <p className="text-[var(--color-muted)] text-lg">No courses available at the moment.</p>
//         </div>
//       </div>
//     );
//   }

//   // Success State with Courses
//   return (
//     <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-[var(--color-text-strong)]"
//       >
//         All Courses
//       </motion.h1>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
//       >
//         {courses.map((course, index) => {
//           const imageUrl = getFullImageUrl(course.banner_img);

//           return (
//             <motion.div
//               key={course.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <Link
//                 href={`/courses/${course.slug}`}
//                 className="block border rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 bg-[var(--color-white)] h-full"
//               >
//                 <div className="h-40 sm:h-44 md:h-48 w-full bg-[var(--color-bg-light)] rounded-lg overflow-hidden mb-4 relative">
//                   {imageUrl ? (
//                     <img
//                       src={imageUrl}
//                       alt={course.name}
//                       className="w-full h-full object-contain  transition duration-500"
//                       onError={(e) => {
//                         // Fallback if image fails to load
//                         const target = e.target as HTMLImageElement;
//                         target.onerror = null; // Prevent infinite loop
//                         target.style.display = 'none';
//                         target.parentElement!.innerHTML = `
//                           <div class="flex items-center justify-center h-full text-[var(--color-muted-light)] bg-[var(--color-bg-softest)]">
//                             <span class="text-sm">Image not available</span>
//                           </div>
//                         `;
//                       }}
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-[var(--color-muted-light)] bg-[var(--color-bg-softest)]">
//                       <span className="text-sm">No banner</span>
//                     </div>
//                   )}
//                 </div>

//                 <h2 className="text-base sm:text-lg font-bold mb-2 text-[var(--color-text-strong)] line-clamp-1">
//                   {course.name}
//                 </h2>

//                 <p className="text-xs sm:text-sm text-[var(--color-muted)] line-clamp-2">
//                   {course.description || "No description available"}
//                 </p>

//                 <div className="mt-3 text-[var(--color-accent-purple)] text-xs sm:text-sm font-semibold">
//                   View Course →
//                 </div>
//               </Link>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { API, apiService, BASE_URL } from "@/lib/api";
import { motion } from "framer-motion";

interface Course {
  id: number;
  slug: string;
  name: string;
  banner_img?: string;
  description?: string;
  duration?: string;
  lecture?: string;
  students?: string;
  short_description?: string;
  category_details?: {
    name: string;
  };
}

interface ApiResponse {
  data?: Course[];
  results?: Course[];
  courses?: Course[];
  [key: string]: any;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ratings, setRatings] = useState<Record<number, any>>({});

  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API.COURSES.LIST, {
          cache: "no-store",
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("API Response:", data);

        // Handle different possible response structures
        let coursesArray: Course[] = [];

        if (Array.isArray(data)) {
          coursesArray = data;
        } else if (data.data && Array.isArray(data.data)) {
          coursesArray = data.data;
        } else if (data.results && Array.isArray(data.results)) {
          coursesArray = data.results;
        } else if (data.courses && Array.isArray(data.courses)) {
          coursesArray = data.courses;
        } else if (data && typeof data === 'object') {
          const possibleArray = Object.values(data).find(val => Array.isArray(val));
          if (possibleArray) {
            coursesArray = possibleArray as Course[];
          }
        }

        setCourses(coursesArray);

        // Fetch ratings for all courses
        if (coursesArray.length > 0) {
          fetchRatings(coursesArray);
        }

        if (coursesArray.length === 0) {
          console.warn("No courses found in response");
        }

      } catch (err) {
        console.error("Error fetching courses:", err);
        setError(err instanceof Error ? err.message : "Failed to load courses");
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  // Fetch ratings for courses
  const fetchRatings = async (courseList: Course[]) => {
    const ratingData: Record<number, any> = {};

    await Promise.all(
      courseList.map(async (course) => {
        try {
          // const res = await fetch(
          //   `${BASE_URL}/course_average_rating/?course_id=${course.id}`
          // );
          // const json = await res.json();
          // const data = json.course_average_rating?.[0];
          const json = await apiService.getCourseAverageRating(course.id);
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

  // Helper function to get full image URL
  const getFullImageUrl = (bannerImg?: string) => {
    if (!bannerImg) return null;

    if (bannerImg.startsWith('http://') || bannerImg.startsWith('https://')) {
      return bannerImg;
    }

    const cleanPath = bannerImg.startsWith('/') ? bannerImg.slice(1) : bannerImg;
    return `${BASE_URL}/${cleanPath}`;
  };

  // Format students count
  const formatStudents = (students?: string) => {
    if (!students) return "0";
    const num = parseInt(String(students).replace(/\D/g, ""));
    return isNaN(num) ? "0" : num.toString();
  };

  // Loading Skeleton - Updated to match card design
  if (loading) {
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-[var(--color-text-strong)]">
          All Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="w-[335px] p-2 rounded-3xl bg-white shadow-sm animate-pulse">
              <div className="h-40 sm:h-44 md:h-48 w-full bg-[var(--color-light)] rounded-t-2xl mb-2"></div>
              <div className="p-4">
                <div className="h-4 bg-[var(--color-light)] rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-[var(--color-light)] rounded w-3/4 mb-2"></div>
                <div className="flex gap-4 mb-3">
                  <div className="h-4 bg-[var(--color-light)] rounded w-1/3"></div>
                  <div className="h-4 bg-[var(--color-light)] rounded w-1/3"></div>
                </div>
                <div className="h-4 bg-[var(--color-light)] rounded w-full mb-1"></div>
                <div className="h-4 bg-[var(--color-light)] rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[var(--color-text-strong)]">
          All Courses
        </h1>
        <div className="text-center py-12">
          <p className="text-[var(--color-danger)] mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty State
  if (!courses || courses.length === 0) {
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[var(--color-text-strong)]">
          All Courses
        </h1>
        <div className="text-center py-12">
          <p className="text-[var(--color-muted)] text-lg">No courses available at the moment.</p>
        </div>
      </div>
    );
  }

  // Success State with Courses - UPDATED CARD DESIGN
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-[var(--color-text-strong)]"
      >
        All Courses
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="
    flex 
    flex-wrap 
    justify-center 
    gap-4
    mx-auto
    w-full
  "
      >
        {courses.map((course, index) => {
          const imageUrl = getFullImageUrl(course.banner_img);
          const rating = ratings[course.id]?.average_rating || 0;
          const reviews = ratings[course.id]?.total_reviews || 0;

          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="w-[335px]" // Fixed width like FeaturedCoursesSection
            >
              <Link
                href={`/courses/${course.slug}`}
                className="block p-2 rounded-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white shadow-sm hover:shadow-xl h-full"
              >
                <div className="flex flex-col w-full h-full">
                  {/* Image Container - Like EventCard */}
                  <div className="relative h-[180px] sm:h-[200px] w-full bg-[var(--color-bg-light)] rounded-t-2xl overflow-hidden mb-2">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={course.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="flex items-center justify-center h-full text-[var(--color-muted-light)] bg-[var(--color-bg-softest)]">
                              <span class="text-sm">Image not available</span>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-[var(--color-muted-light)] bg-[var(--color-bg-softest)]">
                        <span className="text-sm">No banner</span>
                      </div>
                    )}

                    {/* Duration Badge - Like EventCard */}
                    {course.duration && (
                      <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                        {course.duration}
                      </span>
                    )}
                  </div>

                  {/* Content Section - Like EventCard */}
                  <div className="p-4 pt-2">
                    {/* Rating - Like EventCard */}
                    {/* <div className="text-orange-400 text-sm mb-2">
                      ★ {rating.toFixed(1)}
                      <span className="text-[var(--color-muted)] ml-2">
                        ({reviews} {reviews === 1 ? 'Review' : 'Reviews'})
                      </span>
                    </div> */}
                    <div className="flex items-center gap-2 text-sm mb-2">
                      {/* ⭐ Dynamic Stars (exact fill) */}
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const ratingValue = rating || 0;

                          let fillPercent = 0;

                          if (ratingValue >= star) {
                            fillPercent = 100;
                          } else if (ratingValue > star - 1) {
                            fillPercent = (ratingValue - (star - 1)) * 100;
                          }

                          return (
                            <span key={star} className="relative text-lg">
                              <span className="text-gray-300">★</span>
                              <span
                                className="absolute top-0 left-0 overflow-hidden text-yellow-500"
                                style={{ width: `${fillPercent}%` }}
                              >
                                ★
                              </span>
                            </span>
                          );
                        })}
                      </div>

                      {/* ⭐ Rating number */}
                      <span className="text-orange-400">
                        {rating
                          ? (rating % 1 === 0 ? rating : rating.toFixed(1))
                          : 0}
                      </span>

                      {/* ⭐ Reviews */}
                      <span className="text-[var(--color-muted)] ml-2">
                        ({reviews} {reviews === 1 ? 'Review' : 'Reviews'})
                      </span>
                    </div>
                    {/* Title - Like EventCard */}
                    <h3 className="text-lg font-bold text-[var(--color-dark)] mb-2">
                      {course.name}
                    </h3>

                    {/* Stats - Like EventCard */}
                    <div className="flex gap-4 text-sm text-[var(--color-muted)] mb-3">
                      <span>📘 {course.lecture || "0"} Lessons</span>
                      <span>👨‍🎓 {formatStudents(course.students)} Students</span>
                    </div>

                    {/* Description - Like EventCard text */}
                    {/* <p className="text-[var(--color-muted)] text-sm mb-4 line-clamp-2">
                      {course.short_description?.replace(/<[^>]*>/g, "") || "No description available"}
                    </p> */}
                    <p
                      className="text-[var(--color-muted)] text-sm mb-4 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: course.short_description || "No description available",
                      }}
                    />
                    {/* Category - Like EventCard */}
                    {course.category_details?.name && (
                      <div className="text-xs text-[var(--color-muted-light)] mb-4">
                        Category: {course.category_details.name}
                      </div>
                    )}

                    {/* Learn More Link - Like EventCard */}
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