// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { API, BASE_URL } from "@/lib/api";

// type Category = {
//   id: number;
//   name: string;
//   image: string | null;
// };

// export default function Categories() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(API.CATEGORY.LIST);
//         const data = await res.json();
//         setCategories(data);
//       } catch (err) {
//         console.error("Category fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className=" bg-white">
//       <div className="py-16 container-custom flex flex-col items-center">

//         <div className="px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full">
//           CATEGORIES
//         </div>

//         <h2 className="text-2xl md:text-4xl font-bold text-center mt-5 mb-12">
//           Explore Top Categories
//         </h2>

//         {loading ? (
//           <div className="animate-pulse text-blue-600 font-bold">
//             Loading...
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">

//             {categories.map((cat) => {
//               const imageUrl = cat.image
//                 ? `${BASE_URL}${cat.image}`
//                 : "/images/fallback.png";

//               return (
//                 <div
//                   key={cat.id}
//                   onClick={() => router.push(`/category/${cat.id}`)}
//                   className="h-60 shadow-xl bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-500 group"
//                 >
//                   <div className="relative h-20 w-20 mb-5">
//                     <Image
//                       src={imageUrl}
//                       alt={cat.name}
//                       fill
//                       className="object-contain group-hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>

//                   <h3 className="text-lg font-semibold text-center">
//                     {cat.name}
//                   </h3>
//                 </div>
//               );
//             })}

//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { API, BASE_URL } from "@/lib/api";

// type Category = {
//   id: number;
//   name: string;
//   text?: string;
//   image: string | null;
// };

// export default function Categories() {
//   const router = useRouter();
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   const [categories, setCategories] = useState<Category[]>([]);
//   const [categoryTotals, setCategoryTotals] = useState<Record<number, number>>({});
//   const [loading, setLoading] = useState(true);

//   // 🔥 FETCH DATA
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [catRes, totalRes] = await Promise.all([
//           fetch(API.CATEGORY.LIST),
//           fetch(API.CATEGORY.TOTALS),
//         ]);

//         const catData = await catRes.json();
//         const totalData = await totalRes.json();

//         setCategories(catData);

//         const totalsMap: Record<number, number> = {};
//         totalData.data.forEach((item: any) => {
//           totalsMap[item.id] = item.total_courses;
//         });

//         setCategoryTotals(totalsMap);
//       } catch (err) {
//         console.error("Category error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔥 SCROLL
//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
//   };

//   return (
//     <section className="bg-white py-16 overflow-hidden">
//       <div className="container-custom">

//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <span className="px-4 py-1 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
//             CATEGORIES
//           </span>
//           <h2 className="text-3xl font-bold mt-4 text-[var(--color-text-main)]">
//             Explore Top Categories
//           </h2>
//         </div>

//         {loading ? (
//           <div className="text-center font-semibold text-[var(--color-primary)]">
//             Loading...
//           </div>
//         ) : (
//           <div className="relative">

//             {/* ARROWS */}
//             {categories.length > 4 && (
//               <>
//                 <button
//                   onClick={scrollLeft}
//                   className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition"
//                 >
//                   ‹
//                 </button>

//                 <button
//                   onClick={scrollRight}
//                   className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition"
//                 >
//                   ›
//                 </button>
//               </>
//             )}

//             {/* SLIDER */}
//             <div
//               ref={scrollRef}
//               className="flex gap-2 overflow-x-auto scroll-smooth px-10 pb-4
//               [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {categories.map((cat) => {
//                 const imageUrl = cat.image
//                   ? `${BASE_URL}${cat.image}`
//                   : "/images/fallback.png";

//                 return (
//                   <div
//                     key={cat.id}
//                     className="flex-shrink-0 w-[220px] text-center cursor-pointer group 
//                     transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
//                     onClick={() => router.push(`/category/${cat.id}`)}
//                   >
//                     {/* IMAGE BOX */}
//                     <div className="relative w-[160px] h-[160px] mx-auto mb-3">

//                       {/* SAFE INNER WRAPPER (prevents cut) */}
//                       <div className="absolute inset-2">
//                         <Image
//                           src={imageUrl}
//                           alt={cat.name}
//                           fill
//                           className="object-contain transition-all duration-500 ease-out
//                           group-hover:scale-105 group-hover:opacity-30"
//                         />
//                       </div>

//                       {/* HOVER BADGE */}
//                       <div className="
//                         absolute inset-0 flex items-center justify-center
//                         opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
//                       ">
//                         <div className="
//                           bg-gradient-to-r from-[var(--color-primary)] to-purple-600
//                           text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-xl
//                           transform scale-75 group-hover:scale-100 transition-all duration-300
//                         ">
//                           {categoryTotals[cat.id] ?? 0}
//                           <div className="text-[11px] font-normal">Courses</div>
//                         </div>
//                       </div>

//                     </div>

//                     {/* TITLE */}
//                    <h4 className="
//   font-semibold text-lg
//   text-[var(--color-text-main)]
//   transition-colors duration-300
//   group-hover:text-[var(--color-primary)]
// ">
//   {cat.name}
// </h4>

//                     {/* SUBTEXT */}
//                     <p className="text-sm text-[var(--color-text-light)] mt-1">
//                       {cat.text || "Explore now"}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { API, BASE_URL } from "@/lib/api";

type Category = {
  id: number;
  name: string;
  text?: string;
  image: string | null;
};

export default function Categories() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryTotals, setCategoryTotals] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, totalRes] = await Promise.all([
          fetch(API.CATEGORY.LIST),
          fetch(API.CATEGORY.TOTALS),
        ]);

        const catData = await catRes.json();
        const totalData = await totalRes.json();

        setCategories(catData);

        const totalsMap: Record<number, number> = {};
        totalData.data.forEach((item: any) => {
          totalsMap[item.id] = item.total_courses;
        });

        setCategoryTotals(totalsMap);
      } catch (err) {
        console.error("Category error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 SCROLL
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <span className="px-4 py-1 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            CATEGORIES
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 text-[var(--color-text-main)]">
            Explore Top Categories
          </h2>
        </div>

        {loading ? (
          <div className="text-center font-semibold text-[var(--color-primary)]">
            Loading...
          </div>
        ) : (
          <div className="relative">

            {/* ARROWS - Hide on mobile */}
            {categories.length > 4 && (
              <>
                <button
                  onClick={scrollLeft}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition"
                >
                  ‹
                </button>

                <button
                  onClick={scrollRight}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition"
                >
                  ›
                </button>
              </>
            )}

            {/* SLIDER */}
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-8
               overflow-x-auto scroll-smooth px-4 md:px-10 py-4
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat) => {
                const imageUrl = cat.image
                  ? `${BASE_URL}${cat.image}`
                  : "/images/fallback.png";

                return (
                  <div
                    key={cat.id}
                    className="flex-shrink-0 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[200px] text-center cursor-pointer group 
                    transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                    onClick={() => router.push(`/category/${cat.id}`)}
                  >
                    {/* IMAGE BOX - FIXED: removed inset-2 that was cutting the image */}
                    <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px] mx-auto mb-3 flex items-center justify-center">

                      {/* IMAGE - properly contained without cutting */}
                      <div className="relative w-full h-full">
                        <Image
                          src={imageUrl}
                          alt={cat.name}
                          fill
                          className="object-contain transition-all duration-500 ease-out
                          group-hover:scale-105 group-hover:opacity-30"
                          sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 150px, 160px"
                        />
                      </div>

                      {/* HOVER BADGE */}
                      <div className="
                        absolute inset-0 flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
                      ">
                        <div className="
                          bg-gradient-to-r from-[var(--color-primary)] to-purple-600
                          text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-xl
                          transform scale-75 group-hover:scale-100 transition-all duration-300
                        ">
                          {categoryTotals[cat.id] ?? 0}
                          <div className="text-[11px] font-normal">Courses</div>
                        </div>
                      </div>

                    </div>

                    {/* TITLE */}
                    <h4 className="
                      font-semibold text-sm sm:text-base md:text-lg
                      text-[var(--color-text-main)]
                      transition-colors duration-300
                      group-hover:text-[var(--color-primary)]
                    ">
                      {cat.name}
                    </h4>

                    {/* SUBTEXT */}
                    <p className="text-xs sm:text-sm text-[var(--color-text-light)] mt-1">
                      {cat.text || `${categoryTotals[cat.id] ?? 0} courses`}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </div>
    </section>
  );
}