"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Course {
  id: number;
  slug: string;
  name: string;
  banner_img?: string;
  description?: string;
  duration?: string;
  lecture?: string;
  students?: string;
  short_description?: string;
  category_details?: {
    name: string;
  };
}

interface CourseCardProps {
  course: Course;
  rating?: number;
  reviews?: number;
  imageBaseUrl?: string;
  index?: number;
  className?: string;
  showCategory?: boolean;
  showRating?: boolean;
  showStats?: boolean;
  showDuration?: boolean;
  showDescription?: boolean;
  children?: ReactNode;
}

export default function CourseCard({
  course,
  rating = 0,
  reviews = 0,
  imageBaseUrl = "",
  index = 0,
  className = "",
  showCategory = true,
  showRating = true,
  showStats = true,
  showDuration = true,
  showDescription = true,
  children,
}: CourseCardProps) {
  // Helper function to get full image URL
  const getFullImageUrl = (bannerImg?: string) => {
    if (!bannerImg) return null;

    if (bannerImg.startsWith('http://') || bannerImg.startsWith('https://')) {
      return bannerImg;
    }

    const cleanPath = bannerImg.startsWith('/') ? bannerImg.slice(1) : bannerImg;
    return `${imageBaseUrl}/${cleanPath}`;
  };

  // Format students count
  const formatStudents = (students?: string) => {
    if (!students) return "0";
    const num = parseInt(String(students).replace(/\D/g, ""));
    return isNaN(num) ? "0" : num.toString();
  };

  const imageUrl = getFullImageUrl(course.image);

  // Rating Stars Component
  const RatingStars = () => {
    if (!showRating) return null;
    
    return (
      <div className="flex items-center gap-2 text-sm mb-2">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => {
            const ratingValue = rating || 0;
            let fillPercent = 0;

            if (ratingValue >= star) {
              fillPercent = 100;
            } else if (ratingValue > star - 1) {
              fillPercent = (ratingValue - (star - 1)) * 100;
            }

            return (
              <span key={star} className="relative text-lg">
                <span className="text-gray-300">★</span>
                <span
                  className="absolute top-0 left-0 overflow-hidden text-yellow-500"
                  style={{ width: `${fillPercent}%` }}
                >
                  ★
                </span>
              </span>
            );
          })}
        </div>
        <span className="text-orange-400">
          {rating ? (rating % 1 === 0 ? rating : rating.toFixed(1)) : 0}
        </span>
        <span className="text-[var(--color-muted)] ml-2">
          ({reviews} {reviews === 1 ? 'Review' : 'Reviews'})
        </span>
      </div>
    );
  };

  // Course Stats Component
  const CourseStats = () => {
    if (!showStats) return null;
    
    return (
      <div className="flex gap-4 text-sm text-[var(--color-muted)] mb-3">
        <span>📘 {course.lecture || "0"} Lessons</span>
        <span>👨‍🎓 {formatStudents(course.students)} Students</span>
      </div>
    );
  };

  // Duration Badge Component
  const DurationBadge = () => {
    if (!showDuration || !course.duration) return null;
    
    return (
      <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
        {course.duration}
      </span>
    );
  };

  // Course Image Component
  const CourseImage = () => {
    return (
      <div className="relative h-[180px] sm:h-[200px] w-full bg-[var(--color-bg-light)] rounded-t-2xl overflow-hidden mb-2">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={course.name}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <div class="flex items-center justify-center h-full text-[var(--color-muted-light)] bg-[var(--color-bg-softest)]">
                    <span class="text-sm">Image not available</span>
                  </div>
                `;
              }
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-[var(--color-muted-light)] bg-[var(--color-bg-softest)]">
            <span className="text-sm">No banner</span>
          </div>
        )}
        <DurationBadge />
      </div>
    );
  };

  // Course Description Component
  const CourseDescription = () => {
    if (!showDescription) return null;
    
    return (
      <p
        className="text-[var(--color-muted)] text-sm mb-4 line-clamp-2"
        dangerouslySetInnerHTML={{
          __html: course.short_description || "No description available",
        }}
      />
    );
  };

  // Category Component
  const CategoryBadge = () => {
    if (!showCategory || !course.category_details?.name) return null;
    
    return (
      <div className="text-xs text-[var(--color-muted-light)] mb-4">
        Category: {course.category_details.name}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`w-[335px] ${className}`}
    >
      <Link
        href={`/courses/${course.slug}`}
        className="block p-2 rounded-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white shadow-sm hover:shadow-xl h-full"
      >
        <div className="flex flex-col w-full h-full">
          <CourseImage />
          
          <div className="p-4 pt-2">
            <RatingStars />
            <h3 className="text-lg font-bold text-[var(--color-dark)] mb-2 line-clamp-2">
              {course.name}
            </h3>
            <CourseStats />
            <CourseDescription />
            <CategoryBadge />
            
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-accent-purple)] font-semibold hover:underline">
                Learn More →
              </span>
            </div>
            
            {children}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Skeleton Loader Component
export const CourseCardSkeleton = () => {
  return (
    <div className="w-[335px] p-2 rounded-3xl bg-white shadow-sm animate-pulse">
      <div className="h-[180px] sm:h-[200px] w-full bg-[var(--color-light)] rounded-t-2xl mb-2"></div>
      <div className="p-4">
        <div className="h-4 bg-[var(--color-light)] rounded w-1/4 mb-2"></div>
        <div className="h-6 bg-[var(--color-light)] rounded w-3/4 mb-2"></div>
        <div className="flex gap-4 mb-3">
          <div className="h-4 bg-[var(--color-light)] rounded w-1/3"></div>
          <div className="h-4 bg-[var(--color-light)] rounded w-1/3"></div>
        </div>
        <div className="h-4 bg-[var(--color-light)] rounded w-full mb-1"></div>
        <div className="h-4 bg-[var(--color-light)] rounded w-2/3"></div>
      </div>
    </div>
  );
};