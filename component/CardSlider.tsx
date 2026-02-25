// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";

// export default function CardSlider() {
//   const [cards, setCards] = useState([
//     {
//       id: 1,
//       title: "React",
//       desc: "It is a long established fact that a reader will be distracted.",
//       lessons: 12,
//       students: 50,
//       color: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
//       price: 70,
//       oldPrice: 120,
//       rating: 15,
//       tag: "-40% Off",
//     },
//     {
//       id: 2,
//       title: "JavaScript",
//       desc: "Mastering the web language.",
//       lessons: 18,
//       students: 120,
//       color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
//       price: 60,
//       oldPrice: 100,
//       rating: 20,
//       tag: "Popular",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design",
//       desc: "Designing for user experience.",
//       lessons: 20,
//       students: 80,
//       color: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
//       price: 50,
//       oldPrice: 90,
//       rating: 18,
//       tag: "New",
//     },
//   ]);

//   const [dragX, setDragX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const startX = useRef(0);

//   const handleMouseDown = (e: any) => {
//     setIsDragging(true);
//     startX.current = e.clientX;
//   };

//   const handleMouseMove = (e: any) => {
//     if (!isDragging) return;
//     setDragX(e.clientX - startX.current);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     if (dragX > 100 || dragX < -100) {
//       setCards((prev) => {
//         const arr = [...prev];
//         arr.push(arr.shift()!);
//         return arr;
//       });
//     }
//     setDragX(0);
//   };

//   return (
//     <div className="w-full h-[450px] flex items-center justify-center relative">
//       <div
//         className="relative w-[280px] h-[380px] cursor-grab active:cursor-grabbing"
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//       >
//         {cards.map((card, index) => {
//           let style: any = {};

//           if (index === 0) {
//             style = {
//               zIndex: 3,
//               transform: isDragging
//                 ? `translateX(${dragX}px) rotate(${dragX * 0.05}deg)`
//                 : "translateX(0)",
//               transition: isDragging ? "none" : "transform 0.3s",
//             };
//           } else if (index === 1) {
//             style = {
//               zIndex: 2,
//               transform: "translateX(15px) translateY(15px) scale(0.95)",
//             };
//           } else {
//             style = {
//               zIndex: 1,
//               opacity: 0.5,
//               transform: "translateX(30px) translateY(30px) scale(0.9)",
//             };
//           }

//           if (index > 2) return null;

//           return (
//             <div
//               key={card.id}
//               style={style}
//               className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border"
//             >
//               {/* HEADER */}
//               <div
//                 className="h-[160px] p-5 relative text-white"
//                 style={{ background: card.color }}
//               >
//                 <h3 className="text-sm font-bold w-2/3 leading-snug">
//                   Difficult Things About Education.
//                 </h3>

//                 <span className="absolute bottom-4 left-4 text-xs bg-white/20 px-2 py-1 rounded">
//                   {card.lessons} Class
//                 </span>

//                 <div className="absolute top-4 right-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-xs font-bold border border-dashed border-white">
//                   {card.tag}
//                 </div>

//                 <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
//                   <Image
//                     src="https://i.pravatar.cc/300?img=5"
//                     alt="avatar"
//                     width={64}
//                     height={64}
//                   />
//                 </div>
//               </div>

//               {/* BODY */}
//               <div className="p-5 text-sm">
//                 <div className="flex justify-between text-gray-400 text-xs mb-2">
//                   <span>{card.lessons} Lessons</span>
//                   <span>{card.students} Students</span>
//                 </div>

//                 <h2 className="text-xl font-bold">{card.title}</h2>

//                 <p className="text-gray-500 text-xs">{card.desc}</p>

//                 <div className="text-yellow-400 my-2">
//                   ⭐⭐⭐⭐⭐ ({card.rating})
//                 </div>

//                 <div className="flex justify-between items-center border-t pt-3 mt-3">
//                   <div>
//                     <span className="font-bold text-lg">${card.price}</span>
//                     <span className="text-gray-400 line-through ml-2 text-xs">
//                       ${card.oldPrice}
//                     </span>
//                   </div>

//                   <button className="text-sm text-indigo-600 font-semibold">
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function CardSlider() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "React",
      desc: "It is a long established fact that a reader will be distracted.",
      lessons: 12,
      students: 50,
      color: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
      price: 70,
      oldPrice: 120,
      rating: 15,
      tag: "-40% Off",
    },
    {
      id: 2,
      title: "JavaScript",
      desc: "Mastering the web language.",
      lessons: 18,
      students: 120,
      color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
      price: 60,
      oldPrice: 100,
      rating: 20,
      tag: "Popular",
    },
    {
      id: 3,
      title: "UI/UX Design",
      desc: "Designing for user experience.",
      lessons: 20,
      students: 80,
      color: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
      price: 50,
      oldPrice: 90,
      rating: 18,
      tag: "New",
    },
  ]);

  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    setDragX(e.clientX - startX.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragX > 120 || dragX < -120) {
      setCards((prev) => {
        const arr = [...prev];
        arr.push(arr.shift()!);
        return arr;
      });
    }
    setDragX(0);
  };

  return (
    <div className="w-full h-[520px] flex items-center justify-center relative">
      <div
        className="relative w-[340px] h-[460px] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {cards.map((card, index) => {
          let style: any = {};

          if (index === 0) {
            style = {
              zIndex: 3,
              transform: isDragging
                ? `translateX(${dragX}px) rotate(${dragX * 0.05}deg)`
                : "translateX(0)",
              transition: isDragging ? "none" : "transform 0.3s",
            };
          } else if (index === 1) {
            style = {
              zIndex: 2,
              transform: "translateX(20px) translateY(20px) scale(0.96)",
            };
          } else {
            style = {
              zIndex: 1,
              opacity: 0.5,
              transform: "translateX(40px) translateY(40px) scale(0.9)",
            };
          }

          if (index > 2) return null;

          return (
            <div
              key={card.id}
              style={style}
              className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border"
            >
              {/* HEADER */}
              <div
                className="h-[190px] p-6 relative text-white"
                style={{ background: card.color }}
              >
                <h3 className="text-base font-bold w-2/3 leading-snug">
                  Difficult Things About Education.
                </h3>

                <span className="absolute bottom-5 left-5 text-xs bg-white/20 px-3 py-1 rounded">
                  {card.lessons} Class
                </span>

                <div className="absolute top-5 right-5 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-xs font-bold border border-dashed border-white">
                  {card.tag}
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="https://i.pravatar.cc/300?img=5"
                    alt="avatar"
                    fill
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* BODY */}
              <div className="p-6 text-sm">
                <div className="flex justify-between text-gray-400 text-xs mb-3">
                  <span>{card.lessons} Lessons</span>
                  <span>{card.students} Students</span>
                </div>

                <h2 className="text-2xl font-bold mb-1">{card.title}</h2>

                <p className="text-gray-500 text-sm mb-3">
                  {card.desc}
                </p>

                <div className="text-yellow-400 mb-3 text-sm">
                  ⭐⭐⭐⭐⭐ ({card.rating})
                </div>

                <div className="flex justify-between items-center border-t pt-4 mt-3">
                  <div>
                    <span className="font-bold text-xl">${card.price}</span>
                    <span className="text-gray-400 line-through ml-2 text-sm">
                      ${card.oldPrice}
                    </span>
                  </div>

                  <button className="text-sm text-indigo-600 font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
