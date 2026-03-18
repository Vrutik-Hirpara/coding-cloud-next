

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
                `${BASE_URL}/course_wise_rating/`,
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

    useEffect(() => {
        console.log("COURSE TABS EVENTS 👉", events);
    }, [events]);

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
    // useEffect(() => {
    //     const fetchReviews = async () => {
    //         try {
    //             const res = await fetch(
    //                 `${BASE_URL}/testimonials/?course_id=${course.id}`
    //             );

    //             const json = await res.json();

    //             const list = json.testimonials || [];

    //             setReviews(list);
    //         } catch (err) {
    //             console.error("Review fetch error", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (course?.id) fetchReviews();
    // }, [course?.id]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch(
                    `${BASE_URL}/course_wise_rating/?course_id=${course.id}`
                );

                const json = await res.json();

                // Check if API returns the new structure
                if (json.reviews) {
                    // New API structure
                    setReviews(json.reviews || []);
                    setApiAvg(json.average_rating || null);
                } else if (json.testimonials) {
                    // Old API structure (fallback)
                    setReviews(json.testimonials || []);
                    setApiAvg(null); // or calculate locally
                } else {
                    // Fallback
                    setReviews(json || []);
                    setApiAvg(null);
                }
            } catch (err) {
                console.error("Review fetch error", err);
            } finally {
                setLoading(false);
            }
        };

        if (course?.id) fetchReviews();
    }, [course?.id]);
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
                        {/* <Image
                        src={getImageUrl(course.banner_img || course.image)}
                        alt={course.name}
                        fill
                        className="object-contain object-center rounded-lg"
                        priority
                    /> */}
                        <Image
                            src={
                                getImageUrl(course.banner_img || course.image) ||
                                "/images/placeholder-course.jpg"
                            }
                            alt={course.name}
                            fill
                            className="object-contain object-center"
                            priority
                            unoptimized
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
            {/* <section
            id="review"
            className="bg-[var(--color-white)] p-6 rounded-xl shadow border space-y-8 scroll-mt-[200px]"
        >
            <div className="flex justify-between items-center">
                <h3 className="mb-6 text-[20px] pb-5 font-bold text-[var(--color-heading)]">Review</h3>

              
                <Button
                    onClick={() => setShowForm(true)}
                    variant="gradient"
                    size="md"
                    className="px-4 py-2 text-sm rounded-lg"
                >
                    Add Review
                </Button>
            </div>

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

    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Rating
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setFormData({ ...formData, rating: star })}
            className="focus:outline-none"
          >
            <svg
              className={`w-8 h-8 ${
                star <= formData.rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              } transition-colors`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
      {formData.rating > 0 && (
        <p className="text-sm text-gray-500">
          Selected: {formData.rating} {formData.rating === 1 ? 'Star' : 'Stars'}
        </p>
      )}
    </div>

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
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
      >
        Submit
      </button>

      <button
        onClick={() => setShowForm(false)}
        className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
      >
        Cancel
      </button>
    </div>
  </div>
)}
          
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                courses={courses}
            />

           
        </section> */}


            <section
                id="review"
                className="bg-[var(--color-white)] p-6 rounded-xl shadow border space-y-8 scroll-mt-[200px]"
            >
                <div className="flex justify-between items-center">
                    <h3 className="mb-6 text-[20px] pb-5 font-bold text-[var(--color-heading)]">Reviews</h3>
                    <Button
                        onClick={() => setShowForm(true)}
                        variant="gradient"
                        size="md"
                        className="px-4 py-2 text-sm rounded-lg"
                    >
                        Add Review
                    </Button>
                </div>

                {/* ⭐ SUMMARY FROM API */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[var(--color-bg-light)] p-6 rounded-lg text-center w-[150px]">
                        <p className="text-5xl font-bold text-[var(--color-accent-purple)]">
                            {apiAvg !== null ? apiAvg.toFixed(1) : avg}
                        </p>
                        <Stars count={Math.round(apiAvg !== null ? apiAvg : Number(avg))} />
                        <p className="text-sm text-[var(--color-muted)] mt-1">
                            {total} {total === 1 ? 'Rating' : 'Ratings'}
                        </p>
                    </div>

                    <div className="flex-1 w-full space-y-2">
                        {[5, 4, 3, 2, 1].map((star, i) => {
                            // Get count from API or calculate locally
                            const count = starCounts[4 - i] || 0; // Reverse index since 5 is first in array
                            const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

                            return (
                                <div key={star} className="flex items-center gap-3 text-sm">
                                    <Stars count={star} />
                                    <div className="flex-1 h-2 bg-[var(--color-light)] rounded">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 0.6 }}
                                            className="h-2 bg-orange-500 rounded"
                                        />
                                    </div>
                                    <span className="text-[var(--color-muted)] w-[40px] text-right">
                                        {percentage}%
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* OPTIONAL: Show total reviews count */}
                <div className="text-sm text-[var(--color-muted)] border-t pt-4">
                    Total {total} {total === 1 ? 'review' : 'reviews'} • Average {apiAvg !== null ? apiAvg.toFixed(1) : avg}/5
                </div>

                {/* REVIEW FORM */}
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

                        {/* STAR RATING INPUT */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Rating
                            </label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                        className="focus:outline-none"
                                    >
                                        <svg
                                            className={`w-8 h-8 ${star <= formData.rating
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                                } transition-colors`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            {formData.rating > 0 && (
                                <p className="text-sm text-gray-500">
                                    Selected: {formData.rating} {formData.rating === 1 ? 'Star' : 'Stars'}
                                </p>
                            )}
                        </div>

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

                        <div className="flex">
                            {/* <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                    Submit
                </button> */}
                            <Button
                                onClick={handleSubmit}
                                variant="gradient"
                                size="sm"
                                className="px-2 py-2 rounded  text-white transition-colors"
                            >
                                Submit
                            </Button>
                            {/* <button
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
                            >
                                Cancel
                            </button> */}
                             <Button
    onClick={() => setShowForm(false)}
    size="sm"
    className="px-2 py-2 rounded text-white"
  >
    Cancel
  </Button>
                        </div>
                    </div>
                )}

                {/* DISPLAY REVIEWS */}
                {/* <div className="space-y-6">
        <h4 className="font-semibold text-lg">Student Reviews</h4>
        {loading ? (
            <p>Loading reviews...</p>
        ) : featured.length > 0 ? (
            featured.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-0">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            {review.image ? (
                                <img 
                                    src={getFullImageUrl(review.image)} 
                                    alt={review.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/fallback.png';
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold">
                                    {review.name?.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h5 className="font-semibold">{review.name}</h5>
                                <span className="text-xs text-[var(--color-muted)]">
                                    {new Date(review.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <Stars count={review.rating} />
                            <p className="text-sm mt-2">{review.review}</p>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-[var(--color-muted)]">No reviews yet. Be the first to review!</p>
        )}
    </div> */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">Student Reviews</h4>
                        {featured.length > 3 && (
                            <span className="text-sm text-[var(--color-muted)]">
                                {featured.length} total reviews
                            </span>
                        )}
                    </div>

                  {loading ? (
    <p>Loading reviews...</p>
) : featured.length > 0 ? (
    <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {featured.map((review) => (
            <div key={review.id} className="border-b pb-4 last:border-0">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
    {review.image ? (
        <img
            src={getFullImageUrl(review.image)}
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => {
                // Prevent infinite loop
                e.currentTarget.onerror = null;
                // Hide the img and show parent with initials
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold">${review.name?.charAt(0).toUpperCase() || '?'}</div>`;
                }
            }}
        />
    ) : (
        <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold">
            {review.name?.charAt(0).toUpperCase()}
        </div>
    )}
</div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h5 className="font-semibold truncate">{review.name}</h5>
                            <span className="text-xs text-[var(--color-muted)] whitespace-nowrap">
                                {new Date(review.created_at).toLocaleDateString()}
                            </span>
                        </div>
                        <Stars count={review.rating} />
                        <p className="text-sm mt-2 break-words">{review.review}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
) : (
    <p className="text-[var(--color-muted)]">No reviews yet. Be the first to review!</p>
)}
                </div>
                <EnrollModal
                    isOpen={isEnrollOpen}
                    onClose={() => setIsEnrollOpen(false)}
                    courses={courses}
                />
            </section>
            {/* <Button
                onClick={() => setIsEnrollOpen(true)}
                variant="gradient"
                size="md"
                className="px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-base rounded-full whitespace-nowrap hover:opacity-90"
            >
                Enroll Now
            </Button> */}



        </div>
    )
}