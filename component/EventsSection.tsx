// "use client";

// import React, { useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

// const EventsSection: React.FC<Props> = ({ events = [] }) => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   const scroll = (dir: "left" | "right") => {
//     if (!scrollRef.current) return;

//     const container = scrollRef.current;
//     const cardWidth = container.firstChild
//       ? (container.firstChild as HTMLElement).offsetWidth + 24
//       : 350;

//     const scrollAmount = dir === "left" ? -cardWidth : cardWidth;

//     container.scrollBy({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="py-24 bg-gradient-to-r from-[var(--color-primary)] to-[#A088F8]">
//       <div className="container-custom relative">

//         {/* HEADER */}
//         <div className="text-center mb-16 px-5">
//           <span className="inline-block px-4 py-1 mb-5 text-sm font-bold text-white bg-white/20 rounded-full uppercase tracking-wider backdrop-blur-sm">
//             SIMULATED TO TAKE PART IN?
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//             Upcoming Events
//           </h2>
//         </div>

//         {/* SLIDER */}
//         <div className="relative group/slider flex items-center justify-center">

//           {/* LEFT BTN */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-primary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
//           >
//             <FaArrowLeft />
//           </button>

//           {/* RIGHT BTN */}
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-primary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
//           >
//             <FaArrowRight />
//           </button>

//           {/* SCROLL CONTAINER */}
//           <div
//             ref={scrollRef}
//             className="flex p-2 overflow-x-auto gap-6 pb-10 px-4 md:px-8 w-full hide-scrollbar scroll-smooth"
//           >
//             {events.map((ev) => (
//               <div
//                 key={ev.id}
//                 className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[350px]"
//               >
//                 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

//                   {/* IMAGE */}
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={ev.image}
//                       alt={ev.title}
//                       className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
//                     />

//                     <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
//                       {ev.dateRange}
//                     </div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="px-6 pt-6 pb-8">
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {ev.title}
//                     </h3>

//                     <p className="text-sm text-gray-500 mb-4">
//                       {ev.subtitle} • {ev.author}
//                     </p>

//                     <div className="flex justify-between text-sm text-gray-500 mb-4">
//                       <span>{ev.lessons} Lessons</span>
//                       <span>{ev.students} Students</span>
//                     </div>

//                     <div className="flex items-center justify-between mb-5">
//                       <span className="text-lg font-bold text-gray-900">
//                         {ev.price}
//                       </span>
//                       <span className="text-sm text-gray-400 line-through">
//                         {ev.oldPrice}
//                       </span>
//                     </div>

//                     <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
//                       Learn More →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsSection;

"use client";

import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EventCard from "./EventCard";
import Pill from "./ui/Pill";

type EventItem = {
  id: number;
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
  events: EventItem[];

}

const EventsSection: React.FC<Props> = ({ events = [] }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.firstChild
      ? (container.firstChild as HTMLElement).offsetWidth + 24
      : 350;

    const scrollAmount = dir === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-r from-[var(--color-primary)] to-[#A088F8]">
      <div className="container-custom relative">

        {/* HEADER */}
        <div className="text-center mb-16 px-5">
          {/* <span className="inline-block px-4 py-1 mb-5 text-sm font-bold text-white bg-white/20 rounded-full uppercase tracking-wider backdrop-blur-sm">
            SIMULATED TO TAKE PART IN?
          </span> */}
          <Pill
            text="SIMULATED TO TAKE PART IN?"
            textColor="#ffffff"
            bgColor="rgba(255,255,255,0.2)"
            blur="blur(6px)"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Upcoming Events
          </h2>
        </div>

        {/* SLIDER */}
        <div className="relative group/slider flex items-center justify-center">

          {/* LEFT BTN */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-primary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
          >
            <FaArrowLeft />
          </button>

          {/* RIGHT BTN */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-primary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
          >
            <FaArrowRight />
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex p-2 overflow-x-auto gap-6 pb-10 px-4 md:px-8 w-full hide-scrollbar scroll-smooth"
          >
            {events.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
