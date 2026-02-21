

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
//       icon: <Clock size={20} />,
//       label: "Durations",
//       value: course.duration,
//     },
//     {
//       icon: <Folder size={20} />,
//       label: "Lectures",
//       value: course.lecture,
//     },
//     {
//       icon: <User size={20} />,
//       label: "Students",
//       value: `Max ${course.students}`,
//     },
//     {
//       icon: <Flag size={20} />,
//       label: "Level",
//       value: course.level,
//     },
//     {
//       icon: <Languages size={20} />,
//       label: "Language",
//       value: course.language,
//     },
//     {
//       icon: <Award size={20} />,
//       label: "Certificate",
//       value: course.certificate,
//     },
//   ];

//   return (
// <div className="bg-white rounded-xl shadow border sticky top-[140px] overflow-hidden h-fit self-start">
    

//       {/* INFO LIST (Histudy style) */}
//       <div className="divide-y">
//         {items.map((item, i) => (
//           <div key={i} className="flex items-center gap-4 px-6 py-4">

//             {/* ICON CIRCLE */}
//             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-primary)]">
//               {item.icon}
//             </div>

//             {/* TEXT */}
//             <div className="text-sm">
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

import {
  Clock,
  Folder,
  User,
  Flag,
  Languages,
  Award,
} from "lucide-react";

export default function CourseSidebar({ course }: any) {
  const items = [
    {
      icon: <Clock size={18} />,
      label: "Durations",
      value: course.duration,
    },
    {
      icon: <Folder size={18} />,
      label: "Lectures",
      value: course.lecture,
    },
    {
      icon: <User size={18} />,
      label: "Students",
      value: `Max ${course.students}`,
    },
    {
      icon: <Flag size={18} />,
      label: "Level",
      value: course.level,
    },
    {
      icon: <Languages size={18} />,
      label: "Language",
      value: course.language,
    },
    {
      icon: <Award size={18} />,
      label: "Certificate",
      value: course.certificate,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow border sticky top-[140px] overflow-hidden h-fit self-start w-fit min-w-[260px]">

      <div className="divide-y">

        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3"
          >
            {/* ICON */}
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-primary)]">
              {item.icon}
            </div>

            {/* TEXT */}
            <div className="text-[13px] leading-none">
              <span className="text-gray-500">{item.label}: </span>
              <span className="font-semibold text-gray-800">
                {item.value}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}