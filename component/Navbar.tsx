
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
//   FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle,
//   FaFacebookF,
//   FaYoutube
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
//   const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // 🔥 Function to check if link is active
//   const isActive = (path: string) => {
//     if (path === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(path);
//   };
//   const linkIcon = [
//     {
//       id: 1,
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/codingcloudinstitute",
//     },
//     {
//       id: 2,
//       icon: FaYoutube,
//       link: "https://www.youtube.com/@CodingHunt",
//     },
//     {
//       id: 3,
//       icon: FaInstagram,
//       link: "https://www.instagram.com/codingcloud_institute/",
//     },
//     {
//       id: 4,
//       icon: FaLinkedinIn,
//       link: "https://www.linkedin.com/company/coding-cloud/",
//     },
//   ];
//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
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
//         <a
//   href="https://www.instagram.com/codingcloud_institute/"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//   >
//     <FaInstagram className="text-xs sm:text-base" />
//     <span className="text-[10px] sm:text-sm">100K</span>
//   </motion.div>
// </a>

// <a
//   href="https://www.facebook.com/codingcloudinstitute"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//   >
//     <FaFacebookSquare className="text-xs sm:text-base" />
//     <span className="text-[10px] sm:text-sm">500K</span>
//   </motion.div>
// </a>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <IoCallOutline className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm"> +91 95373 44018</span>
//           </motion.div>
//         </div>

//        <div className="flex gap-2 sm:gap-4 min-w-max">
//   {linkIcon.map((item) => {
//     const Icon = item.icon;

//     return (
//       <motion.a
//         key={item.id}
//         href={item.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
//       </motion.a>
//     );
//   })}
// </div>
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
//               {/* HOME */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/") && pathname === "/"
//                       ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
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
//                   className={`flex items-center gap-1 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer ${isActive("/courses")
//                       ? "text-[var(--color-accent-purple)] font-bold"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
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

//               {/* ABOUT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/about"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/about")
//                       ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   About
//                 </Link>
//               </motion.li>

//               {/* CONTACT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/contact")
//                       ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
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
//                 setIsEnrollOpen(true);
//               }}
//               className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
//             >
//               Enroll Now
//             </motion.button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔥 ENROLL MODAL START */}
//       {isEnrollOpen && (
//         <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
//           <div className="bg-[var(--color-white)] rounded-xl w-full max-w-lg p-6 relative shadow-xl">

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setIsEnrollOpen(false)}
//               className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-black text-xl"
//             >
//               <FaTimes />
//             </button>

//             <h2 className="text-2xl font-bold mb-1 text-[var(--color-text-strong)]">🎓 Enroll Now</h2>
//             <p className="text-sm text-[var(--color-muted)] mb-3">
//               Fill the form below to enroll in your desired course. Our team will contact you shortly 🚀
//             </p>
//             <p className="text-xs text-[var(--color-muted-light)] mb-4">* All fields are required</p>

//             <form
//               onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault();
//                 const formData = new FormData(e.currentTarget);

//                 const first_name = (formData.get("first_name") as string).trim();
//                 const last_name = (formData.get("last_name") as string).trim();
//                 const email = (formData.get("email") as string).trim();
//                 const mobile = (formData.get("mobile") as string).trim();
//                 const city = (formData.get("city") as string).trim();
//                 const course_id = Number(formData.get("course_id"));
//                 const course_name = (formData.get("course_name") as string).trim();

//                 if (!first_name || !last_name || !email || !mobile || !city || !course_id) {
//                   alert("⚠️ Please fill all fields");
//                   return;
//                 }

//                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                 if (!emailRegex.test(email)) {
//                   alert("⚠️ Invalid Email Address");
//                   return;
//                 }

//                 if (!/^[0-9]{10}$/.test(mobile)) {
//                   alert("⚠️ Enter valid 10 digit mobile number");
//                   return;
//                 }

//                 const payload = {
//                   first_name,
//                   last_name,
//                   email,
//                   mobile,
//                   city,
//                   course_id,
//                   course_name,
//                 };

//                 try {
//                   const res = await fetch(`${BASE_URL}/enroll/`, {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(payload),
//                   });

//                   if (res.ok) {
//                     alert("🎉 Enrollment Successful!");
//                     setIsEnrollOpen(false);
//                     router.push("/");
//                   } else {
//                     alert("❌ Failed to enroll");
//                   }
//                 } catch (err) {
//                   console.error(err);
//                   alert("Server error ❌");
//                 }
//               }}
//               className="grid gap-3"
//             >
//               <input name="first_name" placeholder="First Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="last_name" placeholder="Last Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="email" type="email" placeholder="Email" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="mobile" placeholder="Mobile" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="city" placeholder="City" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />

//               <select
//                 name="course_id"
//                 required
//                 className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
//                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
//                   const selected = courses.find((c: any) => c.id == e.target.value);
//                   const input = document.querySelector('input[name="course_name"]') as HTMLInputElement;
//                   if (input) input.value = selected?.name || "";
//                 }}
//               >
//                 <option value="">Select Course</option>
//                 {courses.map((c: any) => (
//                   <option key={c.id} value={c.id}>{c.name}</option>
//                 ))}
//               </select>

//               <input type="hidden" name="course_name" />

//               {/* 🚀 Attractive Button */}
//               <button
//                 type="submit"
//                 className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-[var(--color-white)] py-2.5 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
//               >
//                 🎓 Enroll Now
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//       {/* 🔥 ENROLL MODAL END */}

//     </motion.header>
//   );
// }

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
//   FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle,
//   FaFacebookF,
//   FaYoutube
// } from "react-icons/fa";

// import {
//   SiDjango, SiJavascript, SiFlutter, SiHtml5, SiC
// } from "react-icons/si";

// import { TbBrandCpp } from "react-icons/tb";
// import { IoCallOutline } from "react-icons/io5";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";

// // Import Enroll Modal
// import EnrollModal from "./EnrollModal";
// import Button from "./ui/Button";

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
//   const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // 🔥 Function to check if link is active
//   const isActive = (path: string) => {
//     if (path === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(path);
//   };

//   const linkIcon = [
//     {
//       id: 1,
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/codingcloudinstitute",
//     },
//     {
//       id: 2,
//       icon: FaYoutube,
//       link: "https://www.youtube.com/@CodingHunt",
//     },
//     {
//       id: 3,
//       icon: FaInstagram,
//       link: "https://www.instagram.com/codingcloud_institute/",
//     },
//     {
//       id: 4,
//       icon: FaLinkedinIn,
//       link: "https://www.linkedin.com/company/coding-cloud/",
//     },
//   ];

//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
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
//           <a
//             href="https://www.instagram.com/codingcloud_institute/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaInstagram className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">100K</span>
//             </motion.div>
//           </a>

//           <a
//             href="https://www.facebook.com/codingcloudinstitute"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaFacebookSquare className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">500K</span>
//             </motion.div>
//           </a>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <IoCallOutline className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm"> +91 95373 44018</span>
//           </motion.div>
//         </div>

//         <div className="flex gap-2 sm:gap-4 min-w-max">
//           {linkIcon.map((item) => {
//             const Icon = item.icon;

//             return (
//               <motion.a
//                 key={item.id}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
//               </motion.a>
//             );
//           })}
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
//               {/* HOME */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/") && pathname === "/"
//                       ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
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
//                   className={`flex items-center gap-1 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer ${isActive("/courses")
//                       ? "text-[var(--color-accent-purple)] font-bold"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
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

//               {/* ABOUT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/about"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/about")
//                       ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   About
//                 </Link>
//               </motion.li>

//               {/* CONTACT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/contact")
//                       ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                       : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Contact
//                 </Link>
//               </motion.li>
//             </ul>

//            <Button
//   onClick={() => {
//     setIsDropdownOpen(false);
//     setIsEnrollOpen(true);
//   }}

//   className="px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-base"
// >
//   Enroll Now
// </Button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔥 ENROLL MODAL - Using new component */}
//       <EnrollModal 
//         isOpen={isEnrollOpen} 
//         onClose={() => setIsEnrollOpen(false)} 
//         courses={courses}
//       />
//     </motion.header>
//   );
// }



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

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import { API, BASE_URL } from "@/lib/api";
// import { motion } from "framer-motion";
// import { riverEnter, riverLeave } from "@/app/utils/riverAnimation";// ICONS
// import {
//   FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter,
//   FaChevronUp, FaSearch, FaBars, FaTimes,
//   FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle,
//   FaFacebookF,
//   FaYoutube
// } from "react-icons/fa";

// import {
//   SiDjango, SiJavascript, SiFlutter, SiHtml5, SiC
// } from "react-icons/si";

// import { TbBrandCpp } from "react-icons/tb";
// import { IoCallOutline } from "react-icons/io5";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";
// import Button from "./ui/Button";

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
//   const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // 🔥 Function to check if link is active
//   const isActive = (path: string) => {
//     if (path === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(path);
//   };
//   const linkIcon = [
//     {
//       id: 1,
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/codingcloudinstitute",
//     },
//     {
//       id: 2,
//       icon: FaYoutube,
//       link: "https://www.youtube.com/@CodingHunt",
//     },
//     {
//       id: 3,
//       icon: FaInstagram,
//       link: "https://www.instagram.com/codingcloud_institute/",
//     },
//     {
//       id: 4,
//       icon: FaLinkedinIn,
//       link: "https://www.linkedin.com/company/coding-cloud/",
//     },
//   ];
//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
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
//   const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const t = e.currentTarget.querySelector(".btn-navbar-text") as HTMLElement;
//     t.classList.remove("river-out");
//     void t.offsetWidth;
//     t.classList.add("river-in");
//   };

//   const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const t = e.currentTarget.querySelector(".btn-navbar-text") as HTMLElement;
//     t.classList.remove("river-in");
//     void t.offsetWidth;
//     t.classList.add("river-out");
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
// <div className="flex h-10 sm:h-12 bg-[#1a1a2e] text-[var(--color-muted-light)] text-xs sm:text-sm justify-between items-center px-3 sm:px-6">        <div className="flex gap-3 sm:gap-6 min-w-max">
//           <a
//             href="https://www.instagram.com/codingcloud_institute/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaInstagram className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">100K</span>
//             </motion.div>
//           </a>

//           <a
//             href="https://www.facebook.com/codingcloudinstitute"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaFacebookSquare className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">500K</span>
//             </motion.div>
//           </a>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <IoCallOutline className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm"> +91 95373 44018</span>
//           </motion.div>
//         </div>

//         <div className="flex gap-2 sm:gap-4 min-w-max">
//           {linkIcon.map((item) => {
//             const Icon = item.icon;

//             return (
//               <motion.a
//                 key={item.id}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
//               </motion.a>
//             );
//           })}
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="relative border-b border-gray-100">
// <div className="w-full px-4 lg:px-10 h-14 sm:h-16 md:h-20 flex items-center justify-between">
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
//               {/* HOME */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/") && pathname === "/"
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
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
//                   className={`flex items-center gap-1 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer ${isActive("/courses")
//                     ? "text-[var(--color-accent-purple)] font-bold"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
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
//                     className="fixed left-0 w-full bg-[var(--color-white)] shadow-2xl border-t z-50 py-6 sm:py-8"
//                     style={{
//                       top: scrolled ? '120px' : '120px',
//                     }}
//                   >
//                     <div className="container mx-auto px-4 sm:px-6">
//                       {loading ? (
//                         <div className="text-center text-[var(--color-muted-light)] py-8">Loading courses...</div>
//                       ) : (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
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
//                                 className="w-full text-left flex items-center gap-3 p-3 rounded-xl bg-[var(--color-white)] hover:bg-[var(--color-bg-softest)] transition-all border border-transparent hover:border-[var(--color-border-light)] hover:shadow-md"
//                               >
//                                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-lg overflow-hidden flex-shrink-0">
//                                   {course.image ? (
//                                     <Image
//                                       src={`${BASE_URL}${course.image}`}
//                                       alt={course.name}
//                                       width={40}
//                                       height={40}
//                                       className="object-cover w-full h-full"
//                                     />
//                                   ) : (
//                                     getCourseIcon(course.name)
//                                   )}
//                                 </div>
//                                 <span className="text-xs sm:text-sm font-semibold text-[var(--color-text-medium)] line-clamp-2">
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

//               {/* ABOUT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/about"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/about")
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   About
//                 </Link>
//               </motion.li>

//               {/* CONTACT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/contact")
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Contact
//                 </Link>
//               </motion.li>
//             </ul>

//             {/* <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 setIsDropdownOpen(false);
//                 setIsEnrollOpen(true);
//               }}
//               className="bg-[var(--color-accent-purple)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
//             >
//               Enroll Now
//             </motion.button> */}
//             {/* <div className="header-cta">
//               <button
//                 className="btn-navbar"
//                 onMouseEnter={handleEnter}
//                 onMouseLeave={handleLeave}
//               >
//                 <span className="btn-navbar-text">Join Now</span>
//               </button>
//             </div> */}
//             <Button
//               variant="gradient"
//               size="md"
//               onClick={() => {
//                 setIsDropdownOpen(false);
//                 setIsEnrollOpen(true);
//               }}
//             >
//               Enroll Now
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔥 ENROLL MODAL START */}
//       {isEnrollOpen && (
//         <div className="fixed inset-0 z-[99] bg-black/50 flex items-center justify-center p-4">
//           <div className="bg-[var(--color-white)] rounded-xl w-full max-w-lg p-6 relative shadow-xl">

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setIsEnrollOpen(false)}
//               className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-black text-xl"
//             >
//               <FaTimes />
//             </button>

//             <h2 className="text-2xl font-bold mb-1 text-[var(--color-text-strong)]">🎓 Enroll Now</h2>
//             <p className="text-sm text-[var(--color-muted)] mb-3">
//               Fill the form below to enroll in your desired course. Our team will contact you shortly 🚀
//             </p>
//             <p className="text-xs text-[var(--color-muted-light)] mb-4">* All fields are required</p>

//             <form
//               onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault();
//                 const formData = new FormData(e.currentTarget);

//                 const first_name = (formData.get("first_name") as string).trim();
//                 const last_name = (formData.get("last_name") as string).trim();
//                 const email = (formData.get("email") as string).trim();
//                 const mobile = (formData.get("mobile") as string).trim();
//                 const city = (formData.get("city") as string).trim();
//                 const course_id = Number(formData.get("course_id"));
//                 const course_name = (formData.get("course_name") as string).trim();

//                 if (!first_name || !last_name || !email || !mobile || !city || !course_id) {
//                   alert("⚠️ Please fill all fields");
//                   return;
//                 }

//                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                 if (!emailRegex.test(email)) {
//                   alert("⚠️ Invalid Email Address");
//                   return;
//                 }

//                 if (!/^[0-9]{10}$/.test(mobile)) {
//                   alert("⚠️ Enter valid 10 digit mobile number");
//                   return;
//                 }

//                 const payload = {
//                   first_name,
//                   last_name,
//                   email,
//                   mobile,
//                   city,
//                   course_id,
//                   course_name,
//                 };

//                 try {
//                   const res = await fetch(`${BASE_URL}/enroll/`, {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(payload),
//                   });

//                   if (res.ok) {
//                     alert("🎉 Enrollment Successful!");
//                     setIsEnrollOpen(false);
//                     router.push("/");
//                   } else {
//                     alert("❌ Failed to enroll");
//                   }
//                 } catch (err) {
//                   console.error(err);
//                   alert("Server error ❌");
//                 }
//               }}
//               className="grid gap-3"
//             >
//               <input name="first_name" placeholder="First Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="last_name" placeholder="Last Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="email" type="email" placeholder="Email" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="mobile" placeholder="Mobile" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="city" placeholder="City" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />

//               <select
//                 name="course_id"
//                 required
//                 className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
//                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
//                   const selected = courses.find((c: any) => c.id == e.target.value);
//                   const input = document.querySelector('input[name="course_name"]') as HTMLInputElement;
//                   if (input) input.value = selected?.name || "";
//                 }}
//               >
//                 <option value="">Select Course</option>
//                 {courses.map((c: any) => (
//                   <option key={c.id} value={c.id}>{c.name}</option>
//                 ))}
//               </select>

//               <input type="hidden" name="course_name" />

//               {/* 🚀 Attractive Button */}
//               {/* <button
//                 type="submit"
//                 className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-[var(--color-white)] py-2.5 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
//               >
//                 🎓 Enroll Now
//               </button> */}
//               <Button
//                 type="submit"
//                 variant="gradient"
//                 size="md"
//                 className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
//               >
//                 🎓 Enroll Now
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//       {/* 🔥 ENROLL MODAL END */}

//     </motion.header>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import { API, BASE_URL } from "@/lib/api";
// import { motion, AnimatePresence } from "framer-motion";
// import { riverEnter, riverLeave } from "@/app/utils/riverAnimation";// ICONS
// import {
//   FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter,
//   FaChevronUp, FaSearch, FaBars, FaTimes,
//   FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle,
//   FaFacebookF,
//   FaYoutube
// } from "react-icons/fa";

// import {
//   SiDjango, SiJavascript, SiFlutter, SiHtml5, SiC
// } from "react-icons/si";

// import { TbBrandCpp } from "react-icons/tb";
// import { IoCallOutline } from "react-icons/io5";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";
// import Button from "./ui/Button";

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
//   const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

//   // 🔥 Function to check if link is active
//   const isActive = (path: string) => {
//     if (path === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(path);
//   };
//   const linkIcon = [
//     {
//       id: 1,
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/codingcloudinstitute",
//     },
//     {
//       id: 2,
//       icon: FaYoutube,
//       link: "https://www.youtube.com/@CodingHunt",
//     },
//     {
//       id: 3,
//       icon: FaInstagram,
//       link: "https://www.instagram.com/codingcloud_institute/",
//     },
//     {
//       id: 4,
//       icon: FaLinkedinIn,
//       link: "https://www.linkedin.com/company/coding-cloud/",
//     },
//   ];
//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
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
//     setIsMobileCoursesOpen(false);
//   }, [pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleDropdownMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };
//   const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const t = e.currentTarget.querySelector(".btn-navbar-text") as HTMLElement;
//     t.classList.remove("river-out");
//     void t.offsetWidth;
//     t.classList.add("river-in");
//   };

//   const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const t = e.currentTarget.querySelector(".btn-navbar-text") as HTMLElement;
//     t.classList.remove("river-in");
//     void t.offsetWidth;
//     t.classList.add("river-out");
//   };
//   const handleDropdownMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleCourseClick = (slug: string) => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//     setIsMobileCoursesOpen(false);
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
//       <div className="flex h-10 sm:h-12 bg-[#1a1a2e] text-[var(--color-muted-light)] text-xs sm:text-sm justify-between items-center px-3 sm:px-6">
//         <div className="flex gap-3 sm:gap-6 min-w-max">
//           <a
//             href="https://www.instagram.com/codingcloud_institute/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaInstagram className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">100K</span>
//             </motion.div>
//           </a>

//           <a
//             href="https://www.facebook.com/codingcloudinstitute"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaFacebookSquare className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">500K</span>
//             </motion.div>
//           </a>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <IoCallOutline className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm"> +91 95373 44018</span>
//           </motion.div>
//         </div>

//         <div className="flex gap-2 sm:gap-4 min-w-max">
//           {linkIcon.map((item) => {
//             const Icon = item.icon;

//             return (
//               <motion.a
//                 key={item.id}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
//               </motion.a>
//             );
//           })}
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="relative border-b border-gray-100">
//         <div className="w-full px-4 lg:px-10 h-14 sm:h-16 md:h-20 flex items-center justify-between">
//           {/* LOGO - Fixed size for all screens */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex-shrink-0"
//           >
//             <Link href="/" onClick={() => setIsDropdownOpen(false)}>
//               <Image
//                 src="/logos/logo.png"
//                 alt="logo"
//                 width={130}
//                 height={40}
//                 className="w-[130px] h-auto object-contain"
//                 priority
//               />
//             </Link>
//           </motion.div>

//           {/* DESKTOP MENU - Hidden on mobile */}
//           <div className="hidden md:flex items-center gap-3 sm:gap-4 md:gap-8">
//             <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 font-bold text-[var(--color-text-medium)]">
//               {/* HOME */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/") && pathname === "/"
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Home
//                 </Link>
//               </motion.li>

//               {/* COURSES with Hover Dropdown - Desktop only */}
//               <li
//                 className="relative py-3 sm:py-4 md:py-6"
//                 onMouseEnter={handleDropdownMouseEnter}
//                 onMouseLeave={handleDropdownMouseLeave}
//               >
//                 <motion.span
//                   whileHover={{ y: -2 }}
//                   className={`flex items-center gap-1 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer ${isActive("/courses")
//                     ? "text-[var(--color-accent-purple)] font-bold"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Courses
//                   <FaChevronUp className={`transition-transform duration-300 text-[10px] sm:text-xs ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </motion.span>

//                 {/* Full Width Dropdown - Desktop only */}
//                 {isDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="fixed left-0 w-full bg-[var(--color-white)] shadow-2xl border-t z-50 py-6 sm:py-8"
//                     style={{
//                       top: scrolled ? '120px' : '120px',
//                     }}
//                   >
//                     <div className="container mx-auto px-4 sm:px-6">
//                       {loading ? (
//                         <div className="text-center text-[var(--color-muted-light)] py-8">Loading courses...</div>
//                       ) : (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
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
//                                 className="w-full text-left flex items-center gap-3 p-3 rounded-xl bg-[var(--color-white)] hover:bg-[var(--color-bg-softest)] transition-all border border-transparent hover:border-[var(--color-border-light)] hover:shadow-md"
//                               >
//                                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-lg overflow-hidden flex-shrink-0">
//                                   {course.image ? (
//                                     <Image
//                                       src={`${BASE_URL}${course.image}`}
//                                       alt={course.name}
//                                       width={40}
//                                       height={40}
//                                       className="object-cover w-full h-full"
//                                     />
//                                   ) : (
//                                     getCourseIcon(course.name)
//                                   )}
//                                 </div>
//                                 <span className="text-xs sm:text-sm font-semibold text-[var(--color-text-medium)] line-clamp-2">
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

//               {/* ABOUT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/about"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/about")
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   About
//                 </Link>
//               </motion.li>

//               {/* CONTACT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/contact")
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Contact
//                 </Link>
//               </motion.li>
//             </ul>

//             <Button
//               variant="gradient"
//               size="md"
//               onClick={() => {
//                 setIsDropdownOpen(false);
//                 setIsEnrollOpen(true);
//               }}
//             >
//               Enroll Now
//             </Button>
//           </div>

//           {/* Mobile Menu Controls - Visible only on mobile */}
//           <div className="flex md:hidden items-center gap-2">
//             <Button
//               variant="gradient"
//               size="sm"
//               onClick={() => {
//                 setIsDropdownOpen(false);
//                 setIsEnrollOpen(true);
//               }}
//               className="text-xs px-3 py-1.5"
//             >
//               Enroll
//             </Button>

//             <button
//               onClick={toggleMenu}
//               className="p-2 text-[var(--color-text-medium)] hover:text-[var(--color-accent-purple)] transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden absolute top-full left-0 w-full bg-[var(--color-white)] shadow-lg border-t z-50 overflow-hidden"
//             >
//               <div className="px-4 py-4 flex flex-col gap-2">
//                 {/* Home */}
//                 <Link
//                   href="/"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-3 px-4 rounded-lg transition-colors ${isActive("/") && pathname === "/"
//                     ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                     : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                     }`}
//                 >
//                   Home
//                 </Link>

//                 {/* Mobile Courses Accordion */}
//                 <div className="py-1">
//                   <button
//                     onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
//                     className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${isActive("/courses")
//                       ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                       : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                       }`}
//                   >
//                     <span>Courses</span>
//                     <FaChevronUp className={`transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   <AnimatePresence>
//                     {isMobileCoursesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="pl-4 pr-2 py-2 space-y-1 max-h-[60vh] overflow-y-auto">
//                           {loading ? (
//                             <div className="text-center text-[var(--color-muted-light)] py-4">Loading courses...</div>
//                           ) : (
//                             courses.map((course: any) => (
//                               <button
//                                 key={course.id}
//                                 onClick={() => handleCourseClick(course.slug)}
//                                 className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-bg-softest)] transition-colors"
//                               >
//                                 <div className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-lg overflow-hidden flex-shrink-0">
//                                   {course.image ? (
//                                     <Image
//                                       src={`${BASE_URL}${course.image}`}
//                                       alt={course.name}
//                                       width={32}
//                                       height={32}
//                                       className="object-cover w-full h-full"
//                                     />
//                                   ) : (
//                                     getCourseIcon(course.name)
//                                   )}
//                                 </div>
//                                 <span className="text-sm font-medium text-[var(--color-text-medium)]">
//                                   {course.name}
//                                 </span>
//                               </button>
//                             ))
//                           )}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* About */}
//                 <Link
//                   href="/about"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-3 px-4 rounded-lg transition-colors ${isActive("/about")
//                     ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                     : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                     }`}
//                 >
//                   About
//                 </Link>

//                 {/* Contact */}
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-3 px-4 rounded-lg transition-colors ${isActive("/contact")
//                     ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                     : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                     }`}
//                 >
//                   Contact
//                 </Link>

//                 {/* Mobile Social Links */}
//                 <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
//                   {linkIcon.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <motion.a
//                         key={item.id}
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-[var(--color-text-medium)] hover:text-[var(--color-accent-purple)]"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <Icon size={20} />
//                       </motion.a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* 🔥 ENROLL MODAL START */}
//       {isEnrollOpen && (
//         <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
//           <div className="bg-[var(--color-white)] rounded-xl w-full max-w-lg p-6 relative shadow-xl">

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setIsEnrollOpen(false)}
//               className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-black text-xl"
//             >
//               <FaTimes />
//             </button>

//             <h2 className="text-2xl font-bold mb-1 text-[var(--color-text-strong)]">🎓 Enroll Now</h2>
//             <p className="text-sm text-[var(--color-muted)] mb-3">
//               Fill the form below to enroll in your desired course. Our team will contact you shortly 🚀
//             </p>
//             <p className="text-xs text-[var(--color-muted-light)] mb-4">* All fields are required</p>

//             <form
//               onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault();
//                 const formData = new FormData(e.currentTarget);

//                 const first_name = (formData.get("first_name") as string).trim();
//                 const last_name = (formData.get("last_name") as string).trim();
//                 const email = (formData.get("email") as string).trim();
//                 const mobile = (formData.get("mobile") as string).trim();
//                 const city = (formData.get("city") as string).trim();
//                 const course_id = Number(formData.get("course_id"));
//                 const course_name = (formData.get("course_name") as string).trim();

//                 if (!first_name || !last_name || !email || !mobile || !city || !course_id) {
//                   alert("⚠️ Please fill all fields");
//                   return;
//                 }

//                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                 if (!emailRegex.test(email)) {
//                   alert("⚠️ Invalid Email Address");
//                   return;
//                 }

//                 if (!/^[0-9]{10}$/.test(mobile)) {
//                   alert("⚠️ Enter valid 10 digit mobile number");
//                   return;
//                 }

//                 const payload = {
//                   first_name,
//                   last_name,
//                   email,
//                   mobile,
//                   city,
//                   course_id,
//                   course_name,
//                 };

//                 try {
//                   const res = await fetch(`${BASE_URL}/enroll/`, {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(payload),
//                   });

//                   if (res.ok) {
//                     alert("🎉 Enrollment Successful!");
//                     setIsEnrollOpen(false);
//                     router.push("/");
//                   } else {
//                     alert("❌ Failed to enroll");
//                   }
//                 } catch (err) {
//                   console.error(err);
//                   alert("Server error ❌");
//                 }
//               }}
//               className="grid gap-3"
//             >
//               <input name="first_name" placeholder="First Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="last_name" placeholder="Last Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="email" type="email" placeholder="Email" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="mobile" placeholder="Mobile" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="city" placeholder="City" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />

//               <select
//                 name="course_id"
//                 required
//                 className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
//                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
//                   const selected = courses.find((c: any) => c.id == e.target.value);
//                   const input = document.querySelector('input[name="course_name"]') as HTMLInputElement;
//                   if (input) input.value = selected?.name || "";
//                 }}
//               >
//                 <option value="">Select Course</option>
//                 {courses.map((c: any) => (
//                   <option key={c.id} value={c.id}>{c.name}</option>
//                 ))}
//               </select>

//               <input type="hidden" name="course_name" />

//               <Button
//                 type="submit"
//                 variant="gradient"
//                 size="md"
//                 className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
//               >
//                 🎓 Enroll Now
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//       {/* 🔥 ENROLL MODAL END */}

//     </motion.header>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import { API, BASE_URL } from "@/lib/api";
// import { motion, AnimatePresence } from "framer-motion";
// import { riverEnter, riverLeave } from "@/app/utils/riverAnimation";// ICONS
// import {
//   FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter,
//   FaChevronUp, FaSearch, FaBars, FaTimes,
//   FaPython, FaJava, FaReact, FaNodeJs, FaAndroid, FaAws, FaPhp, FaCheckCircle,
//   FaFacebookF,
//   FaYoutube
// } from "react-icons/fa";

// import {
//   SiDjango, SiJavascript, SiFlutter, SiHtml5, SiC
// } from "react-icons/si";

// import { TbBrandCpp } from "react-icons/tb";
// import { IoCallOutline } from "react-icons/io5";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";
// import Button from "./ui/Button";

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
//   const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

//   // 🔥 Function to check if link is active
//   const isActive = (path: string) => {
//     if (path === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(path);
//   };
//   const linkIcon = [
//     {
//       id: 1,
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/codingcloudinstitute",
//     },
//     {
//       id: 2,
//       icon: FaYoutube,
//       link: "https://www.youtube.com/@CodingHunt",
//     },
//     {
//       id: 3,
//       icon: FaInstagram,
//       link: "https://www.instagram.com/codingcloud_institute/",
//     },
//     {
//       id: 4,
//       icon: FaLinkedinIn,
//       link: "https://www.linkedin.com/company/coding-cloud/",
//     },
//   ];
//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
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
//     setIsMobileCoursesOpen(false);
//   }, [pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleDropdownMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };
//   const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const t = e.currentTarget.querySelector(".btn-navbar-text") as HTMLElement;
//     t.classList.remove("river-out");
//     void t.offsetWidth;
//     t.classList.add("river-in");
//   };

//   const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const t = e.currentTarget.querySelector(".btn-navbar-text") as HTMLElement;
//     t.classList.remove("river-in");
//     void t.offsetWidth;
//     t.classList.add("river-out");
//   };
//   const handleDropdownMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleCourseClick = (slug: string) => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//     setIsMobileCoursesOpen(false);
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
//       <div className="flex h-10 sm:h-12 bg-[#1a1a2e] text-[var(--color-muted-light)] text-xs sm:text-sm justify-between items-center px-3 sm:px-6">
//         <div className="flex gap-3 sm:gap-6 min-w-max">
//           <a
//             href="https://www.instagram.com/codingcloud_institute/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaInstagram className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">100K</span>
//             </motion.div>
//           </a>

//           <a
//             href="https://www.facebook.com/codingcloudinstitute"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//             >
//               <FaFacebookSquare className="text-xs sm:text-base" />
//               <span className="text-[10px] sm:text-sm">500K</span>
//             </motion.div>
//           </a>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
//           >
//             <IoCallOutline className="text-xs sm:text-base" />
//             <span className="text-[10px] sm:text-sm"> +91 95373 44018</span>
//           </motion.div>
//         </div>

//         <div className="flex gap-2 sm:gap-4 min-w-max">
//           {linkIcon.map((item) => {
//             const Icon = item.icon;

//             return (
//               <motion.a
//                 key={item.id}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
//               </motion.a>
//             );
//           })}
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="relative border-b border-gray-100">
//         <div className="w-full px-4 lg:px-10 h-14 sm:h-16 md:h-20 flex items-center justify-between">
//           {/* LOGO - Fixed size for all screens */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex-shrink-0"
//           >
//             <Link href="/" onClick={() => setIsDropdownOpen(false)}>
//               <Image
//                 src="/logos/logo.png"
//                 alt="logo"
//                 width={130}
//                 height={40}
//                 className="w-[130px] h-auto object-contain"
//                 priority
//               />
//             </Link>
//           </motion.div>

//           {/* DESKTOP MENU - Hidden on mobile */}
//           <div className="hidden md:flex items-center gap-3 sm:gap-4 md:gap-8">
//             <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 font-bold text-[var(--color-text-medium)]">
//               {/* HOME */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/") && pathname === "/"
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Home
//                 </Link>
//               </motion.li>

//               {/* COURSES with Hover Dropdown - Desktop only */}
//               <li
//                 className="relative py-3 sm:py-4 md:py-6"
//                 onMouseEnter={handleDropdownMouseEnter}
//                 onMouseLeave={handleDropdownMouseLeave}
//               >
//                 <motion.span
//                   whileHover={{ y: -2 }}
//                   className={`flex items-center gap-1 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer ${isActive("/courses")
//                     ? "text-[var(--color-accent-purple)] font-bold"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Courses
//                   <FaChevronUp className={`transition-transform duration-300 text-[10px] sm:text-xs ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </motion.span>

//                 {/* Full Width Dropdown - Desktop only */}
//                 {isDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="fixed left-0 w-full bg-[var(--color-white)] shadow-2xl border-t z-50 py-6 sm:py-8"
//                     style={{
//                       top: scrolled ? '120px' : '120px',
//                     }}
//                   >
//                     <div className="container mx-auto px-4 sm:px-6">
//                       {loading ? (
//                         <div className="text-center text-[var(--color-muted-light)] py-8">Loading courses...</div>
//                       ) : (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
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
//                                 className="w-full text-left flex items-center gap-3 p-3 rounded-xl bg-[var(--color-white)] hover:bg-[var(--color-bg-softest)] transition-all border border-transparent hover:border-[var(--color-border-light)] hover:shadow-md"
//                               >
//                                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-lg overflow-hidden flex-shrink-0">
//                                   {course.image ? (
//                                     <Image
//                                       src={`${BASE_URL}${course.image}`}
//                                       alt={course.name}
//                                       width={40}
//                                       height={40}
//                                       className="object-cover w-full h-full"
//                                     />
//                                   ) : (
//                                     getCourseIcon(course.name)
//                                   )}
//                                 </div>
//                                 <span className="text-xs sm:text-sm font-semibold text-[var(--color-text-medium)] line-clamp-2">
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

//               {/* ABOUT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/about"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/about")
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   About
//                 </Link>
//               </motion.li>

//               {/* CONTACT */}
//               <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={`transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive("/contact")
//                     ? "text-[var(--color-accent-purple)] font-bold border-b-2 border-[var(--color-accent-purple)] pb-1"
//                     : "hover:text-[var(--color-accent-purple)]"
//                     }`}
//                 >
//                   Contact
//                 </Link>
//               </motion.li>
//             </ul>

//             <Button
//               variant="gradient"
//               size="md"
//               onClick={() => {
//                 setIsDropdownOpen(false);
//                 setIsEnrollOpen(true);
//               }}
//             >
//               Enroll Now
//             </Button>
//           </div>

//           {/* Mobile Menu Controls - Visible only on mobile */}
//           <div className="flex md:hidden items-center gap-2">
//             <Button
//               variant="gradient"
//               size="sm"
//               onClick={() => {
//                 setIsDropdownOpen(false);
//                 setIsEnrollOpen(true);
//               }}
//               className="text-xs px-3 py-1.5"
//             >
//               Enroll Now
//             </Button>

//             <button
//               onClick={toggleMenu}
//               className="p-2 text-[var(--color-text-medium)] hover:text-[var(--color-accent-purple)] transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden absolute top-full left-0 w-full bg-[var(--color-white)] shadow-lg border-t z-50 overflow-hidden"
//             >
//               <div className="px-4 py-4 flex flex-col gap-2">
//                 {/* Home */}
//                 <Link
//                   href="/"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-3 px-4 rounded-lg transition-colors ${isActive("/") && pathname === "/"
//                     ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                     : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                     }`}
//                 >
//                   Home
//                 </Link>

//                 {/* Mobile Courses Accordion */}
//                 <div className="py-1">
//                   <button
//                     onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
//                     className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${isActive("/courses")
//                       ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                       : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                       }`}
//                   >
//                     <span>Courses</span>
//                     <FaChevronUp className={`transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   <AnimatePresence>
//                     {isMobileCoursesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="overflow-hidden"
//                       >
//                         {loading ? (
//                           <div className="text-center text-[var(--color-muted-light)] py-4">Loading courses...</div>
//                         ) : (
//                           <div className="grid grid-cols-2 gap-2 p-2">
//                             {courses.map((course: any) => (
//                               <motion.div
//                                 key={course.id}
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                               >
//                                 <button
//                                   onClick={() => handleCourseClick(course.slug)}
//                                   className="w-full text-left flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[var(--color-bg-softest)] transition-colors border border-transparent hover:border-[var(--color-border-light)]"
//                                 >
//                                   <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-lg overflow-hidden flex-shrink-0">
//                                     {course.image ? (
//                                       <Image
//                                         src={`${BASE_URL}${course.image}`}
//                                         alt={course.name}
//                                         width={40}
//                                         height={40}
//                                         className="object-cover w-full h-full"
//                                       />
//                                     ) : (
//                                       getCourseIcon(course.name)
//                                     )}
//                                   </div>
//                                   <span className="text-xs font-medium text-[var(--color-text-medium)] text-center line-clamp-2">
//                                     {course.name}
//                                   </span>
//                                 </button>
//                               </motion.div>
//                             ))}
//                           </div>
//                         )}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* About */}
//                 <Link
//                   href="/about"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-3 px-4 rounded-lg transition-colors ${isActive("/about")
//                     ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                     : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                     }`}
//                 >
//                   About
//                 </Link>

//                 {/* Contact */}
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-3 px-4 rounded-lg transition-colors ${isActive("/contact")
//                     ? "bg-[var(--color-accent-purple)] text-white font-bold"
//                     : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
//                     }`}
//                 >
//                   Contact
//                 </Link>

//                 {/* Mobile Social Links */}
//                 <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
//                   {linkIcon.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <motion.a
//                         key={item.id}
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-[var(--color-text-medium)] hover:text-[var(--color-accent-purple)]"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <Icon size={20} />
//                       </motion.a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* 🔥 ENROLL MODAL START */}
//       {isEnrollOpen && (
//         <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
//           <div className="bg-[var(--color-white)] rounded-xl w-full max-w-lg p-6 relative shadow-xl">

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setIsEnrollOpen(false)}
//               className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-black text-xl"
//             >
//               <FaTimes />
//             </button>

//             <h2 className="text-2xl font-bold mb-1 text-[var(--color-text-strong)]">🎓 Enroll Now</h2>
//             <p className="text-sm text-[var(--color-muted)] mb-3">
//               Fill the form below to enroll in your desired course. Our team will contact you shortly 🚀
//             </p>
//             <p className="text-xs text-[var(--color-muted-light)] mb-4">* All fields are required</p>

//             <form
//               onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault();
//                 const formData = new FormData(e.currentTarget);

//                 const first_name = (formData.get("first_name") as string).trim();
//                 const last_name = (formData.get("last_name") as string).trim();
//                 const email = (formData.get("email") as string).trim();
//                 const mobile = (formData.get("mobile") as string).trim();
//                 const city = (formData.get("city") as string).trim();
//                 const course_id = Number(formData.get("course_id"));
//                 const course_name = (formData.get("course_name") as string).trim();

//                 if (!first_name || !last_name || !email || !mobile || !city || !course_id) {
//                   alert("⚠️ Please fill all fields");
//                   return;
//                 }

//                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                 if (!emailRegex.test(email)) {
//                   alert("⚠️ Invalid Email Address");
//                   return;
//                 }

//                 if (!/^[0-9]{10}$/.test(mobile)) {
//                   alert("⚠️ Enter valid 10 digit mobile number");
//                   return;
//                 }

//                 const payload = {
//                   first_name,
//                   last_name,
//                   email,
//                   mobile,
//                   city,
//                   course_id,
//                   course_name,
//                 };

//                 try {
//                   const res = await fetch(`${BASE_URL}/enroll/`, {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(payload),
//                   });

//                   if (res.ok) {
//                     alert("🎉 Enrollment Successful!");
//                     setIsEnrollOpen(false);
//                     router.push("/");
//                   } else {
//                     alert("❌ Failed to enroll");
//                   }
//                 } catch (err) {
//                   console.error(err);
//                   alert("Server error ❌");
//                 }
//               }}
//               className="grid gap-3"
//             >
//               <input name="first_name" placeholder="First Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="last_name" placeholder="Last Name" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="email" type="email" placeholder="Email" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="mobile" placeholder="Mobile" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />
//               <input name="city" placeholder="City" required className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none" />

//               <select
//                 name="course_id"
//                 required
//                 className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
//                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
//                   const selected = courses.find((c: any) => c.id == e.target.value);
//                   const input = document.querySelector('input[name="course_name"]') as HTMLInputElement;
//                   if (input) input.value = selected?.name || "";
//                 }}
//               >
//                 <option value="">Select Course</option>
//                 {courses.map((c: any) => (
//                   <option key={c.id} value={c.id}>{c.name}</option>
//                 ))}
//               </select>

//               <input type="hidden" name="course_name" />

//               <Button
//                 type="submit"
//                 variant="gradient"
//                 size="md"
//                 className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
//               >
//                 🎓 Enroll Now
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//       {/* 🔥 ENROLL MODAL END */}

//     </motion.header>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { API, BASE_URL } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedinIn,
  FaChevronUp,
  FaSearch,
  FaBars,
  FaTimes,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaAws,
  FaPhp,
  FaCheckCircle,
  FaFacebookF,
  FaYoutube,
  FaTh,
} from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiFlutter,
  SiHtml5,
  SiC,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BrainCircuit } from "lucide-react";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import Button from "./ui/Button";

const getCourseIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("python django"))
    return <SiDjango className="text-green-900 text-xl" />;
  if (n.includes("python"))
    return <FaPython className="text-yellow-500 text-2xl" />;
  if (n.includes("machine learning"))
    return <BrainCircuit className="text-[var(--color-accent-pink)] text-xl" />;
  if (n.includes("data science"))
    return (
      <MdOutlineScience className="text-[var(--color-accent-purple)] text-2xl" />
    );
  if (n.includes("data analytics"))
    return <BsGraphUp className="text-yellow-600 text-xl" />;
  if (n.includes("testing"))
    return <FaCheckCircle className="text-[var(--color-danger)] text-xl" />;
  if (n.includes("javascript"))
    return (
      <SiJavascript className="text-[var(--color-accent-yellow-light)] text-xl" />
    );
  if (n.includes("react"))
    return <FaReact className="text-[var(--color-accent-purple)] text-2xl" />;
  if (n.includes("node"))
    return <FaNodeJs className="text-green-600 text-2xl" />;
  if (n.includes("mern"))
    return (
      <div className="flex text-xs">
        <FaReact />
        <FaNodeJs />
      </div>
    );
  if (n.includes("android"))
    return <FaAndroid className="text-green-500 text-2xl" />;
  if (n.includes("flutter"))
    return <SiFlutter className="text-[var(--color-accent-purple)] text-xl" />;
  if (n.includes("c++"))
    return <TbBrandCpp className="text-blue-700 text-2xl" />;
  if (n.includes("c programming"))
    return <SiC className="text-blue-500 text-2xl" />;
  if (n.includes("php"))
    return <FaPhp className="text-[var(--color-accent-indigo)] text-2xl" />;
  if (n.includes("java"))
    return <FaJava className="text-[var(--color-danger)] text-2xl" />;
  if (n.includes("web design"))
    return <SiHtml5 className="text-orange-500 text-xl" />;
  if (n.includes("aws")) return <FaAws className="text-orange-400 text-2xl" />;
  return <FaCheckCircle className="text-[var(--color-muted-light)] text-xl" />;
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkIcon = [
    {
      id: 1,
      icon: FaFacebookF,
      link: "https://www.facebook.com/codingcloudinstitute",
    },
    { id: 2, icon: FaYoutube, link: "https://www.youtube.com/@CodingHunt" },
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

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetch(API.COURSES.LIST, { cache: "no-store" });
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileCoursesOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdownMouseEnter = () => setIsDropdownOpen(true);
  const handleDropdownMouseLeave = () => setIsDropdownOpen(false);

  const handleCourseClick = (slug: string) => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileCoursesOpen(false);
    router.push(`/courses/${slug}`);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-[999] bg-[var(--color-white)] transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
        }`}
    >
      {/* ── TOP BAR ── */}
      <div className="flex h-10 sm:h-12 bg-[#1a1a2e] text-[var(--color-muted-light)] text-xs sm:text-sm justify-between items-center px-4 sm:px-8 md:px-12 lg:px-6">
        <div className="flex gap-3 sm:gap-6 min-w-max">
          <a
            href="https://www.instagram.com/codingcloud_institute/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
            >
              <FaInstagram className="text-xs sm:text-base" />
              <span className="text-[10px] sm:text-sm">100K</span>
            </motion.div>
          </a>
          <a
            href="https://www.facebook.com/codingcloudinstitute"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
            >
              <FaFacebookSquare className="text-xs sm:text-base" />
              <span className="text-[10px] sm:text-sm">500K</span>
            </motion.div>
          </a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2 hover:text-[var(--color-white)] cursor-pointer transition-colors"
          >
            <IoCallOutline className="text-xs sm:text-base" />
            <span className="text-[10px] sm:text-sm">+91 95373 44018</span>
          </motion.div>
        </div>
        <div className="flex gap-2 sm:gap-4 min-w-max">
          {linkIcon.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="text-xs sm:text-base hover:text-[var(--color-white)] cursor-pointer transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className="relative border-b border-gray-100">
        <div className="w-full px-4 sm:px-8 md:px-4 lg:px-6  h-14 sm:h-16 md:h-20 flex items-center justify-between gap-4">
          {/* ── LEFT: Logo + Category pill ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" onClick={() => setIsDropdownOpen(false)}>
                <Image
                  src="/logos/logo.png"
                  alt="logo"
                  width={130}
                  height={40}
                  className="w-[130px] h-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

          </div>

          {/* ── CENTER: Nav links ── */}
          <ul className="hidden md:flex items-center gap-2 sm:gap-4 md:gap-6 font-bold text-[var(--color-text-medium)] flex-1 justify-center">
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

            {/* COURSES with scrollable dropdown */}
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
                <FaChevronUp
                  className={`transition-transform duration-300 text-[10px] sm:text-xs ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </motion.span>

              {/* ── SCROLLABLE DROPDOWN ── */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 w-full bg-[var(--color-white)] shadow-2xl border-t border-gray-100 z-50"
                    style={{ top: "120px" }}
                  >
                    {/* Header row */}
                    <div className="flex items-center justify-between px-6 lg:px-10 pt-4 pb-3 border-b border-gray-100">
                      <p className="text-sm font-bold text-[var(--color-text-strong)]">
                        All Courses
                        <span className="ml-2 text-xs font-normal text-[var(--color-muted-light)]">
                          ({courses.length} available)
                        </span>
                      </p>
                      <Link
                        href="/courses"
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-xs font-semibold hover:underline transition-colors"
                        style={{ color: "var(--color-accent-purple)" }}
                      >
                        View All →
                      </Link>
                    </div>

                    {/* ── Scrollable grid ── */}
                    <div className="overflow-y-auto max-h-[55vh] px-6 lg:px-10 py-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                      {loading ? (
                        <div className="text-center text-[var(--color-muted-light)] py-8">
                          Loading courses...
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                          {courses.map((course: any, i: number) => (
                            <motion.div
                              key={course.id}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.15, delay: i * 0.02 }}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              <button
                                onClick={() => handleCourseClick(course.slug)}
                                className="w-full text-left flex items-center gap-3 p-3 rounded-xl bg-[var(--color-white)] hover:bg-[var(--color-bg-softest)] transition-all border border-transparent hover:border-[var(--color-border-light)] hover:shadow-md"
                              >
                                <div className="w-9 h-9 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-lg overflow-hidden flex-shrink-0">
                                  {course.icon ? (
                                    <Image
                                      src={`${BASE_URL}${course.icon}`}
                                      alt={course.name}
                                      width={36}
                                      height={36}
                                      className="object-cover w-full h-full"
                                    />
                                  ) : (
                                    getCourseIcon(course.name)
                                  )}
                                </div>
                                <span className="text-sm font-semibold text-[var(--color-text-medium)] line-clamp-2">
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
              </AnimatePresence>
            </li>

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
            <li
              className="relative py-3 sm:py-4 md:py-6"
              onMouseEnter={() => setIsResourceOpen(true)}
              onMouseLeave={() => setIsResourceOpen(false)}
            >
              <motion.span
                whileHover={{ y: -2 }}
                className="flex items-center gap-1 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer hover:text-[var(--color-accent-purple)]"
              >
                Resources
                <FaChevronUp
                  className={`transition-transform duration-300 text-[10px] sm:text-xs ${isResourceOpen ? "rotate-180" : ""
                    }`}
                />
              </motion.span>

              <AnimatePresence>
                {isResourceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute  mt-2 w-44 bg-white shadow-xl rounded-xl border border-gray-100 z-50"
                  >
                    <Link
                      href="/blogs"
                      className="block px-4 py-3 text-sm font-semibold text-[var(--color-text-medium)] hover:bg-[var(--color-bg-softest)] rounded-xl"
                    >
                      Blogs
                    </Link>

                    <Link
                      href="/coursefaqs"
                      className="block px-4 py-3 text-sm font-semibold text-[var(--color-text-medium)] hover:bg-[var(--color-bg-softest)] rounded-xl"
                    >
                      FAQ
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* ── RIGHT: Search + Cart + Admin + Enroll ── */}
          <div className="hidden md:flex items-center gap-1 flex-shrink-0 border-l border-gray-200 pl-4">
            {/* Enroll marquee pill */}
            <button
              onClick={() => {
                setIsDropdownOpen(false);
                setIsEnrollOpen(true);
              }}
              className="relative ml-1 overflow-hidden px-6 py-2 rounded-full border-2 font-semibold text-sm whitespace-nowrap cursor-pointer"
              style={{ borderColor: "var(--color-accent-purple)" }}
            >
              <span
                className="animate-marquee-text block"
                style={{ color: "var(--color-accent-purple)" }}
              >
                Enroll Now
              </span>
            </button>
          </div>

          {/* ── MOBILE RIGHT ── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                setIsDropdownOpen(false);
                setIsEnrollOpen(true);
              }}
              className="relative overflow-hidden px-4 py-1.5 rounded-full border-2 font-semibold text-xs cursor-pointer"
              style={{ borderColor: "var(--color-accent-purple)" }}
            >
              <span
                className="animate-marquee-text block"
                style={{ color: "var(--color-accent-purple)" }}
              >
                Enroll Now
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-[var(--color-text-medium)] hover:text-[var(--color-accent-purple)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-[var(--color-white)] shadow-lg border-t z-50 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${isActive("/") && pathname === "/"
                      ? "bg-[var(--color-accent-purple)] text-white font-bold"
                      : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
                    }`}
                >
                  Home
                </Link>

                <div className="py-1">
                  <button
                    onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${isActive("/courses")
                        ? "bg-[var(--color-accent-purple)] text-white font-bold"
                        : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
                      }`}
                  >
                    <span>Courses</span>
                    <FaChevronUp
                      className={`transition-transform duration-300 ${isMobileCoursesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileCoursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {loading ? (
                          <div className="text-center text-[var(--color-muted-light)] py-4">
                            Loading courses...
                          </div>
                        ) : (
                          /* ── Mobile courses scrollable ── */
                          <div className="max-h-[40vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-2 p-2">
                              {courses.map((course: any) => (
                                <motion.div
                                  key={course.id}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <button
                                    onClick={() =>
                                      handleCourseClick(course.slug)
                                    }
                                    className="w-full text-left flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[var(--color-bg-softest)] transition-colors border border-transparent hover:border-[var(--color-border-light)]"
                                  >
                                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-softest)] rounded-lg overflow-hidden flex-shrink-0">
                                      {course.image ? (
                                        <Image
                                          src={`${BASE_URL}${course.image}`}
                                          alt={course.name}
                                          width={40}
                                          height={40}
                                          className="object-cover w-full h-full"
                                        />
                                      ) : (
                                        getCourseIcon(course.name)
                                      )}
                                    </div>
                                    <span className="text-xs font-medium text-[var(--color-text-medium)] text-center line-clamp-2">
                                      {course.name}
                                    </span>
                                  </button>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${isActive("/about")
                      ? "bg-[var(--color-accent-purple)] text-white font-bold"
                      : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
                    }`}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${isActive("/contact")
                      ? "bg-[var(--color-accent-purple)] text-white font-bold"
                      : "hover:bg-[var(--color-bg-softest)] text-[var(--color-text-medium)]"
                    }`}
                >
                  Contact
                </Link>

                <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
                  {linkIcon.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-[var(--color-text-medium)] hover:text-[var(--color-accent-purple)]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── ENROLL MODAL — unchanged ── */}
      {isEnrollOpen && (
        <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[var(--color-white)] rounded-xl w-full max-w-lg p-6 relative shadow-xl">
            <button
              onClick={() => setIsEnrollOpen(false)}
              className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-black text-xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold mb-1 text-[var(--color-text-strong)]">
              🎓 Enroll Now
            </h2>
            <p className="text-sm text-[var(--color-muted)] mb-3">
              Fill the form below to enroll in your desired course. Our team
              will contact you shortly 🚀
            </p>
            <p className="text-xs text-[var(--color-muted-light)] mb-4">
              * All fields are required
            </p>
            <form
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const first_name = (
                  formData.get("first_name") as string
                ).trim();
                const last_name = (formData.get("last_name") as string).trim();
                const email = (formData.get("email") as string).trim();
                const mobile = (formData.get("mobile") as string).trim();
                const city = (formData.get("city") as string).trim();
                const course_id = Number(formData.get("course_id"));
                const course_name = (
                  formData.get("course_name") as string
                ).trim();
                if (
                  !first_name ||
                  !last_name ||
                  !email ||
                  !mobile ||
                  !city ||
                  !course_id
                ) {
                  alert("⚠️ Please fill all fields");
                  return;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  alert("⚠️ Invalid Email Address");
                  return;
                }
                if (!/^[0-9]{10}$/.test(mobile)) {
                  alert("⚠️ Enter valid 10 digit mobile number");
                  return;
                }
                try {
                  const res = await fetch(`${BASE_URL}/enroll/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      first_name,
                      last_name,
                      email,
                      mobile,
                      city,
                      course_id,
                      course_name,
                    }),
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
              <input
                name="first_name"
                placeholder="First Name"
                required
                className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                name="last_name"
                placeholder="Last Name"
                required
                className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                name="mobile"
                placeholder="Mobile"
                required
                className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                name="city"
                placeholder="City"
                required
                className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <select
                name="course_id"
                required
                className="border p-2 rounded focus:ring-2 focus:ring-purple-400 outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const selected = courses.find(
                    (c: any) => c.id == e.target.value,
                  );
                  const input = document.querySelector(
                    'input[name="course_name"]',
                  ) as HTMLInputElement;
                  if (input) input.value = selected?.name || "";
                }}
              >
                <option value="">Select Course</option>
                {courses.map((c: any) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <input type="hidden" name="course_name" />
              {/* <button
                type="submit"
                className="mt-2 w-full py-2.5 rounded-lg font-semibold text-white shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
                style={{ background: "var(--color-logo-gradient)" }}
              >
                🎓 Enroll Now
              </button> */}
              <div className="w-full mt-2">
  <Button
    type="submit"
    variant="gradient"
    size="lg"
    className="w-full"
  >
    {loading ? "Processing..." : "🎓 Enroll Now"}
  </Button>
</div>
            </form>
          </div>
        </div>
      )}
    </motion.header>
  );
}