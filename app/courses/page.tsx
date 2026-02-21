"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API } from "@/lib/api";

interface Course {
  id: number;
  name: string;
  banner_img?: string;
  description?: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetch(API.COURSES.LIST, { cache: "no-store" });
        const data = await res.json();
        setCourses(data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">
        All Courses
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="h-48 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                {course.banner_img ? (
                  <img
                    src={course.banner_img}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              <h2 className="text-lg font-bold mb-2">{course.name}</h2>

              <p className="text-sm text-gray-500 line-clamp-2">
                {course.description || "No description available"}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
