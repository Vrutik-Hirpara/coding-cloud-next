

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Button from "./ui/Button";

// const Footer = () => {
//   const our = [
//     { id: 1, name: "Contact Us", link: "/contact" },
//     { id: 2, name: "Blog", link: "/blogs" },
//   ];

//   const linkIcon = [
//     { id: 1, icon: FaFacebookF, link: "https://www.facebook.com/codingcloudinstitute" },
//     { id: 2, icon: FaYoutube, link: "https://www.youtube.com/@CodingHunt" },
//     { id: 3, icon: FaInstagram, link: "https://www.instagram.com/codingcloud_institute/" },
//     { id: 4, icon: FaLinkedinIn, link: "https://www.linkedin.com/company/coding-cloud/" },
//   ];

//   return (
//     <footer className="bg-[var(--color-bg-light)] border-t border-[var(--color-border)]">
//       <div className="max-w-7xl mx-auto px-5 pt-24 pb-12">

//         {/* MAIN */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

//           {/* BRAND */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-4"
//           >
//             <Image
//               src="/logos/logo.png"
//               alt="Coding Cloud"
//               width={170}
//               height={50}
//               className="mb-6"
//             />

//             <p className="text-[var(--color-text)] leading-relaxed mb-10 max-w-sm">
//               We’re always in search for talented and motivated people. Don’t be shy introduce yourself!
//             </p>

//             <Button href="/contact" icon={FaArrowRight}>
//               Contact With Us
//             </Button>
//           </motion.div>

//           {/* LINKS */}
//           <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-2">

//             {/* COURSES */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-bold text-[var(--color-text)] mb-7">
//                 Top Course
//               </h3>

//               <ul className="space-y-4 text-[var(--color-text)]">
//                 {["Java Programming", "MERN Stack ", "Data Science", "Machine Learnign", "Data Analytics"].map(
//                   (item) => (
//                     <li key={item}>
//                       <Link
//                         href="#"
//                         className="relative group transition-colors duration-300 hover:text-[var(--color-primary)]"
//                       >
//                         {item}
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
//                       </Link>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </motion.div>

//             {/* COMPANY */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-bold text-[var(--color-text)] mb-7">
//                 Our Company
//               </h3>

//               <ul className="space-y-4 text-[var(--color-text)]">
//                 {our.map((item) => (
//                   <li key={item.id}>
//                     <Link
//                       href={item.link}
//                       className="relative group transition-colors duration-300 hover:text-[var(--color-primary)]"
//                     >
//                       {item.name}
//                       <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* CONTACT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="col-span-2 sm:col-span-1"
//             >
//               <h3 className="text-lg font-bold text-[var(--color-text)] mb-7">
//                 Get Contact
//               </h3>

//               <div className="space-y-4 text-sm text-[var(--color-text)] mb-8">
//                 <p className="hover:text-[var(--color-primary)] cursor-pointer">
//                   Phone: +91 95373 44018
//                 </p>
//                 <p className="hover:text-[var(--color-primary)] cursor-pointer break-all">
//                   E-mail: pune@codingcloudinstitute.com
//                 </p>
//                 <p>
//                   Office No. 201, 2nd Floor, Polaris Building, Nr. Noble
//                   Hospital Hadapsar, Pune, 411028
//                 </p>
//               </div>

//               {/* SOCIAL */}
//            <div className="flex gap-4">
//   {linkIcon.map((data) => {
//     const Icon = data.icon;
//     return (
//       <motion.a
//         key={data.id}
//         href={data.link}
//         target="_blank"
//         initial={{ y: 0, scale: 1 }}
//         whileHover={{ y: -6, scale: 1.08 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 18,
//         }}
//         className="w-11 h-11 rounded-full bg-[var(--color-white)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] shadow-sm hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] hover:shadow-lg"
//       >
//         <Icon size={15} />
//       </motion.a>
//     );
//   })}
// </div>
//             </motion.div>

//           </div>
//         </div>

//         {/* BOTTOM */}

        // <motion.div
        //   initial={{ opacity: 0, y: 20 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   transition={{ delay: 0.4, duration: 0.6 }}
        //   viewport={{ once: true }}
        //   className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text)]"
        // >
        //   <p>
        //     Copyright © 2025 <span className="font-semibold">Coding Cloud</span>. All Rights Reserved
        //   </p>

        //   <div className="flex items-center gap-6">
        //     <Link href="#" className="hover:text-[var(--color-primary)]">
        //       Terms of service
        //     </Link>
        //     <Link href="/privacy" className="hover:text-[var(--color-primary)]">
        //       Privacy policy
        //     </Link>
        //   </div>
        // </motion.div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { API } from "@/lib/api";

interface Course {
  id: number;
  name: string;
  slug: string;
}

const Footer = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const our = [
    { id: 1, name: "Contact Us", link: "/contact" },
    { id: 2, name: "Blog", link: "/blogs" },
  ];

  const linkIcon = [
    {
      id: 1,
      icon: FaFacebookF,
      link: "https://www.facebook.com/codingcloudinstitute",
    },
    {
      id: 2,
      icon: FaYoutube,
      link: "https://www.youtube.com/@CodingHunt",
    },
    {
      id: 3,
      icon: FaInstagram,
      link: "https://www.instagram.com/codingcloud_institute/",
    },
    {
      id: 4,
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/coding-cloud/",
    },
  ];

  // 🔥 FETCH COURSES FROM API (FIXED)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(API.COURSES.LIST, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch courses");

        const data = await res.json();

        let arr: Course[] = [];

        if (Array.isArray(data)) arr = data;
        else if (data.data && Array.isArray(data.data)) arr = data.data;
        else if (data.results && Array.isArray(data.results)) arr = data.results;
        else {
          const possible = Object.values(data).find((v) => Array.isArray(v));
          if (possible) arr = possible as Course[];
        }

        setCourses(arr.slice(0, 5));
      } catch (err) {
        console.error("Course fetch error:", err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <footer className="bg-[var(--color-bg-light)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-5 pt-24 pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Image src="/logos/logo.png" alt="Coding Cloud" width={170} height={50} className="mb-6" />

            <p className="text-[var(--color-text)] leading-relaxed mb-10 max-w-sm">
              We’re always in search for talented and motivated people.
            </p>

            <Button href="/contact" icon={FaArrowRight}>
              Contact With Us
            </Button>
          </motion.div>

          {/* LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* COURSES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-7">
                Top Course
              </h3>

              <ul className="space-y-4 text-[var(--color-text)]">
                {courses.map((course) => (
                  <li key={course.id}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="relative group hover:text-[var(--color-primary)]"
                    >
                      {course.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* COMPANY + CONTACT same as before ... */}


            {/* COMPANY */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-7">
                Our Company
              </h3>

              <ul className="space-y-4 text-[var(--color-text)]">
                {our.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="relative group transition-colors duration-300 hover:text-[var(--color-primary)]"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-2 sm:col-span-1"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-7">
                Get Contact
              </h3>

              <div className="space-y-4 text-sm text-[var(--color-text)] mb-8">
                <p className="hover:text-[var(--color-primary)] cursor-pointer">
                  Phone: +91 95373 44018
                </p>
                <p className="hover:text-[var(--color-primary)] cursor-pointer break-all">
                  E-mail: pune@codingcloudinstitute.com
                </p>
                <p>
                  Office No. 201, 2nd Floor, Polaris Building, Nr. Noble
                  Hospital Hadapsar, Pune, 411028
                </p>
              </div>

              {/* SOCIAL */}
           <div className="flex gap-4">
  {linkIcon.map((data) => {
    const Icon = data.icon;
    return (
      <motion.a
        key={data.id}
        href={data.link}
        target="_blank"
        initial={{ y: 0, scale: 1 }}
        whileHover={{ y: -6, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="w-11 h-11 rounded-full bg-[var(--color-white)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)] shadow-sm hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] hover:shadow-lg"
      >
        <Icon size={15} />
      </motion.a>
    );
  })}
</div>
            </motion.div>



          </div>
        </div>

        {/* BOTTOM same as before */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text)]"
        >
          <p>
            Copyright © 2025 <span className="font-semibold">Coding Cloud</span>. All Rights Reserved
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[var(--color-primary)]">
              Terms of service
            </Link>
            <Link href="/privacy" className="hover:text-[var(--color-primary)]">
              Privacy policy
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;