"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutBg from '@/public/images/about/about-bg.jpeg'
import KnowAboutUs from "@/component/KnowAboutUs";
import learn from '@/public/images/about/learn.jpeg'
import Button from "@/component/ui/Button";
import TestimonialSection from "@/component/TestimonialSection";
import { Link } from "lucide-react";
import RegisterPage from "../register/page";
import Accreditation from "@/component/Accreditation";
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-white)]">

            {/* ================= HERO SECTION ================= */}
            {/* <section className="relative w-full h-[60vh] md:h-[82vh] flex items-center justify-center overflow-hidden">


                <Image
                    src={aboutBg}
                    alt="About Coding Cloud"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[var(--color-overlay-dark)]"></div>

                <div className="relative z-10 text-center px-4">

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-8 md:px-12 py-3 md:py-4 mb-6 rounded-xl bg-[var(--color-white)] backdrop-blur-md text-[var(--color-accent-purple)] text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest shadow-lg"
                    >
                        CODING <span className="text-[var(--color-accent-purple)]">CLOUD</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--color-white)] leading-tight"
                    >
                        Your Door To The Future.
                    </motion.h1>

                </div>
            </section> */}
            <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={aboutBg}
                        alt="About Coding Cloud"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-60"
                    />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-6">

                    {/* Badge */}
                    {/* <div className="inline-block   px-8 py-3 rounded-xl">
                        <span className="tracking-[0px] font-extrabold text-blue-600 text-3xl">
                            About Us
                        </span>
                    </div> */}

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                        {/* Your Door To The */}
                        <span className="block text-blue-400 animate-pulse">
                            About Us
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-200 mt-6 text-lg max-w-xl mx-auto">
                        Start your journey in IT with expert training and guaranteed career growth.
                    </p>

                    {/* Button */}
                    <div className="mt-8 flex justify-center gap-4">
                        <Button
                            href="/courses"
                            variant="gradient">
                            Explore Courses
                        </Button>

                        <button className="px-8 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition">
                            Contact Us
                        </button>
                    </div>

                </div>

            </section>

            {/* ================= REST OF ABOUT PAGE ================= */}
            <section className="py-20">
                <KnowAboutUs />


            </section>
            <RegisterPage />
            {/* ================= HOW WE WORK SECTION ================= */}
           <section className="py-20 md:py-24 bg-gradient-to-br from-[var(--color-bg-light)] via-white to-[var(--color-bg-light)] relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  <div className="container-custom relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* TAG with modern design */}
        <motion.span 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-6 py-2 mb-6 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-purple)] to-purple-600 rounded-full border-2 border-purple-200 shadow-lg"
        >
          ⚡ HOW WE WORK ⚡
        </motion.span>

        {/* HEADING with gradient */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-purple)] to-purple-800">
            Discover yourself
          </span>
          <br />
          <span className="text-[var(--color-text)] relative">
            with coding cloud
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[var(--color-accent-purple)] to-purple-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </h2>

        {/* POINTS with creative numbering */}
        <div className="space-y-6">
          {[
            {
              num: "01",
              title: "For Creative learning",
              desc: "Developing the creative innovators of tomorrow",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              num: "02",
              title: "For a better tomorrow",
              desc: "A Success-oriented learning environment.",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              num: "03",
              title: "Ignite young minds",
              desc: "Learning to lead with technology",
              gradient: "from-orange-500 to-red-500"
            },
            {
              num: "04",
              title: "Technology that inspires",
              desc: "Looking to the future with hope",
              gradient: "from-green-500 to-emerald-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number badge */}
              <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.num}
              </div>
              
              {/* Content with left padding for number */}
              <div className="pl-12">
                <h4 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-accent-purple)] group-hover:to-purple-600 transition-all duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}"></span>
                  {item.desc}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 rounded-br-xl border-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Interactive stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-purple)] to-purple-600">10K+</div>
            <div className="text-sm text-gray-500">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">500+</div>
            <div className="text-sm text-gray-500">Expert Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600">50+</div>
            <div className="text-sm text-gray-500">Live Projects</div>
          </div>
        </motion.div> */}
      </motion.div>

      {/* RIGHT VIDEO IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          {/* Animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-purple)] via-purple-500 to-pink-500 rounded-3xl animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '3px' }}></div>
          
          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
            <Image
              src={learn}
              alt="How we work"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              style={{ width: "100%", height: "auto" }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
            >
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-purple)] to-purple-600">
                ✨ Interactive Learning
              </span>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-30 blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-30 blur-xl"
        />
      </motion.div>

    </div>
  </div>

  <style jsx>{`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }
  `}</style>
</section>


            {/* ================= TESTIMONIAL SECTION ================= */}
            <section className="relative py-24 overflow-hidden bg-[var(--color-bg-soft)]">

                <div className=" relative">

                    {/* MAIN GRID */}
                    <div className="grid lg:grid-cols-10 gap-10 items-center">

                        {/* ================= LEFT SIDE CARD (20%) ================= */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 relative z-20"
                        >
                            <div className="rounded-2xl p-10 backdrop-blur-md ">

                                <div className="inline-block px-5 py-2 mb-6 text-sm font-semibold text-[var(--color-accent-purple)]  rounded-full">
                                    LEARNERS FEEDBACK
                                </div>

                                <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text)] leading-tight mb-6">
                                    What Our <br /> Learners Say
                                </h2>

                                <p className="text-[var(--color-muted)] mb-8 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repudiandae consectetur adipisicing elit. Repudiandae
                                </p>
                                <Button
                                href="/contact"
                                variant="gradient"
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </motion.div>


                        {/* ================= RIGHT SIDE TESTIMONIALS (80%) ================= */}
                        <div className="lg:col-span-7 relative">

                            {/* LEFT FADE SHADOW */}
                            <div className="hidden lg:block absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[var(--color-bg-soft)] to-transparent z-10" />

                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <TestimonialSection />
                            </motion.div>

                        </div>

                    </div>

                </div>
                <Accreditation/>
            </section>


        </div>
    );
}