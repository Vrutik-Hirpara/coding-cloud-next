// "use client";

// import React, { useEffect, useState } from "react";
// import EventsSection from "@/component/EventsSection";

// type CourseApi = {
//   id: number;
//   name: string;
//   image: string;
//   duration: string;
//   lecture: string;
//   students: string;
//   category_details: {
//     name: string;
//   };
//   featured: boolean;
// };

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

// const FeaturedCoursesSection = () => {
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch(
//           "https://codingcloud.pythonanywhere.com/course/"
//         );
//         const json = await res.json();

//         // 👇 Only featured courses
//         const featuredCourses = json.data.filter(
//           (c: CourseApi) => c.featured === true
//         );

//         // 👇 Map to EventCard structure
//         const mapped: EventItem[] = featuredCourses.map(
//           (course: CourseApi) => ({
//             id: course.id,
//             image: "https://codingcloud.pythonanywhere.com" + course.image,
//             title: course.name,
//             subtitle: course.category_details?.name || "Course",
//             author: "Coding Cloud",
//             dateRange: course.duration,
//             lessons: Number(course.lecture || 0),
//             students: parseInt(course.students.replace(/\D/g, "")) || 0,
//             reviews: 0,
//             price: "Free",
//             oldPrice: "",
//             category: course.category_details?.name || "",
//             instructor: "Coding Cloud",
//             instructorImage: "/images/avatar.png", // keep your default
//           })
//         );

//         setEvents(mapped);
//       } catch (err) {
//         console.error("Error fetching courses:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   if (loading) {
//     return (
//       <div className="py-24 text-center text-[var(--color-white)]">
//         Loading featured courses...
//       </div>
//     );
//   }

//   return <EventsSection events={events} />;
// };

// export default FeaturedCoursesSection;


"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EventCard from "./EventCard";
import Pill from "./ui/Pill";
import Heading from "./ui/Heading";

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
  featured: boolean;
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

const FeaturedCoursesSection = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 🔁 slider scroll
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

  // 📡 Fetch featured courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          "https://codingcloud.pythonanywhere.com/course/"
        );
        const json = await res.json();

        const featuredCourses = json.data.filter(
          (c: CourseApi) => c.featured === true
        );

        const mapped: EventItem[] = featuredCourses.map(
          (course: CourseApi) => ({
            id: course.id,
            image:
              "https://codingcloud.pythonanywhere.com" + course.image,
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
          })
        );

        setEvents(mapped);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // ⏳ Loading UI
  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-r from-[var(--color-accent-purple)] to-[#A088F8] text-[var(--color-white)] text-center">
        Loading featured courses...
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-r from-[var(--color-accent-purple)] to-[#A088F8]">
      <div className="container-custom relative">

        {/* HEADER */}
        <div className="text-center mb-16 px-5">
          <Pill
            text="SIMULATED TO TAKE PART IN?"
            textColor="#ffffff"
            bgColor="rgba(255,255,255,0.2)"
            blur="blur(6px)"
          />
          <Heading title={<>Feature Course</>} />
        </div>

        {/* SLIDER */}
        <div className="relative group/slider flex items-center justify-center">

          {/* LEFT BTN */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-accent-purple)] text-[var(--color-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
          >
            <FaArrowLeft />
          </button>

          {/* RIGHT BTN */}
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
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;