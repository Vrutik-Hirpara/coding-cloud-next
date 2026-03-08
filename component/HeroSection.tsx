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


//maru

// "use client";

// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import Button from "@/component/ui/Button";
// import CardSlider from "@/component/CardSlider";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// type HeroData = {
//   titleLine1: string;
//   highlight1: string;
//   titleLine2: string;
//   highlight2: string;
//   description: string;
//   students: number;
//   image: string;
// };

// const defaultData: HeroData = {
//   titleLine1: "Learn New",
//   highlight1: "Things",
//   titleLine2: "Daily",
//   highlight2: "",
//   description:
//     "Join over 3000+ students to boost your skills and build a successful professional career.",
//   students: 3000,
//   image: "/images/hero/banner-01.png",
// };

// const blobImg = "/images/hero/blob2.png";

// export default function HeroSection({ data = defaultData }: { data?: HeroData }) {
//   const router = useRouter();
//   return (
//     <section
//       className="pt-12 md:pt-16 lg:pt-16 overflow-hidden"
//       style={{
//         background: `linear-gradient(135deg,
//           var(--color-gradient-start),
//           var(--color-gradient-mid),
//           var(--color-gradient-end)
//         )`,
//       }}
//     >
//       <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">

//         {/* ================= LEFT CONTENT ================= */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="lg:col-span-5 space-y-5 lg:space-y-6 text-center lg:text-left z-10"
//         >
//           <span className="hero-badge mx-auto lg:mx-0 text-lg lg:text-2xl">
//             Ignite Young Minds
//           </span>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight text-[var(--color-text)]">
//             {data.titleLine1} <br />
//             <span className="text-gradient">{data.highlight1}</span> <br />
//             {data.titleLine2} <br />
//             <span className="text-gradient-light">{data.highlight2}</span>
//           </h1>

//           <p className="text-[var(--color-text-light)] text-base md:text-lg max-w-md mx-auto lg:mx-0">
//             {/* Join over <strong>{data.students}+</strong> students to boost your skills
//             and build a successful professional career. */}
//             Transform your career with us! IT Training and Placement Institute for exceptional learning experience. Join now!
//           </p>

//           <div className="flex justify-center lg:justify-start">
//             {/* <Button icon={FaArrowRight}>View Course</Button> */}
//             <Button
//               onClick={() => router.push("/courses")}
//               className=" px-6 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-dark)] text-[var(--color-white)] font-semibold hover:scale-105 transition"
//             >
//               All Course
//             </Button>
//           </div>
//         </motion.div>

//         {/* ================= RIGHT SIDE ================= */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="
//   lg:col-span-7
//   flex flex-col md:flex-row
//   items-center md:items-end
//   justify-center md:justify-center lg:justify-start
//   gap-4
//   relative
//   md:px-4
//   lg:px-0
//   lg:-ml-20
// "
//         >

//           {/* ===== IMAGE BLOCK (RIGHT ALIGNED ALWAYS) ===== */}
//           <div
//             className="
//               relative
//               w-[260px] sm:w-[340px] md:w-[380px] lg:w-[420px]
//               h-full
//               flex items-end
//               justify-center lg:justify-end
//             "
//           >
//             {/* BLOB */}
//             <Image
//               src={blobImg}
//               alt="blob"
//               width={420}
//               height={420}
//               className="
//                 absolute
//                 bottom-0
//                 right-0
//                 w-full
//                 opacity-80
//                 z-0
//               "
//             />

//             {/* GIRL IMAGE */}
//             <Image
//               src={data.image}
//               alt="student"
//               width={420}
//               height={600}
//               className="relative z-10 object-contain w-full h-auto"
//               priority
//             />
//           </div>

//           {/* ===== CARD SLIDER ===== */}
//           <div
//             className="
// relative md:static lg:absolute
//     absolute lg:absolute
//     md:static
//     lg:right-0 lg:bottom-8
//     z-20
//     mt-6 md:mt-0
//     px-5 md:px-0
//   "
//           >
//             <CardSlider />
//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }

//mansi

// "use client";

// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import Button from "@/component/ui/Button";
// import CardSlider from "@/component/CardSlider";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// type HeroData = {

//   description: string;
//   students: number;
//   image: string;
// };

// const defaultData: HeroData = {
//   description:
//     "Join over 3000+ students to boost your skills and build a successful professional career.",
//   students: 3000,
//   image: "/images/hero/banner-01.png",
// };

// const blobImg = "/images/hero/blob2.png";

// export default function HeroSection({ data = defaultData, courses = [] }: { data?: HeroData, courses?: any[] }) {
//   const router = useRouter();
//   return (
//     <>
//       <section
//         className="pt-12 md:pt-16 lg:pt-20 pb-36 overflow-hidden relative"
//         style={{
//           backgroundImage: "url('/images/hero/background.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">

//           {/* ================= LEFT CONTENT ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-5 space-y-5 lg:space-y-6 text-center lg:text-left z-10"
//           >
//             <span className="hero-badge mx-auto lg:mx-0 text-lg lg:text-2xl">
//               Ignite Young Minds
//             </span>

//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-extrabold leading-tight text-[var(--color-text)]">
//               Learn New Things Daily
//             </h1>

//             <p className="text-[var(--color-text-light)] text-base md:text-lg max-w-md mx-auto lg:mx-0">
//               {/* Join over <strong>{data.students}+</strong> students to boost your skills
//             and build a successful professional career. */}
//               Transform your career with us! IT Training and Placement Institute for exceptional learning experience. Join now!
//             </p>

//             <div className="flex justify-center lg:justify-start">
//               <Button
//                 href="/courses"
//                 variant="gradient"
//                 size="md"
//               >
//                 View Course →
//               </Button>               {/* <Button
//               onClick={() => router.push("/courses")}
//               className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-dark)] text-[var(--color-white)] font-semibold hover:scale-105 transition"
//             >
//               All Course
//             </Button> */}
//             </div>
//           </motion.div>

//           {/* ================= RIGHT SIDE ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="
//   lg:col-span-7
//   flex flex-col md:flex-row
//   items-center md:items-end
//   justify-center md:justify-center lg:justify-start
//   gap-4
//   relative
//   md:px-4
//   lg:px-0
//   lg:-ml-20
// "
//           >

//             {/* ===== IMAGE BLOCK (RIGHT ALIGNED ALWAYS) ===== */}
//             <div
//               className="
//               relative
//               w-[260px] sm:w-[340px] md:w-[380px] lg:w-[420px]
//               h-full
//               flex items-end
//               justify-center lg:justify-end
//             "
//             >
//               {/* BLOB */}
//               <Image
//                 src={blobImg}
//                 alt="blob"
//                 width={420}
//                 height={420}
//                 className="
//                 absolute
// bottom-0
//                 right-0
//                 w-full
//                 opacity-80
//                 z-0
//               "
//               />

//               {/* GIRL IMAGE */}
//               <Image
//                 src={data.image}
//                 alt="student"
//                 width={420}
//                 height={600}
//                 className="relative z-10 object-contain w-full h-auto"
//                 priority
//               />
//             </div>

//             {/* ===== CARD SLIDER ===== */}
//             <div
//               className="
// relative md:static lg:absolute
//     absolute lg:absolute
//     md:static
//     lg:right-0 lg:bottom-8
//     z-20
//     mt-6 md:mt-0
//     px-5 md:px-0
//   "
//             >
//               <CardSlider courses={courses} />

//             </div>

//           </motion.div>

//         </div>
//         <Image
//           src="/images/hero/bg-2.svg"
//           alt="wave"
//           width={1920}
//           height={145}
//           className="absolute bottom-[-2px] left-0 w-full h-[145px] object-cover pointer-events-none"
//         />
//       </section>

//     </>
//   );
// }
"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/component/ui/Button";
import CardSlider from "@/component/CardSlider";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
type HeroData = {

  description: string;
  students: number;
  image: string;
};

const defaultData: HeroData = {
  description:
    "Join over 3000+ students to boost your skills and build a successful professional career.",
  students: 3000,
  image: "/images/hero/banner-01.png",
};

const blobImg = "/images/hero/blob2.png";

export default function HeroSection({ data = defaultData, courses = [] }: { data?: HeroData, courses?: any[] }) {
  const router = useRouter();
  return (
    <>
      <section
        className="pt-12 md:pt-16 lg:pt-20 pb-36 overflow-hidden relative"
        style={{
          backgroundImage: "url('/images/hero/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-0 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-5 space-y-5 xl:space-y-6 text-center xl:text-left z-10"
          >
            <span className="hero-badge mx-auto xl:mx-0 text-lg xl:text-2xl">
              Ignite Young Minds
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[45px] font-extrabold leading-tight text-[var(--color-text)]">
              Learn New Things Daily
            </h1>

            <p className="text-[var(--color-text-light)] text-base md:text-lg max-w-md mx-auto xl:mx-0">
              {/* Join over <strong>{data.students}+</strong> students to boost your skills
            and build a successful professional career. */}
              Transform your career with us! IT Training and Placement Institute for exceptional learning experience. Join now!
            </p>

            <div className="flex justify-center xl:justify-start">
              <Button
                href="/courses"
                variant="gradient"
                size="md"
              >
                View Course →
              </Button>               {/* <Button
              onClick={() => router.push("/courses")}
              className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-dark)] text-[var(--color-white)] font-semibold hover:scale-105 transition"
            >
              All Course
            </Button> */}
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
  xl:col-span-7
  flex flex-col md:flex-row
  items-center md:items-end
  justify-center md:justify-center xl:justify-start
  gap-4
  relative
  md:px-4
  xl:px-0
  xl:-ml-20
"
          >

            {/* ===== IMAGE BLOCK (RIGHT ALIGNED ALWAYS) ===== */}
            <div
              className="
              relative
              w-[260px] sm:w-[340px] md:w-[380px] xl:w-[420px]
              h-full
              flex items-end
              justify-center xl:justify-end
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
relative md:static xl:absolute
    absolute xl:absolute
    md:static
    xl:right-0 xl:bottom-8
    z-20
    mt-6 md:mt-0
    px-5 md:px-0
  "
            >
              <CardSlider courses={courses} />

            </div>

          </motion.div>

        </div>
        <Image
          src="/images/hero/bg-2.svg"
          alt="wave"
          width={1920}
          height={145}
          className="absolute bottom-[-2px] left-0 w-full h-[145px] object-cover pointer-events-none"
        />
      </section>

    </>
  );
}