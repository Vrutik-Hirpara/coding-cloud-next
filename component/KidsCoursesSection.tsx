// "use client";

// import React, { useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import EventCard from "./EventCard";
// import Pill from "./ui/Pill";
// import Heading from "./ui/Heading";

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

// const KidsCoursesSection: React.FC<Props> = ({ events = [] }) => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   const scroll = (dir: "left" | "right") => {
//     if (!scrollRef.current) return;

//     const container = scrollRef.current;
//     const cardWidth = container.firstChild
//       ? (container.firstChild as HTMLElement).offsetWidth + 24
//       : 320;

//     const scrollAmount = dir === "left" ? -cardWidth : cardWidth;

//     container.scrollBy({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="py-24 bg-gradient-to-r from-[#FFE4F1] via-[#E0F7FF] to-[#F3E8FF]">
//       <div className="container-custom relative">

//         {/* HEADER */}
//         <div className="text-center mb-16 px-5">
//           <Pill
//             text="FUN LEARNING FOR KIDS"
//             textColor="#6B4EFF"
//             bgColor="rgba(255,255,255,0.8)"
//             blur="blur(10px)"
//           />

//           <Heading
//   title={
//     <>
//       Junior Courses
//     </>
//   }
// />

//           <p className="text-[var(--color-muted)] mt-3 text-sm md:text-base max-w-xl mx-auto">
//             Interactive and creative courses specially designed for kids to
//             learn, explore, and grow with fun.
//           </p>
//         </div>

//         {/* SLIDER */}
//         <div className="relative group/slider flex items-center justify-center">

//           {/* LEFT BUTTON */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 
//             bg-yellow-400 hover:bg-yellow-500 text-[var(--color-white)] w-12 h-12 rounded-full 
//             flex items-center justify-center shadow-lg 
//             opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
//           >
//             <FaArrowLeft />
//           </button>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 
//             bg-pink-400 hover:bg-pink-500 text-[var(--color-white)] w-12 h-12 rounded-full 
//             flex items-center justify-center shadow-lg 
//             opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
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
//                 className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px]
//               rounded-3xl  border-[var(--color-border-light)]
//                 transition-all duration-300  hover:-translate-y-2"
//               >
//                 {/* CARD CONTENT */}
//                 <EventCard event={ev} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KidsCoursesSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EventCard from "./EventCard";
import Pill from "./ui/Pill";
import Heading from "./ui/Heading";
import { BASE_URL } from "@/lib/api";

type CourseApi = {
  id: number;
  name: string;
  image: string;
  duration: string;
  lecture: string;
  students: string;
  category_details: {
    name: string;
  };
  kids_course: boolean;
};

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

const KidsCoursesSection: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 🔁 slider scroll
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.firstChild
      ? (container.firstChild as HTMLElement).offsetWidth + 24
      : 320;

    const scrollAmount = dir === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // 📡 fetch only kids courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/course/`
        );
        const json = await res.json();

        const kidsCourses = json.data.filter(
          (c: CourseApi) => c.kids_course === true
        );

        const mapped: EventItem[] = kidsCourses.map((course: CourseApi) => ({
          id: course.id,
          image:
            `${BASE_URL}` + course.image,
          title: course.name,
          subtitle: course.category_details?.name || "Course",
          author: "Coding Cloud",
          dateRange: course.duration,
          lessons: Number(course.lecture || 0),
          students:
            parseInt(course.students.replace(/\D/g, "")) || 0,
          reviews: 0,
          price: "Free",
          oldPrice: "",
          category: course.category_details?.name || "",
          instructor: "Coding Cloud",
          instructorImage: "/images/avatar.png",
        }));

        setEvents(mapped);
      } catch (error) {
        console.error("Kids course fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // ⏳ loading UI
  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-r from-[var(--color-gradient-pink-soft)] via-[var(--color-gradient-blue-soft)] to-[var(--color-gradient-purple-soft)] text-center">   
           <p className="text-[var(--color-muted)] text-lg">Loading Junior Courses...</p>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-r from-[var(--color-gradient-pink-soft)] via-[var(--color-gradient-blue-soft)] to-[var(--color-gradient-purple-soft)]">      <div className="container-custom relative">

      {/* HEADER */}
      <div className="text-center mb-16 px-5">
        <Pill
          text="FUN LEARNING FOR KIDS"
          textColor="#6B4EFF"
          bgColor="rgba(255,255,255,0.8)"
          blur="blur(10px)"
        />

        <Heading title={<>Junior Courses</>} />

        <p className="text-[var(--color-muted)] mt-3 text-sm md:text-base max-w-xl mx-auto">
          Interactive and creative courses specially designed for kids to
          learn, explore, and grow with fun.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative group/slider flex items-center justify-center">

        {/* LEFT BUTTON */}
        {/* <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 
            bg-yellow-400 hover:bg-yellow-500 text-[var(--color-white)] w-12 h-12 rounded-full 
            flex items-center justify-center shadow-lg 
            opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
        > */}
            <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-accent-purple)] text-[var(--color-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
          >
          <FaArrowLeft />
        </button>

        {/* RIGHT BUTTON */}
        {/* <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 
            bg-pink-400 hover:bg-pink-500 text-[var(--color-white)] w-12 h-12 rounded-full 
            flex items-center justify-center shadow-lg 
            opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
        > */}
        <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-accent-purple)] text-[var(--color-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
          >
          <FaArrowRight />
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="flex p-2 overflow-x-auto gap-6 pb-10 px-4 md:px-8 w-full hide-scrollbar scroll-smooth"
        >
          {events.map((ev) => (
            <div
              key={ev.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px]
                rounded-3xl border-[var(--color-border-light)]
                transition-all duration-300 hover:-translate-y-2"
            >
              <EventCard event={ev} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default KidsCoursesSection;