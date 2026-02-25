// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { API } from "@/lib/api";

// interface Course {
//   id: number;
//   name: string;
//   banner_img?: string;
//   description?: string;
// }

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, { cache: "no-store" });
//         const data = await res.json();
//         setCourses(data.data || []);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getCourses();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-20">
//       <h1 className="text-4xl font-bold mb-10 text-center">
//         All Courses
//       </h1>

//       {loading ? (
//         <p className="text-center text-gray-400">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {courses.map((course) => (
//             <Link
//               key={course.id}
//               href={`/courses/${course.id}`}
//               className="border rounded-xl p-4 shadow hover:shadow-lg transition"
//             >
//               <div className="h-48 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
//                 {course.banner_img ? (
//                   <img
//                     src={course.banner_img}
//                     alt={course.name}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="flex items-center justify-center h-full text-gray-400">
//                     No Image
//                   </div>
//                 )}
//               </div>

//               <h2 className="text-lg font-bold mb-2">{course.name}</h2>

//               <p className="text-sm text-gray-500 line-clamp-2">
//                 {course.description || "No description available"}
//               </p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { API } from "@/lib/api";
import { motion } from "framer-motion";

interface Course {
  id: number;
  name: string;
  banner_img?: string;
  description?: string;
}

interface ApiResponse {
  data?: Course[];
  results?: Course[];
  courses?: Course[];
  [key: string]: any;
}

// 🔥 Base URL from API
const API_BASE_URL = "https://codingcloud.pythonanywhere.com";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  // 🔥 Helper function to get full image URL
  const getFullImageUrl = (bannerImg?: string) => {
    if (!bannerImg) return null;
    
    // If it's already a full URL, return as is
    if (bannerImg.startsWith('http://') || bannerImg.startsWith('https://')) {
      return bannerImg;
    }
    
    // Remove leading slash if present to avoid double slashes
    const cleanPath = bannerImg.startsWith('/') ? bannerImg.slice(1) : bannerImg;
    
    // Return full URL with base
    return `${API_BASE_URL}/${cleanPath}`;
  };

  // Loading Skeleton
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-800">
          All Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="border rounded-xl p-4 shadow-sm animate-pulse">
              <div className="h-40 sm:h-44 md:h-48 w-full bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          All Courses
        </h1>
        <div className="text-center py-12">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          All Courses
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No courses available at the moment.</p>
        </div>
      </div>
    );
  }

  // Success State with Courses
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-800"
      >
        All Courses
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {courses.map((course, index) => {
          const imageUrl = getFullImageUrl(course.banner_img);
          
          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={`/courses/${course.id}`}
                className="block border rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full"
              >
                <div className="h-40 sm:h-44 md:h-48 w-full bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={course.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="flex items-center justify-center h-full text-gray-400 bg-gray-50">
                            <span class="text-sm">Image not available</span>
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 bg-gray-50">
                      <span className="text-sm">No banner</span>
                    </div>
                  )}
                </div>

                <h2 className="text-base sm:text-lg font-bold mb-2 text-gray-800 line-clamp-1">
                  {course.name}
                </h2>

                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                  {course.description || "No description available"}
                </p>

                <div className="mt-3 text-[var(--color-primary)] text-xs sm:text-sm font-medium">
                  View Course →
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}