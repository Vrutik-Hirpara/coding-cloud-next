"use client";

import { useState, useEffect, useRef } from "react";
import {
FaUserGraduate,
FaLaptopCode,
FaAward,
FaUsers,
FaArrowRight,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import Image from "next/image";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import Categories from "@/components/Categories";
import TestimonialSection from "@/components/TestimonialSection";

// images (public folder)
const manImg = "/images/banner-01.png";
const blobImg = "/images/blob2.png";
const about1 = "/images/about-01.png";
const about2 = "/images/about-02.png";
const about3 = "/images/about-03.png";

// ============================
// COUNTUP
// ============================
function CountUp({ end }: { end: string }) {
const [count, setCount] = useState(0);
const ref = useRef<HTMLSpanElement | null>(null);

useEffect(() => {
const target = parseInt(end.replace(/\D/g, ""));
let start = 0;

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    const interval = setInterval(() => {
      start += Math.ceil(target / 50);
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);
  }
});

if (ref.current) observer.observe(ref.current);

return () => observer.disconnect();


}, [end]);

return <span ref={ref}>{count}+</span>;
}

// ============================
// MAIN HOME PAGE
// ============================
export default function HomePage() {
const stats = [
{
icon: <FaUserGraduate className="text-pink-500 text-3xl" />,
number: "500+",
label: "Learners & counting",
},
{
icon: <FaLaptopCode className="text-pink-500 text-3xl" />,
number: "800+",
label: "Courses & Video",
},
{
icon: <FaAward className="text-pink-500 text-3xl" />,
number: "999+",
label: "Certified Students",
},
{
icon: <FaUsers className="text-pink-500 text-3xl" />,
number: "100+",
label: "Registered Enrolls",
},
];

return ( <div className="bg-white min-h-screen"> <Navbar />

```
  {/* HERO */}
  <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center">
    <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

      {/* LEFT */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white px-4 py-2 rounded shadow text-sm font-bold border">
          🏆 The Leader in Online Learning
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build The Skills <br /> To Drive Your Career.
        </h1>

        <p className="text-gray-500 text-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor.
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2">
          View Course <FaArrowRight />
        </button>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-7 relative flex justify-center items-center">
        <Image
          src={manImg}
          alt="student"
          width={400}
          height={500}
          className="relative z-10"
          priority
        />
        <Image
          src={blobImg}
          alt="blob"
          width={400}
          height={400}
          className="absolute -z-10"
        />
      </div>
    </div>
  </section>

  {/* CATEGORIES */}
  <Categories />

  {/* ABOUT */}
  <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-10">
    <div className="hidden lg:block relative h-[500px]">
      <Image src={about1} alt="a1" width={300} height={400} className="absolute left-10 top-0 rounded-lg" />
      <Image src={about2} alt="a2" width={250} height={200} className="absolute right-0 top-5 rounded-lg" />
      <Image src={about3} alt="a3" width={300} height={350} className="absolute right-10 bottom-0 rounded-lg" />
    </div>

    <div className="flex flex-col justify-center">
      <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full w-fit mb-4">
        Know About Us
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Know About Coding Cloud Learning Platform
      </h2>

      <p className="text-gray-600 mb-6">
        Far far away, behind the word mountains, far from the countries.
      </p>

      <div className="space-y-4">
        <div className="flex gap-4">
          <CiHeart className="text-red-500 text-3xl" />
          <div>
            <h4 className="font-bold">Flexible Classes</h4>
            <p className="text-gray-500 text-sm">
              Learn anytime anywhere.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <FiBook className="text-blue-500 text-3xl" />
          <div>
            <h4 className="font-bold">Offline Mode</h4>
            <p className="text-gray-500 text-sm">
              Download lessons offline.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* STATS */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-6 text-center">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-10 rounded shadow">
          <div className="mb-4 flex justify-center">{s.icon}</div>
          <h3 className="text-3xl font-bold">
            <CountUp end={s.number} />
          </h3>
          <p className="text-gray-500">{s.label}</p>
        </div>
      ))}
    </div>
  </section>

  {/* TESTIMONIAL */}
  <TestimonialSection />

  {/* BLOG */}
  <BlogSection />

  <Footer />
</div>


);
}
