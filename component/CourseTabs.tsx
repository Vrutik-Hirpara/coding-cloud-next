

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import EnrollModal from "./EnrollModal";  // 👈 IMPORT HERE

import user1 from "@/public/images/avatars/avatar-02.png";
import user2 from "@/public/images/avatars/avatar-01.png";
import user3 from "@/public/images/avatars/avatar-03.png";
import EventCard from "./EventCard";
import Faq from "@/app/faq/page";
import { BASE_URL } from "@/lib/api";
import Button from "./ui/Button";
import { Stars } from "lucide-react";

type Testimonial = {
    id: number;
    name: string;
    review: string;
    rating: number;
    created_at: string;
    image: string;
    course: number;
};

type Module = {
    id: number;
    name: string;
    course_data: any;
    descriptions: string | null; // Assuming descriptions is an array of topics or similar
};
type Course = {
    id: number;
    name: string;
    price?: number;
};
const getImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${BASE_URL}${path}`;
};
export default function CourseTabs({ course, events }: any) {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [courses, setCourses] = useState<Course[]>([]);
    const [active, setActive] = useState("overview");

    // 🔥 REVIEW STATE
    const [reviews, setReviews] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [apiAvg, setApiAvg] = useState<number | null>(null);
    // 🔥 MODULE STATE
    const [modules, setModules] = useState<Module[]>([]);
    const [openId, setOpenId] = useState<number | null>(null);
    const isClickScrolling = useRef(false);


    const [topicsData, setTopicsData] = useState<any[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        review: "",
        rating: 5,
        image: null as File | null,
    });

    // console.log("CourseTabs Rendered with course:", course);
    const handleSubmit = async () => {
        try {
            const form = new FormData();

            form.append("name", formData.name);
            form.append("review", formData.review);
            form.append("rating", formData.rating.toString());
            form.append("course", course.id.toString()); // if required

            if (formData.image) {
                form.append("image", formData.image);
            }

            const res = await fetch(
                "https://codingcloud.pythonanywhere.com/testimonials/",
                {
                    method: "POST",
                    body: form, // ❗ no headers
                }
            );

            if (!res.ok) {
                const errData = await res.json();
                console.log("Backend Error:", errData);
                throw new Error("Failed to submit review");
            }

            const data = await res.json();

            // update UI instantly
            setReviews((prev) => [data.data, ...prev]);

            setShowForm(false);
            setFormData({
                name: "",
                review: "",
                rating: 5,
                image: null,
            });

        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        }
    };
    // 🔥 FETCH REVIEWS

    //    useEffect(() => {
    //   const fetchAverage = async () => {
    //     try {
    //       const res = await fetch(
    //         "https://codingcloud.pythonanywhere.com/course-average-rating/"
    //       );

    //       if (!res.ok) {
    //         throw new Error(`HTTP error! Status: ${res.status}`);
    //       }

    //       const json = await res.json();

    //       const list = json.course_average_rating || [];

    //       const found = list.find(
    //         (item: any) => item.course_id === course.id
    //       );

    //       if (found) {
    //         setApiAvg(found.average_rating);
    //       }
    //     } catch (err) {
    //       console.error("Average rating error:", err);
    //     }
    //   };

    //   if (course?.id) {
    //     fetchAverage();
    //   }
    // }, [course?.id]);
    useEffect(() => {
        console.log("COURSE TABS EVENTS 👉", events);
    }, [events]);
    // useEffect(() => {
    //     const fetchTopics = async () => {
    //         try {
    //             const res = await fetch(`${BASE_URL}/modules/`);
    //             const json = await res.json();
    //             setTopicsData(json.data || []);

    //         } catch (err) {
    //             console.error("topics error", err);
    //         }
    //     };

    //     fetchTopics();
    // }, []);
    // 🔥 FETCH MODULES
    useEffect(() => {
        const fetchModules = async () => {
            try {
                const res = await fetch(`${BASE_URL}/modules/?course_id=${course.id}`);
                const json = await res.json();
                const filtered = (json.data || [])

                console.log("Fetched Modules:", filtered);
                // 🔥 sort ascending by id
                const sorted = filtered.sort((a: any, b: any) => a.id - b.id);

                setModules(sorted);
                // console.log(course, "ok")
                setCourses([{ ...course }])
            } catch (e) {
                console.error("module error", e);
            }
        };

        fetchModules();
    }, [course.id]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch(
                    `${BASE_URL}/testimonials/?course_id=${course.id}`
                );

                const json = await res.json();

                const list = json.testimonials || [];

                setReviews(list);
            } catch (err) {
                console.error("Review fetch error", err);
            } finally {
                setLoading(false);
            }
        };

        if (course?.id) fetchReviews();
    }, [course?.id]);
    // 🔥 SCROLL SPY
    // useEffect(() => {
    //     const sections = ["overview", "content", "review"];

    //     const handleScroll = () => {
    //         let current = "overview";

    //         for (let sec of sections) {
    //             const el = document.getElementById(sec);
    //             if (!el) continue;

    //             const top = el.offsetTop - 160;
    //             if (window.scrollY >= top) {
    //                 current = sec;
    //             }
    //         }

    //         setActive(current);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // useEffect(() => {
    //   const sections = ["overview", "content", "faqs", "review"];

    //   const handleScroll = () => {
    //     let current = "overview";
    //     const scrollPosition = window.scrollY + 120; // Small offset from top

    //     // Check from bottom to top (reverse order) so lower sections take priority
    //     for (let i = sections.length - 1; i >= 0; i--) {
    //       const sec = sections[i];
    //       const el = document.getElementById(sec);
    //       if (!el) continue;

    //       const sectionTop = el.offsetTop;

    //       // If we've scrolled past this section's top, it becomes active
    //       if (scrollPosition >= sectionTop) {
    //         current = sec;
    //         break;
    //       }
    //     }

    //     setActive(current);
    //   };

    //   window.addEventListener("scroll", handleScroll);
    //   handleScroll(); // Initial check

    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    // useEffect(() => {
    //     const sections = ["overview", "content", "faqs", "review"];

    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         let current = "overview";

    //         // Find which section is currently in view
    //         for (let sec of sections) {
    //             const el = document.getElementById(sec);
    //             if (!el) continue;

    //             const rect = el.getBoundingClientRect();
    //             const viewportHeight = window.innerHeight;

    //             // Check if section is significantly in view
    //             // More than 30% of section visible OR section top is near viewport top
    //             const visiblePercentage = Math.min(
    //                 (Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)) / rect.height,
    //                 1
    //             );

    //             if (visiblePercentage > 0.3 || (rect.top <= 150 && rect.bottom > 150)) {
    //                 current = sec;
    //                 break;
    //             }
    //         }

    //         setActive(current);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     handleScroll();

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    useEffect(() => {
        const sections = ["overview", "content", "faqs", "review"];

        const handleScroll = () => {
            if (isClickScrolling.current) return;

            const scrollPosition = window.scrollY + 200;
            // 180 = navbar + sticky tabs height

            let current = "overview";

            for (let sec of sections) {
                const el = document.getElementById(sec);
                if (!el) continue;

                const sectionTop = el.offsetTop;

                if (scrollPosition >= sectionTop) {
                    current = sec;
                }
            }

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollTo = (id: string, done?: () => void) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y =
            el.getBoundingClientRect().top + window.pageYOffset - 220;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        if (done) {
            setTimeout(done, 600);
        }
    };
    const decodeHtml = (html: string) => {
        if (typeof window === "undefined") return html;
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };
    // ⭐ STAR COMPONENT
    const Stars = ({ count }: { count: number }) => {
        return (
            <div className="flex gap-[2px] text-lg">
                {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={i <= count ? "text-orange-500" : ""}>
                        ★
                    </span>
                ))}
            </div>
        );
    };
    const getFullImageUrl = (img?: string) => {
        if (!img) return "/images/fallback.png";

        // jo already full url hoy
        if (img.startsWith("http")) return img;

        // jo "/media/..." hoy to BASE_URL sathe join karo
        const clean = img.startsWith("/") ? img.slice(1) : img;

        return `${BASE_URL}/${clean}`;
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
        );



    // const getTopicsByModule = (moduleId: number) => {
    //     const found = modules.find((t) => t.id === moduleId);
    //     return found ? found : [];

return (
    <div className="space-y-8">
        {/* Image Section */}
        <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-3xl h-[220px] md:h-[400px] lg:h-[450px] rounded overflow-hidden shadow-lg bg-white">
                {/* Equal padding on all sides around image */}
                <div className="absolute inset-4 md:inset-6">
                    <Image
                        src={getImageUrl(course.banner_img || course.image)}
                        alt={course.name}
                        fill
                        className="object-contain object-center rounded-lg"
                        priority
                    />
                </div>
            </div>
        </div>
        {/* 🔥 STICKY TABS */}
        <div className="course-tabs-sticky z-20 bg-[var(--color-bg-light)] py-3">
            {/* <div className="sticky top-[140px] z-20 py-3"> */}

            <div className="flex gap-3 overflow-x-auto px-1">
                {[
                    { id: "overview", label: "Overview" },
                    { id: "content", label: "Course Content" },
                    { id: "faqs", label: "FAQs" },
                    { id: "review", label: "Review" },
                ].map((t) => (
                    <button
                        key={t.id}
                        onClick={() => {
                            isClickScrolling.current = true;
                            setActive(t.id); // immediately highlight clicked tab
                            scrollTo(t.id, () => {
                                isClickScrolling.current = false;
                            });
                        }}
                        style={
                            active === t.id
                                ? { background: "var(--color-logo-gradient)" }
                                : {}
                        }
                        className={`py-[10px] px-[25px] rounded-[500px] rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
                          ${active === t.id
                                ? "text-white shadow"
                                : "bg-[var(--color-light)] text-[var(--color-muted)] hover:bg-gray-300"
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
            className="bg-[var(--color-white)] p-6 rounded-xl shadow border space-y-4 scroll-mt-[200px]"
        >
            <h3 className="mb-6 text-[20px] pb-5 font-bold text-[var(--color-heading)]">What you'll learn</h3>
            <div
                className="prose max-w-none text-[var(--color-text-muted)]"
                dangerouslySetInnerHTML={{
                    __html: course?.text || "",
                }}
            />

        </section>


        <section
            id="content"
            className="bg-[var(--color-white)] p-6 rounded-xl shadow border space-y-4 scroll-mt-[200px]"
        >
            <h3 className="mb-6 text-[20px] pb-5 font-bold text-[var(--color-heading)]">Course Content</h3>

            <div className="space-y-4">

                {modules.map((mod, index) => {
                    const isOpen = openId === mod.id;

                    return (
                        <div
                            key={mod.id}
                            className="border rounded-xl overflow-hidden bg-[var(--color-bg-softest)]"
                        >
                            {/* HEADER */}
                            <button
                                onClick={() => setOpenId(isOpen ? null : mod.id)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl font-bold text-[var(--color-text-medium)]">+</span>


                                    <h4 className="font-semibold text-[var(--color-accent-purple)]">
                                        Module {index + 1} - {mod.name.replace(/Module\s*\d+\s*-\s*/i, "")}
                                    </h4>
                                </div>

                                <span className="text-xl text-[var(--color-muted)]">
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
                                        className="px-5 pb-4 text-sm text-[var(--color-muted)]"
                                    >
                                        <div className="space-y-2">
                                            {mod.descriptions ? (
                                                <div
                                                    className="prose max-w-none"
                                                    dangerouslySetInnerHTML={{ __html: mod.descriptions }}
                                                />
                                            ) : (
                                                <p className="text-[var(--color-muted-light)]">
                                                    No topics available
                                                </p>
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
            id="faqs"
            className="bg-[var(--color-white)] p-6 rounded-xl shadow border scroll-mt-[200px]"
        >
            <Faq courseId={course.id} />
        </section>
        {/* 🔥 REVIEW SECTION (UPDATED) */}
        <section
            id="review"
            className="bg-[var(--color-white)] p-6 rounded-xl shadow border space-y-8 scroll-mt-[200px]"
        >
            <div className="flex justify-between items-center">
                <h3 className="mb-6 text-[20px] pb-5 font-bold text-[var(--color-heading)]">Review</h3>

                {/* <button
                        onClick={() => setShowForm(true)}
                        className="px-4 py-2 text-sm font-semibold bg-[var(--color-accent-purple)] text-white rounded-lg hover:opacity-90 transition"
                    >
                        Add Review
                    </button> */}
                <Button
                    onClick={() => setShowForm(true)}
                    variant="gradient"
                    size="md"
                    className="px-4 py-2 text-sm rounded-lg"
                >
                    Add Review
                </Button>
            </div>

            {/* ⭐ SUMMARY */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-[var(--color-bg-light)] p-6 rounded-lg text-center w-[150px]">
                    <p className="text-5xl font-bold text-[var(--color-accent-purple)]">
                        {avg}
                    </p>
                    <Stars count={Math.round(Number(avg))} />
                    <p className="text-sm text-[var(--color-muted)] mt-1">Course Rating</p>
                </div>

                <div className="flex-1 w-full space-y-2">
                    {[5, 4, 3, 2, 1].map((star, i) => (
                        <div key={star} className="flex items-center gap-3 text-sm">
                            <Stars count={star} />
                            <div className="flex-1 h-2 bg-[var(--color-light)] rounded">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentages[i]}%` }}
                                    transition={{ duration: 0.6 }}
                                    className="h-2 bg-orange-500 rounded"
                                />
                            </div>
                            <span className="text-[var(--color-muted)] w-[40px] text-right">
                                {percentages[i]}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {showForm && (
                <div className="border p-5 rounded-lg bg-[var(--color-bg-light)] space-y-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border rounded px-3 py-2"
                    />

                    <textarea
                        placeholder="Write your review..."
                        value={formData.review}
                        onChange={(e) =>
                            setFormData({ ...formData, review: e.target.value })
                        }
                        className="w-full border rounded px-3 py-2"
                    />

                    <select
                        value={formData.rating}
                        onChange={(e) =>
                            setFormData({ ...formData, rating: Number(e.target.value) })
                        }
                        className="w-full border rounded px-3 py-2"
                    >
                        {[5, 4, 3, 2, 1].map((r) => (
                            <option key={r} value={r}>
                                {r} Star
                            </option>
                        ))}
                    </select>

                    {/* IMAGE INPUT */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                image: e.target.files ? e.target.files[0] : null,
                            })
                        }
                        className="w-full border rounded px-3 py-2"
                    />

                    <div className="flex gap-3">
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-green-600 text-white rounded"
                        >
                            Submit
                        </button>

                        <button
                            onClick={() => setShowForm(false)}
                            className="px-4 py-2 bg-gray-400 text-white rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            {/* ⭐ FEATURED REVIEWS */}
            {/* <div className="space-y-6">
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
                                <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-[var(--color-bg-light)]">
                                    <Image
                                        src={getFullImageUrl(u.image) || "/images/avatar-fallback.png"}
                                        alt={u.name || "User"}
                                        fill
                                        sizes="64px"
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h5 className="font-semibold">{u.name}</h5>
                                    <Stars count={u.rating} />
                                    <p className="text-sm text-[var(--color-muted)] mt-2">{u.review}</p>


                                </div>
                            </motion.div>
                        ))
                    )}
                </div> */}
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                courses={courses}
            />

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
              
                setIsEnrollOpen(true);
              }}
              className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </motion.button> */}
        </section>
        {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {

                    setIsEnrollOpen(true);
                }}
                className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
            >
                Enroll Now
            </motion.button> */}




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
)
}