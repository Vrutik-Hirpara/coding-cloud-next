// "use client";

// import Link from "next/link";
// import React from "react";

// type EventItem = {
//   id: number;
//     slug: string;
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
//   event: EventItem;
// }

// const EventCard: React.FC<Props> = ({ event }) => {
//   return (
//     <div className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[350px]">
//       <div className="bg-[var(--color-white)] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

//         {/* IMAGE */}
//         <div className="relative overflow-hidden">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="w-[350px] h-[260px]  object-contain group-hover:scale-110 transition duration-500"
//           />

//           <div className="absolute top-4 left-4 bg-[var(--color-white)] px-3 py-1 rounded-full text-xs font-semibold">
//             {event.dateRange}
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="px-6 pt-6 pb-8">
//           <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">
//             {event.title}
//           </h3>

//           <p className="text-sm text-[var(--color-muted)] mb-4">
//             {event.subtitle} • {event.author}
//           </p>

//           <div className="flex justify-between text-sm text-[var(--color-muted)] mb-4">
//             <span>{event.lessons} Lessons</span>
//             <span>{event.students} Students</span>
//           </div>

//           {/* <div className="flex items-center justify-between mb-5">
//             <span className="text-lg font-bold text-[var(--color-dark)]">
//               {event.price}
//             </span>
//             <span className="text-sm text-[var(--color-muted-light)] line-through">
//               {event.oldPrice}
//             </span>
//           </div> */}

//           <div className="flex items-center justify-between">
//             <Link
//               href={`/courses/${event.slug}`}
//               className="text-[var(--color-accent-purple)] font-semibold hover:underline"
//             >
//               Learn More →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;



// "use client";

// import Link from "next/link";
// import React from "react";

// type EventItem = {
//   id: number;
//   slug: string;
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
//   event: EventItem;
//   variant?: "default" | "kids";
// }

// const EventCard: React.FC<Props> = ({ event, variant = "default" }) => {
//   return (
//     <div className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[350px]">

//       {/* ---------- DESIGN 1 ---------- */}
//       {variant === "default" && (
//         <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
//           <div className="relative overflow-hidden">
//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-[350px] h-[260px] object-contain"
//             />

//             <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold">
//               {event.dateRange}
//             </div>
//           </div>

//           <div className="px-6 pt-6 pb-8 flex flex-col flex-grow">
//             <h3 className="text-xl font-bold mb-3">
//               {event.title}
//               </h3>

//             <p className="text-sm text-gray-500 mb-4">
//               {event.subtitle}
//             </p>
//             <p className="text-sm text-gray-500 mb-4">
//               • {event.author}
//             </p>

//             <div className="flex justify-between text-sm text-gray-500 mb-4">
//               <span>{event.lessons} Lessons</span>
//               <span>{event.students} Students</span>
//             </div>

//             <Link
//               href={`/courses/${event.slug}`}
//               className="text-[var(--color-accent-purple)] font-semibold hover:underline"
//             >
//               Learn More →
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* ---------- DESIGN 2 ---------- */}
//       {variant === "kids" && (
//         <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex gap-6 items-center">

//           {/* LEFT IMAGE */}
//           <div className="w-[220px] flex-shrink-0">

//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-[180px] object-contain"
//             />

//             {/* BADGES */}
//             <div className="flex gap-3 mt-3">
//               <span className="bg-gray-100 text-xs px-3 py-2 rounded-md shadow flex items-center gap-1">
//                 🎥 {event.lessons} Videos
//               </span>

//               <span className="bg-gray-100 text-xs px-3 py-2 rounded-md shadow flex items-center gap-1">
//                 👨‍🎓 {event.students} Students
//               </span>
//             </div>

//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex-1">

//             {/* rating */}
//             <div className="text-orange-400 text-sm mb-2">
//               ⭐⭐⭐⭐⭐ ({event.reviews} Reviews)
//             </div>

//             {/* title */}
//             <h3 className="text-2xl font-bold mb-2">
//               {event.title}
//             </h3>

//             {/* lessons + students */}
//             <div className="flex gap-6 text-sm text-gray-500 mb-3">
//               <span>{event.lessons} Lessons</span>
//               <span>{event.students} Students</span>
//             </div>

//             {/* subtitle */}
//             <p className="text-gray-500 mb-4">
//               {event.subtitle}
//             </p>

//             {/* instructor */}
//             <div className="flex items-center gap-2 mb-4">
//               {/* <img
//           src={event.instructorImage}
//           className="w-8 h-8 rounded-full"
//         /> */}

//               <span className="text-gray-500">
//                 By {event.instructor}
//               </span>
//             </div>

//             {/* footer */}
//             <div className="flex justify-between items-center">
//               <span className="font-bold text-lg">
//                 {/* {event.price} */}
//               </span>

//               <Link
//                 href={`/courses/${event.slug}`}
//                 className="text-[var(--color-accent-purple)] font-semibold"
//               >
//                 Learn More →
//               </Link>
//             </div>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default EventCard;



// "use client";

// import Link from "next/link";
// import React from "react";

// type EventItem = {
//   id: number;
//   slug: string;
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
//   event: EventItem;
//   variant?: "default" | "kids";
// }

// const EventCard: React.FC<Props> = ({ event, variant = "default" }) => {
//   return (
//     // <div className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[350px] h-full">
// <div className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[350px] w-full max-w-[90vw] sm:max-w-none">

//       {/* ---------- DESIGN 1 ---------- */}
//       {variant === "default" && (
//         <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">

//           {/* IMAGE */}
//           <div className="relative overflow-hidden">
//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-[220px] object-contain"
//             />

//             <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold">
//               {event.dateRange}
//             </div>
//           </div>

//           {/* CONTENT */}
//           <div className="px-6 pt-6 pb-8 flex flex-col flex-grow">

//             {/* TITLE */}
//             <h3 className="text-xl font-bold mb-3 line-clamp-2">
//               {event.title}
//             </h3>

//             {/* CATEGORY */}
//             <p className="text-sm text-gray-500 mb-2 line-clamp-2">
//               {event.subtitle}
//             </p>

//             {/* AUTHOR */}
//             <p className="text-sm text-gray-500 mb-4 line-clamp-1">
//               • {event.author}
//             </p>

//             {/* META */}
//             <div className="flex justify-between text-sm text-gray-500 mb-4">
//               <span>{event.lessons || 0} Lessons</span>
//               <span>{event.students || 0} Students</span>
//             </div>

//             {/* BUTTON */}
//             <Link
//               href={`/courses/${event.slug}`}
//               className="text-[var(--color-accent-purple)] font-semibold hover:underline mt-auto"
//             >
//               Learn More →
//             </Link>

//           </div>
//         </div>
//       )}

//       {/* ---------- DESIGN 2 ---------- */}
//       {variant === "kids" && (
//         <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex gap-6 items-center h-full">

//           {/* LEFT IMAGE */}
//           <div className="w-[220px] flex-shrink-0">

//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-[180px] object-contain"
//             />

//             <div className="flex gap-3 mt-3">
//               <span className="bg-gray-100 text-xs px-3 py-2 rounded-md shadow flex items-center gap-1">
//                 🎥 {event.lessons || 0} Videos
//               </span>

//               <span className="bg-gray-100 text-xs px-3 py-2 rounded-md shadow flex items-center gap-1">
//                 👨‍🎓 {event.students || 0} Students
//               </span>
//             </div>

//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex-1 flex flex-col h-full">

//             <div className="text-orange-400 text-sm mb-2">
//               ⭐⭐⭐⭐⭐ ({event.reviews || 0} Reviews)
//             </div>

//             <h3 className="text-2xl font-bold mb-2 line-clamp-2">
//               {event.title}
//             </h3>

//             <div className="flex gap-6 text-sm text-gray-500 mb-3">
//               <span>{event.lessons || 0} Lessons</span>
//               <span>{event.students || 0} Students</span>
//             </div>

//             <p className="text-gray-500 mb-4 line-clamp-2">
//               {event.subtitle}
//             </p>

//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-gray-500">
//                 By {event.instructor}
//               </span>
//             </div>

//             <div className="flex justify-between items-center mt-auto">
//               <span className="font-bold text-lg">
//                 {/* {event.price} */}
//               </span>

//               <Link
//                 href={`/courses/${event.slug}`}
//                 className="text-[var(--color-accent-purple)] font-semibold"
//               >
//                 Learn More →
//               </Link>
//             </div>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default EventCard;


"use client";

import Link from "next/link";
import React from "react";

type EventItem = {
  id: number;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  author: string;
  dateRange: string;
  lessons: number;
  students: number;
  reviews: number;
  price: string;
  oldPrice: string;
  category: string;
  instructor: string;
  instructorImage: string;
};

interface Props {
  event: EventItem;
  variant?: "default" | "kids";
}

const EventCard: React.FC<Props> = ({ event, variant = "default" }) => {
  return (
    <div className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] p-2 lg:min-w-[350px] w-full max-w-[90vw] sm:max-w-none h-full">
      
      {/* ---------- DESIGN 1 ---------- */}
      {variant === "default" && (
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full w-full">

          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[220px] object-contain"
            />

            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold">
              {event.dateRange}
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-6 pt-6 pb-8 flex flex-col flex-grow">

            {/* TITLE */}
            <h3 className="text-xl font-bold mb-3 line-clamp-2">
              {event.title}
            </h3>

            {/* CATEGORY */}
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">
              {event.subtitle}
            </p>

            {/* AUTHOR */}
            <p className="text-sm text-gray-500 mb-4 line-clamp-1">
              • {event.author}
            </p>

            {/* META */}
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>{event.lessons || 0} Lessons</span>
              <span>{event.students || 0} Students</span>
            </div>

            {/* BUTTON */}
            <Link
              href={`/courses/${event.slug}`}
              className="text-[var(--color-accent-purple)] font-semibold hover:underline mt-auto"
            >
              Learn More →
            </Link>

          </div>
        </div>
      )}

      {/* ---------- DESIGN 2 ---------- */}
      {variant === "kids" && (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center h-full w-full">

          {/* LEFT IMAGE SECTION */}
          <div className="w-full sm:w-[40%] flex-shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[180px] object-contain"
            />

            <div className="flex gap-3 mt-3">
              <span className="bg-gray-100 text-xs px-3 py-2 rounded-md shadow flex items-center gap-1">
                🎥 {event.lessons || 0} lesson
              </span>

              <span className="bg-gray-100 text-xs px-3 py-2 rounded-md shadow flex items-center gap-1">
                👨‍🎓 {event.students || 0} Students
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full sm:w-[60%] flex-1 flex flex-col h-full">
            <div className="text-orange-400 text-sm mb-2">
              ★★★★★ ({event.reviews || 0} Reviews)
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">
              {event.title}
            </h3>

            <div className="flex gap-6 text-sm text-gray-500 mb-3">
              <span>{event.lessons || 0} Lessons</span>
              <span>{event.students || 0} Students</span>
            </div>

            <p className="text-gray-500 mb-4 line-clamp-2">
              {event.subtitle}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-500">
                By {event.instructor}
              </span>
            </div>

            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-lg">
                {/* {event.price} */}
              </span>

              <Link
                href={`/courses/${event.slug}`}
                className="text-[var(--color-accent-purple)] font-semibold"
              >
                Learn More →
              </Link>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default EventCard;