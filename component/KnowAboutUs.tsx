// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import Button from "@/component/ui/Button";

// // images (public folder)
// const about1 = "/images/about/about-01.png";
// const about2 = "/images/about/about-02.png";
// const about3 = "/images/about/about-03.png";

// export default function KnowAboutUs() {
//   const imgTopRef = useRef<HTMLDivElement | null>(null);
//   const imgBottomRef = useRef<HTMLDivElement | null>(null);

// useEffect(() => {
//   const section = document.querySelector(".about-section");

//   const handleScroll = () => {
//     if (!section) return;

//     const rect = section.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     const progress =
//       (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;

//     // 🔥 Different movement speeds
//     const moveTop = Math.max(Math.min(progress * -60, 30), -30);   // up
//     const moveBottom = Math.max(Math.min(progress * 60, 30), -30); // down

//     // MAIN IMAGE = no movement

//     if (imgTopRef.current) {
//       imgTopRef.current.style.transform = `translate3d(0, ${moveTop}px, 0)`;
//     }

//     if (imgBottomRef.current) {
//       imgBottomRef.current.style.transform = `translate3d(0, ${moveBottom}px, 0)`;
//     }
//   };

//   handleScroll();
//   window.addEventListener("scroll", handleScroll, { passive: true });

//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);


//   return (
//     <section className="about-section py-20 bg-[var(--color-white)]">
//       <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//         {/* ================= LEFT IMAGES ================= */}
//         <div className="relative h-[500px] hidden lg:block">

//           {/* MAIN IMAGE */}
//           <div className="absolute left-10 top-0 w-[350px] h-[500px] rounded-lg overflow-hidden ">
//             <Image src={about1} alt="About main" fill className="object-cover" />
//           </div>

//           {/* TOP IMAGE */}
//           <div
//             ref={imgTopRef}
//             className="absolute right-0 top-5 w-[250px] h-[200px] rounded-lg overflow-hidden "
//           >
//             <Image src={about2} alt="About top" fill className="object-cover" />
//           </div>

//           {/* BOTTOM IMAGE */}
//           <div
//             ref={imgBottomRef}
//             className="absolute right-10  bottom-0 w-[300px] h-[350px] rounded-lg overflow-hidden "
//           >
//             <Image src={about3} alt="About bottom" fill className="object-cover" />
//           </div>

//         </div>

//         {/* ================= RIGHT CONTENT ================= */}
//         <div className="flex flex-col justify-center">

//           <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full w-fit mb-4 font-semibold">
//             KNOW ABOUT US
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
//             Know About Coding Cloud <br /> Learning Platform
//           </h2>

//           <p className="text-[var(--color-muted)] mb-6">
//             Far far away, behind the word mountains, far from the countries
//             Vokalia and Consonantia, there live the blind texts.
//           </p>

//           {/* FEATURES */}
//           <div className="space-y-5">

//             <div className="flex items-start gap-4">
//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl">
//                 ❤
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Flexible Classes</h4>
//                 <p className="text-[var(--color-muted)] text-sm">
//                   Readable content helps users stay focused.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
//                 📱
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Learn From Anywhere</h4>
//                 <p className="text-[var(--color-muted)] text-sm">
//                   Access courses anytime, anywhere.
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* BUTTON */}
//           <div className="mt-8">
//             <Button icon={FaArrowRight}>
//               More About Us
//             </Button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/component/ui/Button";
import Pill from "./ui/Pill";
import { CheckCircle, Target, BookOpen, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
const points = [
    { text: "Empowering Your Success with IT Training", icon: CheckCircle },
    { text: "Top Priority: Your Career Growth", icon: Target },
    { text: "Comprehensive IT Training Solutions for Success", icon: BookOpen },
    { text: "Unlock Your Potential with Our IT Programs", icon: Rocket },
];
// images (public folder)
const about1 = "/images/about/about-01.png";
const about2 = "/images/about/about-02.png";
const about3 = "/images/about/about-03.png";
export default function KnowAboutUs() {
    const router = useRouter();

    const imgTopRef = useRef<HTMLDivElement | null>(null);
    const imgBottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = document.querySelector(".about-section");

        let ticking = false;

        const handleScroll = () => {
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // section center distance from viewport center
            const offset =
                rect.top + rect.height / 2 - windowHeight / 2;

            // normalized progress
            const progress = offset / windowHeight;

            // 🔥 SAME MOVEMENT FOR BOTH IMAGES
            const move = Math.max(Math.min(progress * -80, 40), -40);

            if (imgTopRef.current) {
                imgTopRef.current.style.transform = `translate3d(0, ${move}px, 0)`;
            }

            if (imgBottomRef.current) {
                imgBottomRef.current.style.transform = `translate3d(0, ${move}px, 0)`;
            }

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        handleScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    //   useEffect(() => {
    //     const section = document.querySelector(".about-section");

    //     let ticking = false;

    //     const handleScroll = () => {
    //       if (!section) return;

    //       const rect = section.getBoundingClientRect();
    //       const windowHeight = window.innerHeight;

    //       // center based scroll progress
    //       const centerOffset =
    //         rect.top + rect.height / 2 - windowHeight / 2;

    //       const progress = centerOffset / windowHeight;

    //       // 🔥 movement (opposite direction)
    //       const moveTop = Math.max(Math.min(progress * -80, 40), -40);
    //       const moveBottom = Math.max(Math.min(progress * 80, 40), -40);

    //       if (imgTopRef.current) {
    //         imgTopRef.current.style.transform = `translate3d(0, ${moveTop}px, 0)`;
    //       }

    //       if (imgBottomRef.current) {
    //         imgBottomRef.current.style.transform = `translate3d(0, ${moveBottom}px, 0)`;
    //       }

    //       ticking = false;
    //     };

    //     const onScroll = () => {
    //       if (!ticking) {
    //         window.requestAnimationFrame(handleScroll);
    //         ticking = true;
    //       }
    //     };

    //     window.addEventListener("scroll", onScroll, { passive: true });
    //     handleScroll();

    //     return () => window.removeEventListener("scroll", onScroll);
    //   }, []);

    return (
        <section className="container-custom  about-section bg-[var(--color-white)] pb-10">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* ================= LEFT IMAGES ================= */}
                <div className="relative overflow-visible h-[420px] sm:h-[500px] md:h-[580px] lg:h-[620px] z-20">

                    {/* MAIN IMAGE (LEFT BIG) */}
                    <div className="absolute left-0 top-0 lg:absolute lg:top-0 z-10">
                        <Image
                            src={about1}
                            alt="About main"
                            width={350}
                            height={500}
                            className="rounded w-[220px] sm:w-[260px] md:w-[300px] lg:w-[300px]"
                            priority
                        />
                    </div>

                    {/* TOP IMAGE (moves UP) */}
                    <div
                        ref={imgTopRef}
                        className="
      absolute
      right-0 top-[-10px]
      sm:right-[10px] sm:top-[0px] 
      md:right-[20px] md:top-[10px] 
      lg:absolute lg:right-20 lg:top-12
      z-20
    "
                    >
                        <Image
                            src={about2}
                            alt="About top"
                            width={250}
                            height={200}
                            className="rounded w-[150px] sm:w-[180px] md:w-[200px] lg:w-[200px] "
                        />
                    </div>

                    {/* BOTTOM IMAGE (moves DOWN) */}
                    <div
                        ref={imgBottomRef}
                        className="
      absolute
      right-0 bottom-[-30px]
      sm:right-[10px] sm:bottom-[-20px]
      md:right-[20px] md:bottom-[-20px]
      lg:absolute lg:-right-[65px] lg:-bottom-[30px]
      z-30
    "
                    >
                        <Image
                            src={about3}
                            alt="About bottom"
                            width={400}
                            height={350}
                            className="rounded w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px]"
                        />
                    </div>

                </div>


                {/* ================= RIGHT CONTENT ================= */}
                <div className="flex flex-col justify-center mt-10 lg:mt-40">
                    {/* <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full w-fit mb-4 font-semibold">
                        KNOW ABOUT US
                    </span> */}
                    <div className="py-3">
                        <Pill text="KNOW ABOUT US" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        IT TRAINING & PLACEMENT INSTITUTE                    </h2>

                    <p className="text-[var(--color-muted)] mb-6">
                        We strive to provide you with comprehensive training, cutting-edge resources, and personalized guidance to help you excel in the tech industry. Join us and let us support your journey towards a successful and fulfilling career in IT.


                    </p>
                    <div className="space-y-3">
  {points.map((item, index) => {
    const Icon = item.icon;

    return (
      <div key={index} className="flex items-center gap-4">
        <Icon className="w-5 h-5 text-blue-600" />
        <p className="text-[var(--color-muted)]">{item.text}</p>
      </div>
    );
  })}
</div>
                    {/* BUTTON */}
                    {/* <div className="mt-8">
                        <Button icon={FaArrowRight}>
                            More About Us
                        </Button>
                    </div> */}

                    <Button
                        onClick={() => router.push("/courses")}
                        className="mt-8 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                        All Course
                    </Button>

                </div>

            </div>
        </section>
    );
}
