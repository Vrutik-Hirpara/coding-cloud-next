"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TermsOfService() {
return ( <div className="bg-[var(--color-bg-light)] min-h-screen">


  {/* HEADER */}
  <section className="bg-gradient-to-b from-[#ede9fe] to-white pt-16 pb-28 text-center">

    <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-accent-purple)]">
      Terms of Service
    </h1>

    <p className="mt-3 text-[var(--color-muted)] text-sm">
      Coding Cloud Terms & Conditions
    </p>

    <div className="mt-3 text-sm text-[var(--color-muted)]">
      Home <span className="mx-2">›</span> Terms of Service
    </div>

  </section>

  {/* BANNER IMAGE */}
  <div className="max-w-5xl mx-auto -mt-20 md:-mt-24 px-4">

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative h-[220px] sm:h-[280px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
    >

      <Image
        src="/images/privacy/privacy-banner.jpg"
        alt="Terms of Service"
        fill
        className="object-cover"
      />

    </motion.div>

  </div>

  {/* CONTENT */}
  <div className="max-w-4xl mx-auto px-4 py-12">

    <div className="bg-white rounded-xl shadow-md p-8 md:p-10">

      <h2 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">
        Welcome to Coding Cloud Terms of Service
      </h2>

      <ol className="space-y-6 text-[var(--color-muted)] text-sm leading-relaxed list-decimal pl-5">

        <li>
          By accessing and using Coding Cloud courses and services, you agree
          to comply with these Terms of Service and all applicable laws and
          regulations.
        </li>

        <li>
          Users must not misuse the platform, copy course materials, or
          distribute content without permission from Coding Cloud.
        </li>

        <li>
          Course purchases are non-transferable. Access is granted only to the
          registered user.
        </li>

        <li>
          Coding Cloud reserves the right to modify courses, pricing, and
          policies at any time without prior notice.
        </li>

        <li>
          Continued use of our services indicates acceptance of any updates
          to these terms.
        </li>

      </ol>

    </div>

  </div>

</div>


);
}
