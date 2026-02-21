// "use client";
// import React, { useState, useEffect } from "react";
// import { FaQuoteRight, FaStar } from "react-icons/fa";
// import { API,BASE_URL } from "@/lib/api";

// type TestimonialItem = {
//   id: number;
//   name: string;
//   review: string;
//   image: string;
//   rating?: number;
//   variant?: "white" | "color";
// };


// const rowPadding="p-3"
// // ================= CARD =================
// const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
//   if (!item) return null;

//   const isColor = item.variant === "color";

//   return (
//     <div
//       className={`shrink-0 w-[280px] sm:w-[320px] md:w-[380px] p-6 md:p-8 rounded-2xl mx-4 flex flex-col justify-between transition-all duration-300 hover:scale-105 ${
//         isColor
//           ? "bg-gradient-to-r from-[var(--color-primary)] to-purple-600 text-white"
//           : "bg-white text-gray-600 border border-gray-100"
//       }`}
//     >
//       {/* stars + quote */}
//       <div className="flex justify-between items-start mb-6">
//         <div className="flex gap-1 text-yellow-400 text-sm">
//           {[...Array(5)].map((_, i) => (
//             <FaStar
//               key={i}
//               className={
//                 i < (item.rating || 5) ? "text-yellow-400" : "text-gray-300"
//               }
//             />
//           ))}
//         </div>
//         <FaQuoteRight
//           className={`text-4xl opacity-30 ${
//             isColor ? "text-white" : "text-gray-300"
//           }`}
//         />
//       </div>

//       {/* review */}
//       <p
//         className={`text-base md:text-lg mb-8 italic ${
//           isColor ? "text-blue-50" : "text-gray-500"
//         }`}
//       >
//         "{item.review}"
//       </p>

//       {/* user */}
//       <div className="flex items-center gap-4">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
//           onError={(e: any) => {
//             e.target.src = `https://ui-avatars.com/api/?name=${item.name}`;
//           }}
//         />
//         <div>
//           <h4
//             className={`font-bold ${
//               isColor ? "text-white" : "text-gray-900"
//             }`}
//           >
//             {item.name}
//           </h4>
//           <p
//             className={`text-sm ${
//               isColor ? "text-blue-200" : "text-gray-400"
//             }`}
//           >
//             Student
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ================= MAIN =================
// const TestimonialSection = () => {
//   const [data, setData] = useState<TestimonialItem[]>([]);
//   const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const loadData = async () => {
//     try {
//       const res = await fetch(API.TESTIMONIALS.LIST, {
//         cache: "no-store",
//       });

//       const json = await res.json();
//       console.log("Testimonials API =>", json);

//       let arr: any[] = [];

//       if (Array.isArray(json)) arr = json;
//       else if (json.results) arr = json.results;
//       else if (json.data) arr = json.data;

//       const processed = arr.map((item, i) => {
//         let img = item.image;

//         if (img && !img.startsWith("http")) {
//           img = `${BASE_URL}${img}`;
//         }

//         return {
//           ...item,
//           image: img,
//           variant: i % 2 === 0 ? "white" : "color",
//           rating: item.rating || 5,
//         };
//       });

//       let final = processed;
//       if (final.length > 0 && final.length < 6) {
//         final = [...final, ...final, ...final];
//       }

//       setData(final);

//     } catch (err) {
//       console.error("Testimonial fetch error:", err);
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   loadData();
// }, []);

//   if (loading)
//     return <div className="py-20 text-center text-gray-400">Loading...</div>;

//   if (!data.length)
//     return <div className="text-center text-gray-400">No reviews</div>;

//   const mid = Math.ceil(data.length / 2);
//   const row1 = data.slice(0, mid);
//   const row2 = data.slice(mid);

//   const marquee1 = [...row1, ...row1];
//   const marquee2 = [...row2, ...row2];

//   return (
//     <div className="w-full overflow-hidden ">

//       {/* animations */}
//       <style>{`
//         @keyframes marqueeLeft {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes marqueeRight {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//         .marquee-left { animation: marqueeLeft 40s linear infinite; }
//         .marquee-right { animation: marqueeRight 40s linear infinite; }
//       `}</style>

//       {/* row 1 */}
//       <div className={`mb-10 ${rowPadding} overflow-hidden`}>
//         <div className="flex w-max marquee-left">
//           {marquee1.map((item, i) => (
//             <TestimonialCard key={i} item={item} />
//           ))}
//         </div>
//       </div>

//       {/* row 2 */}
//       {marquee2.length > 0 && (
//         <div className={rowPadding}>
//           <div className="flex w-max marquee-right ">
//             {marquee2.map((item, i) => (
//               <TestimonialCard key={i} item={item} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestimonialSection;
"use client";
import React, { useState, useEffect } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { API, BASE_URL } from "@/lib/api";

type TestimonialItem = {
  id: number;
  name: string;
  review: string;
  image: string;
  rating?: number;
  variant?: "white" | "color";
};

const rowPadding = "p-3";

// ================= CARD =================
const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
  if (!item) return null;

  const isColor = item.variant === "color";

  return (
    <div
      className={`shrink-0 w-[280px] sm:w-[320px] md:w-[380px] p-6 md:p-8 rounded-2xl mx-4 flex flex-col justify-between transition-all duration-300 hover:scale-105 ${
        isColor
          ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white"
          : "bg-white text-gray-600 border border-gray-100"
      }`}
    >
      {/* stars + quote */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1 text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < (item.rating || 5) ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>

        <FaQuoteRight
          className={`text-4xl opacity-30 ${
            isColor ? "text-white" : "text-gray-300"
          }`}
        />
      </div>

      {/* review */}
      <p
        className={`text-base md:text-lg mb-8 italic ${
          isColor ? "text-blue-50" : "text-gray-500"
        }`}
      >
        "{item.review}"
      </p>

      {/* user */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
          onError={(e: any) => {
            e.target.src = `https://ui-avatars.com/api/?name=${item.name}`;
          }}
        />
        <div>
          <h4
            className={`font-bold ${
              isColor ? "text-white" : "text-gray-900"
            }`}
          >
            {item.name}
          </h4>
          <p
            className={`text-sm ${
              isColor ? "text-blue-200" : "text-gray-400"
            }`}
          >
            Student
          </p>
        </div>
      </div>
    </div>
  );
};

// ================= MAIN =================
const TestimonialSection = () => {
  const [data, setData] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(API.TESTIMONIALS.LIST, {
          cache: "no-store",
        });

        const json = await res.json();

        // 🔥 IMPORTANT: your API format = { status, data: [] }
        let arr: any[] = [];

        if (Array.isArray(json)) arr = json;
        else if (json.results) arr = json.results;
        else if (json.data) arr = json.data;

        const processed: TestimonialItem[] = arr.map((item, i) => {
          let img = item.image;

          // absolute image fix
          if (img && !img.startsWith("http")) {
            img = `${BASE_URL}${img}`;
          }

          return {
            id: item.id,
            name: item.name,
            review: item.review,
            image: img,
            rating: item.rating || 5,
            variant: i % 2 === 0 ? "white" : "color",
          };
        });

        // duplicate for marquee smooth loop
        let final = processed;
        if (final.length > 0 && final.length < 6) {
          final = [...final, ...final, ...final];
        }

        setData(final);
      } catch (err) {
        console.error("Testimonial fetch error:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading)
    return <div className="py-20 text-center text-gray-400">Loading...</div>;

  if (!data.length)
    return <div className="text-center text-gray-400">No reviews</div>;

  const mid = Math.ceil(data.length / 2);
  const row1 = data.slice(0, mid);
  const row2 = data.slice(mid);

  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];

  return (
    <div className="w-full overflow-hidden">
      {/* animations */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left { animation: marqueeLeft 40s linear infinite; }
        .marquee-right { animation: marqueeRight 40s linear infinite; }
      `}</style>

      {/* row 1 */}
      <div className={`mb-10 ${rowPadding} overflow-hidden`}>
        <div className="flex w-max marquee-left">
          {marquee1.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* row 2 */}
      {marquee2.length > 0 && (
        <div className={rowPadding}>
          <div className="flex w-max marquee-right">
            {marquee2.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;