
// "use client";

// import {
//   Clock,
//   Folder,
//   User,
//   Flag,
//   Languages,
//   Award,
// } from "lucide-react";

// export default function CourseSidebar({ course }: any) {
//   const items = [
//     {
//       icon: <Clock size={18} />,
//       label: "Durations",
//       value: course.duration,
//     },
//     {
//       icon: <Folder size={18} />,
//       label: "Lectures",
//       value: course.lecture,
//     },
//     {
//       icon: <User size={18} />,
//       label: "Students",
//       value: `Max ${course.students}`,
//     },
//     {
//       icon: <Flag size={18} />,
//       label: "Level",
//       value: course.level,
//     },
//     {
//       icon: <Languages size={18} />,
//       label: "Language",
//       value: course.language,
//     },
//     {
//       icon: <Award size={18} />,
//       label: "Certificate",
//       value: course.certificate,
//     },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow border sticky top-[140px] overflow-hidden h-fit self-start w-fit min-w-[260px]">

//       <div className="divide-y">

//         {items.map((item, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-3 px-5 py-3"
//           >
//             {/* ICON */}
//             <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-primary)]">
//               {item.icon}
//             </div>

//             {/* TEXT */}
//             <div className="text-[13px] leading-none">
//               <span className="text-gray-500">{item.label}: </span>
//               <span className="font-semibold text-gray-800">
//                 {item.value}
//               </span>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

"use client";

import { Clock, Folder, User, Flag, Languages, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CourseSidebar({ course }: any) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const items = [
    {
      icon: <Clock size={isMobile ? 16 : 18} />,
      label: "Duration",
      value: course.duration || "8 weeks",
    },
    {
      icon: <Folder size={isMobile ? 16 : 18} />,
      label: "Lectures",
      value: course.lecture || "75",
    },
    {
      icon: <User size={isMobile ? 16 : 18} />,
      label: "Students",
      value: `Max ${course.students || "5"}`,
    },
    {
      icon: <Flag size={isMobile ? 16 : 18} />,
      label: "Level",
      value: course.level || "All Levels",
    },
    {
      icon: <Languages size={isMobile ? 16 : 18} />,
      label: "Language",
      value: course.language || "English",
    },
    {
      icon: <Award size={isMobile ? 16 : 18} />,
      label: "Certificate",
      value: course.certificate || "No",
    },
  ];

  // Mobile: Horizontal scrollable bar
  if (isMobile) {
    return (
      <div className="w-full mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 pb-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 bg-[var(--color-bg-primary)] rounded-lg shadow-[var(--shadow-sm)] border border-[var(--color-border)] p-3 min-w-[140px]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-primary)]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">{item.label}</p>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop: Vertical sticky sidebar
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[var(--color-bg-primary)] rounded-xl shadow-[var(--shadow-md)] border border-[var(--color-border)] sticky top-[140px] overflow-hidden w-full"
    >
      <div className="divide-y divide-[var(--color-border)]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-bg-light)] transition-colors"
          >
            {/* ICON */}
            <div className="w-9 h-9 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-primary)]">
              {item.icon}
            </div>

            {/* TEXT */}
            <div className="text-sm">
              <span className="text-[var(--color-text-light)]">{item.label}: </span>
              <span className="font-semibold text-[var(--color-text-primary)]">
                {item.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}