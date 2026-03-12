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
// }

// export default function CategoryCoursesPage() {
//   const params = useParams();
//   const categoryId = Number(params.id);

//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);

//   // 🔥 image helper
//   const getImage = (img?: string) => {
//     if (!img) return null;
//     if (img.startsWith("http")) return img;
//     return `${BASE_URL}/${img.startsWith("/") ? img.slice(1) : img}`;
//   };

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, { cache: "no-store" });
//         const data = await res.json();

//         const list = data.data || data.results || data;

//         // 🎯 FILTER by category id
//         const filtered = list.filter(
//           (course: Course) => course.category === categoryId
//         );

//         setCourses(filtered);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, [categoryId]);

//   // ================= UI =================

//   if (loading) {
//     return <div className="p-10 text-center">Loading courses...</div>;
//   }

//   if (courses.length === 0) {
//     return <div className="p-10 text-center">No courses found</div>;
//   }

//   return (
//     <div className="container-custom py-16">
//       <h1 className="text-3xl font-bold mb-10 text-center">
//         Courses in {courses[0]?.name}
//       </h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => {
//           const img = getImage(course.image);

//           return (
//             <Link
//               key={course.id}
//               href={`/courses/${course.slug}`}
//               className="bg-[var(--color-white)] rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//             >
//               <div className="h-44 bg-[var(--color-bg-light)]">
//                 {img && (
//                   <Image
//                     src={img}
//                     alt={course.name}
//                     width={400}
//                     height={300}
//                     className="w-full h-full object-contain"
//                   />
//                 )}
//               </div>

//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-2">
//                   {course.name}
//                 </h3>

//                 {/* 
//                 <p className="text-sm text-[var(--color-muted)] line-clamp-2">
//                   {course?.text?.replace(/<[^>]*>/g, "")}
//                 </p>
//                  */}
//                 <div
//                   className="text-sm text-[var(--color-muted)] line-clamp-2"
//                   dangerouslySetInnerHTML={{
//                     __html: course?.text || "",
//                   }}
//                 />
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { BASE_URL } from "@/lib/api";

// interface Course {
//   id: number;
//   name: string;
//   slug: string;
//   image?: string;
//   text: string;
// }

// export default function CategoryCoursesPage() {
//   const params = useParams();
//   const slug = params.slug as string;

//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);

//   const getImage = (img?: string) => {
//     if (!img) return null;
//     if (img.startsWith("http")) return img;
//     return `${BASE_URL}/${img.startsWith("/") ? img.slice(1) : img}`;
//   };

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch(
//           `https://codingcloud.pythonanywhere.com/course/category/${slug}/`,
//           { cache: "no-store" }
//         );

//         const data = await res.json();

//         setCourses(data.data || data || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, [slug]);

//   if (loading) {
//     return <div className="p-10 text-center">Loading courses...</div>;
//   }

//   if (courses.length === 0) {
//     return <div className="p-10 text-center">No courses found</div>;
//   }

//   return (
//     <div className="container-custom py-16">
//       <h1 className="text-3xl font-bold mb-10 text-center">
//         {slug.replace("-", " ").toUpperCase()} Courses
//       </h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => {
//           const img = getImage(course.image);

//           return (
//             <Link
//               key={course.id}
//               href={`/courses/${course.slug}`}
//               className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//             >
//               <div className="h-44 bg-gray-100">
//                 {img && (
//                   <Image
//                     src={img}
//                     alt={course.name}
//                     width={400}
//                     height={300}
//                     className="w-full h-full object-contain"
//                   />
//                 )}
//               </div>

//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-2">
//                   {course.name}
//                 </h3>

//                 <div
//                   className="text-sm text-gray-500 line-clamp-2"
//                   dangerouslySetInnerHTML={{
//                     __html: course?.text || "",
//                   }}
//                 />
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

interface Course {
  id: number;
  name: string;
  slug: string;
  image?: string;
  category: number;
  text: string;
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

  const getImage = (img?: string) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return `${BASE_URL}${img.startsWith("/") ? img : "/" + img}`;
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const apiUrl = API.CATEGORY.DETAIL_BY_SLUG(categorySlug) ;
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
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
    <div className="container-custom py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">
        {categoryName} Courses ({courses.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const img = getImage(course.image);

          return (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                {img ? (
                  <Image
                    src={img}
                    alt={course.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h3>

                <div
                  className="text-gray-600 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: course?.text || "No description available",
                  }}
                />
                
                <div className="text-[var(--color-accent-purple)] font-semibold hover:underline mt-auto">
                  Learn More →
             
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}