//maru

// "use client";

// import { Clock, Folder, User, Flag, Languages, Award } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function CourseSidebar({ course }: any) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const items = [
//     {
//       icon: <Clock size={isMobile ? 16 : 18} />,
//       label: "Duration",
//       value: course.duration || "8 weeks",
//     },
//     {
//       icon: <Folder size={isMobile ? 16 : 18} />,
//       label: "Lectures",
//       value: course.lecture || "75",
//     },
//     {
//       icon: <User size={isMobile ? 16 : 18} />,
//       label: "Students",
//       value: `Max ${course.students || "5"}`,
//     },
//     {
//       icon: <Flag size={isMobile ? 16 : 18} />,
//       label: "Level",
//       value: course.level || "All Levels",
//     },
//     {
//       icon: <Languages size={isMobile ? 16 : 18} />,
//       label: "Language",
//       value: course.language || "English",
//     },
//     {
//       icon: <Award size={isMobile ? 16 : 18} />,
//       label: "Certificate",
// value:
//   course.certificate === true
//     ? "Yes"
//     : course.certificate === false
//     ? "No"
//     : "No",    },
//   ];

//   // Mobile: Horizontal scrollable bar
//   if (isMobile) {
//     return (
//       <div className="w-full mb-6 overflow-x-auto scrollbar-hide">
//         <div className="flex gap-3 pb-2">
//           {items.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="flex-shrink-0 bg-[var(--color-bg-primary)] rounded-lg shadow-[var(--shadow-sm)] border border-[var(--color-border)] p-3 min-w-[140px]"
//             >
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-accent-purple)]">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <p className="text-xs text-[var(--color-text-light)]">{item.label}</p>
//                   <p className="text-sm font-semibold text-[var(--color-text-primary)]">
//                     {item.value}
//                   </p>

//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Desktop: Vertical sticky sidebar
//   return (
//     <motion.div 
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="bg-[var(--color-bg-primary)] rounded-xl shadow-[var(--shadow-md)] border border-[var(--color-border)] sticky top-[140px] overflow-hidden w-full"
//     >
//       <div className="divide-y divide-[var(--color-border)]">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: i * 0.05 }}
//             className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-bg-light)] transition-colors"
//           >
//             {/* ICON */}
//             <div className="w-9 h-9 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-accent-purple)]">
//               {item.icon}
//             </div>

//             {/* TEXT */}
//             <div className="text-sm">
//               <span className="text-[var(--color-text-light)]">{item.label}: </span>
//               <span className="font-semibold text-[var(--color-text-primary)]">
//                 {item.value}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }


//updated

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import EnrollModal from "./EnrollModal";
import Button from "./ui/Button";

export default function CourseSidebar({
    course,
    riverEnter,
    riverLeave,
}: any) {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);

    const social = [
        { id: 1, icon: FaFacebookF, link: "#" },
        { id: 2, icon: FaYoutube, link: "#" },
        { id: 3, icon: FaInstagram, link: "#" },
        { id: 4, icon: FaLinkedinIn, link: "#" },
    ];

    return (
        <>
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                courses={[course]}
            />
            <div className="bg-white border border-purple-300 rounded-xl shadow-md overflow-hidden">

                {/* PRICE */}
                <div className="p-6">



                    {/* ENROLL BUTTON */}
                    {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {

                        setIsEnrollOpen(true);
                    }}
                    className="z-999 bg-[var(--color-accent-purple)] text-[var(--color-white)] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
                >
                    Enroll Now
                </motion.button> */}

                  <Button
  variant="navbar"
  size="md"
  onClick={() => {
    setIsEnrollOpen(true);
  }}
>
  Enroll Now
</Button>

                    {/* COURSE INFO */}
                    {/* <div className="space-y-3 text-sm">

                    <Info label="Start Date" value={course.duration || "5 Hrs 20 Min"} />
                    <Info label="Enrolled" value={course.students || "100"} />
                    <Info label="Lectures" value={course.lecture || "50"} />
                    <Info label="Skill Level" value={course.level || "Basic"} />

                    {showMore && (
                        <Info label="Language" value={course.language || "English"} />
                    )}

                </div> */}
                    <div className="divide-y mt-4">

                        {[
                            { label: "Duration ", value: course.duration || "5 Hrs 20 Min" },
                            { label: "Students", value: `${course.students || "100"}` },
                            { label: "Lectures", value: course.lecture || "50" },
                            { label: "Level", value: course.level || "Basic" },
                            { label: "Language", value: course.language || "English" },
                            { label: "Certificate", value: course.certificate ? "Yes" : "No" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex justify-between items-center py-2 text-sm"
                            >
                                <span className="text-gray-500">{item.label}</span>
                                <span className="font-semibold text-gray-700">{item.value}</span>
                            </motion.div>
                        ))}

                    </div>



                </div>

                {/* SOCIAL */}
                <div className="border-t py-6 flex justify-center gap-4">

                    {social.map((data) => {
                        const Icon = data.icon;

                        return (
                            <motion.a
                                key={data.id}
                                href={data.link}
                                target="_blank"
                                whileHover={{ y: -6, scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm hover:bg-purple-600 hover:text-white"
                            >
                                <Icon size={15} />
                            </motion.a>
                        );
                    })}

                </div>

                {/* CALL SECTION */}
                <div className="border-t p-6 text-center">

                    <p className="text-sm text-gray-500 mb-3">
                        For details about the course
                    </p>

                    <div className="bg-purple-200 text-purple-800 rounded-full py-3 font-medium">
                        📞 Call Us:  +91 95373 44018
                    </div>

                </div>


            </div>

        </>
    );
}

function Info({ label, value }: any) {
    return (
        <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">{label}</span>
            <span className="font-semibold text-gray-700">{value}</span>
        </div>

    );
}