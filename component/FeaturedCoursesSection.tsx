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

//aa perfect j chhe just redirect nathi thatu

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import EventCard from "./EventCard";
// import Pill from "./ui/Pill";
// import Heading from "./ui/Heading";

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
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   // 🔁 slider scroll
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

//   // 📡 Fetch featured courses
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch(
//           "https://codingcloud.pythonanywhere.com/course/"
//         );
//         const json = await res.json();

//         const featuredCourses = json.data.filter(
//           (c: CourseApi) => c.featured === true
//         );

//         const mapped: EventItem[] = featuredCourses.map(
//           (course: CourseApi) => ({
//             id: course.id,
//             image:
//               "https://codingcloud.pythonanywhere.com" + course.image,
//             title: course.name,
//             subtitle: course.category_details?.name || "Course",
//             author: "Coding Cloud",
//             dateRange: course.duration,
//             lessons: Number(course.lecture || 0),
//             students:
//               parseInt(course.students.replace(/\D/g, "")) || 0,
//             reviews: 0,
//             price: "Free",
//             oldPrice: "",
//             category: course.category_details?.name || "",
//             instructor: "Coding Cloud",
//             instructorImage: "/images/avatar.png",
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

//   // ⏳ Loading UI
//   if (loading) {
//     return (
//       <section className="py-24 bg-gradient-to-r from-[var(--color-accent-purple)] to-[#A088F8] text-[var(--color-white)] text-center">
//         Loading featured courses...
//       </section>
//     );
//   }

//   return (
//     <section className="py-24 bg-gradient-to-r from-[var(--color-accent-purple)] to-[#A088F8]">
//       <div className="container-custom relative">

//         {/* HEADER */}
//         <div className="text-center mb-16 px-5">
//           <Pill
//             text="SIMULATED TO TAKE PART IN?"
//             textColor="#ffffff"
//             bgColor="rgba(255,255,255,0.2)"
//             blur="blur(6px)"
//           />
//           <Heading title={<>Feature Course</>} />
//         </div>

//         {/* SLIDER */}
//         <div className="relative group/slider flex items-center justify-center">

//           {/* LEFT BTN */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-accent-purple)] text-[var(--color-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
//           >
//             <FaArrowLeft />
//           </button>

//           {/* RIGHT BTN */}
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-accent-purple)] text-[var(--color-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition"
//           >
//             <FaArrowRight />
//           </button>

//           {/* SCROLL CONTAINER */}
//           <div
//             ref={scrollRef}
//             className="flex p-2 overflow-x-auto gap-6 pb-10 px-4 md:px-8 w-full hide-scrollbar scroll-smooth"
//           >
//             {events.map((ev) => (
//               <EventCard key={ev.id} event={ev} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCoursesSection;



"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import router
import EventCard from "./EventCard";
import Pill from "./ui/Pill";
import Heading from "./ui/Heading";
import { apiService, BASE_URL } from "@/lib/api";

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
  slug?: string; // Add slug field if available in API
};

type EventItem = {
  id: number;
  image: string;
  title: string;
  rating: number;   // 👈 ADD THIS

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
  slug: string; // Add slug to EventItem
};

const FeaturedCoursesSection = () => {
  const router = useRouter(); // Initialize router
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

  // 🔗 Handle card click navigation
  const handleCardClick = (courseId: number, slug?: string) => {
    // If slug is available, use it, otherwise use ID
    if (slug) {
      router.push(`/courses/${slug}`);
    } else {
      router.push(`/courses/${courseId}`);
    }
  };

  // 📡 Fetch featured courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // const res = await fetch(
        //   `${BASE_URL}/course/`
        // );
        // const json = await res.json();
        const json = await apiService.getCourses();
        const featuredCourses = json.data.filter(
          (c: CourseApi) => c.featured === true
        );

        const mapped: EventItem[] = featuredCourses.map(
          (course: CourseApi) => ({
            id: course.id,
            image:
              `${BASE_URL}` + course.image,
            title: course.name,
            subtitle: course.category_details?.name || "Course",
            author: "Coding Cloud",
            dateRange: course.duration,
            lessons: Number(course.lecture || 0),
            students: course.students ? parseInt(String(course.students).replace(/\D/g, "")) : 0,
            reviews: 0,

            oldPrice: "",
            category: course.category_details?.name || "",
            instructor: "Coding Cloud",
            instructorImage: "/images/avatar.png",
            slug: course.slug, // Include slug if available
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
      <section className="py-24 bg-[#2663eb] text-[var(--color-white)] text-center">
        <p className="text-lg">Loading featured courses...</p>
      </section>
    );
  }

  // Empty state - if no featured courses
  if (events.length === 0) {
    return (
      <section className="py-24 bg-[#2663eb] text-[var(--color-white)] text-center">
        <p className="text-lg">No featured courses available at the moment.</p>
      </section>
    );
  }

  //   return (
  //     <section className="py-12 bg-[var(--color-bg-light)]">
  //       <div className="container-custom relative">

  //         {/* HEADER */}
  //         <div className="text-center mb-16 px-5" >
  //           {/* <Pill
  //             text="SIMULATED TO TAKE PART IN?"
  //             textColor="#ffffff"
  //             bgColor="rgba(255,255,255,0.2)"
  //             blur="blur(6px)"
  //           /> */}
  //           <Pill
  //             text="SIMULATED TO TAKE PART IN?"
  //             textColor="var(--color-accent-purple)"
  //             bgColor="var(--color-primary-light)"
  //           />
  //           <Heading title={<>Feature Course</>} />
  //         </div>

  //         {/* SLIDER */}
  //         {/* <div className="relative group/slider flex items-center justify-center px-4 md:px-8"> */}
  //         <div className="relative w-full  mx-auto">
  //           {/* LEFT BTN */}
  //           {/* <button
  //             onClick={() => scroll("left")}
  //             className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-accent-purple)] text-[var(--color-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-100 transition hover:scale-110"
  //           >
  //             <FaArrowLeft />
  //           </button> */}
  //           <button
  //             onClick={() => scroll("left")}
  //             className="
  //   hidden md:flex
  //   absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30
  //   w-12 h-12 rounded-full items-center justify-center
  //   transition hover:scale-110

  //   text-[var(--color-accent-purple)] drop-shadow-lg hover:opacity-80

  //   md:bg-[var(--color-accent-purple)] 
  //   md:text-[var(--color-white)] 
  //   md:shadow-lg
  // "
  //           >
  //             <FaArrowLeft />
  //           </button>

  //           {/* RIGHT BTN */}
  //           {/* <button
  //             onClick={() => scroll("right")}
  //             className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-[var(--color-accent-purple)] text-[var(--color-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-100 transition hover:scale-110"
  //           >
  //             <FaArrowRight />
  //           </button> */}
  //           <button
  //             onClick={() => scroll("right")}
  //             className="
  //   hidden md:flex
  //   absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30
  //   w-12 h-12 rounded-full items-center justify-center
  //   transition hover:scale-110

  //   text-[var(--color-accent-purple)] drop-shadow-lg hover:opacity-80

  //   md:bg-[var(--color-accent-purple)] 
  //   md:text-[var(--color-white)] 
  //   md:shadow-lg
  // "
  //           >
  //             <FaArrowRight />
  //           </button>

  //           {/* SCROLL CONTAINER */}
  //           {/* <div
  //             ref={scrollRef}
  //             className="flex p-2 overflow-x-auto gap-3 pb-10 px-4 md:px-8 w-full hide-scrollbar scroll-smooth"          >
  //             {events.map((ev) => (
  //               //             <div
  //               //               key={ev.id}
  //               //               onClick={() => handleCardClick(ev.id, ev.slug)}
  //               //               className="w-full md:w-1/3 flex-shrink-0 p-2
  //               // rounded-3xl border border-white/20
  //               // transition-all duration-300 hover:-translate-y-2 cursor-pointer"
  //               //             >
  //               //               <EventCard event={ev} />
  //               //             </div>
  //               <div
  //                 key={ev.id}
  //                 onClick={() => handleCardClick(ev.id, ev.slug)}
  //                 className="w-full md:w-1/3 flex-shrink-0 p-2 flex
  //   rounded-3xl border border-white/20
  //   transition-all duration-300 hover:-translate-y-2 cursor-pointer"
  //               >
  //                 <div className="flex flex-col w-full h-full">
  //                   <EventCard event={ev} />
  //                 </div>
  //               </div>
  //             ))}
  //           </div> */}
  //           {/* <div
  //   ref={scrollRef}
  //   className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-10 hide-scrollbar scroll-smooth"
  // >
  //   {events.map((ev) => (
  //     <div
  //       key={ev.id}
  //       onClick={() => handleCardClick(ev.id, ev.slug)}
  //       className="w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0 p-2
  //       rounded-3xl border border-white/20
  //       transition-all duration-300 hover:-translate-y-2 cursor-pointer"
  //     >
  //       <EventCard event={ev} />
  //     </div>
  //   ))}
  // </div> */}
  //           {/* <div
  //             ref={scrollRef}
  //             className="flex p-2 overflow-x-auto gap-3 pb-10 px-4 md:px-8 w-full hide-scrollbar scroll-smooth"
  //           >
  //             {events.map((ev) => (
  //               <div
  //                 key={ev.id}
  //                 onClick={() => handleCardClick(ev.id, ev.slug)}
  //                 className="
  //         w-[320px]        // Fixed width 320px
  //         flex-shrink-0 
  //         p-2 
  //         rounded-3xl 
  //         transition-all 
  //         duration-300 
  //         hover:-translate-y-2 
  //         cursor-pointer
  //       "
  //                 style={{ width: '320px', minWidth: '320px', maxWidth: '320px' }} // Inline style for force
  //               >
  //                 <div className="flex flex-col w-full h-full">
  //                   <EventCard event={ev} />
  //                 </div>
  //               </div>
  //             ))}
  //           </div> */}
  //           {/* <div
  //             ref={scrollRef}
  //             className="
  //     flex flex-nowrap
  //     overflow-x-auto
  //     gap-4 pb-10 px-4 md:px-8 w-full
  //     hide-scrollbar scroll-smooth
  //   "
  //           >
  //             {events.map((ev) => (
  //               <div
  //                 key={ev.id}
  //                 onClick={() => handleCardClick(ev.id, ev.slug)}
  //                 className="
  //         flex-shrink-0
  //         w-[320px] sm:w-[320px] md:w-[320px]
  //         p-2 rounded-3xl
  //         transition-all duration-300 hover:-translate-y-2 cursor-pointer
  //       "
  //               >
  //                 <div className="flex flex-col w-full h-full">
  //                   <EventCard event={ev} />
  //                 </div>
  //               </div>
  //             ))}
  //           </div> */}
  //           <div
  //             ref={scrollRef}
  //             className="

  //     grid grid-flow-col
  //     auto-cols-[335px]
  //     overflow-x-auto
  //     gap-4
  //     pb-10 pt-2
  //     hide-scrollbar scroll-smooth
  //   "
  //           >
  //             {events.map((ev) => (
  //               <div
  //                 key={ev.id}
  //                 onClick={() => handleCardClick(ev.id, ev.slug)}
  //                 className="
  //         w-[335px]
  //         p-2 rounded-3xl
  //         transition-all duration-300 hover:-translate-y-2 cursor-pointer
  //       "
  //               >
  //                 <div className="flex flex-col w-full h-full">
  //                   <EventCard event={ev} />
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  return (
    <section className="pt-16 bg-[var(--color-bg-light)]">
      <div className="container-custom relative">

        {/* HEADER */}
        <div className="text-center mb-4 px-5">
          <Pill
            text="SIMULATED TO TAKE PART IN?"
            textColor="var(--color-accent-purple)"
            bgColor="var(--color-primary-light)"
          />
          <Heading title={<>Feature Course</>} />
        </div>

        {/* SLIDER WITH BUTTONS ON SIDES */}
        <div className="relative flex items-center gap-4 px-0 md:px-0">
          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            className="
  hidden md:flex
  flex-shrink-0
  w-12 h-12 rounded-full items-center justify-center
  transition hover:scale-110
  bg-[var(--color-accent-purple)] shadow-lg border border-gray-200
  text-white hover:opacity-80
  z-10
"
          >


            <FaArrowLeft />
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="
            flex-1 flex justify-center
            grid grid-flow-col
            auto-cols-[335px]
            overflow-x-auto
            gap-4
            pb-10 pt-4
            hide-scrollbar scroll-smooth
          "
          >
            {events.map((ev) => (
              <div
                key={ev.id}
                onClick={() => handleCardClick(ev.id, ev.slug)}
                className="
                w-[335px]
                 rounded-3xl
                transition-all duration-300 hover:-translate-y-2 cursor-pointer
              "
              >
                <div className="flex flex-col w-full h-full">
                  <EventCard event={ev} />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="
  hidden md:flex
  flex-shrink-0
  w-12 h-12 rounded-full items-center justify-center
  transition hover:scale-110
  bg-[var(--color-accent-purple)] shadow-lg border border-gray-200
  text-white hover:opacity-80
  z-10
"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;