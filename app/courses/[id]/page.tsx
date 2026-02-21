// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { motion } from "framer-motion";

// interface Course {
//   id: number;
//   name: string;
//   image: string;
//   banner_img: string;
//   text: string;
//   duration: string;
//   lecture: string;
//   students: string;
//   level: string;
//   language: string;
//   certificate: string;
//   category_details: {
//     name: string;
//   };
// }

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// export default function CourseDetailsPage() {
//   const { id } = useParams();
//   const [course, setCourse] = useState<Course | null>(null);

//   useEffect(() => {
//     fetch("https://codingcloud.pythonanywhere.com/course/")
//       .then((res) => res.json())
//       .then((data) => {
//         const selected = data.find((item: Course) => item.id == Number(id));
//         setCourse(selected);
//       });
//   }, [id]);

//   if (!course) return <div className="p-10 text-center">Loading...</div>;

//   return (
//     <div className="bg-gray-50">

//       {/* 🔷 Banner Section */}
//       <section className="relative h-[300px] md:h-[350px] w-full">
//         <Image
//           src={course.banner_img}
//           alt={course.name}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
//           <h1 className="text-2xl md:text-4xl font-bold">
//             {course.name}
//           </h1>
//           <p className="mt-2 text-sm">{course.category_details.name}</p>
//         </div>
//       </section>

//       {/* 🔷 Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

//         {/* LEFT CONTENT */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className="md:col-span-2 space-y-6"
//         >
//           {/* Video / Image */}
//           <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow">
//             <Image
//               src={course.image}
//               alt={course.name}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Tabs */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-3">Overview</h2>
//             <p className="text-gray-600 leading-relaxed">
//               {course.text}
//             </p>
//           </div>

//           {/* Course Content */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Course Content</h2>

//             <ul className="space-y-3 text-gray-600">
//               <li>📘 Lectures: {course.lecture}</li>
//               <li>⏱ Duration: {course.duration}</li>
//               <li>🎓 Level: {course.level}</li>
//               <li>🌐 Language: {course.language}</li>
//               <li>👨‍🎓 Students: {course.students}</li>
//               <li>📜 Certificate: {course.certificate}</li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDEBAR */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className="bg-white p-6 rounded-xl shadow h-fit sticky top-24"
//         >
//           <h2 className="text-2xl font-bold text-blue-600 mb-4">
//             ₹750.00
//           </h2>

//           <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
//             Add To Cart
//           </button>

//           <button className="w-full border mt-3 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
//             Buy Now
//           </button>

//           <div className="mt-6 space-y-3 text-sm text-gray-600">
//             <p>📘 Lectures: {course.lecture}</p>
//             <p>⏱ Duration: {course.duration}</p>
//             <p>🎓 Level: {course.level}</p>
//             <p>🌐 Language: {course.language}</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import CourseTabs from "@/component/CourseTabs";
import { motion } from "framer-motion";
import CourseSidebar from "@/component/CourseSidebar";
import EventsSection from "@/component/EventsSection";
import event1 from "@/public/images/courses/course-online-01.jpg";
import event2 from "@/public/images/courses/course-online-02.jpg";
import user1 from "@/public/images/avatars/avatar-02.png";
import user2 from "@/public/images/avatars/avatar-01.png";
import RelatedCourses from "@/component/RelatedCourses";
interface Course {
  id: number;
  name: string;
  image: string;
  banner_img: string;
  text: string;
  duration: string;
  lecture: string;
  students: string;
  level: string;
  language: string;
  certificate: string;
  category_details: { name: string };
}

export default function Page() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://codingcloud.pythonanywhere.com/course/")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((c: Course) => c.id == Number(id));
        setCourse(selected);
      });
    fetch("https://codingcloud.pythonanywhere.com/events/")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!course) return <div className="p-10 text-center">Loading...</div>;
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

  ];
  return (
    <div className="bg-[var(--color-bg-light)]">

      {/* 🔥 HISTUDY HEADER */}
      <section className="bg-gradient-to-b from-[#ede9fe] to-white pt-16 pb-28 text-center">
        <div className="flex justify-center items-center gap-4 text-sm mb-4 flex-wrap">
          <span className="bg-white px-3 py-1 rounded-full shadow text-[var(--color-primary)] font-semibold">
            Bestseller
          </span>
          <span className="text-yellow-500 font-semibold">1.2 ★★★★★</span>
          <span className="text-gray-500">(6 ratings)</span>
          <span className="text-gray-500">{course.students} students</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
          {course.name}
        </h1>

        <p className="mt-3 text-gray-500 text-sm">
          Updated 12/2024 • {course.language}
        </p>
      </section>

      {/* 🔥 VIDEO CARD */}
      <div className="max-w-5xl mx-auto -mt-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[240px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
        >
          <Image src={course.banner_img} alt="" fill className="object-cover" />


        </motion.div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-[25%_70%] gap-0">

        {/* LEFT SIDEBAR */}
        <CourseSidebar course={course} />

        {/* RIGHT CONTENT */}
        <div>
          <CourseTabs course={course} events={eventsData} />
        </div>
      </div>

    <RelatedCourses events={eventsData} />

    </div>

  );
}