// "use client";

// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import Button from "@/component/ui/Button";
// import CardSlider from "@/component/CardSlider";

// const manImg = "/images/hero/banner-01.png";
// const blobImg = "/images/hero/blob2.png";

// export default function HeroSection() {
//   return (
// <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-16 md:pt-20 overflow-hidden">     
// <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//         {/* ================= LEFT CONTENT ================= */}
//         {/* <div className="lg:col-span-5 space-y-6 z-10">
//           <div className="bg-[var(--color-white)] px-4 py-2 rounded shadow text-sm font-bold border">
//             🏆 The Leader in Online Learning
//           </div>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Build The Skills <br /> To Drive Your Career.
//           </h1>

//           <p className="text-[var(--color-muted)] text-lg">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor.
//           </p>

//           <Button icon={FaArrowRight}>
//             View Course
//           </Button>
//         </div> */}
//           <div className="lg:col-span-5 space-y-6 z-10">

//           {/* BADGE */}
//           <span className="hero-badge ">
//             EDUCATION FOR EVERYONE
//           </span>

//           {/* TITLE */}
//           {/* <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Innovative <span className="text-gradient">Language</span><br />
//             <span className="text-gradient-light">Academic</span> Platform<br />
//             for Your Career.
//           </h1> */}
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Build The <br /><span className="text-gradient">Skills</span><br />To Drive Your <br />
//             <span className="text-gradient-light">Carrier</span>
//           </h1>

//           {/* TEXT */}
//           <p className="text-[var(--color-muted)] text-lg">
//             Join over <strong>3000+</strong> students to boost your skills and
//             build a successful professional career.
//           </p>


//  <Button icon={FaArrowRight}>
//             View Course
//           </Button>


//         </div>

//         {/* ================= RIGHT SIDE ================= */}
// <div className="lg:col-span-7 relative flex items-end justify-start h-auto md:h-[480px]">
//           {/* BLOB + GIRL GROUP */}
//  <div className="relative w-[480px] h-full flex items-end justify-start -translate-x-16">

//   {/* BLOB BACKGROUND */}
//   <Image
//     src={blobImg}
//     alt="blob"
//     width={400}
//     height={400}
//     className="absolute -left-7 -bottom-3 w-[420px] opacity-80 z-0"
//   />

//   {/* GIRL IMAGE */}
//   <Image
//     src={manImg}
//     alt="student"
//     width={400}
//     height={600}
//     className="relative bottom-0 z-10 object-contain"
//     priority
//   />

// </div>

//           {/* CARD SLIDER */}
//           <div className="absolute right-0 bottom-8 z-20 hidden lg:block">
//             <CardSlider />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/component/ui/Button";
import CardSlider from "@/component/CardSlider";
import { motion } from "framer-motion";

type HeroData = {
  titleLine1: string;
  highlight1: string;
  titleLine2: string;
  highlight2: string;
  description: string;
  students: number;
  image: string;
};

const defaultData: HeroData = {
  titleLine1: "Build The",
  highlight1: "Skills",
  titleLine2: "To Drive Your",
  highlight2: "Career",
  description:
    "Join over 3000+ students to boost your skills and build a successful professional career.",
  students: 3000,
  image: "/images/hero/banner-01.png",
};

const blobImg = "/images/hero/blob2.png";

export default function HeroSection({ data = defaultData }: { data?: HeroData }) {
  return (
    <section
      className="pt-12 md:pt-16 lg:pt-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg,
          var(--color-gradient-start),
          var(--color-gradient-mid),
          var(--color-gradient-end)
        )`,
      }}
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-5 lg:space-y-6 text-center lg:text-left z-10"
        >
          <span className="hero-badge mx-auto lg:mx-0">
            EDUCATION FOR EVERYONE
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight text-[var(--color-text)]">
            {data.titleLine1} <br />
            <span className="text-gradient">{data.highlight1}</span> <br />
            {data.titleLine2} <br />
            <span className="text-gradient-light">{data.highlight2}</span>
          </h1>

          <p className="text-[var(--color-text-light)] text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Join over <strong>{data.students}+</strong> students to boost your skills
            and build a successful professional career.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button icon={FaArrowRight}>View Course</Button>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
  lg:col-span-7
  flex flex-col md:flex-row
  items-center md:items-end
  justify-center md:justify-center lg:justify-start
  gap-4
  relative
  md:px-4
  lg:px-0
  lg:-ml-20
"
        >

          {/* ===== IMAGE BLOCK (RIGHT ALIGNED ALWAYS) ===== */}
          <div
            className="
              relative
              w-[260px] sm:w-[340px] md:w-[380px] lg:w-[420px]
              h-full
              flex items-end
              justify-center lg:justify-end
            "
          >
            {/* BLOB */}
            <Image
              src={blobImg}
              alt="blob"
              width={420}
              height={420}
              className="
                absolute
                bottom-0
                right-0
                w-full
                opacity-80
                z-0
              "
            />

            {/* GIRL IMAGE */}
            <Image
              src={data.image}
              alt="student"
              width={420}
              height={600}
              className="relative z-10 object-contain w-full h-auto"
              priority
            />
          </div>

          {/* ===== CARD SLIDER ===== */}
          <div
            className="
relative md:static lg:absolute
    absolute lg:absolute
    md:static
    lg:right-0 lg:bottom-8
    z-20
    mt-6 md:mt-0
    px-5 md:px-0
  "
          >
            <CardSlider />
          </div>

        </motion.div>

      </div>
    </section>
  );
}