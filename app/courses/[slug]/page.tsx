

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import CourseTabs from "@/component/CourseTabs";
// import { motion } from "framer-motion";
// import CourseSidebar from "@/component/CourseSidebar";
// import EventsSection from "@/component/EventsSection";
// import event1 from "@/public/images/courses/course-online-01.jpg";
// import event2 from "@/public/images/courses/course-online-02.jpg";
// import user1 from "@/public/images/avatars/avatar-02.png";
// import user2 from "@/public/images/avatars/avatar-01.png";
// import RelatedCourses from "@/component/RelatedCourses";
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
//   category_details: { name: string };
// }

// export default function Page() {
//   const { id } = useParams();
//   const [course, setCourse] = useState<Course | null>(null);
//   const [events, setEvents] = useState<any[]>([]);

// useEffect(() => {
//   fetch("https://codingcloud.pythonanywhere.com/course/")
//     .then((res) => res.json())
//     .then((json) => {
//       const list = Array.isArray(json.data) ? json.data : [];

//       const selected = list.find(
//         (c: Course) => String(c.id) === String(id)
//       );

//       setCourse(selected || null);
//     });
// }, [id]);

//   if (!course) return <div className="p-10 text-center">Loading...</div>;
//   const eventsData = [
//     {
//       id: 1,
//       image: event1.src,
//       title: "React Bootcamp",
//       subtitle: "Development",
//       author: "Coding Cloud",
//       dateRange: "10 - 15 Feb",
//       lessons: 12,
//       students: 50,
//       reviews: 10,
//       price: "$70",
//       oldPrice: "$120",
//       category: "Web",
//       instructor: "John",
//       instructorImage: user1.src,
//     },
//     {
//       id: 2,
//       image: event2.src,
//       title: "JavaScript Mastery",
//       subtitle: "Programming",
//       author: "Coding Cloud",
//       dateRange: "18 - 22 Feb",
//       lessons: 18,
//       students: 80,
//       reviews: 25,
//       price: "$60",
//       oldPrice: "$100",
//       category: "Programming",
//       instructor: "Emily",
//       instructorImage: user2.src,
//     },

//   ];
//   return (
//     <div className="bg-[var(--color-bg-light)]">

//       {/* 🔥 HISTUDY HEADER */}
//       <section className="bg-gradient-to-b from-[#ede9fe] to-white pt-16 pb-28 text-center">
//         <div className="flex justify-center items-center gap-4 text-sm mb-4 flex-wrap">
//           <span className="bg-white px-3 py-1 rounded-full shadow text-[var(--color-primary)] font-semibold">
//             Bestseller
//           </span>
//           <span className="text-yellow-500 font-semibold">1.2 ★★★★★</span>
//           <span className="text-gray-500">(6 ratings)</span>
//           <span className="text-gray-500">{course.students} students</span>
//         </div>

//         <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
//           {course.name}
//         </h1>

//         <p className="mt-3 text-gray-500 text-sm">
//           Updated 12/2024 • {course.language}
//         </p>
//       </section>

//       {/* 🔥 VIDEO CARD */}
//       <div className="max-w-5xl mx-auto -mt-24 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="relative h-[240px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
//         >
//           <Image src={course.banner_img} alt="" fill className="object-cover" />


//         </motion.div>
//       </div>

//       {/* 🔥 MAIN CONTENT */}
//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//   {/* Mobile: Stack vertically, Desktop: Grid */}
//   <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">

//     {/* LEFT SIDEBAR - Mobile: Normal, Desktop: Sticky */}
//     <div className="lg:sticky lg:top-[140px] lg:self-start">
//       <CourseSidebar course={course} />
//     </div>

//     {/* RIGHT CONTENT - Full width on mobile */}
//     <div className="w-full">
//       <CourseTabs course={course} events={eventsData} />
//     </div>
//   </div>
// </div>

//     <RelatedCourses events={eventsData} />

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
  import RelatedCourses from "@/component/RelatedCourses";

  import event1 from "@/public/images/courses/course-online-01.jpg";
  import event2 from "@/public/images/courses/course-online-02.jpg";
  import user1 from "@/public/images/avatars/avatar-02.png";
  import user2 from "@/public/images/avatars/avatar-01.png";
  import { BASE_URL } from "@/lib/api";

  interface Course {
    id: number;
    slug: string;
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
  const getImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${BASE_URL}${path}`;
  };
  export default function Page() {
    const { slug } = useParams();
    const [course, setCourse] = useState<Course | null>(null);

    // 🔥 FETCH COURSE BY SLUG
    useEffect(() => {
      const getCourse = async () => {
        try {
          const res = await fetch(
            `${BASE_URL}/course/?slug=${slug}`
          );

          const json = await res.json();

          const list = Array.isArray(json.data) ? json.data : [];

          // API already filter by slug but still safety
          const selected =
            list.find((c: Course) => c.slug === slug) || list[0];

          setCourse(selected || null);
        } catch (err) {
          console.error("Course fetch error", err);
        }
      };

      getCourse();
    }, [slug]);

    if (!course) {
      return <div className="p-10 text-center">Loading...</div>;
    }

    // 🔥 STATIC EVENTS DATA
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
        {/* 🔥 HEADER */}
        <section className="bg-gradient-to-b from-[#ede9fe] to-white pt-16 pb-28 text-center">
          <div className="flex justify-center items-center gap-4 text-sm mb-4 flex-wrap">
            <span className="bg-white px-3 py-1 rounded-full shadow text-[var(--color-primary)] font-semibold">
              Bestseller
            </span>
            <span className="text-yellow-500 font-semibold">1.2 ★★★★★</span>
            <span className="text-gray-500">(6 ratings)</span>
            <span className="text-gray-500">
              {course.students || 0} students
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
            {course.name}
          </h1>

          <p className="mt-3 text-gray-500 text-sm">
            Updated 12/2024 • {course.language}
          </p>
        </section>

        {/* 🔥 VIDEO IMAGE */}
        <div className="max-w-5xl mx-auto -mt-24 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[240px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
          >
            {/* <Image src={course.banner_img} alt="banner image" fill className="object-cover"  unoptimized/> */}
          <Image
    src={getImageUrl(course.banner_img || course.image)}
    alt={course.name}
    fill
    className="object-cover"
    unoptimized
  />
          </motion.div>
        </div>

        {/* 🔥 MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <CourseSidebar course={course} />
            </div>

            <div className="w-full">
              <CourseTabs course={course} events={eventsData} />
            </div>
          </div>
        </div>

        <RelatedCourses  />
      </div>
    );
  }