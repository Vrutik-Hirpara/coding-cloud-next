
//aama static images chhe ane active class nathi

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import { API, BASE_URL } from "@/lib/api";
// import { motion } from "framer-motion";
// // ICONS
// import {
//   FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter,
//   FaChevronUp, FaSearch, FaBars, FaTimes,
//   FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle
// } from "react-icons/fa";

// import {
//   SiDjango, SiJavascript, SiFlutter, SiHtml5, SiC
// } from "react-icons/si";

// import { TbBrandCpp } from "react-icons/tb";
// import { IoCallOutline } from "react-icons/io5";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";

// // ICON MAPPER
// const getCourseIcon = (name: string) => {
//   const n = name.toLowerCase();

//   if (n.includes("python django")) return <SiDjango className="text-green-900 text-xl" />;
//   if (n.includes("python")) return <FaPython className="text-yellow-500 text-2xl" />;
//   if (n.includes("machine learning")) return <BrainCircuit className="text-[var(--color-accent-pink)] text-xl" />;
//   if (n.includes("data science")) return <MdOutlineScience className="text-[var(--color-accent-purple)] text-2xl" />;
//   if (n.includes("data analytics")) return <BsGraphUp className="text-yellow-600 text-xl" />;
//   if (n.includes("testing")) return <FaCheckCircle className="text-[var(--color-danger)] text-xl" />;

//   if (n.includes("javascript")) return <SiJavascript className="text-[var(--color-accent-yellow-light)] text-xl" />;
//   if (n.includes("react")) return <FaReact className="text-[var(--color-accent-purple)] text-2xl" />;
//   if (n.includes("node")) return <FaNodeJs className="text-green-600 text-2xl" />;
//   if (n.includes("mern")) return <div className="flex text-xs"><FaReact /><FaNodeJs /></div>;
//   if (n.includes("android")) return <FaAndroid className="text-green-500 text-2xl" />;
//   if (n.includes("flutter")) return <SiFlutter className="text-[var(--color-accent-purple)] text-xl" />;

//   if (n.includes("c++")) return <TbBrandCpp className="text-blue-700 text-2xl" />;
//   if (n.includes("c programming")) return <SiC className="text-blue-500 text-2xl" />;
//   if (n.includes("php")) return <FaPhp className="text-[var(--color-accent-indigo)] text-2xl" />;
//   if (n.includes("java")) return <FaJava className="text-[var(--color-danger)] text-2xl" />;
//   if (n.includes("web design")) return <SiHtml5 className="text-orange-500 text-xl" />;
//   if (n.includes("aws")) return <FaAws className="text-orange-400 text-2xl" />;

//   return <FaCheckCircle className="text-[var(--color-muted-light)] text-xl" />;
// };

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
// const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
//         // const data = await res.json();
//         // setCourses(data || []);
//         const json = await res.json();
//         setCourses(Array.isArray(json.data) ? json.data : []);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getCourses();
//   }, []);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close dropdown on pathname change
//   useEffect(() => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//   }, [pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleDropdownMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleDropdownMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleCourseClick = (slug: string) => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//     router.push(`/courses/${slug}`);
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`sticky top-0 z-[999] bg-[var(--color-white)] transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
//         }`}
//     >

//       {/* TOP BAR - Visible on all devices */}
//       <div className="flex h-10 sm:h-12 bg-[#1a1a2e] text-[var(--color-muted-light)] text-xs sm:text-sm justify-between items-center px-3 sm:px-6 overflow-x-auto">
//         <div className="flex gap-3 sm:gap-6 min-w-max">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <FaInstagram className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm">100K</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <FaFacebookSquare className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm">500K</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <IoCallOutline className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm">+91-9876543210</span>
//           </motion.div>
//         </div>

//         <div className="flex gap-2 sm:gap-4 min-w-max">
//           {[FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter].map((Icon, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="relative border-b border-gray-100">
//         <div className="container mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between">

//           {/* LOGO with animation */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link href="/" onClick={() => setIsDropdownOpen(false)}>
//               <Image
//                 src="/logos/logo.png"
//                 alt="logo"
//                 width={130}
//                 height={40}
//                 className="w-[90px] sm:w-[110px] md:w-[130px] h-auto object-contain"
//               />
//             </Link>
//           </motion.div>

//           {/* DESKTOP MENU - Same for all screen sizes */}
//           <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
//             <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 font-bold text-[var(--color-text-medium)]">
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className="hover:text-[var(--color-accent-purple)] transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
//                 >
//                   Home
//                 </Link>
//               </motion.li>

//               {/* COURSES with Hover Dropdown - Full Width */}
//               <li
//                 className="relative py-3 sm:py-4 md:py-6"
//                 onMouseEnter={handleDropdownMouseEnter}
//                 onMouseLeave={handleDropdownMouseLeave}
//               >
//                 <motion.span
//                   whileHover={{ y: -2 }}
//                   className="flex items-center gap-1 hover:text-[var(--color-accent-purple)] text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer"
//                 >
//                   Courses
//                   <FaChevronUp className={`transition-transform duration-300 text-[10px] sm:text-xs ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </motion.span>

//                 {/* Full Width Dropdown */}
//                 {isDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="fixed left-0 w-screen bg-[var(--color-white)] shadow-2xl border-t z-50 py-6 sm:py-8"
//                     style={{
//                       top: scrolled ? '80px' : '96px',
//                     }}
//                   >
//                     <div className="container mx-auto px-4 sm:px-6">
//                       {loading ? (
//                         <div className="text-center text-[var(--color-muted-light)] py-8">Loading courses...</div>
//                       ) : (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
//                           {courses.map((course: any) => (
//                             <motion.div
//                               key={course.id}
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.2 }}
//                             >
//                               <button
//                                 onClick={() => handleCourseClick(course.slug)}
//                                 className="w-full text-left flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-[var(--color-bg-softest)] transition-all border border-transparent hover:border-gray-200"
//                               >
//                                 <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-full flex-shrink-0">
//                                   {getCourseIcon(course.name)}
//                                 </div>
//                                 <span className="text-[10px] sm:text-xs md:text-sm font-medium line-clamp-2">
//                                   {course.name}
//                                 </span>
//                               </button>
//                             </motion.div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </li>

//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/about"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className="hover:text-[var(--color-accent-purple)] transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
//                 >
//                   About
//                 </Link>
//               </motion.li>

//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className="hover:text-[var(--color-accent-purple)] transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
//                 >
//                   Contact
//                 </Link>
//               </motion.li>
//             </ul>

//            <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   onClick={() => {
//     setIsDropdownOpen(false);
//     setIsEnrollOpen(true);
//   }}
//               className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
//             >
//               Enroll Now
//             </motion.button>
//           </div>
//         </div>
//    </nav>

// {/* 🔥 ENROLL MODAL START */}
// {isEnrollOpen && (
//   <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
//     <div className="bg-[var(--color-white)] rounded-xl w-full max-w-lg p-6 relative shadow-xl">

//       {/* CLOSE BUTTON */}
//       <button
//         onClick={() => setIsEnrollOpen(false)}
//         className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-black text-xl"
//       >
//         <FaTimes />
//       </button>

//    <h2 className="text-2xl font-bold mb-1 text-[var(--color-text-strong)]">🎓 Enroll Now</h2>
// <p className="text-sm text-[var(--color-muted)] mb-3">
//   Fill the form below to enroll in your desired course. Our team will contact you shortly 🚀
// </p>
// <p className="text-xs text-[var(--color-muted-light)] mb-4">* All fields are required</p>

// <form
//   onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     const first_name = (formData.get("first_name") as string).trim();
//     const last_name = (formData.get("last_name") as string).trim();
//     const email = (formData.get("email") as string).trim();
//     const mobile = (formData.get("mobile") as string).trim();
//     const city = (formData.get("city") as string).trim();
//     const course_id = Number(formData.get("course_id"));
//     const course_name = (formData.get("course_name") as string).trim();

//     if (!first_name || !last_name || !email || !mobile || !city || !course_id) {
//       alert("⚠️ Please fill all fields");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("⚠️ Invalid Email Address");
//       return;
//     }

//     if (!/^[0-9]{10}$/.test(mobile)) {
//       alert("⚠️ Enter valid 10 digit mobile number");
//       return;
//     }

//     const payload = {
//       first_name,
//       last_name,
//       email,
//       mobile,
//       city,
//       course_id,
//       course_name,
//     };

//     try {
//       const res = await fetch(`${BASE_URL}/enroll/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (res.ok) {
//         alert("🎉 Enrollment Successful!");
//         setIsEnrollOpen(false);
//         router.push("/");
//       } else {
//         alert("❌ Failed to enroll");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error ❌");
//     }
//   }}
//   className="grid gap-3"
// >
//   <input name="first_name" placeholder="First Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//   <input name="last_name" placeholder="Last Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//   <input name="email" type="email" placeholder="Email" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//   <input name="mobile" placeholder="Mobile" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//   <input name="city" placeholder="City" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />

//   <select
//     name="course_id"
//     required
//     className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
//     onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
//       const selected = courses.find((c: any) => c.id == e.target.value);
//       const input = document.querySelector('input[name="course_name"]') as HTMLInputElement;
//       if (input) input.value = selected?.name || "";
//     }}
//   >
//     <option value="">Select Course</option>
//     {courses.map((c: any) => (
//       <option key={c.id} value={c.id}>{c.name}</option>
//     ))}
//   </select>

//   <input type="hidden" name="course_name" />

//   {/* 🚀 Attractive Button */}
//   <button
//     type="submit"
//     className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-[var(--color-white)] py-2.5 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
//   >
//     🎓 Enroll Now
//   </button>
// </form>
//     </div>
//   </div>
// )}
// {/* 🔥 ENROLL MODAL END */}

// </motion.header>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { API, BASE_URL } from "@/lib/api";
import { motion } from "framer-motion";
// ICONS
import {
  FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter,
  FaChevronUp, FaSearch, FaBars, FaTimes,
  FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle
} from "react-icons/fa";

import {
  SiDjango, SiJavascript, SiFlutter, SiHtml5, SiC
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BrainCircuit } from "lucide-react";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

// ICON MAPPER
const getCourseIcon = (name: string) => {
  const n = name.toLowerCase();

  if (n.includes("python django")) return <SiDjango className="text-green-900 text-xl" />;
  if (n.includes("python")) return <FaPython className="text-yellow-500 text-2xl" />;
  if (n.includes("machine learning")) return <BrainCircuit className="text-[var(--color-accent-pink)] text-xl" />;
  if (n.includes("data science")) return <MdOutlineScience className="text-[var(--color-accent-purple)] text-2xl" />;
  if (n.includes("data analytics")) return <BsGraphUp className="text-yellow-600 text-xl" />;
  if (n.includes("testing")) return <FaCheckCircle className="text-[var(--color-danger)] text-xl" />;

  if (n.includes("javascript")) return <SiJavascript className="text-[var(--color-accent-yellow-light)] text-xl" />;
  if (n.includes("react")) return <FaReact className="text-[var(--color-accent-purple)] text-2xl" />;
  if (n.includes("node")) return <FaNodeJs className="text-green-600 text-2xl" />;
  if (n.includes("mern")) return <div className="flex text-xs"><FaReact /><FaNodeJs /></div>;
  if (n.includes("android")) return <FaAndroid className="text-green-500 text-2xl" />;
  if (n.includes("flutter")) return <SiFlutter className="text-[var(--color-accent-purple)] text-xl" />;

  if (n.includes("c++")) return <TbBrandCpp className="text-blue-700 text-2xl" />;
  if (n.includes("c programming")) return <SiC className="text-blue-500 text-2xl" />;
  if (n.includes("php")) return <FaPhp className="text-[var(--color-accent-indigo)] text-2xl" />;
  if (n.includes("java")) return <FaJava className="text-[var(--color-danger)] text-2xl" />;
  if (n.includes("web design")) return <SiHtml5 className="text-orange-500 text-xl" />;
  if (n.includes("aws")) return <FaAws className="text-orange-400 text-2xl" />;

  return <FaCheckCircle className="text-[var(--color-muted-light)] text-xl" />;
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 🔥 Function to check if link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // FETCH COURSES
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetch(API.COURSES.LIST, {
          cache: "no-store",
        });
        const json = await res.json();
        setCourses(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on pathname change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleCourseClick = (slug: string) => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    router.push(`/courses/${slug}`);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-[999] bg-[var(--color-white)] transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
        }`}
    >

      {/* TOP BAR - Visible on all devices */}
      <div className="flex h-10 sm:h-12 bg-[#1a1a2e] text-[var(--color-muted-light)] text-xs sm:text-sm justify-between items-center px-3 sm:px-6 overflow-x-auto">
        <div className="flex gap-3 sm:gap-6 min-w-max">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
          >
            <FaInstagram className="text-xs sm:text-base" />
            <span className="text-[10px] sm:text-sm">100K</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
          >
            <FaFacebookSquare className="text-xs sm:text-base" />
            <span className="text-[10px] sm:text-sm">500K</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
          >
            <IoCallOutline className="text-xs sm:text-base" />
            <span className="text-[10px] sm:text-sm">+91-9876543210</span>
          </motion.div>
        </div>

        <div className="flex gap-2 sm:gap-4 min-w-max">
          {[FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="relative border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between">

          {/* LOGO with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" onClick={() => setIsDropdownOpen(false)}>
              <Image
                src="/logos/logo.png"
                alt="logo"
                width={130}
                height={40}
                className="w-[90px] sm:w-[110px] md:w-[130px] h-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* DESKTOP MENU - Same for all screen sizes */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
            <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 font-bold text-[var(--color-text-medium)]">
              {/* HOME */}
              <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="/"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/") && pathname === "/"
                      ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
                      : "hover:text-[var(--color-accent-purple)]"
                    }`}
                >
                  Home
                </Link>
              </motion.li>

              {/* COURSES with Hover Dropdown - Full Width */}
              <li
                className="relative py-3 sm:py-4 md:py-6"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-1 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer ${isActive("/courses")
                      ? "text-[var(--color-accent-purple)] font-bold"
                      : "hover:text-[var(--color-accent-purple)]"
                    }`}
                >
                  Courses
                  <FaChevronUp className={`transition-transform duration-300 text-[10px] sm:text-xs ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.span>

                {/* Full Width Dropdown */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 w-screen bg-[var(--color-white)] shadow-2xl border-t z-50 py-6 sm:py-8"
                    style={{
                      top: scrolled ? '80px' : '96px',
                    }}
                  >
                    <div className="container mx-auto px-4 sm:px-6">
                      {loading ? (
                        <div className="text-center text-[var(--color-muted-light)] py-8">Loading courses...</div>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                          {courses.map((course: any) => (
                            <motion.div
                              key={course.id}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <button
                                onClick={() => handleCourseClick(course.slug)}
                                className="w-full text-left flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-[var(--color-bg-softest)] transition-all border border-transparent hover:border-gray-200"
                              >
                                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-full flex-shrink-0">
                                  {getCourseIcon(course.name)}
                                </div>
                                <span className="text-[10px] sm:text-xs md:text-sm font-medium line-clamp-2">
                                  {course.name}
                                </span>
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </li>

              {/* ABOUT */}
              <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="/about"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/about")
                      ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
                      : "hover:text-[var(--color-accent-purple)]"
                    }`}
                >
                  About
                </Link>
              </motion.li>

              {/* CONTACT */}
              <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="/contact"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/contact")
                      ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
                      : "hover:text-[var(--color-accent-purple)]"
                    }`}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsDropdownOpen(false);
                setIsEnrollOpen(true);
              }}
              className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* 🔥 ENROLL MODAL START */}
      {isEnrollOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[var(--color-white)] rounded-xl w-full max-w-lg p-6 relative shadow-xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsEnrollOpen(false)}
              className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-black text-xl"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold mb-1 text-[var(--color-text-strong)]">🎓 Enroll Now</h2>
            <p className="text-sm text-[var(--color-muted)] mb-3">
              Fill the form below to enroll in your desired course. Our team will contact you shortly 🚀
            </p>
            <p className="text-xs text-[var(--color-muted-light)] mb-4">* All fields are required</p>

            <form
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                const first_name = (formData.get("first_name") as string).trim();
                const last_name = (formData.get("last_name") as string).trim();
                const email = (formData.get("email") as string).trim();
                const mobile = (formData.get("mobile") as string).trim();
                const city = (formData.get("city") as string).trim();
                const course_id = Number(formData.get("course_id"));
                const course_name = (formData.get("course_name") as string).trim();

                if (!first_name || !last_name || !email || !mobile || !city || !course_id) {
                  alert("⚠️ Please fill all fields");
                  return;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                  alert("⚠️ Invalid Email Address");
                  return;
                }

                if (!/^[0-9]{10}$/.test(mobile)) {
                  alert("⚠️ Enter valid 10 digit mobile number");
                  return;
                }

                const payload = {
                  first_name,
                  last_name,
                  email,
                  mobile,
                  city,
                  course_id,
                  course_name,
                };

                try {
                  const res = await fetch(`${BASE_URL}/enroll/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });

                  if (res.ok) {
                    alert("🎉 Enrollment Successful!");
                    setIsEnrollOpen(false);
                    router.push("/");
                  } else {
                    alert("❌ Failed to enroll");
                  }
                } catch (err) {
                  console.error(err);
                  alert("Server error ❌");
                }
              }}
              className="grid gap-3"
            >
              <input name="first_name" placeholder="First Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
              <input name="last_name" placeholder="Last Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
              <input name="email" type="email" placeholder="Email" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
              <input name="mobile" placeholder="Mobile" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
              <input name="city" placeholder="City" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />

              <select
                name="course_id"
                required
                className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const selected = courses.find((c: any) => c.id == e.target.value);
                  const input = document.querySelector('input[name="course_name"]') as HTMLInputElement;
                  if (input) input.value = selected?.name || "";
                }}
              >
                <option value="">Select Course</option>
                {courses.map((c: any) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>

              <input type="hidden" name="course_name" />

              {/* 🚀 Attractive Button */}
              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-[var(--color-white)] py-2.5 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
              >
                🎓 Enroll Now
              </button>
            </form>
          </div>
        </div>
      )}
      {/* 🔥 ENROLL MODAL END */}

    </motion.header>
  );
}





//dynamic images


 
// "use client";
 
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import { API,BASE_URL } from "@/lib/api";
// import { motion } from "framer-motion";
// // ICONS
// import {
//   FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter,
//   FaChevronUp, FaSearch, FaBars, FaTimes,
//   FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle
// } from "react-icons/fa";
 
// import {
//   SiDjango, SiJavascript, SiFlutter, SiHtml5, SiC
// } from "react-icons/si";
 
// import { TbBrandCpp } from "react-icons/tb";
// import { IoCallOutline } from "react-icons/io5";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";
 
// // ICON MAPPER
// // const getCourseIcon = (name: string) => {
// //   const n = name.toLowerCase();
 
// //   if (n.includes("python django")) return <SiDjango className="text-green-900 text-xl" />;
// //   if (n.includes("python")) return <FaPython className="text-yellow-500 text-2xl" />;
// //   if (n.includes("machine learning")) return <BrainCircuit className="text-[var(--color-accent-pink)] text-xl" />;
// //   if (n.includes("data science")) return <MdOutlineScience className="text-[var(--color-accent-purple)] text-2xl" />;
// //   if (n.includes("data analytics")) return <BsGraphUp className="text-yellow-600 text-xl" />;
// //   if (n.includes("testing")) return <FaCheckCircle className="text-[var(--color-danger)] text-xl" />;
 
// //   if (n.includes("javascript")) return <SiJavascript className="text-[var(--color-accent-yellow-light)] text-xl" />;
// //   if (n.includes("react")) return <FaReact className="text-[var(--color-accent-purple)] text-2xl" />;
// //   if (n.includes("node")) return <FaNodeJs className="text-green-600 text-2xl" />;
// //   if (n.includes("mern")) return <div className="flex text-xs"><FaReact /><FaNodeJs /></div>;
// //   if (n.includes("android")) return <FaAndroid className="text-green-500 text-2xl" />;
// //   if (n.includes("flutter")) return <SiFlutter className="text-[var(--color-accent-purple)] text-xl" />;
 
// //   if (n.includes("c++")) return <TbBrandCpp className="text-blue-700 text-2xl" />;
// //   if (n.includes("c programming")) return <SiC className="text-blue-500 text-2xl" />;
// //   if (n.includes("php")) return <FaPhp className="text-[var(--color-accent-indigo)] text-2xl" />;
// //   if (n.includes("java")) return <FaJava className="text-[var(--color-danger)] text-2xl" />;
// //   if (n.includes("web design")) return <SiHtml5 className="text-orange-500 text-xl" />;
// //   if (n.includes("aws")) return <FaAws className="text-orange-400 text-2xl" />;
 
// //   return <FaCheckCircle className="text-[var(--color-muted-light)] text-xl" />;
// // };
 
// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
// const getImageUrl = (path: string) => {
//   if (!path) return "";
//   if (path.startsWith("http")) return path;
//   return `${BASE_URL}${path}`;
// };
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
//         // const data = await res.json();
//         // setCourses(data || []);
//         const json = await res.json();
//         setCourses(Array.isArray(json.data) ? json.data : []);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getCourses();
//   }, []);
 
//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
 
//   // Close dropdown on pathname change
//   useEffect(() => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//   }, [pathname]);
 
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 
//   const handleDropdownMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };
 
//   const handleDropdownMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };
 
//   const handleCourseClick = (slug: string) => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//     router.push(`/courses/${slug}`);
//   };
 
//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`sticky top-0 z-[999] bg-[var(--color-white)] transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
//         }`}
//     >
 
//       {/* TOP BAR - Visible on all devices */}
//       <div className="flex h-10 sm:h-12 bg-[#1a1a2e] text-[var(--color-muted-light)] text-xs sm:text-sm justify-between items-center px-3 sm:px-6 overflow-x-auto">
//         <div className="flex gap-3 sm:gap-6 min-w-max">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <FaInstagram className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm">100K</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <FaFacebookSquare className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm">500K</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <IoCallOutline className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm">+91-9876543210</span>
//           </motion.div>
//         </div>
 
//         <div className="flex gap-2 sm:gap-4 min-w-max">
//           {[FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter].map((Icon, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
 
//       {/* MAIN NAV */}
//       <nav className="relative border-b border-gray-100">
//         <div className="container mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between">
 
//           {/* LOGO with animation */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link href="/" onClick={() => setIsDropdownOpen(false)}>
//               <Image
//                 src="/logos/logo.png"
//                 alt="logo"
//                 width={130}
//                 height={40}
//                 className="w-[90px] sm:w-[110px] md:w-[130px] h-auto object-contain"
//               />
//             </Link>
//           </motion.div>
 
//           {/* DESKTOP MENU - Same for all screen sizes */}
//           <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
//             <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 font-bold text-[var(--color-text-medium)]">
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className="hover:text-[var(--color-primary)] transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
//                 >
//                   Home
//                 </Link>
//               </motion.li>
 
//               {/* COURSES with Hover Dropdown - Full Width */}
//               <li
//                 className="relative py-3 sm:py-4 md:py-6"
//                 onMouseEnter={handleDropdownMouseEnter}
//                 onMouseLeave={handleDropdownMouseLeave}
//               >
//                 <motion.span
//                   whileHover={{ y: -2 }}
//                   className="flex items-center gap-1 hover:text-[var(--color-primary)] text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer"
//                 >
//                   Courses
//                   <FaChevronUp className={`transition-transform duration-300 text-[10px] sm:text-xs ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </motion.span>
 
//                 {/* Full Width Dropdown */}
//                 {isDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="fixed left-0 w-screen bg-[var(--color-white)] shadow-2xl border-t z-50 py-6 sm:py-8"
//                     style={{
//                       top: scrolled ? '80px' : '96px',
//                     }}
//                   >
//                     <div className="container mx-auto px-4 sm:px-6">
//                       {loading ? (
//                         <div className="text-center text-[var(--color-muted-light)] py-8">Loading courses...</div>
//                       ) : (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
//                           {courses.map((course: any) => (
//                             <motion.div
//                               key={course.id}
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.2 }}
//                             >
//                               <button
//                                 onClick={() => handleCourseClick(course.slug)}
//                                 className="w-full text-left flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-[var(--color-bg-softest)] transition-all border border-transparent hover:border-gray-200"
//                               >
//                               <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-[var(--color-bg-softest)] flex-shrink-0">
//   <Image
//     src={getImageUrl(course.icon || course.image)}
//     alt={course.name}
//     width={40}
//     height={40}
//     className="object-cover w-full h-full"
//     unoptimized
//   />
// </div>
//                                 <span className="text-[10px] sm:text-xs md:text-sm font-medium line-clamp-2">
//                                   {course.name}
//                                 </span>
//                               </button>
//                             </motion.div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </li>
 
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/about"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className="hover:text-[var(--color-primary)] transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
//                 >
//                   About
//                 </Link>
//               </motion.li>
 
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className="hover:text-[var(--color-primary)] transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
//                 >
//                   Contact
//                 </Link>
//               </motion.li>
//             </ul>
 
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 setIsDropdownOpen(false);
//                 // Add your enroll logic here
//               }}
//               className="bg-[var(--color-primary)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
//             >
//               Enroll Now
//             </motion.button>
//           </div>
//         </div>
//       </nav>
//     </motion.header>
//   );
// }
 