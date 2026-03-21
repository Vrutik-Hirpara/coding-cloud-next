
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { BASE_URL } from "@/lib/api";

// interface BlogDetail {
//   id: number;
//   title: string;
//   short_description: string;
//   content: string;
//   featured_image: string;
//   slug: string;
//   publish_date?: string;
// }


// export default function BlogDetailPage() {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState<BlogDetail | null>(null);
//   const [relatedBlogs, setRelatedBlogs] = useState<BlogDetail[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/blogs/?status=published`, {
//           cache: "no-store",
//         });

//         const data = await res.json();

//         let blogsArray: BlogDetail[] = [];
//         if (data.data) blogsArray = data.data;
//         else if (Array.isArray(data)) blogsArray = data;

//         // sort by publish_date (desc) or id (desc) for "latest"
//         blogsArray.sort((a, b) => {
//           if (a.publish_date && b.publish_date) {
//             return (
//               new Date(b.publish_date).getTime() -
//               new Date(a.publish_date).getTime()
//             );
//           }
//           return (b.id || 0) - (a.id || 0);
//         });

//         const found = blogsArray.find((b) => b.slug === slug);
//         setBlog(found || null);

//         // latest 3 excluding current
//         const latest = blogsArray
//           .filter((b) => b.slug !== slug)
//           .slice(0, 3);
//         setRelatedBlogs(latest);
//       } catch (err) {
//         console.error("Blog detail fetch error", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [slug]);

//   const getImage = (img?: string) => {
//     if (!img) return null;
//     if (img.startsWith("http")) return img;
//     return `${BASE_URL}${img}`;
//   };

//   if (loading) {
//     return (
//       <div className="container-custom py-20 text-center">
//         <div className="py-20 text-center">
//   <div className="flex flex-col items-center gap-6">
//     {/* Spinner with gradient border */}
//     <div className="relative">
//       <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent rounded-full animate-spin"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
//       </div>
//     </div>
    
//     {/* Text with dots */}
//     <div className="flex items-center gap-1 text-gray-600 font-medium">
//       <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg">
//         Loading blog...
//       </span>
//       <span className="text-blue-600 animate-bounce [animation-delay:-0.3s] text-lg">.</span>
//       <span className="text-purple-600 animate-bounce [animation-delay:-0.15s] text-lg">.</span>
//       <span className="text-pink-600 animate-bounce text-lg">.</span>
//     </div>
//   </div>
// </div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="container-custom py-20 text-center">
//         <p className="text-[var(--color-danger)]">Blog not found</p>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-[var(--color-white)]">
//       {/* 🔥 TOP GRADIENT STRIP (only behind top part, like original) */}
//       <div
//         className="w-full h-[67vh]"
//         style={{
//           backgroundImage:
//             `inear-gradient(rgb(148, 179, 246) 0%, rgb(79, 130, 240) 45%, rgb(147, 173, 252) 100%), url("${BASE_URL}/media/course_banners/about-02.png")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       {/* 🔥 WHITE CARD WITH TITLE + IMAGE + FULL CONTENT, OVERLAPPING GRADIENT */}
// <div className="container-custom flex justify-center px-4 -mt-[40vh] mb-8 md:mb-12">
//           <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl 2xl:max-w-7xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
//         >
//           {/* Header content (white area) */}
//           <div className="px-6 py-8 md:px-12 md:py-10 text-center">
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
//               {blog.title}
//             </h1>

//             <p className="text-[var(--color-muted)] mt-3 text-sm md:text-lg lg:text-xl">
//               {blog.short_description}
//             </p>
//           </div>

//           {/* Image area directly attached under header */}
//           <div className="w-full  flex justify-center items-center px-4 pb-6 md:px-8 md:pb-10">
//             <div className="relative w-full h-[220px] sm:h-[260px] md:h-[380px] lg:h-[420px]">
//               {blog.featured_image && (
//                 <Image
//                   src={getImage(blog.featured_image)!}
//                   alt={blog.title}
//                   fill
//                   priority
//                   sizes="(max-width: 768px) 100vw, 720px"
//                   className="object-contain transition-transform duration-500 "
//                 />
//               )}
//             </div>
//           </div>

//           {/* 🔥 BLOG CONTENT INSIDE SAME CARD */}
//           <div className="px-6 pb-10 pt-6 md:px-12 md:pb-12 md:pt-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="prose max-w-none text-[var(--color-text)] text-center"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//             />

//             {/* 🔥 RELATED / LATEST POSTS INSIDE SAME CARD */}
//             {relatedBlogs.length > 0 && (
//               <div className="mt-10">
//                 <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary-light)] text-[var(--color-accent-purple)] mb-3">
//                   RELATED POST
//                 </span>
//                 <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] mb-6">
//                   Similar Post
//                 </h3>

//                 <div className="flex flex-col gap-4">
//                   {relatedBlogs.map((item) => (
//                     <Link
//                       key={item.id}
//                       href={`/blogs/${item.slug}`}
//                       className="group grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] bg-[var(--color-bg-light)] rounded-2xl overflow-hidden hover:bg-[var(--color-white)] shadow-sm hover:shadow-md transition"
//                     >
//                       <div className="relative h-28 sm:h-32">
//                         {item.featured_image && (
//                           <Image
//                             src={getImage(item.featured_image) || ""}
//                             alt={item.title}
//                             fill
//                             sizes="(max-width: 640px) 160px, 220px"
//                             className="object-contain"
//                           />
//                         )}
//                       </div>

//                       <div className="flex flex-col justify-center px-4 py-3 sm:px-6 sm:py-4">
//                         <h4 className="text-base sm:text-lg font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-accent-purple)] mb-1">
//                           {item.title}
//                         </h4>
//                         <p className="text-sm text-[var(--color-muted)] line-clamp-2 mb-2">
//                     {item.short_description}
//                   </p>
//                         <span className="text-sm text-[var(--color-accent-purple)] hover:underline">
//                           Learn More →
//                         </span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { apiService, BASE_URL } from "@/lib/api";

interface BlogDetail {
  id: number;
  title: string;
  short_description: string;
  content: string;
  featured_image: string;
  slug: string;
  publish_date?: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Use apiService instead of direct fetch
        const data = await apiService.getBlogs("published");

        let blogsArray: BlogDetail[] = [];
        if (data.data) blogsArray = data.data;
        else if (Array.isArray(data)) blogsArray = data;

        // sort by publish_date (desc) or id (desc) for "latest"
        blogsArray.sort((a, b) => {
          if (a.publish_date && b.publish_date) {
            return (
              new Date(b.publish_date).getTime() -
              new Date(a.publish_date).getTime()
            );
          }
          return (b.id || 0) - (a.id || 0);
        });

        const found = blogsArray.find((b) => b.slug === slug);
        setBlog(found || null);

        // latest 3 excluding current
        const latest = blogsArray
          .filter((b) => b.slug !== slug)
          .slice(0, 3);
        setRelatedBlogs(latest);
      } catch (err) {
        console.error("Blog detail fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const getImage = (img?: string) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return `${BASE_URL}${img}`;
  };

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="py-20 text-center">
          <div className="flex flex-col items-center gap-6">
            {/* Spinner with gradient border */}
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Text with dots */}
            <div className="flex items-center gap-1 text-gray-600 font-medium">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg">
                Loading blog...
              </span>
              <span className="text-blue-600 animate-bounce [animation-delay:-0.3s] text-lg">.</span>
              <span className="text-purple-600 animate-bounce [animation-delay:-0.15s] text-lg">.</span>
              <span className="text-pink-600 animate-bounce text-lg">.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-[var(--color-danger)]">Blog not found</p>
      </div>
    );
  }

  return (
    <section className="bg-[var(--color-white)]">
      {/* 🔥 TOP GRADIENT STRIP (only behind top part, like original) */}
      <div
        className="w-full h-[67vh]"
        style={{
          backgroundImage: `linear-gradient(rgb(148, 179, 246) 0%, rgb(79, 130, 240) 45%, rgb(147, 173, 252) 100%), url("${BASE_URL}/media/course_banners/about-02.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 🔥 WHITE CARD WITH TITLE + IMAGE + FULL CONTENT, OVERLAPPING GRADIENT */}
      <div className="container-custom flex justify-center px-4 -mt-[40vh] mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl 2xl:max-w-7xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Header content (white area) */}
          <div className="px-6 py-8 md:px-12 md:py-10 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
              {blog.title}
            </h1>

            <p className="text-[var(--color-muted)] mt-3 text-sm md:text-lg lg:text-xl">
              {blog.short_description}
            </p>
          </div>

          {/* Image area directly attached under header */}
          <div className="w-full flex justify-center items-center px-4 pb-6 md:px-8 md:pb-10">
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[380px] lg:h-[420px]">
              {blog.featured_image && (
                <Image
                  src={getImage(blog.featured_image)!}
                  alt={blog.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-contain transition-transform duration-500"
                />
              )}
            </div>
          </div>

          {/* 🔥 BLOG CONTENT INSIDE SAME CARD */}
          <div className="px-6 pb-10 pt-6 md:px-12 md:pb-12 md:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose max-w-none text-[var(--color-text)] text-center"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* 🔥 RELATED / LATEST POSTS INSIDE SAME CARD */}
            {relatedBlogs.length > 0 && (
              <div className="mt-10">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary-light)] text-[var(--color-accent-purple)] mb-3">
                  RELATED POST
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] mb-6">
                  Similar Post
                </h3>

                <div className="flex flex-col gap-4">
                  {relatedBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blogs/${item.slug}`}
                      className="group grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] bg-[var(--color-bg-light)] rounded-2xl overflow-hidden hover:bg-[var(--color-white)] shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative h-28 sm:h-32">
                        {item.featured_image && (
                          <Image
                            src={getImage(item.featured_image) || ""}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 160px, 220px"
                            className="object-contain"
                          />
                        )}
                      </div>

                      <div className="flex flex-col justify-center px-4 py-3 sm:px-6 sm:py-4">
                        <h4 className="text-base sm:text-lg font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-accent-purple)] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[var(--color-muted)] line-clamp-2 mb-2">
                          {item.short_description}
                        </p>
                        <span className="text-sm text-[var(--color-accent-purple)] hover:underline">
                          Learn More →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}