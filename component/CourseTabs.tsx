
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// import user1 from "@/public/images/avatars/avatar-02.png";
// import user2 from "@/public/images/avatars/avatar-01.png";
// import user3 from "@/public/images/avatars/avatar-03.png";
// import EventsSection from "./EventsSection";
// import EventCard from "./EventCard";

// type Testimonial = {
//     id: number;
//     name: string;
//     review: string;
//     rating: number;
//     created_at: string;
//     image: string;
//     category: number;
// };

// type Module = {
//     id: number;
//     name: string;
//     course_data: any;
// };

// export default function CourseTabs({ course, events }: any) {
//     const [active, setActive] = useState("overview");

//     // 🔥 REVIEW STATE
//     const [reviews, setReviews] = useState<Testimonial[]>([]);
//     const [loading, setLoading] = useState(true);

//     // 🔥 MODULE STATE
//     const [modules, setModules] = useState<Module[]>([]);
//     const [openId, setOpenId] = useState<number | null>(null);

//     // 🔥 FETCH REVIEWS
//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const res = await fetch("https://codingcloud.pythonanywhere.com/testimonials/");
//                 const json = await res.json();
//                 setReviews(json.data || []);
//             } catch (e) {
//                 console.error(e);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchReviews();
//     }, []);

//     // 🔥 FETCH MODULES
//     useEffect(() => {
//         const fetchModules = async () => {
//             try {
//                 const res = await fetch("https://codingcloud.pythonanywhere.com/modules/");
//                 const json = await res.json();
//                 setModules(json.data || []);
//             } catch (e) {
//                 console.error("module error", e);
//             }
//         };

//         fetchModules();
//     }, []);

//     // 🔥 SCROLL SPY
//     useEffect(() => {
//         const sections = ["overview", "content", "review"];

//         const handleScroll = () => {
//             let current = "overview";

//             for (let sec of sections) {
//                 const el = document.getElementById(sec);
//                 if (!el) continue;

//                 const top = el.offsetTop - 160;
//                 if (window.scrollY >= top) {
//                     current = sec;
//                 }
//             }

//             setActive(current);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);


//     const scrollTo = (id: string) => {
//         const el = document.getElementById(id);
//         if (!el) return;

//         window.scrollTo({
//             top: el.offsetTop - 140,
//             behavior: "smooth",
//         });
//     };

//     // ⭐ STAR COMPONENT
//     const Stars = ({ count }: { count: number }) => {
//         return (
//             <div className="flex gap-[2px] text-lg">
//                 {[1, 2, 3, 4, 5].map((i) => (
//                     <span key={i} className={i <= count ? "text-orange-500" : "text-gray-300"}>
//                         ★
//                     </span>
//                 ))}
//             </div>
//         );
//     };

//     // 🔥 CALCULATIONS
//     const total = reviews.length;

//     const starCounts = [5, 4, 3, 2, 1].map(
//         (star) => reviews.filter((r) => r.rating === star).length
//     );

//     const percentages = starCounts.map((c) =>
//         total ? Math.round((c / total) * 100) : 0
//     );

//     const avg =
//         total > 0
//             ? (
//                 reviews.reduce((sum, r) => sum + r.rating, 0) / total
//             ).toFixed(1)
//             : "0.0";

//     const featured = [...reviews]
//         .sort(
//             (a, b) =>
//                 new Date(b.created_at).getTime() -
//                 new Date(a.created_at).getTime()
//         )
//         .slice(0, 3);

//     console.log("COURSE TABS EVENTS 👉", events);

//     return (
//         <div className="space-y-8">

//             {/* 🔥 STICKY TABS */}
//             <div className="sticky top-[140px] z-20 bg-[var(--color-bg-light)] py-3">
//                 <div className="flex gap-3 overflow-x-auto px-1">
//                     {[
//                         { id: "overview", label: "Overview" },
//                         { id: "content", label: "Course Content" },
//                         { id: "review", label: "Review" },
//                     ].map((t) => (
//                         <button
//                             key={t.id}
//                             onClick={() => scrollTo(t.id)}
//                             className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
//               ${active === t.id
//                                     ? "bg-gradient-to-r from-[var(--color-primary)] to-purple-500 text-white shadow"
//                                     : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//                                 }`}
//                         >
//                             {t.label}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* 🔥 OVERVIEW CARD */}
//             <section
//                 id="overview"
//                 className="bg-white p-6 rounded-xl shadow border space-y-4"
//             >
//                 <h3 className="text-xl font-semibold">What you'll learn</h3>
//                 <p className="text-gray-600 leading-relaxed">{course.text}</p>

//                 <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
//                     <li>✔ Become confident developer</li>
//                     <li>✔ Learn modern tools</li>
//                     <li>✔ Build real world projects</li>
//                     <li>✔ Improve problem solving</li>
//                 </ul>
//             </section>


//             <section
//                 id="content"
//                 className="bg-white p-6 rounded-xl shadow border space-y-4"
//             >
//                 <h3 className="text-xl font-semibold">Course Content</h3>

//                 <div className="space-y-4">

//                     {modules.map((mod, index) => {
//                         const isOpen = openId === mod.id;

//                         return (
//                             <div
//                                 key={mod.id}
//                                 className="border rounded-xl overflow-hidden bg-gray-50"
//                             >
//                                 {/* HEADER */}
//                                 <button
//                                     onClick={() => setOpenId(isOpen ? null : mod.id)}
//                                     className="w-full flex items-center justify-between px-5 py-4 text-left"
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <span className="text-xl font-bold text-gray-700">+</span>

//                                         {/* <h4 className="font-semibold text-[var(--color-primary)]">
//                 Module {index + 1} - {mod.name}
//               </h4> */}
//                                         <h4 className="font-semibold text-[var(--color-primary)]">
//                                             {mod.name}
//                                         </h4>
//                                     </div>

//                                     <span className="text-xl text-gray-500">
//                                         {isOpen ? "−" : "›"}
//                                     </span>
//                                 </button>

//                                 {/* BODY */}
//                                 <AnimatePresence>
//                                     {isOpen && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             transition={{ duration: 0.35 }}
//                                             className="px-5 pb-4 text-sm text-gray-600"
//                                         >
//                                             <div className="space-y-2">
//                                                 <p>▶ Lecture 1 - Introduction</p>
//                                                 <p>▶ Lecture 2 - Practical</p>
//                                                 <p>📄 Notes & Resources</p>
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         );
//                     })}

//                 </div>
//             </section>

//             {/* 🔥 REVIEW SECTION (UPDATED) */}
//             <section
//                 id="review"
//                 className="bg-white p-6 rounded-xl shadow border space-y-8"
//             >
//                 <h3 className="text-xl font-semibold">Review</h3>

//                 {/* ⭐ SUMMARY */}
//                 <div className="flex flex-col md:flex-row gap-6 items-center">
//                     <div className="bg-gray-100 p-6 rounded-lg text-center w-[150px]">
//                         <p className="text-5xl font-bold text-[var(--color-primary)]">
//                             {avg}
//                         </p>
//                         <Stars count={Math.round(Number(avg))} />
//                         <p className="text-sm text-gray-500 mt-1">Course Rating</p>
//                     </div>

//                     <div className="flex-1 w-full space-y-2">
//                         {[5, 4, 3, 2, 1].map((star, i) => (
//                             <div key={star} className="flex items-center gap-3 text-sm">
//                                 <Stars count={star} />
//                                 <div className="flex-1 h-2 bg-gray-200 rounded">
//                                     <motion.div
//                                         initial={{ width: 0 }}
//                                         animate={{ width: `${percentages[i]}%` }}
//                                         transition={{ duration: 0.6 }}
//                                         className="h-2 bg-orange-500 rounded"
//                                     />
//                                 </div>
//                                 <span className="text-gray-500 w-[40px] text-right">
//                                     {percentages[i]}%
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* ⭐ FEATURED REVIEWS */}
//                 <div className="space-y-6">
//                     <h4 className="font-semibold text-lg">Featured review</h4>

//                     {loading ? (
//                         <p>Loading reviews...</p>
//                     ) : (
//                         featured.map((u, i) => (
//                             <motion.div
//                                 key={u.id}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="flex gap-4 border-b pb-6"
//                             >
//                                 <div className="w-16 h-16 relative rounded-lg overflow-hidden">
//                                     <Image
//                                         src={u.image}
//                                         alt={u.name}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>

//                                 <div className="flex-1">
//                                     <h5 className="font-semibold">{u.name}</h5>
//                                     <Stars count={u.rating} />
//                                     <p className="text-sm text-gray-600 mt-2">{u.review}</p>

//                                     <div className="flex gap-3 mt-3 text-gray-400 text-lg">
//                                         👍 👎
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))
//                     )}
//                 </div>
//             </section>

//             {/* 🔥 EVENTS */}
//             <section className="pt-10">
//                 <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

//                 <div className="flex gap-6 overflow-x-auto pb-6">
//                     {events?.map((ev: any) => (
//                         <EventCard key={ev.id} event={ev} />
//                     ))}
//                 </div>
//             </section>

//         </div>
//     );
// }




"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import user1 from "@/public/images/avatars/avatar-02.png";
import user2 from "@/public/images/avatars/avatar-01.png";
import user3 from "@/public/images/avatars/avatar-03.png";
import EventsSection from "./EventsSection";
import EventCard from "./EventCard";
import Faq from "@/app/faq/page";

type Testimonial = {
    id: number;
    name: string;
    review: string;
    rating: number;
    created_at: string;
    image: string;
    category: number;
};

type Module = {
    id: number;
    name: string;
    course_data: any;
};

export default function CourseTabs({ course, events }: any) {
    const [active, setActive] = useState("overview");

    // 🔥 REVIEW STATE
    const [reviews, setReviews] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    // 🔥 MODULE STATE
    const [modules, setModules] = useState<Module[]>([]);
    const [openId, setOpenId] = useState<number | null>(null);


    const [topicsData, setTopicsData] = useState<any[]>([]);
    // 🔥 FETCH REVIEWS
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch("https://codingcloud.pythonanywhere.com/testimonials/");
                const json = await res.json();
                setReviews(json.data || []);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);
useEffect(() => {
  const fetchTopics = async () => {
    try {
      const res = await fetch("https://codingcloud.pythonanywhere.com/topics/");
      const json = await res.json();
      setTopicsData(json.data || []);
    } catch (err) {
      console.error("topics error", err);
    }
  };

  fetchTopics();
}, []);
    // 🔥 FETCH MODULES
    useEffect(() => {
        const fetchModules = async () => {
            try {
                const res = await fetch("https://codingcloud.pythonanywhere.com/modules/");
                const json = await res.json();
                const filtered = (json.data || []).filter(
                    (m: any) => m.course_data === course.id
                );

                // 🔥 sort ascending by id
                const sorted = filtered.sort((a: any, b: any) => a.id - b.id);

                setModules(sorted);
            } catch (e) {
                console.error("module error", e);
            }
        };

        fetchModules();
    }, [course.id]);

    // 🔥 SCROLL SPY
    useEffect(() => {
        const sections = ["overview", "content", "review"];

        const handleScroll = () => {
            let current = "overview";

            for (let sec of sections) {
                const el = document.getElementById(sec);
                if (!el) continue;

                const top = el.offsetTop - 160;
                if (window.scrollY >= top) {
                    current = sec;
                }
            }

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        window.scrollTo({
            top: el.offsetTop - 140,
            behavior: "smooth",
        });
    };

    // ⭐ STAR COMPONENT
    const Stars = ({ count }: { count: number }) => {
        return (
            <div className="flex gap-[2px] text-lg">
                {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={i <= count ? "text-orange-500" : "text-gray-300"}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    // 🔥 CALCULATIONS
    const total = reviews.length;

    const starCounts = [5, 4, 3, 2, 1].map(
        (star) => reviews.filter((r) => r.rating === star).length
    );

    const percentages = starCounts.map((c) =>
        total ? Math.round((c / total) * 100) : 0
    );

    const avg =
        total > 0
            ? (
                reviews.reduce((sum, r) => sum + r.rating, 0) / total
            ).toFixed(1)
            : "0.0";

    const featured = [...reviews]
        .sort(
            (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
        )
        .slice(0, 3);

    console.log("COURSE TABS EVENTS 👉", events);


const getTopicsByModule = (moduleId: number) => {
  const found = topicsData.find((t) => t.module_id === moduleId);
  return found ? found.topics : [];
};
    return (
        <div className="space-y-8">

            {/* 🔥 STICKY TABS */}
            <div className="sticky top-[140px] z-20 bg-[var(--color-bg-light)] py-3">
                <div className="flex gap-3 overflow-x-auto px-1">
                    {[
                        { id: "overview", label: "Overview" },
                        { id: "content", label: "Course Content" },
                        { id: "review", label: "Review" },
                    ].map((t) => (
                        <button
                            key={t.id}
                            onClick={() => scrollTo(t.id)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
              ${active === t.id
                                    ? "bg-gradient-to-r from-[var(--color-primary)] to-purple-500 text-white shadow"
                                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 🔥 OVERVIEW CARD */}
            <section
                id="overview"
                className="bg-white p-6 rounded-xl shadow border space-y-4"
            >
                <h3 className="text-xl font-semibold">What you'll learn</h3>
                <p className="text-gray-600 leading-relaxed">{course.text}</p>

                <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
                    <li>✔ Become confident developer</li>
                    <li>✔ Learn modern tools</li>
                    <li>✔ Build real world projects</li>
                    <li>✔ Improve problem solving</li>
                </ul>
            </section>


            <section
                id="content"
                className="bg-white p-6 rounded-xl shadow border space-y-4"
            >
                <h3 className="text-xl font-semibold">Course Content</h3>

                <div className="space-y-4">

                    {modules.map((mod, index) => {
                        const isOpen = openId === mod.id;

                        return (
                            <div
                                key={mod.id}
                                className="border rounded-xl overflow-hidden bg-gray-50"
                            >
                                {/* HEADER */}
                                <button
                                    onClick={() => setOpenId(isOpen ? null : mod.id)}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl font-bold text-gray-700">+</span>

                                        {/* <h4 className="font-semibold text-[var(--color-primary)]">
                Module {index + 1} - {mod.name}
              </h4> */}
                                        {/* <h4 className="font-semibold text-[var(--color-primary)]">
                                            {mod.name}
                                        </h4> */}
                                        <h4 className="font-semibold text-[var(--color-primary)]">
                                            Module {index + 1} - {mod.name.replace(/Module\s*\d+\s*-\s*/i, "")}
                                        </h4>
                                    </div>

                                    <span className="text-xl text-gray-500">
                                        {isOpen ? "−" : "›"}
                                    </span>
                                </button>

                                {/* BODY */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="px-5 pb-4 text-sm text-gray-600"
                                        >
                                           <div className="space-y-2">
  {getTopicsByModule(mod.id).length > 0 ? (
    getTopicsByModule(mod.id).map((topic: any, i: number) => (
      <p key={topic.id}>
        ▶ Lecture {i + 1} - {topic.name}
      </p>
    ))
  ) : (
    <p className="text-gray-400">No topics available</p>
  )}
</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}

                </div>
            </section>
{/* 🔥 FAQ SECTION */}
<section
  id="faq"
  className=""
>
  <Faq courseId={course.id} />
</section>
            {/* 🔥 REVIEW SECTION (UPDATED) */}
            <section
                id="review"
                className="bg-white p-6 rounded-xl shadow border space-y-8"
            >
                <h3 className="text-xl font-semibold">Review</h3>

                {/* ⭐ SUMMARY */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-gray-100 p-6 rounded-lg text-center w-[150px]">
                        <p className="text-5xl font-bold text-[var(--color-primary)]">
                            {avg}
                        </p>
                        <Stars count={Math.round(Number(avg))} />
                        <p className="text-sm text-gray-500 mt-1">Course Rating</p>
                    </div>

                    <div className="flex-1 w-full space-y-2">
                        {[5, 4, 3, 2, 1].map((star, i) => (
                            <div key={star} className="flex items-center gap-3 text-sm">
                                <Stars count={star} />
                                <div className="flex-1 h-2 bg-gray-200 rounded">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percentages[i]}%` }}
                                        transition={{ duration: 0.6 }}
                                        className="h-2 bg-orange-500 rounded"
                                    />
                                </div>
                                <span className="text-gray-500 w-[40px] text-right">
                                    {percentages[i]}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ⭐ FEATURED REVIEWS */}
                <div className="space-y-6">
                    <h4 className="font-semibold text-lg">Featured review</h4>

                    {loading ? (
                        <p>Loading reviews...</p>
                    ) : (
                        featured.map((u, i) => (
                            <motion.div
                                key={u.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-4 border-b pb-6"
                            >
                                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                                    <Image
                                        src={u.image}
                                        alt={u.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h5 className="font-semibold">{u.name}</h5>
                                    <Stars count={u.rating} />
                                    <p className="text-sm text-gray-600 mt-2">{u.review}</p>

                                    <div className="flex gap-3 mt-3 text-gray-400 text-lg">
                                        👍 👎
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </section>





            {/* 🔥 EVENTS */}
            {/* <section className="pt-10">
                <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

                <div className="flex gap-6 overflow-x-auto pb-6">
                    {events?.map((ev: any) => (
                        <EventCard key={ev.id} event={ev} />
                    ))}
                </div>
            </section> */}

        </div>
    );
}