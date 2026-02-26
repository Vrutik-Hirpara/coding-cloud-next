
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { BASE_URL } from "@/lib/api";

interface BlogDetail {
  id: number;
  title: string;
  short_description: string;
  content: string;
  featured_image: string;
  slug: string;
  publish_date?: string;
}


export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${BASE_URL}/blogs/`, {
          cache: "no-store",
        });

        const data = await res.json();

        let blogsArray: BlogDetail[] = [];

        if (data.data) blogsArray = data.data;
        else if (Array.isArray(data)) blogsArray = data;

        const found = blogsArray.find((b) => b.slug === slug);

        setBlog(found || null);
      } catch (err) {
        console.error("Blog detail fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const getImage = (img?: string) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return `${BASE_URL}${img}`;
  };

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-[var(--color-muted)]">Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-[var(--color-danger)]">Blog not found</p>
      </div>
    );
  }

  return (
    <section className="bg-[var(--color-white)]">

      {/* 🔥 HERO SECTION (gradient header) */}
      <div className="w-full bg-soft-gradient py-16 md:py-24 text-center">
        <div className="container-custom max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-6xl font-bold text-[var(--color-dark)] leading-tight"
          >
            {blog.title}
          </motion.h1>

          <p className="text-[var(--color-muted)] my-3 text-sm md:text-4xl">
            {blog.short_description}
          </p>

        </div>
      </div>

      {/* 🔥 MAIN IMAGE */}


      <div className="container-custom -mt-16 md:-mt-24 flex items-center justify-center">
        <div className="relative w-full h-[240px] sm:h-[300px] md:w-[720px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">

          {blog.featured_image && (
            <Image
              src={getImage(blog.featured_image)!}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          )}

        </div>
      </div>

      {/* 🔥 BLOG CONTENT */}
      <div className="container-custom max-w-3xl py-12 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-none text-[var(--color-text)]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </section>
  );
}