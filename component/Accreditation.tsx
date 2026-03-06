// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Award, AwardIcon, CheckCircle, Star } from "lucide-react";
// import iao from "@/public/images/Accreditation/IAO.png";
// import iso from "@/public/images/Accreditation/ISO.png";
// import msme from "@/public/images/Accreditation/msme.png";
// import Pill from "./ui/Pill";

// const accreditations = [
//     {
//         id: 1,
//         name: "IAO",
//         logo: iao,
//         description: "International Accreditation Organization",
//         link: "https://www.iao.org/India-Gujarat/Coding-Cloud",
//     },
//     {
//         id: 2,
//         name: "ISO 9001:2015",
//         logo: iso,
//         description: "Quality Management System Certification",
//         link: "/images/Accreditation/Coding-Cloud-ISO_2024-25.jpg",
//     },
//     {
//         id: 3,
//         name: "MSME",
//         logo: msme,
//         description: "Ministry of Micro, Small & Medium Enterprises",
//         link: "https://codingcloudinstitute.com/wp-content/uploads/2024/10/Coding_Cloud_MSME_New.pdf",
//     },
// ];

// export default function Accreditation() {
//     return (
//         <section className="relative py-16 md:py-20 bg-gradient-to-b from-purple-50 via-white to-indigo-50 overflow-hidden">
//             <div className="container mx-auto px-6">

//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="text-center max-w-3xl mx-auto mb-14"
//                 >
//                     {/* <div className="flex justify-center mb-4">
//                         <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
//                             <Award className="w-4 h-4" />
//                             Accreditation
//                         </span>
//                     </div> */}
//                     <div className="flex justify-center mb-4">
//                         <Pill
//                             text="Accreditation"
//                             textColor="var(--color-accent-purple)"
//                             bgColor="var(--color-primary-light)"
//                         />
//                     </div>

//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                         Recognized & <span className="text-purple-600">Certified</span>
//                     </h2>

//                     <p className="text-gray-600 text-base md:text-lg">
//                         Coding Cloud is proudly accredited and recognized by reputed
//                         international and national certification bodies.
//                     </p>
//                 </motion.div>

//                 {/* Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {accreditations.map((item, index) => (
//                         <motion.div
//                             key={item.id}
//                             onClick={() => window.open(item.link, "_blank")}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.15 }}
//                             viewport={{ once: true }}
//                             whileHover={{ y: -8 }}
//                             className="group cursor-pointer"
//                         >
//                             <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">

//                                 {/* Logo Circle */}
//                                 {/* Logo */}
//                                 <div className="flex justify-center">
//                                     <div className="relative w-[278px] h-[300px] 
//                   group-hover:scale-110 transition-transform duration-300">
//                                         <Image
//                                             src={item.logo}
//                                             alt={item.name}
//                                             fill
//                                             sizes="278px"
//                                             className="object-contain"
//                                             priority
//                                             unoptimized
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Name */}
//                                 <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800 mb-2">
//                                     {item.name}
//                                 </h3>

//                                 {/* Description */}
//                                 <p className="text-gray-500 text-sm text-center">
//                                     {item.description}
//                                 </p>

//                                 {/* Verified Badge */}
//                                 {/* <div className="flex justify-center mt-5">
//                                     <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
//                                         <CheckCircle className="w-3 h-3" />
//                                         Verified
//                                     </span>
//                                 </div> */}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Bottom Recognition */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     viewport={{ once: true }}
//                     className="mt-16 text-center"
//                 >
//                     <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
//                         <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                         <span className="text-sm text-gray-600 font-medium">
//                             Recognized by International Accreditation Bodies
//                         </span>
//                         <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                     </div>
//                 </motion.div>

//             </div>
//         </section>
//     );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle, Star, Shield, Sparkles, ExternalLink } from "lucide-react";
import iao from "@/public/images/Accreditation/IAO.png";
import iso from "@/public/images/Accreditation/ISO.png";
import msme from "@/public/images/Accreditation/msme.png";
import Pill from "./ui/Pill";

const accreditations = [
    {
        id: 1,
        name: "IAO",
        logo: iao,
        description: "International Accreditation Organization",
        link: "https://www.iao.org/India-Gujarat/Coding-Cloud",
        gradient: "from-blue-600 to-indigo-600",
        lightBg: "bg-blue-50",
        borderColor: "border-blue-200",
        shadow: "shadow-blue-100",
    },
    {
        id: 2,
        name: "ISO 9001:2015",
        logo: iso,
        description: "Quality Management System Certification",
        link: "/images/Accreditation/Coding-Cloud-ISO_2024-25.jpg",
        gradient: "from-emerald-600 to-teal-600",
        lightBg: "bg-emerald-50",
        borderColor: "border-emerald-200",
        shadow: "shadow-emerald-100",
    },
    {
        id: 3,
        name: "MSME",
        logo: msme,
        description: "Ministry of Micro, Small & Medium Enterprises",
        link: "https://codingcloudinstitute.com/wp-content/uploads/2024/10/Coding_Cloud_MSME_New.pdf",
        gradient: "from-amber-600 to-orange-600",
        lightBg: "bg-amber-50",
        borderColor: "border-amber-200",
        shadow: "shadow-amber-100",
    },
];

export default function Accreditation() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-center opacity-5"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            viewport={{ once: true }}
                        >
                            <Pill
                                text="Accreditation & Recognition"
                                textColor="text-purple-700"
                                bgColor="bg-purple-100"
                            />
                        </motion.div>
                    </div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Recognized & 
                        </span>
                        <span className="block md:inline bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {" "}Certified
                        </span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
                    >
                        Coding Cloud is proudly accredited by prestigious international and national 
                        certification bodies, ensuring quality education and global standards.
                    </motion.p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accreditations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            onClick={() => window.open(item.link, "_blank")}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${item.borderColor} hover:border-transparent h-full flex flex-col`}>
                                
                                {/* Gradient Border on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                                
                                {/* Logo */}
                                <div className="relative mb-6 flex justify-center">
                                    <div className={`absolute inset-0 ${item.lightBg} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className="relative w-[220px] h-[240px] group-hover:scale-110 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-full"></div>
                                        <Image
                                            src={item.logo}
                                            alt={item.name}
                                            fill
                                            sizes="220px"
                                            className="object-contain p-6 relative z-10"
                                            priority
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-6">
                                        {item.description}
                                    </p>
                                    
                                    {/* View Credential Button */}
                                    <motion.div 
                                        whileHover={{ scale: 1.05 }}
                                        className={`inline-flex items-center gap-2 px-4 py-2 ${item.lightBg} rounded-full text-sm font-medium text-gray-700 border ${item.borderColor} shadow-sm`}
                                    >
                                        <CheckCircle className={`w-4 h-4 ${
                                            item.gradient.includes('blue') ? 'text-blue-500' : 
                                            item.gradient.includes('emerald') ? 'text-emerald-500' : 
                                            'text-amber-500'
                                        }`} />
                                        <span>View Credential</span>
                                        <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-wrap justify-center gap-6 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-purple-100">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-500" />
                            <span className="text-sm font-semibold text-gray-800">10,000+ Students</span>
                        </div>
                        
                        <div className="hidden sm:block w-px h-6 bg-purple-200"></div>
                        
                        <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            <span className="text-sm text-gray-600">4.9/5</span>
                        </div>
                        
                        <div className="hidden sm:block w-px h-6 bg-purple-200"></div>
                        
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-500" />
                            <span className="text-sm text-gray-800 font-medium">ISO Certified</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}