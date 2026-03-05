"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
return ( <div className="bg-[var(--color-bg-light)] min-h-screen">


  {/* HEADER */}
  <section className="bg-gradient-to-b from-[#ede9fe] to-white pt-16 pb-28 text-center">

    <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-accent-purple)]">
      Privacy Policy
    </h1>

    <p className="mt-3 text-[var(--color-muted)] text-sm">
      Coding Cloud Privacy Policy
    </p>

    <div className="mt-3 text-sm text-[var(--color-muted)]">
      Home <span className="mx-2">›</span> Privacy Policy
    </div>

  </section>

  {/* BANNER IMAGE (same as course page style) */}
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
        alt="Privacy Policy"
        fill
        className="object-cover"
      />

    </motion.div>

  </div>

  {/* MAIN CONTENT */}
  <div className="max-w-4xl mx-auto px-4 py-12">

    <div className="bg-white rounded-xl shadow-md p-8 md:p-10">

      <h2 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">
        Welcome to Coding Cloud Privacy Policy
      </h2>

      <ol className="space-y-6 text-[var(--color-muted)] text-sm leading-relaxed list-decimal pl-5">

        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>

        <li>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </li>

        <li>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit.
        </li>

        <li>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </li>

      </ol>

    </div>

  </div>

</div>


);
}
