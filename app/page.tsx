

// "use client";
// import CardSlider from "@/component/CardSlider";

// import { useState, useEffect, useRef } from "react";
// import {
//   FaUserGraduate,
//   FaLaptopCode,
//   FaAward,
//   FaUsers,
//   FaArrowRight,
// } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { FiBook } from "react-icons/fi";
// import Image from "next/image";

// import BlogSection from "@/component/BlogSection";
// import Categories from "@/component/Categories";
// import TestimonialSection from "@/component/TestimonialSection";
// import Button from "@/component/ui/Button";
// import HeroSection from "@/component/HeroSection";
// import KnowAboutUs from "@/component/KnowAboutUs";
// import WhyChooseUs from "@/component/WhyChooseUs";
// import EventsSection from "@/component/EventsSection";

// // images
// const manImg = "/images/hero/banner-01.png";
// const blobImg = "/images/hero/blob2.png";
// const about1 = "/images/about/about-01.png";
// const about2 = "/images/about/about-02.png";
// const about3 = "/images/about/about-03.png";

// // ============================
// // COUNTUP
// // ============================
// function CountUp({ end }: { end: string }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLSpanElement | null>(null);

//   useEffect(() => {
//     const target = parseInt(end.replace(/\D/g, ""));
//     let start = 0;

//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         const interval = setInterval(() => {
//           start += Math.ceil(target / 50);
//           if (start >= target) {
//             start = target;
//             clearInterval(interval);
//           }
//           setCount(start);
//         }, 30);
//       }
//     });

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [end]);

//   return <span ref={ref}>{count}+</span>;
// }

// // ============================
// // MAIN HOME PAGE
// // ============================
// export default function HomePage() {
// const stats = [
//   {
//     icon: <FaUserGraduate className="text-pink-500 text-3xl" />,
//     number: 500,
//     label: "Learners & counting",
//   },
//   {
//     icon: <FaLaptopCode className="text-pink-500 text-3xl" />,
//     number: 800,
//     label: "Courses & Video",
//   },
//   {
//     icon: <FaAward className="text-pink-500 text-3xl" />,
//     number: 999,
//     label: "Certified Students",
//   },
//   {
//     icon: <FaUsers className="text-pink-500 text-3xl" />,
//     number: 100,
//     label: "Registered Enrolls",
//   },
// ];


// const eventsData = [
//   {
//     id: 1,
//     image: "/images/event1.jpg",
//     title: "React Bootcamp",
//     subtitle: "Development",
//     author: "Coding Cloud",
//     dateRange: "10 - 15 Feb",
//     lessons: 12,
//     students: 50,
//     reviews: 10,
//     price: "$70",
//     oldPrice: "$120",
//     category: "Web",
//     instructor: "John",
//     instructorImage: "/images/user.jpg",
//   },
// ];

// export default function Page() {
//   return <EventsSection events={eventsData} />;
// }
//   return (
//     <div className="bg-white min-h-screen ">

//       {/* ================= HERO ================= */}
//     <HeroSection />

//       {/* CATEGORIES */}
//       <Categories />

//       {/* ABOUT */}
//       {/* <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-10">
//         <div className="hidden lg:block relative h-[500px]">
//           <Image src={about1} alt="a1" width={300} height={400} className="absolute left-10 top-0 rounded-lg" />
//           <Image src={about2} alt="a2" width={250} height={200} className="absolute right-0 top-5 rounded-lg" />
//           <Image src={about3} alt="a3" width={300} height={350} className="absolute right-10 bottom-0 rounded-lg" />
//         </div>

//         <div className="flex flex-col justify-center">
//           <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full w-fit mb-4">
//             Know About Us
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             Know About Coding Cloud Learning Platform
//           </h2>

//           <p className="text-gray-600 mb-6">
//             Far far away, behind the word mountains, far from the countries.
//           </p>

//           <div className="space-y-4">
//             <div className="flex gap-4">
//               <CiHeart className="text-red-500 text-3xl" />
//               <div>
//                 <h4 className="font-bold">Flexible Classes</h4>
//                 <p className="text-gray-500 text-sm">
//                   Learn anytime anywhere.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <FiBook className="text-blue-500 text-3xl" />
//               <div>
//                 <h4 className="font-bold">Offline Mode</h4>
//                 <p className="text-gray-500 text-sm">
//                   Download lessons offline.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <KnowAboutUs/>

//       {/* STATS */}
// <WhyChooseUs stats={stats} />

//       {/* TESTIMONIAL */}
//       <section className="py-24 bg-white overflow-hidden relative border-t-4 border-[var(--color-primary)]">

//   <div className="container-custom text-center mb-16">
//     <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-[var(--color-primary)] bg-blue-100 rounded-full uppercase tracking-wider">
//       EDUCATION FOR EVERYONE
//     </span>

//     <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
//       People like Coding Cloud education.
//       <br />
//       No joking - here’s the proof!
//     </h2>
//   </div>

//   <TestimonialSection />
// </section>
// <EventsSection events={apiData?.events || []} />

//       {/* BLOG */}
//       <BlogSection />

//     </div>
//   );
// }


"use client";

import CardSlider from "@/component/CardSlider";
import { useState, useEffect, useRef } from "react";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import event1 from "@/public/images/courses/course-online-01.jpg";
import event2 from "@/public/images/courses/course-online-02.jpg";
import event3 from "@/public/images/courses/course-online-03.jpg";
import user1 from "@/public/images/avatars/avatar-02.png";
import user2 from "@/public/images/avatars/avatar-01.png";
import user3 from "@/public/images/avatars/avatar-03.png";
import Categories from "@/component/Categories";
import TestimonialSection from "@/component/TestimonialSection";
import HeroSection from "@/component/HeroSection";
import KnowAboutUs from "@/component/KnowAboutUs";
import WhyChooseUs from "@/component/WhyChooseUs";
import EventsSection from "@/component/EventsSection";
import '../app/globals.css'
import Pill from "@/component/ui/Pill";
// ============================
// MAIN HOME PAGE
// ============================
export default function HomePage() {

  // ================= STATS DATA =================
  const stats = [
    {
      icon: <FaUserGraduate className="text-pink-500 text-3xl" />,
      number: 500,
      label: "Learners & counting",
    },
    {
      icon: <FaLaptopCode className="text-pink-500 text-3xl" />,
      number: 800,
      label: "Courses & Video",
    },
    {
      icon: <FaAward className="text-pink-500 text-3xl" />,
      number: 999,
      label: "Certified Students",
    },
    {
      icon: <FaUsers className="text-pink-500 text-3xl" />,
      number: 100,
      label: "Registered Enrolls",
    },
  ];

  // ================= EVENTS DATA =================
const eventsData = [
  {
    id: 1,
    image: event1.src,
    title: "React Bootcamp",
    subtitle: "Development",
    author: "Coding Cloud",
    dateRange: "10 - 15 Feb",
    lessons: 12,
    students: 50,
    reviews: 10,
    price: "$70",
    oldPrice: "$120",
    category: "Web",
    instructor: "John",
    instructorImage: user1.src,
  },
  {
    id: 2,
    image: event2.src,
    title: "JavaScript Mastery",
    subtitle: "Programming",
    author: "Coding Cloud",
    dateRange: "18 - 22 Feb",
    lessons: 18,
    students: 80,
    reviews: 25,
    price: "$60",
    oldPrice: "$100",
    category: "Programming",
    instructor: "Emily",
    instructorImage: user2.src,
  },
  {
    id: 3,
    image: event3.src,
    title: "UI/UX Design Bootcamp",
    subtitle: "Design",
    author: "Coding Cloud",
    dateRange: "1 - 5 Mar",
    lessons: 20,
    students: 65,
    reviews: 30,
    price: "$50",
    oldPrice: "$90",
    category: "Design",
    instructor: "Michael",
    instructorImage: user3.src,
  },
];

  // ================= RENDER =================
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <HeroSection />

      {/* CATEGORIES */}
      <Categories />

      {/* ABOUT */}
      <KnowAboutUs />

      {/* STATS */}
      <WhyChooseUs stats={stats} />

      {/* TESTIMONIAL */}
      <section className="py-24 bg-white overflow-hidden relative border-t-4 border-[var(--color-primary)]">
        <div className="container-custom text-center mb-16">
          {/* <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-[var(--color-primary)] bg-blue-100 rounded-full uppercase tracking-wider">
            EDUCATION FOR EVERYONE
          </span> */}
          <Pill
  text="Education For Everywhere"
  textColor="var(--color-primary)"
  bgColor="var(--color-primary-light)"
/>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            People like Coding Cloud education.
            <br />
            No joking - here’s the proof!
          </h2>
        </div>

        <TestimonialSection />
      </section>

      {/* EVENTS */}
      {/* <EventsSection events={eventsData} /> */}

      {/* BLOG */}

    </div>
  );
}
