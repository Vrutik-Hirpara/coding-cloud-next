"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "@/lib/api";

// 🔥 TYPE
type FaqType = {
  id: number;
  course: number;
  course_name: string;
  question: string;
  answer: string;
};

// 🔥 PROPS
export default function Faq({ courseId }: { courseId: number }) {
  const [faqs, setFaqs] = useState<FaqType[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH FAQ DATA
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/faqs/`
        );
        const json = await res.json();

        // 👉 FILTER BY COURSE ID
        const filtered = (json.data || []).filter(
          (f: FaqType) => f.course === courseId
        );

        setFaqs(filtered);
      } catch (err) {
        console.error("FAQ fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) fetchFaqs();
  }, [courseId]);

  return (
    <section className="bg-white p-6 rounded-xl shadow border space-y-5">
      {/* 🔥 TITLE */}
      <h3 className="text-xl font-semibold text-[var(--color-text)]">
        Frequently Asked Questions
      </h3>

      {/* 🔥 LOADING */}
      {loading && (
        <p className="text-gray-400 text-sm">Loading FAQs...</p>
      )}

      {/* 🔥 EMPTY */}
      {!loading && faqs.length === 0 && (
        <p className="text-gray-400 text-sm">
          No FAQs available for this course.
        </p>
      )}

      {/* 🔥 FAQ LIST */}
      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="border rounded-xl overflow-hidden bg-gray-50"
            >
              {/* 🔥 HEADER */}
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <h4 className="font-semibold text-[var(--color-primary)] pr-4">
                  {faq.question}
                </h4>

                <span className="text-xl text-gray-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* 🔥 BODY */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-5 pb-4 text-sm text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}