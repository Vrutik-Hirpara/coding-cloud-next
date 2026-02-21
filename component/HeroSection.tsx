"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/component/ui/Button";
import CardSlider from "@/component/CardSlider";

const manImg = "/images/hero/banner-01.png";
const blobImg = "/images/hero/blob2.png";

export default function HeroSection() {
  return (
<section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-16 md:pt-20 overflow-hidden">     
<div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ================= LEFT CONTENT ================= */}
        {/* <div className="lg:col-span-5 space-y-6 z-10">
          <div className="bg-white px-4 py-2 rounded shadow text-sm font-bold border">
            🏆 The Leader in Online Learning
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build The Skills <br /> To Drive Your Career.
          </h1>

          <p className="text-gray-500 text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor.
          </p>

          <Button icon={FaArrowRight}>
            View Course
          </Button>
        </div> */}
          <div className="lg:col-span-5 space-y-6 z-10">

          {/* BADGE */}
          <span className="hero-badge ">
            EDUCATION FOR EVERYONE
          </span>

          {/* TITLE */}
          {/* <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Innovative <span className="text-gradient">Language</span><br />
            <span className="text-gradient-light">Academic</span> Platform<br />
            for Your Career.
          </h1> */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build The <br /><span className="text-gradient">Skills</span><br />To Drive Your <br />
            <span className="text-gradient-light">Carrier</span>
          </h1>

          {/* TEXT */}
          <p className="text-gray-600 text-lg">
            Join over <strong>3000+</strong> students to boost your skills and
            build a successful professional career.
          </p>

 
 <Button icon={FaArrowRight}>
            View Course
          </Button>
        

        </div>

        {/* ================= RIGHT SIDE ================= */}
<div className="lg:col-span-7 relative flex items-end justify-start h-auto md:h-[480px]">
          {/* BLOB + GIRL GROUP */}
 <div className="relative w-[480px] h-full flex items-end justify-start -translate-x-16">

  {/* BLOB BACKGROUND */}
  <Image
    src={blobImg}
    alt="blob"
    width={400}
    height={400}
    className="absolute -left-7 -bottom-3 w-[420px] opacity-80 z-0"
  />

  {/* GIRL IMAGE */}
  <Image
    src={manImg}
    alt="student"
    width={400}
    height={600}
    className="relative bottom-0 z-10 object-contain"
    priority
  />

</div>

          {/* CARD SLIDER */}
          <div className="absolute right-0 bottom-8 z-20 hidden lg:block">
            <CardSlider />
          </div>

        </div>

      </div>
    </section>
  );
}


// "use client";

// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import Button from "@/component/ui/Button";
// import CardSlider from "@/component/CardSlider";

// const manImg = "/images/hero/banner-01.png";
// const blobImg = "/images/hero/blob2.png";

// export default function HeroSection() {

//   // ✅ TSX safe hover animation
//   const handleHover = (
//     e: React.MouseEvent<HTMLButtonElement>,
//     type: "in" | "out",
//     classIn: string,
//     classOut: string
//   ) => {
//     const span = e.currentTarget.querySelector("span");
//     if (!span) return;

//     span.classList.remove(type === "in" ? classOut : classIn);
//     void (span as HTMLElement).offsetWidth;
//     span.classList.add(type === "in" ? classIn : classOut);
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center overflow-hidden">
//       <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

//         {/* ================= LEFT CONTENT ================= */}
//         <div className="lg:col-span-5 space-y-6 z-10">

//           {/* BADGE */}
//           <span className="hero-badge ">
//             EDUCATION FOR EVERYONE
//           </span>

//           {/* TITLE */}
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Innovative <span className="text-gradient">Language</span><br />
//             <span className="text-gradient-light">Academic</span> Platform<br />
//             for Your Career.
//           </h1>

//           {/* TEXT */}
//           <p className="text-gray-600 text-lg">
//             Join over <strong>3000+</strong> students to boost your skills and
//             build a successful professional career.
//           </p>

 

        

//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="lg:col-span-7 relative flex items-end justify-start h-[560px]">

//           {/* IMAGE GROUP */}
//           <div className="relative w-[480px] h-full flex items-end justify-start -translate-x-16">

//             {/* BLOB */}
//             <Image
//               src={blobImg}
//               alt="blob"
//               width={400}
//               height={400}
//               className="absolute -left-8 bottom-2 w-[420px] opacity-80 z-0"
//             />

//             {/* MAIN IMAGE */}
//             <Image
//               src={manImg}
//               alt="student"
//               width={380}
//               height={500}
//               className="relative -top-10 z-10 object-contain"
//               priority
//             />

//           </div>

//           {/* CARD SLIDER */}
//           <div className="absolute right-0 bottom-8 z-20 hidden lg:block">
//             <CardSlider />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }