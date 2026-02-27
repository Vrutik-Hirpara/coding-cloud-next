"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutBg from '@/public/images/about/about-bg.jpeg'
import KnowAboutUs from "@/component/KnowAboutUs";
import learn from '@/public/images/about/learn.jpeg'
import Button from "@/component/ui/Button";
import TestimonialSection from "@/component/TestimonialSection";
import { Link } from "lucide-react";
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-white)]">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[60vh] md:h-[82vh] flex items-center justify-center overflow-hidden">

                {/* BACKGROUND IMAGE */}

                <Image
                    src={aboutBg}
                    alt="About Coding Cloud"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-[var(--color-overlay-dark)]"></div>

                {/* CONTENT */}
                <div className="relative z-10 text-center px-4">

                    {/* CODING CLOUD TAG */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-8 md:px-12 py-3 md:py-4 mb-6 rounded-xl bg-[var(--color-white)] backdrop-blur-md text-[var(--color-accent-purple)] text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest shadow-lg"
                    >
                        CODING <span className="text-[var(--color-accent-purple)]">CLOUD</span>
                    </motion.div>

                    {/* MAIN HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--color-white)] leading-tight"
                    >
                        Your Door To The Future.
                    </motion.h1>

                </div>
            </section>

            {/* ================= REST OF ABOUT PAGE ================= */}
            <section className="py-20">
                <KnowAboutUs />


            </section>

            {/* ================= HOW WE WORK SECTION ================= */}
            <section className="py-20 md:py-24 bg-[var(--color-bg-light)]">
                <div className="container-custom grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        {/* TAG */}
                        <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold text-[var(--color-accent-purple)]  rounded-full uppercase tracking-wider">
                            HOW WE WORK
                        </span>

                        {/* HEADING */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6 leading-tight">
                            Discover yourself with <br /> coding cloud
                        </h2>

                        {/* POINTS */}
                        <div className="space-y-5 text-[var(--color-text)]">

                            <div>
                                <h4 className="font-semibold text-lg">For Creative learning</h4>
                                <p className="text-[var(--color-muted)]">Developing the creative innovators of tomorrow</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">For a better tomorrow</h4>
                                <p className="text-[var(--color-muted)]">A Success-oriented learning environment.</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">Ignite young minds</h4>
                                <p className="text-[var(--color-muted)]">Learning to lead with technology</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">Technology that inspires</h4>
                                <p className="text-[var(--color-muted)]">Looking to the future with hope</p>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <Button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-dark)] text-[var(--color-white)] font-semibold hover:scale-105 transition">
                            Learn More About Us →
                        </Button>
                    </motion.div>

                    {/* RIGHT VIDEO IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-lg">

                           
                            <Image
  src={learn}
  alt="How we work"
  width={600}
  height={400}
  className="w-full h-auto object-cover"
  style={{ width: "100%", height: "auto" }}
/>

                          {/* PLAY BUTTON */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[var(--color-accent-yellow)] text-[var(--color-white)] text-lg sm:text-xl md:text-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110">
    ▶
  </div>
</div>

                        </div>
                    </motion.div>

                </div>
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
                                    className="bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-dark)] text-[var(--color-white)] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
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
            </section>


        </div>
    );
}