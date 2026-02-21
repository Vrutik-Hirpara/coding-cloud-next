// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { API } from "@/lib/api";
// import LOGO from '../public/logos/logo.png'

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
// import { CiShoppingCart } from "react-icons/ci";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";

// // ICON MAPPER
// const getCourseIcon = (name: string) => {
//   const n = name.toLowerCase();

//   if (n.includes("python django")) return <SiDjango className="text-green-900 text-xl" />;
//   if (n.includes("python")) return <FaPython className="text-yellow-500 text-2xl" />;
//   if (n.includes("machine learning")) return <BrainCircuit className="text-pink-500 text-xl" />;
//   if (n.includes("data science")) return <MdOutlineScience className="text-blue-400 text-2xl" />;
//   if (n.includes("data analytics")) return <BsGraphUp className="text-yellow-600 text-xl" />;
//   if (n.includes("testing")) return <FaCheckCircle className="text-red-500 text-xl" />;

//   if (n.includes("javascript")) return <SiJavascript className="text-yellow-400 text-xl" />;
//   if (n.includes("react")) return <FaReact className="text-blue-400 text-2xl" />;
//   if (n.includes("node")) return <FaNodeJs className="text-green-600 text-2xl" />;
//   if (n.includes("mern")) return <div className="flex text-xs"><FaReact /><FaNodeJs /></div>;
//   if (n.includes("android")) return <FaAndroid className="text-green-500 text-2xl" />;
//   if (n.includes("flutter")) return <SiFlutter className="text-blue-400 text-xl" />;

//   if (n.includes("c++")) return <TbBrandCpp className="text-blue-700 text-2xl" />;
//   if (n.includes("c programming")) return <SiC className="text-blue-500 text-2xl" />;
//   if (n.includes("php")) return <FaPhp className="text-indigo-600 text-2xl" />;
//   if (n.includes("java")) return <FaJava className="text-red-500 text-2xl" />;
//   if (n.includes("web design")) return <SiHtml5 className="text-orange-500 text-xl" />;
//   if (n.includes("aws")) return <FaAws className="text-orange-400 text-2xl" />;

//   return <FaCheckCircle className="text-gray-400 text-xl" />;
// };

// export default function Navbar() {
//   const pathname = usePathname();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mobileSubMenu, setMobileSubMenu] = useState("");
//   const [courses, setCourses] = useState<any[]>([]);

//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST);
//         const data = await res.json();
//         setCourses(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getCourses();
//   }, []);

//   // close mobile on route change
//   useEffect(() => {
//     setIsMenuOpen(false);
//     setMobileSubMenu("");
//   }, [pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="sticky top-0 z-[999] bg-white shadow-sm">

//       {/* TOP BAR */}
//       <div className="hidden lg:flex h-12 bg-[#1a1a2e] text-gray-400 text-sm justify-between items-center px-6">
//         <div className="flex gap-6">
//           <div className="flex items-center gap-2 hover:text-white"><FaInstagram /> 100K</div>
//           <div className="flex items-center gap-2 hover:text-white"><FaFacebookSquare /> 500K</div>
//           <div className="flex items-center gap-2 hover:text-white"><IoCallOutline /> +91-9876543210</div>
//         </div>
//         <div className="flex gap-4">
//           {[FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter].map((Icon, i) => (
//             <Icon key={i} className="hover:text-white cursor-pointer" />
//           ))}
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="relative border-b border-gray-100">
//         <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between relative">

//           {/* LOGO */}
//           <Link href="/">
//             <Image src={LOGO} alt="logo" width={130} height={40} />
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden lg:flex items-center gap-8">
//             <ul className="flex items-center gap-8 font-bold text-gray-700">

//               <li><Link href="/">Home</Link></li>

//               {/* COURSES MEGA MENU */}
//               <li className="static group py-6 cursor-pointer">
//                 <span className="flex items-center gap-1 hover:text-blue-600">
//                   Courses <FaChevronUp className="group-hover:rotate-180 transition" />
//                 </span>

//                 <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-xl border-t opacity-0 invisible translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 p-8">
//                   <div className="grid grid-cols-4 gap-y-4 gap-x-8">
//                     {courses.map((course) => (
//                       <Link key={course.id} href={`/courses/${course.id}`} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
//                         <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
//                           {getCourseIcon(course.name)}
//                         </div>
//                         <span className="text-sm font-bold text-gray-700 hover:text-blue-600 truncate">
//                           {course.name}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </li>

//               <li>Juniors</li>
//               <li>Internship</li>
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/contact">Contact Us</Link></li>

//             </ul>

//             <div className="flex items-center gap-6">
//               <FaSearch className="text-gray-600 hover:text-blue-600 cursor-pointer text-lg" />
//               <button className="bg-gray-900 text-white rounded-full px-6 py-2.5 font-bold text-sm hover:bg-blue-600 transition">
//                 Enroll Now
//               </button>
//             </div>
//           </div>

//           {/* MOBILE */}
//           <div className="lg:hidden flex items-center gap-5">
//             <CiShoppingCart className="text-2xl text-gray-700" />
//             <button onClick={toggleMenu}>
//               {isMenuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>

//         </div>

//         {/* MOBILE MENU */}
//         <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 ${isMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
//           <div className="p-6 flex flex-col gap-4">

//             <Link href="/">Home</Link>

//             <button onClick={() => setMobileSubMenu(mobileSubMenu === "courses" ? "" : "courses")} className="flex justify-between items-center">
//               Courses <FaChevronUp className={`${mobileSubMenu === "courses" ? "rotate-180" : ""}`} />
//             </button>

//             {mobileSubMenu === "courses" && (
//               <div className="pl-4 flex flex-col gap-2">
//                 {courses.map((c) => (
//                   <Link key={c.id} href={`/courses/${c.id}`}>{c.name}</Link>
//                 ))}
//               </div>
//             )}

//             <Link href="/contact">Contact Us</Link>

//             <button className="bg-blue-600 text-white py-3 rounded-lg">Enroll Now</button>

//           </div>
//         </div>

//       </nav>
//     </header>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { API } from "@/lib/api";

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
// import { CiShoppingCart } from "react-icons/ci";
// import { BrainCircuit } from "lucide-react";
// import { BsGraphUp } from "react-icons/bs";
// import { MdOutlineScience } from "react-icons/md";

// // ICON MAPPER
// const getCourseIcon = (name: string) => {
//   const n = name.toLowerCase();

//   if (n.includes("python django")) return <SiDjango className="text-green-900 text-xl" />;
//   if (n.includes("python")) return <FaPython className="text-yellow-500 text-2xl" />;
//   if (n.includes("machine learning")) return <BrainCircuit className="text-pink-500 text-xl" />;
//   if (n.includes("data science")) return <MdOutlineScience className="text-blue-400 text-2xl" />;
//   if (n.includes("data analytics")) return <BsGraphUp className="text-yellow-600 text-xl" />;
//   if (n.includes("testing")) return <FaCheckCircle className="text-red-500 text-xl" />;

//   if (n.includes("javascript")) return <SiJavascript className="text-yellow-400 text-xl" />;
//   if (n.includes("react")) return <FaReact className="text-blue-400 text-2xl" />;
//   if (n.includes("node")) return <FaNodeJs className="text-green-600 text-2xl" />;
//   if (n.includes("mern")) return <div className="flex text-xs"><FaReact /><FaNodeJs /></div>;
//   if (n.includes("android")) return <FaAndroid className="text-green-500 text-2xl" />;
//   if (n.includes("flutter")) return <SiFlutter className="text-blue-400 text-xl" />;

//   if (n.includes("c++")) return <TbBrandCpp className="text-blue-700 text-2xl" />;
//   if (n.includes("c programming")) return <SiC className="text-blue-500 text-2xl" />;
//   if (n.includes("php")) return <FaPhp className="text-indigo-600 text-2xl" />;
//   if (n.includes("java")) return <FaJava className="text-red-500 text-2xl" />;
//   if (n.includes("web design")) return <SiHtml5 className="text-orange-500 text-xl" />;
//   if (n.includes("aws")) return <FaAws className="text-orange-400 text-2xl" />;

//   return <FaCheckCircle className="text-gray-400 text-xl" />;
// };

// export default function Navbar() {
//   const pathname = usePathname();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mobileSubMenu, setMobileSubMenu] = useState("");
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
// const [forceClose, setForceClose] = useState(false);
//   // FETCH COURSES
//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const res = await fetch(API.COURSES.LIST, {
//           cache: "no-store",
//         });
//         const data = await res.json();
//         setCourses(data || []);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getCourses();
//   }, []);

//   useEffect(() => {
//     setIsMenuOpen(false);
//     setMobileSubMenu("");
//       setForceClose(false); // 🔥 reset

//   }, [pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="sticky top-0 z-[999] bg-white shadow-sm">

//       {/* TOP BAR */}
//       <div className="hidden lg:flex h-12 bg-[#1a1a2e] text-gray-400 text-sm justify-between items-center px-6">
//         <div className="flex gap-6">
//           <div className="flex items-center gap-2 hover:text-white"><FaInstagram /> 100K</div>
//           <div className="flex items-center gap-2 hover:text-white"><FaFacebookSquare /> 500K</div>
//           <div className="flex items-center gap-2 hover:text-white"><IoCallOutline /> +91-9876543210</div>
//         </div>
//         <div className="flex gap-4">
//           {[FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter].map((Icon, i) => (
//             <Icon key={i} className="hover:text-white cursor-pointer" />
//           ))}
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="relative border-b border-gray-100">
//         <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">

//           {/* LOGO */}
//           <Link href="/">
//             <Image src="/logos/logo.png" alt="logo" width={130} height={40} />
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden lg:flex items-center gap-8">
//             <ul className="flex items-center gap-8 font-bold text-gray-700">

//               <li><Link href="/">Home</Link></li>

//               {/* COURSES */}
//               <li className="static group py-6 cursor-pointer">
//                 <span className="flex items-center gap-1 hover:text-[var(--color-primary)]">
//                   Courses <FaChevronUp className="group-hover:rotate-180 transition" />
//                 </span>

//                 <div  className={`absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-xl border-t
//   opacity-0 invisible translate-y-4
//   ${!forceClose ? "group-hover:visible group-hover:opacity-100 group-hover:translate-y-0" : ""}
//   transition-all duration-300 z-50 p-8`}>

//                   {loading ? (
//                     <div className="text-center text-gray-400">Loading...</div>
//                   ) : (
//                     <div className="grid grid-cols-4 gap-4">
//                       {courses.map((course: any) => (
//                         <Link
//                           key={course.id}
//                           href={`/courses/${course.id}`}
//                             onClick={() => setForceClose(true)}   // 🔥 close dropdown

//                           className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
//                         >
//                           <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
//                             {getCourseIcon(course.name)}
//                           </div>
//                           <span className="text-sm font-bold truncate">
//                             {course.name}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}

//                 </div>
//               </li>

//               <li><Link href="/about">About</Link></li>
//               <li><Link href="/contact">Contact</Link></li>

//             </ul>

//             <button className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full">
//               Enroll Now
//             </button>
//           </div>

//           {/* MOBILE */}
//           <div className="lg:hidden flex items-center gap-5">
//             <CiShoppingCart className="text-2xl" />
//             <button onClick={toggleMenu}>
//               {isMenuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white shadow-xl p-6">
//             <Link href="/">Home</Link>

//             <button
//               onClick={() =>
//                 setMobileSubMenu(mobileSubMenu === "courses" ? "" : "courses")
//               }
//               className="flex justify-between w-full mt-4"
//             >
//               Courses <FaChevronUp />
//             </button>

//             {mobileSubMenu === "courses" && (
//               <div className="pl-4 flex flex-col gap-2 mt-2">
//                 {courses.map((c: any) => (
//                   <Link key={c.id} href={`/courses/${c.id}`}>
//                     {c.name}
//                   </Link>
//                 ))}
//               </div>
//             )}

//             <Link href="/contact" className="block mt-4">
//               Contact
//             </Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { API } from "@/lib/api";

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
import { CiShoppingCart } from "react-icons/ci";
import { BrainCircuit } from "lucide-react";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

// ICON MAPPER
const getCourseIcon = (name: string) => {
  const n = name.toLowerCase();

  if (n.includes("python django")) return <SiDjango className="text-green-900 text-xl" />;
  if (n.includes("python")) return <FaPython className="text-yellow-500 text-2xl" />;
  if (n.includes("machine learning")) return <BrainCircuit className="text-pink-500 text-xl" />;
  if (n.includes("data science")) return <MdOutlineScience className="text-blue-400 text-2xl" />;
  if (n.includes("data analytics")) return <BsGraphUp className="text-yellow-600 text-xl" />;
  if (n.includes("testing")) return <FaCheckCircle className="text-red-500 text-xl" />;

  if (n.includes("javascript")) return <SiJavascript className="text-yellow-400 text-xl" />;
  if (n.includes("react")) return <FaReact className="text-blue-400 text-2xl" />;
  if (n.includes("node")) return <FaNodeJs className="text-green-600 text-2xl" />;
  if (n.includes("mern")) return <div className="flex text-xs"><FaReact /><FaNodeJs /></div>;
  if (n.includes("android")) return <FaAndroid className="text-green-500 text-2xl" />;
  if (n.includes("flutter")) return <SiFlutter className="text-blue-400 text-xl" />;

  if (n.includes("c++")) return <TbBrandCpp className="text-blue-700 text-2xl" />;
  if (n.includes("c programming")) return <SiC className="text-blue-500 text-2xl" />;
  if (n.includes("php")) return <FaPhp className="text-indigo-600 text-2xl" />;
  if (n.includes("java")) return <FaJava className="text-red-500 text-2xl" />;
  if (n.includes("web design")) return <SiHtml5 className="text-orange-500 text-xl" />;
  if (n.includes("aws")) return <FaAws className="text-orange-400 text-2xl" />;

  return <FaCheckCircle className="text-gray-400 text-xl" />;
};

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState("");
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
const [forceClose, setForceClose] = useState(false);
  // FETCH COURSES
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetch(API.COURSES.LIST, {
          cache: "no-store",
        });
        const data = await res.json();
        setCourses(data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileSubMenu("");
      setForceClose(true); // 🔥 reset

  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-[999] bg-white shadow-sm">

      {/* TOP BAR */}
      <div className="hidden lg:flex h-12 bg-[#1a1a2e] text-gray-400 text-sm justify-between items-center px-6">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 hover:text-white"><FaInstagram /> 100K</div>
          <div className="flex items-center gap-2 hover:text-white"><FaFacebookSquare /> 500K</div>
          <div className="flex items-center gap-2 hover:text-white"><IoCallOutline /> +91-9876543210</div>
        </div>
        <div className="flex gap-4">
          {[FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter].map((Icon, i) => (
            <Icon key={i} className="hover:text-white cursor-pointer" />
          ))}
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="relative border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image src="/logos/logo.png" alt="logo" width={130} height={40} />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-bold text-gray-700">

              <li><Link href="/">Home</Link></li>

              {/* COURSES */}
             <li
  className="static group py-6 cursor-pointer"
  onMouseLeave={() => setForceClose(false)}
>
  <span className="flex items-center gap-1 hover:text-[var(--color-primary)]">
    Courses
    <FaChevronUp className="group-hover:rotate-180 transition" />
  </span>

  <div
    className={`absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-xl border-t
    transition-all duration-300 z-50 p-8
    ${
      forceClose
        ? "opacity-0 invisible translate-y-4"
        : "opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
    }`}
  >

                  {loading ? (
                    <div className="text-center text-gray-400">Loading...</div>
                  ) : (
                    <div className="grid grid-cols-4 gap-4">
                      {courses.map((course: any) => (
                        <Link
                          key={course.id}
                          href={`/courses/${course.id}`}
                            onClick={() => setForceClose(true)}   // 🔥 close dropdown

                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                            {getCourseIcon(course.name)}
                          </div>
                          <span className="text-sm font-bold truncate">
                            {course.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              </li>

              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>

            </ul>

            <button className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full">
              Enroll Now
            </button>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center gap-5">
            <CiShoppingCart className="text-2xl" />
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-xl p-6">
            <Link href="/">Home</Link>

            <button
              onClick={() =>
                setMobileSubMenu(mobileSubMenu === "courses" ? "" : "courses")
              }
              className="flex justify-between w-full mt-4"
            >
              Courses <FaChevronUp />
            </button>

            {mobileSubMenu === "courses" && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                {courses.map((c: any) => (
                  <Link key={c.id} href={`/courses/${c.id}`}>
                    {c.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/contact" className="block mt-4">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
