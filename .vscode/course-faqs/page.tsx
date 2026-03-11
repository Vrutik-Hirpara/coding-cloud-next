"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/ui/Button.tsx";
import aboutBg from "@/images/about/about-02.png";
import { BASE_URL } from "@/api";

interface Course {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

export default function CourseFaqsPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/courses/`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setCourses(data);
        } else if (data?.data) {
          setCourses(data.data);
        }
      } catch (err) {
        console.error("Courses fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Course FAQs"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

        <div className="relative z-10 max-w-4xl px-6">

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            <span className="block text-blue-400 animate-pulse">
              Course FAQs
            </span>
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-xl mx-auto">
            Find answers to frequently asked questions for each course.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              href="/courses"
              variant="gradient"
              className="flex justify-center"
            >
              Explore Courses
            </Button>

            <Button
              href="/contact"
              variant="outlineWhite"
            >
              Ask Question
            </Button>
          </div>

        </div>
      </section>

      {/* ================= COURSE LIST ================= */}
      <section className="py-16 bg-[var(--color-white)]">
        <div className="container-custom">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)]">
              Select a Course
            </h2>
            <p className="text-[var(--color-muted)] mt-3">
              Click on a course to view its FAQs
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-500">
              Loading courses...
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
                >

                  <Link href={`/courses/${course.slug}`}>

                    <div className="relative h-36 w-full bg-gray-100">

                      {course.image ? (
                        <Image
                          src={`${BASE_URL}${course.image}`}
                          alt={course.name}
                          fill
                          sizes="200px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          No Image
                        </div>
                      )}

                    </div>

                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-[var(--color-dark)]">
                        {course.name}
                      </h3>
                    </div>

                  </Link>

                </motion.div>
              ))}

            </div>
          )}
        </div>
      </section>
    </>
  );
}